/** @type {import('next').NextConfig} */

const nextTranslate = require("next-translate-plugin");
module.exports = nextTranslate({
  experimental: { appDir: false },
  images: {
    domains: ["localhost", "127.0.0.1"]
  }
});
