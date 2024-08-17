import Inspect from "vite-plugin-inspect";
import { resolve } from "path";


export default {
  plugins: [Inspect()],
  // base: "/linom/v2",
  css: {
    devSourcemap: true,
    postcss: "./postcss.config.js",
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      input: {
        aboutUs: resolve(__dirname, "./about-us.html"),
        contactUs: resolve(__dirname, "./contact-us.html"),
        error: resolve(__dirname, "./error.html"),
        index: resolve(__dirname, "./index.html"),
        listBlog: resolve(__dirname, "./list-blog.html"),
        showBlog: resolve(__dirname, "./show-blog.html"),
        showBlog: resolve(__dirname, "./payment.html"),
      },
    },
  },
};
