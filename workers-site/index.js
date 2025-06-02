export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Adjust to point directly to your static site
    url.pathname = '/index.html';

    // Fetch the `index.html` file from your website bucket
    return fetch(url.toString());
  },
};