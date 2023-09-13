await Bun.build({
  entrypoints: ["./src/index.ts"],
  outdir: "./dist",
  target: "browser",
  format: "esm",
  splitting: true,  // https://bun.sh/docs/bundler#splitting
  sourcemap: "none",
  // minify: true,
});
