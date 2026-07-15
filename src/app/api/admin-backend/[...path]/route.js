const API_ORIGIN = (
  process.env.API_URL ||
  process.env.NEXT_PUBLIC_API_URL ||
  (process.env.NODE_ENV === "production"
    ? "https://api.creaweb.co.uk"
    : "http://localhost:8000")
).replace(/\/api\/?$/, "");

async function proxy(request, { params }) {
  const { path } = await params;
  const url = new URL(`${API_ORIGIN}/api/${path.map(encodeURIComponent).join("/")}`);
  url.search = new URL(request.url).search;

  const headers = new Headers();
  for (const name of ["authorization", "content-type"]) {
    const value = request.headers.get(name);
    if (value) headers.set(name, value);
  }

  try {
    const upstream = await fetch(url, {
      method: request.method,
      headers,
      body: ["GET", "HEAD"].includes(request.method)
        ? undefined
        : await request.arrayBuffer(),
      cache: "no-store",
    });

    return new Response(upstream.body, {
      status: upstream.status,
      headers: {
        "content-type": upstream.headers.get("content-type") || "application/json",
      },
    });
  } catch {
    return Response.json({ error: "Admin API is unavailable" }, { status: 502 });
  }
}

export const GET = proxy;
export const POST = proxy;
export const PUT = proxy;
export const DELETE = proxy;
