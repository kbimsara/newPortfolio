import { NextResponse } from 'next/server';
import { getMongoClient } from '@/lib/mongodb';

// GET — return current count (no increment, used for polling)
export async function GET() {
  if (!process.env.MONGODB_URI) {
    return NextResponse.json({ count: null });
  }

  try {
    const client = await getMongoClient();
    const db = client.db('portfolio');
    const col = db.collection('visitors');

    const doc = await col.findOne({ _id: 'counter' as unknown as import('mongodb').ObjectId });
    return NextResponse.json({ count: doc?.count ?? 0 });
  } catch (err) {
    console.error('Visitor GET error:', err);
    return NextResponse.json({ count: 0 }, { status: 500 });
  }
}

// POST — increment counter, return new count
export async function POST() {
  if (!process.env.MONGODB_URI) {
    return NextResponse.json({ count: null });
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

    return NextResponse.json({ count: result?.count ?? 1 });
  } catch (err) {
    console.error('Visitor POST error:', err);
    return NextResponse.json({ count: 0 }, { status: 500 });
  }
}
