import { NextResponse } from 'next/server';
import { getMongoClient } from '@/lib/mongodb';
import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';

const LOCAL_COUNTER_FILE = path.join(os.tmpdir(), 'kb_portfolio_visitors.json');

async function readLocalCount(): Promise<number> {
  try {
    const raw = await fs.readFile(LOCAL_COUNTER_FILE, 'utf8');
    const parsed = JSON.parse(raw) as { count?: unknown };
    return typeof parsed.count === 'number' && Number.isFinite(parsed.count) ? parsed.count : 0;
  } catch {
    return 0;
  }
}

async function incrementLocalCount(): Promise<number> {
  const current = await readLocalCount();
  const next = current + 1;
  try {
    await fs.writeFile(LOCAL_COUNTER_FILE, JSON.stringify({ count: next }), 'utf8');
  } catch {
    // ignore temp write errors
  }
  return next;
}

// GET — return current count (no increment, used for polling)
export async function GET() {
  if (!process.env.MONGODB_URI) {
    const count = await readLocalCount();
    return NextResponse.json({ count, source: 'local' });
  }

  try {
    const client = await getMongoClient();
    const db = client.db('portfolio');
    const col = db.collection('visitors');

    const doc = await col.findOne({ _id: 'counter' as unknown as import('mongodb').ObjectId });
    return NextResponse.json({ count: doc?.count ?? 0, source: 'mongodb' });
  } catch (err) {
    console.error('Visitor GET error:', err);
    return NextResponse.json({ count: 0 }, { status: 500 });
  }
}

// POST — increment counter, return new count
export async function POST() {
  if (!process.env.MONGODB_URI) {
    const count = await incrementLocalCount();
    return NextResponse.json({ count, source: 'local' });
  }

  try {
    const client = await getMongoClient();
    const db = client.db('portfolio');
    const col = db.collection('visitors');

    const result = await col.findOneAndUpdate(
      { _id: 'counter' as unknown as import('mongodb').ObjectId },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: 'after' }
    );

    return NextResponse.json({ count: result?.count ?? 1, source: 'mongodb' });
  } catch (err) {
    console.error('Visitor POST error:', err);
    return NextResponse.json({ count: 0 }, { status: 500 });
  }
}
