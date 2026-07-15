"use client";
import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const API = "/api/admin-backend";

function AdminHeader({ onLogout }) {
  return (
    <header className="bg-[#12372A] px-6 md:px-10 py-4 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <span className="font-serif-display text-[#F6F1E8] text-[1.15rem] tracking-wide">
          Crea Web Agency
        </span>
        <span className="text-[#F6F1E8]/30 hidden sm:block">|</span>
        <span className="text-[#B08D57] text-[0.65rem] tracking-[0.18em] uppercase font-sans hidden sm:block">
          Admin
        </span>
      </div>
      <div className="flex items-center gap-4">
        <Link
          href="/"
          target="_blank"
          className="text-[0.68rem] tracking-[0.1em] uppercase font-sans text-[#F6F1E8]/60 hover:text-[#F6F1E8] transition-colors"
        >
          View Site ↗
        </Link>
        <button
          onClick={onLogout}
          className="text-[0.68rem] tracking-[0.1em] uppercase font-sans text-[#F6F1E8]/60 hover:text-[#B08D57] transition-colors"
        >
          Logout
        </button>
      </div>
    </header>
  );
}

export default function AdminDashboard() {
  const router  = useRouter();
  const [token,   setToken]   = useState(null);
  const [posts,   setPosts]   = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState("");
  const [deleting, setDeleting] = useState(null);

  useEffect(() => {
    const t = localStorage.getItem("admin_token");
    if (!t) { router.push("/admin/login"); return; }
    setToken(t);
  }, [router]);

  const fetchPosts = useCallback(async (t) => {
    setLoading(true);
    try {
      const res = await fetch(`${API}/posts?all=true`, {
        headers: { Authorization: `Bearer ${t}` },
        cache: "no-store",
      });
      if (res.status === 401) { router.push("/admin/login"); return; }
      const data = await res.json();
      setPosts(data.posts ?? []);
    } catch {
      setError("Could not connect to the PHP API. Make sure it is running on port 8000.");
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    if (token) fetchPosts(token);
  }, [token, fetchPosts]);

  function logout() {
    localStorage.removeItem("admin_token");
    router.push("/admin/login");
  }

  async function togglePublish(post) {
    const res = await fetch(`${API}/posts/${post.id}`, {
      method:  "PUT",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body:    JSON.stringify({ published: !post.published }),
    });
    if (res.ok) fetchPosts(token);
  }

  async function deletePost(post) {
    if (!confirm(`Delete "${post.title}"? This cannot be undone.`)) return;
    setDeleting(post.id);
    const res = await fetch(`${API}/posts/${post.id}`, {
      method:  "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) fetchPosts(token);
    setDeleting(null);
  }

  if (!token) return null;

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F1E8]">
      <AdminHeader onLogout={logout} />

      <div className="flex-1 max-w-[1200px] mx-auto w-full px-6 md:px-10 py-12">
        {/* Page header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="font-serif-display text-[#1C1C1C] text-[2rem] mb-1">Blog Posts</h1>
            <p className="text-[#7C746A] text-[0.8rem] font-sans">
              {posts.length} article{posts.length !== 1 ? "s" : ""} total
            </p>
          </div>
          <Link
            href="/admin/new"
            className="inline-flex items-center gap-2 text-[0.72rem] font-medium tracking-[0.14em] uppercase font-sans text-[#F6F1E8] bg-[#12372A] px-6 py-3 hover:bg-[#B08D57] transition-colors duration-300"
          >
            + New Post
          </Link>
        </div>

        {/* Error state */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-5 py-4 text-[0.85rem] font-sans mb-8">
            {error}
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="text-[#7C746A] font-sans text-[0.9rem] py-20 text-center">
            Loading posts…
          </div>
        )}

        {/* Posts table */}
        {!loading && posts.length === 0 && !error && (
          <div className="text-center py-20">
            <p className="font-serif-display text-[#7C746A] text-[1.4rem] mb-4 italic">
              No posts yet
            </p>
            <Link
              href="/admin/new"
              className="inline-flex items-center gap-2 text-[0.72rem] font-medium tracking-[0.14em] uppercase font-sans text-[#F6F1E8] bg-[#12372A] px-6 py-3 hover:bg-[#B08D57] transition-colors duration-300"
            >
              Write your first post
            </Link>
          </div>
        )}

        {!loading && posts.length > 0 && (
          <div className="border border-[#1C1C1C]/10 divide-y divide-[#1C1C1C]/8 bg-white">
            {/* Table header */}
            <div className="grid grid-cols-[1fr_auto_auto_auto_auto] gap-4 px-6 py-3 bg-[#F6F1E8] text-[0.62rem] tracking-[0.14em] uppercase font-sans text-[#7C746A]">
              <span>Title</span>
              <span className="hidden md:block">Category</span>
              <span className="hidden md:block">Date</span>
              <span>Status</span>
              <span>Actions</span>
            </div>

            {/* Rows */}
            {posts.map((post) => (
              <div
                key={post.id}
                className="grid grid-cols-[1fr_auto_auto_auto_auto] gap-4 items-center px-6 py-4 hover:bg-[#F6F1E8]/50 transition-colors"
              >
                {/* Title */}
                <div>
                  <p className="font-serif-display text-[#1C1C1C] text-[1rem] leading-tight mb-0.5">
                    {post.title}
                  </p>
                  <p className="text-[#7C746A] text-[0.7rem] font-sans truncate max-w-[35ch] hidden md:block">
                    /insights/{post.slug}
                  </p>
                </div>

                {/* Category */}
                <span className="hidden md:block text-[0.7rem] font-sans text-[#7C746A] border border-[#7C746A]/25 px-2 py-0.5 whitespace-nowrap">
                  {post.category}
                </span>

                {/* Date */}
                <span className="hidden md:block text-[0.7rem] font-sans text-[#7C746A] whitespace-nowrap">
                  {post.date}
                </span>

                {/* Status toggle */}
                <button
                  onClick={() => togglePublish(post)}
                  className={`text-[0.62rem] tracking-[0.1em] uppercase font-sans px-2.5 py-1 border transition-colors duration-200 whitespace-nowrap ${
                    post.published
                      ? "text-[#12372A] border-[#12372A]/30 bg-[#12372A]/6 hover:bg-[#12372A]/12"
                      : "text-[#7C746A] border-[#7C746A]/25 hover:border-[#12372A]/30"
                  }`}
                >
                  {post.published ? "Published" : "Draft"}
                </button>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <Link
                    href={`/admin/edit/${post.id}`}
                    className="text-[0.68rem] tracking-[0.08em] uppercase font-sans text-[#12372A] hover:text-[#B08D57] transition-colors"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deletePost(post)}
                    disabled={deleting === post.id}
                    className="text-[0.68rem] tracking-[0.08em] uppercase font-sans text-[#7C746A] hover:text-red-600 transition-colors disabled:opacity-40"
                  >
                    {deleting === post.id ? "…" : "Delete"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
