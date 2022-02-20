import nodeResolve from "@rollup/plugin-node-resolve";

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

const iife = {
  input: "build/typescript/index.js",
  output: {
    file: "build/rollup/index.iife.js",
    format: "iife",
    name: "build_ex",
    sourcemap: false,
  },
  plugins: [
    nodeResolve({
      module: true,
      jsnext: true,
      browser: true,
      extensions: [".js", ".ts"],
      preferBuiltins: false,
    }),
  ],
};

export default [es6_module, iife];
