export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Default: Serve the index.html file
    if (url.pathname === "/") {
      return new Response("Welcome to my Cloudflare Pages site!", {
        headers: { "Content-Type": "text/html" },
      });
    }

    return new Response("Resource not found", {
      status: 404,
      headers: { "Content-Type": "text/plain" },
    });
  },
};