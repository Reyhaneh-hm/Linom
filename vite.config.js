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
        payment: resolve(__dirname, "./payment.html"),
      },
      output: {
        assetFileNames: (assetInfo) => {
          // تنظیم خروجی فایل برای تصاویر به عنوان فایل جداگانه
          if (/\.(png|jpe?g|gif|svg)$/.test(assetInfo.name)) {
            return 'images/[name][extname]';
          }
          return 'assets/[name][extname]';
        },
      },
    },
    assetsInlineLimit: 0,
  },
};