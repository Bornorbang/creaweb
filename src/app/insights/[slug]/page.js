import { notFound } from "next/navigation";
import { articleMetadata } from "../../components/insights/postMetadata";
import ArticlePage from "../../components/insights/ArticlePage";

const API = (process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000").replace(/(?:\/api)+\/?$/, "");

async function getPost(slug) {
 const res = await fetch(`${API}/api/posts/${encodeURIComponent(slug)}`, { cache: "no-store" });
 if ([401, 403, 404].includes(res.status)) return null;
 if (!res.ok) throw new Error("Unable to load this article. Please try again shortly.");
 const data = await res.json();
 return data.post?.published === true ? data.post : null;
}

async function getRelatedPosts(currentSlug) {
  try {
    const res = await fetch(`${API}/api/posts`, { cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      const all = data.posts ?? [];
      return all.filter((p) => p.slug !== currentSlug).slice(0, 3);
    }
  } catch {}
  return [];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return articleMetadata(post);
}


export default async function PostPage({ params }) {
 const { slug } = await params;
 const [post, related] = await Promise.all([getPost(slug), getRelatedPosts(slug)]);
 if (!post) notFound();
 return <ArticlePage post={post} related={related} />;
}
