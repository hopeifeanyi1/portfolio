// src/app/robots.js
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://hopeifeanyi.vercel.app/sitemap.xml",
  };
}