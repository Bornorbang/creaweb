"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";

const RichTextEditor = dynamic(() => import("../components/RichTextEditor"), { ssr: false });

const API        = "/api/admin-backend";
const DEFAULT_CATEGORIES = ["Design Thinking", "Typography", "Strategy", "Development", "AI & Automation", "Case Study", "General"];

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/[\s-]+/g, "-").trim();
}

export default function NewPost() {
  const router = useRouter();
  const [token,      setToken]      = useState(null);
  const [saving,     setSaving]     = useState(false);
  const [error,      setError]      = useState("");
  const [categories, setCategories] = useState(DEFAULT_CATEGORIES);
  const [newCategory, setNewCategory] = useState("");

  const [form, setForm] = useState({
    title:      "",
    slug:       "",
    category:   "General",
    author:     "",
    tags:       [],
    tagInput:   "",
    date:       new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" }),
    readTime:   "5 min read",
    coverImage: "",
    excerpt:    "",
    content:    "",
    published:  false,
  });

  useEffect(() => {
    const t = localStorage.getItem("admin_token");
    if (!t) { router.push("/admin/login"); return; }
    setToken(t);
  }, [router]);

  function set(field, value) {
    setForm((prev) => {
      const next = { ...prev, [field]: value };
      if (field === "title" && !prev.slug) next.slug = slugify(value);
      return next;
    });
  }

  function addTag() {
    const tag = form.tagInput.trim();
    if (tag && !form.tags.includes(tag)) {
      setForm(prev => ({
        ...prev,
        tags: [...prev.tags, tag],
        tagInput: ""
      }));
    }
  }

  function removeTag(idx) {
    setForm(prev => ({
      ...prev,
      tags: prev.tags.filter((_, i) => i !== idx)
    }));
  }

  function addCategory() {
    const cat = newCategory.trim();
    if (cat && !categories.includes(cat)) {
      setCategories(prev => [...prev, cat]);
      setNewCategory("");
    }
  }

  async function handleSubmit(e, publish) {
    e.preventDefault();
    if (!form.title.trim()) { setError("Title is required."); return; }
    if (!form.author.trim()) { setError("Author is required."); return; }
    setSaving(true); setError("");
    try {
      const { tagInput, ...postData } = form;
      const res = await fetch(`${API}/posts`, {
        method:  "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body:    JSON.stringify({ ...postData, published: publish }),
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

  if (!token) return null;

  return (
    <div className="min-h-screen bg-[#F6F1E8]">
      {/* Admin header */}
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
        <h1 className="font-serif-display text-[#1C1C1C] text-[2rem] mb-10">New Post</h1>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-5 py-4 text-[0.85rem] font-sans mb-8">
            {error}
          </div>
        )}

        <form onSubmit={(e) => handleSubmit(e, form.published)} className="flex flex-col gap-8">
          {/* Two-column meta */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Title */}
            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="label-sm">Post Title *</label>
              <input
                type="text" required value={form.title}
                onChange={(e) => set("title", e.target.value)}
                placeholder="An Interesting Article Title"
                className="field text-[1rem] font-serif-display"
              />
            </div>

            {/* Slug */}
            <div className="flex flex-col gap-2">
              <label className="label-sm">URL Slug</label>
              <input type="text" value={form.slug} onChange={(e) => set("slug", e.target.value)}
                placeholder="url-friendly-slug" className="field font-mono text-[0.85rem]" />
              <p className="text-[0.65rem] text-[#7C746A] font-sans">/insights/{form.slug || "slug"}</p>
            </div>

            {/* Author */}
            <div className="flex flex-col gap-2">
              <label className="label-sm">Author *</label>
              <input
                type="text" required value={form.author}
                onChange={(e) => set("author", e.target.value)}
                placeholder="Your Name"
                className="field"
              />
            </div>

            {/* Category */}
            <div className="flex flex-col gap-2">
              <label className="label-sm">Category</label>
              <div className="flex gap-2">
                <select value={form.category} onChange={(e) => set("category", e.target.value)} className="field flex-1">
                  {categories.map((c) => <option key={c}>{c}</option>)}
                </select>
                <button
                  type="button"
                  onClick={() => setNewCategory(newCategory || form.category)}
                  className="px-4 py-2 bg-[#12372A] text-white text-[0.75rem] font-sans hover:bg-[#0d241d] transition-colors"
                  title="Add new category"
                >
                  +
                </button>
              </div>
              {newCategory && (
                <div className="flex gap-2 items-center">
                  <input
                    type="text"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    placeholder="New category name"
                    className="field text-[0.85rem] flex-1"
                  />
                  <button
                    type="button"
                    onClick={addCategory}
                    className="px-3 py-2 bg-[#B08D57] text-white text-[0.7rem] font-sans hover:bg-[#a17d47] transition-colors"
                  >
                    Add
                  </button>
                  <button
                    type="button"
                    onClick={() => setNewCategory("")}
                    className="px-3 py-2 bg-[#7C746A] text-white text-[0.7rem] font-sans hover:bg-[#6c6459] transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>

            {/* Read time */}
            <div className="flex flex-col gap-2">
              <label className="label-sm">Read Time</label>
              <input type="text" value={form.readTime} onChange={(e) => set("readTime", e.target.value)} placeholder="5 min read" className="field" />
            </div>

            {/* Date */}
            <div className="flex flex-col gap-2">
              <label className="label-sm">Display Date</label>
              <input type="text" value={form.date} onChange={(e) => set("date", e.target.value)} placeholder="June 2026" className="field" />
            </div>

            {/* Cover image */}
            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="label-sm">Cover Image URL</label>
              <input type="url" value={form.coverImage} onChange={(e) => set("coverImage", e.target.value)}
                placeholder="https://images.unsplash.com/..." className="field" />
              {form.coverImage && (
                <div className="mt-2 aspect-[16/6] overflow-hidden bg-[#1C1C1C]/5 max-w-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={form.coverImage} alt="Preview" className="w-full h-full object-cover" />
                </div>
              )}
            </div>

            {/* Excerpt */}
            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="label-sm">Excerpt / Summary</label>
              <textarea rows={3} value={form.excerpt} onChange={(e) => set("excerpt", e.target.value)}
                placeholder="A brief summary shown in post listings and SEO descriptions…"
                className="field resize-none" />
            </div>

            {/* Tags */}
            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="label-sm">Tags</label>
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={form.tagInput}
                  onChange={(e) => set("tagInput", e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                  placeholder="Enter tag and press Enter"
                  className="field flex-1"
                />
                <button
                  type="button"
                  onClick={addTag}
                  className="px-4 py-2 bg-[#12372A] text-white text-[0.75rem] font-sans hover:bg-[#0d241d] transition-colors"
                >
                  Add
                </button>
              </div>
              {form.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {form.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-2 bg-[#12372A] text-white px-3 py-1 text-[0.75rem] font-sans"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(idx)}
                        className="hover:text-[#B08D57] transition-colors"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Rich text editor */}
          <div className="flex flex-col gap-2">
            <label className="label-sm">Article Content *</label>
            <RichTextEditor content={form.content} onChange={(html) => set("content", html)} />
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#1C1C1C]/10">
            <button type="button" onClick={(e) => handleSubmit(e, false)} disabled={saving}
              className="text-[0.72rem] font-medium tracking-[0.14em] uppercase font-sans text-[#1C1C1C] border border-[#1C1C1C]/20 px-7 py-3 hover:border-[#12372A] hover:text-[#12372A] transition-colors disabled:opacity-50">
              Save as Draft
            </button>
            <button type="button" onClick={(e) => handleSubmit(e, true)} disabled={saving}
              className="text-[0.72rem] font-medium tracking-[0.14em] uppercase font-sans text-[#F6F1E8] bg-[#12372A] px-7 py-3 hover:bg-[#B08D57] transition-colors disabled:opacity-50">
              {saving ? "Saving…" : "Publish Post"}
            </button>
            <Link href="/admin" className="text-[0.7rem] font-sans text-[#7C746A] hover:text-[#1C1C1C] transition-colors ml-auto">
              Cancel
            </Link>
          </div>
        </form>
      </div>

      {/* Shared field styles */}
      <style>{`
        .label-sm { font-size: 0.65rem; letter-spacing: 0.14em; text-transform: uppercase; font-family: var(--font-inter); color: #7C746A; }
        .field { border: 1px solid rgba(28,28,28,0.15); padding: 0.75rem 1rem; font-family: var(--font-inter); font-size: 0.9rem; color: #1C1C1C; background: white; outline: none; width: 100%; transition: border-color 0.2s; }
        .field:focus { border-color: #12372A; }
      `}</style>
    </div>
  );
}
