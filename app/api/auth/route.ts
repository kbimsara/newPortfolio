import { NextRequest, NextResponse } from 'next/server';
import { SignJWT, jwtVerify } from 'jose';

const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

// POST /api/auth  — login
export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  if (
    username !== process.env.ADMIN_USERNAME ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const token = await new SignJWT({ role: 'admin' })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('8h')
    .sign(secret);

  const res = NextResponse.json({ ok: true });
  res.cookies.set('kb_admin', token, {
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 8, // 8 hours
    path: '/',
  });
  return res;
}

// DELETE /api/auth  — logout
export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set('kb_admin', '', { maxAge: 0, path: '/' });
  return res;
}

// GET /api/auth  — check session
export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get('kb_admin')?.value;
    if (!token) return NextResponse.json({ authenticated: false });
    await jwtVerify(token, secret);
    return NextResponse.json({ authenticated: true });
  } catch {
    return NextResponse.json({ authenticated: false });
  }
}
