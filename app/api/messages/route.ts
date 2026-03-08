import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { jwtVerify } from 'jose';

const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

// POST — save a new message (public)
export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields required' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db('portfolio');
    await db.collection('messages').insertOne({
      name: String(name).slice(0, 100),
      email: String(email).slice(0, 100),
      message: String(message).slice(0, 2000),
      read: false,
      createdAt: new Date(),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Messages POST error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

// GET — list messages (admin only)
export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get('kb_admin')?.value;
    if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    await jwtVerify(token, secret);

    const client = await clientPromise;
    const db = client.db('portfolio');
    const messages = await db
      .collection('messages')
      .find({})
      .sort({ createdAt: -1 })
      .limit(100)
      .toArray();

    return NextResponse.json({ messages });
  } catch {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
}

// PATCH — mark message as read (admin only)
export async function PATCH(req: NextRequest) {
  try {
    const token = req.cookies.get('kb_admin')?.value;
    if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    await jwtVerify(token, secret);

    const { id } = await req.json();
    const { ObjectId } = await import('mongodb');
    const client = await clientPromise;
    await client.db('portfolio').collection('messages').updateOne(
      { _id: new ObjectId(id) },
      { $set: { read: true } }
    );
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
