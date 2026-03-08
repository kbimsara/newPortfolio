'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Message {
  _id: string;
  name: string;
  email: string;
  message: string;
  read: boolean;
  createdAt: string;
}

export default function AdminDashboard() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Message | null>(null);
  const [filter, setFilter] = useState<'all' | 'unread' | 'read'>('all');
  const router = useRouter();

  const fetchData = useCallback(async () => {
    try {
      const [msgRes, visRes] = await Promise.all([
        fetch('/api/messages'),
        fetch('/api/visitors'),
      ]);

      if (msgRes.status === 401) {
        router.push('/admin');
        return;
      }

      const { messages: msgs } = await msgRes.json();
      const { count } = await visRes.json();

      setMessages(msgs || []);
      setVisitorCount(count ?? 0);
    } catch {
      // handle silently
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const markRead = async (id: string) => {
    await fetch('/api/messages', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    setMessages((prev) =>
      prev.map((m) => (m._id === id ? { ...m, read: true } : m))
    );
    if (selected?._id === id) setSelected((s) => s ? { ...s, read: true } : s);
  };

  const handleLogout = async () => {
    await fetch('/api/auth', { method: 'DELETE' });
    router.push('/admin');
  };

  const filtered = messages.filter((m) => {
    if (filter === 'unread') return !m.read;
    if (filter === 'read') return m.read;
    return true;
  });

  const unreadCount = messages.filter((m) => !m.read).length;

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleString('en-US', {
      month: 'short', day: 'numeric', year: 'numeric',
      hour: '2-digit', minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#05050f] flex items-center justify-center">
        <div className="flex items-center gap-3 text-slate-400">
          <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#05050f] text-white">
      {/* Top bar */}
      <header className="border-b border-white/5 bg-white/[0.02] backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
              <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h1 className="font-semibold text-white text-sm">Admin Dashboard</h1>
              <p className="text-slate-500 text-xs">Kavindu Bimsara — Portfolio</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              View site →
            </Link>
            <button
              onClick={handleLogout}
              className="text-xs bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white px-3 py-1.5 rounded-lg transition-colors"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {/* Visitor count */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <span className="text-slate-400 text-sm">Total Visitors</span>
            </div>
            <p className="text-3xl font-bold text-white">{visitorCount?.toLocaleString() ?? '—'}</p>
          </div>

          {/* Total messages */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-slate-400 text-sm">Total Messages</span>
            </div>
            <p className="text-3xl font-bold text-white">{messages.length}</p>
          </div>

          {/* Unread */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <span className="text-slate-400 text-sm">Unread</span>
            </div>
            <p className="text-3xl font-bold text-white">{unreadCount}</p>
          </div>
        </div>

        {/* Messages section */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Message list */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-white">Messages</h2>
              <div className="flex items-center gap-1 bg-white/[0.03] border border-white/10 rounded-xl p-1">
                {(['all', 'unread', 'read'] as const).map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-colors ${
                      filter === f
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {f}
                    {f === 'unread' && unreadCount > 0 && (
                      <span className="ml-1.5 bg-orange-500/30 text-orange-300 text-[10px] px-1.5 py-0.5 rounded-full">
                        {unreadCount}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              {filtered.length === 0 ? (
                <div className="text-center py-16 text-slate-600">
                  <svg className="w-10 h-10 mx-auto mb-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                  No messages yet
                </div>
              ) : (
                filtered.map((msg) => (
                  <button
                    key={msg._id}
                    onClick={() => {
                      setSelected(msg);
                      if (!msg.read) markRead(msg._id);
                    }}
                    className={`w-full text-left rounded-xl p-4 border transition-all ${
                      selected?._id === msg._id
                        ? 'border-blue-500/40 bg-blue-500/5'
                        : 'border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3 min-w-0">
                        {!msg.read && (
                          <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
                        )}
                        <div className={`min-w-0 ${msg.read ? 'pl-5' : ''}`}>
                          <p className="font-medium text-white text-sm truncate">{msg.name}</p>
                          <p className="text-slate-500 text-xs truncate">{msg.email}</p>
                          <p className="text-slate-400 text-xs mt-1 line-clamp-1">{msg.message}</p>
                        </div>
                      </div>
                      <span className="text-slate-600 text-[11px] whitespace-nowrap flex-shrink-0">
                        {formatDate(msg.createdAt)}
                      </span>
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>

          {/* Message detail panel */}
          <div className="lg:w-96 flex-shrink-0">
            {selected ? (
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sticky top-24">
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <h3 className="font-semibold text-white">{selected.name}</h3>
                    <a
                      href={`mailto:${selected.email}`}
                      className="text-blue-400 text-sm hover:text-blue-300 transition-colors"
                    >
                      {selected.email}
                    </a>
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    className="text-slate-600 hover:text-slate-400 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <p className="text-xs text-slate-500 mb-4">{formatDate(selected.createdAt)}</p>

                <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4">
                  <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap">{selected.message}</p>
                </div>

                <a
                  href={`mailto:${selected.email}?subject=Re: Your message`}
                  className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium py-2.5 rounded-xl transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                  </svg>
                  Reply via Email
                </a>
              </div>
            ) : (
              <div className="bg-white/[0.02] border border-white/5 border-dashed rounded-2xl p-8 text-center text-slate-600 sticky top-24">
                <svg className="w-8 h-8 mx-auto mb-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
                <p className="text-sm">Select a message to view</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
