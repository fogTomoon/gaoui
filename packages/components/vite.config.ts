import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import DefineOptions from "unplugin-vue-define-options/vite";
export default defineConfig({
  build: {
    outDir: "es",
    minify: false,
    rollupOptions: {
      //忽略打包vue文件
      external: ["vue", /\.less/],
      input: ["index.ts"],
      output: [
        {
          format: "es",
          entryFileNames: "[name].mjs",
          preserveModules: true,
          exports: "named",
          dir: "../easyest/es",
        },
        {
          format: "cjs",
          entryFileNames: "[name].js",
          preserveModules: true,
          exports: "named",
          dir: "../easyest/lib",
        },
      ],
      //   output: {
      //     globals: {
      //       vue: "Vue",
      //     },
      //     dir: "dist",
      //   },
    },
    lib: {
      entry: "./index.ts",
      name: "easyest",
      fileName: "easyest",
      formats: ["es", "umd", "cjs"],
    },
  },
  plugins: [
    vue(),
    DefineOptions(),
    dts({
      entryRoot: "./src",
      outputDir: ["../easyest/es/src", "../easyest/lib/src"],
      tsConfigFilePath: "../../tsconfig.json",
    }),
    {
      name: "style",
      generateBundle(config, bundle) {
        const keys = Object.keys(bundle);
        for (const key of keys) {
          const bundler: any = bundle[key];
          this.emitFile({
            type: "asset",
            fileName: key,
            source: bundler.code.replace(/\.less/g, ".css"),
          });
        }
      },
    },
  ],
});
