import type { Options } from 'tsup';

const config: Options = {
  cjsInterop: true,
  clean: true,
  dts: true,
  entry: [
    "src/text_splitter.ts",
  ],
  format: ["esm", "cjs"],
  minify: false,
  outDir: "dist-readme",
  shims: true,
  sourcemap: true,
  splitting: true,
};

export default config;
