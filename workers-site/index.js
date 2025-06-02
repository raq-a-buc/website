export default {
  async fetch(request) {
    const baseUrl = new URL(request.url);

    // Adjust the pathname to point to the correct folder and file
    baseUrl.pathname = '/index.html';

    // Serve the `index.html` from the website folder
    return fetch(baseUrl.toString());
  },
};