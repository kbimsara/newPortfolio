import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

export async function proxy(req: NextRequest) {
  const token = req.cookies.get('kb_admin')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/admin', req.url));
  }

  try {
    await jwtVerify(token, secret);
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL('/admin', req.url));
  }
}

export const config = {
  matcher: ['/admin/dashboard/:path*'],
};
