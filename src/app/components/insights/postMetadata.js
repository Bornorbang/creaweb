const baseUrl = "https://creaweb.co.uk";

export function postDescription(post) {
  return post.excerpt?.trim() || (post.content || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim().slice(0, 160) || `${post.title} — insights from Crea Web Agency.`;
}

export function postImage(post) {
  if (!post.coverImage || /picsum\.photos/i.test(post.coverImage)) return null;
  try {
    const url = new URL(post.coverImage, baseUrl);
    return ["http:", "https:"].includes(url.protocol) ? url.href : null;
  } catch { return null; }
}

export function articleMetadata(post) {
  const url = `${baseUrl}/${post.slug}`;
  const image = postImage(post);
  const description = postDescription(post);
  return {
    title: post.title,
    description,
    alternates: { canonical: url },
    authors: post.author ? [{ name: post.author }] : undefined,
    keywords: Array.isArray(post.tags) ? post.tags : undefined,
    openGraph: {
      title: `${post.title} | Crea Web Agency`, description, url, siteName: "Crea Web Agency",
      images: image ? [{ url: image, alt: post.title }] : [], type: "article",
      publishedTime: post.createdAt, modifiedTime: post.updatedAt,
      authors: post.author ? [post.author] : undefined, tags: post.tags,
    },
    twitter: { card: image ? "summary_large_image" : "summary", title: post.title, description, images: image ? [image] : [] },
  };
}

export function articleSchema(post) {
  return {
    "@context": "https://schema.org", "@type": "BlogPosting",
    "@id": `${baseUrl}/${post.slug}#article`, mainEntityOfPage: `${baseUrl}/${post.slug}`,
    headline: post.title, description: postDescription(post), image: postImage(post) || undefined,
    datePublished: post.createdAt, dateModified: post.updatedAt || post.createdAt,
    author: post.author ? { "@type": "Person", name: post.author } : { "@id": `${baseUrl}/#organization` },
    publisher: { "@id": `${baseUrl}/#organization` }, articleSection: post.category, inLanguage: "en-GB",
  };
}
