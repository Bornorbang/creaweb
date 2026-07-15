"use client";
import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";

const RichTextEditor = dynamic(() => import("../../components/RichTextEditor"), { ssr: false });

const API        = "/api/admin-backend";
const CATEGORIES = ["Design Thinking", "Typography", "Strategy", "Development", "AI & Automation", "Case Study", "General"];

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/[\s-]+/g, "-").trim();
}

export default function EditPost({ params }) {
  const { id }   = use(params);
  const router   = useRouter();
  const [token,   setToken]   = useState(null);
  const [saving,  setSaving]  = useState(false);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState("");

  const [form, setForm] = useState({
    title: "", slug: "", category: "General", author: "Bornor Bang",
    date: "", readTime: "", coverImage: "", excerpt: "", content: "", published: false,
  });

  useEffect(() => {
    const t = localStorage.getItem("admin_token");
    if (!t) { router.push("/admin/login"); return; }
    setToken(t);
    fetch(`${API}/posts/${id}`, { headers: { Authorization: `Bearer ${t}` } })
      .then((r) => r.json())
      .then((data) => {
        if (data.post) setForm(data.post);
        else setError("Post not found.");
      })
      .catch(() => setError("Could not load post."))
      .finally(() => setLoading(false));
  }, [id, router]);

  function set(field, value) {
    setForm((prev) => {
      const next = { ...prev, [field]: value };
      if (field === "title" && !prev.slug) next.slug = slugify(value);
      return next;
    });
  }

  async function handleSubmit(e, publish) {
    e.preventDefault();
    if (!form.title.trim()) { setError("Title is required."); return; }
    setSaving(true); setError("");
    try {
      const res = await fetch(`${API}/posts/${id}`, {
        method:  "PUT",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body:    JSON.stringify({ ...form, published: publish }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to save post");
      router.push("/admin");
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  if (!token || loading) {
    return (
      <div className="min-h-screen bg-[#F6F1E8] flex items-center justify-center">
        <p className="text-[#7C746A] font-sans">Loading…</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F6F1E8]">
      <header className="bg-[#12372A] px-6 md:px-10 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="font-serif-display text-[#F6F1E8] text-[1.15rem] tracking-wide">Crea Web Agency</span>
          <span className="text-[#B08D57] text-[0.65rem] tracking-[0.18em] uppercase font-sans hidden sm:block">Admin</span>
        </div>
        <Link href="/admin" className="text-[0.68rem] tracking-[0.1em] uppercase font-sans text-[#F6F1E8]/60 hover:text-[#F6F1E8] transition-colors">
          ← All Posts
        </Link>
      </header>

      <div className="max-w-[1100px] mx-auto px-6 md:px-10 py-12">
        <h1 className="font-serif-display text-[#1C1C1C] text-[2rem] mb-10">Edit Post</h1>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-5 py-4 text-[0.85rem] font-sans mb-8">{error}</div>
        )}

        <form onSubmit={(e) => handleSubmit(e, form.published)} className="flex flex-col gap-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="label-sm">Post Title *</label>
              <input type="text" required value={form.title} onChange={(e) => set("title", e.target.value)}
                className="field text-[1rem] font-serif-display" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="label-sm">URL Slug</label>
              <input type="text" value={form.slug} onChange={(e) => set("slug", e.target.value)} className="field font-mono text-[0.85rem]" />
              <p className="text-[0.65rem] text-[#7C746A] font-sans">/{form.slug}</p>
            </div>
            <div className="flex flex-col gap-2">
              <label className="label-sm">Category</label>
              <select value={form.category} onChange={(e) => set("category", e.target.value)} className="field">
                {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="label-sm">Author</label>
              <input type="text" value={form.author} onChange={(e) => set("author", e.target.value)} className="field" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="label-sm">Read Time</label>
              <input type="text" value={form.readTime} onChange={(e) => set("readTime", e.target.value)} className="field" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="label-sm">Display Date</label>
              <input type="text" value={form.date} onChange={(e) => set("date", e.target.value)} className="field" />
            </div>
            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="label-sm">Cover Image URL</label>
              <input type="url" value={form.coverImage} onChange={(e) => set("coverImage", e.target.value)} className="field" />
              {form.coverImage && (
                <div className="mt-2 aspect-[16/6] overflow-hidden bg-[#1C1C1C]/5 max-w-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={form.coverImage} alt="Preview" className="w-full h-full object-cover" />
                </div>
              )}
            </div>
            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="label-sm">Excerpt / Summary</label>
              <textarea rows={3} value={form.excerpt} onChange={(e) => set("excerpt", e.target.value)} className="field resize-none" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="label-sm">Article Content</label>
            <RichTextEditor content={form.content} onChange={(html) => set("content", html)} />
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#1C1C1C]/10">
            <button type="button" onClick={(e) => handleSubmit(e, false)} disabled={saving}
              className="text-[0.72rem] font-medium tracking-[0.14em] uppercase font-sans text-[#1C1C1C] border border-[#1C1C1C]/20 px-7 py-3 hover:border-[#12372A] hover:text-[#12372A] transition-colors disabled:opacity-50">
              Save as Draft
            </button>
            <button type="button" onClick={(e) => handleSubmit(e, true)} disabled={saving}
              className="text-[0.72rem] font-medium tracking-[0.14em] uppercase font-sans text-[#F6F1E8] bg-[#12372A] px-7 py-3 hover:bg-[#B08D57] transition-colors disabled:opacity-50">
              {saving ? "Saving…" : "Update & Publish"}
            </button>
            <Link href="/admin" className="text-[0.7rem] font-sans text-[#7C746A] hover:text-[#1C1C1C] transition-colors ml-auto">
              Cancel
            </Link>
          </div>
        </form>
      </div>

      <style>{`
        .label-sm { font-size: 0.65rem; letter-spacing: 0.14em; text-transform: uppercase; font-family: var(--font-inter); color: #7C746A; }
        .field { border: 1px solid rgba(28,28,28,0.15); padding: 0.75rem 1rem; font-family: var(--font-inter); font-size: 0.9rem; color: #1C1C1C; background: white; outline: none; width: 100%; transition: border-color 0.2s; }
        .field:focus { border-color: #12372A; }
      `}</style>
    </div>
  );
}
