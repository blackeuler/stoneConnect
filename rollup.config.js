const es6_module = {
  input: "build/typescript/index.js",
  output: {
    file: "build/rollup/index.js",
    format: "es",
    name: "build_ex",
    sourcemap: false,
  },
  plugins: [],
};

export default [es6_module];
