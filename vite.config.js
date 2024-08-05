import Inspect from "vite-plugin-inspect";
import { resolve } from "path";

// export default defineConfig({
//   build: {
//     outDir: OUT_DIR,
//   },
//   css: {
//     postcss: './postcss.config.js'
//   },
//   plugins: [
//     viteStaticCopy({
//       targets: entries,

//     }),
//   ],
// });

export default {
  plugins: [Inspect()],
  // base: "/tooscarpet/v2",
  css: {
    devSourcemap: true,
    postcss: "./postcss.config.js",
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      input: {
        home: resolve(__dirname, "/index.html"),
        productList: resolve(__dirname, "/product-list2.html"),
        showProduct: resolve(__dirname, "/show-product.html"),
        blog: resolve(__dirname, "/blog.html"),
        showPost: resolve(__dirname, "/show-post.html"),
        notFound: resolve(__dirname, "/not-found.html"),
        categoryList: resolve(__dirname, "/show-category.html"),
        contactUs: resolve(__dirname, "/contact.html"),
        form: resolve(__dirname, "/form.html"),
        payment: resolve(__dirname, "/payment.html"),
        decorationTest: resolve(__dirname, "/decoration-test.html"),
      },
    },
  },
};
