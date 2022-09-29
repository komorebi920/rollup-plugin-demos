const { nodeResolve } = require("@rollup/plugin-node-resolve");

export default {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "cjs",
  },
  plugins: [nodeResolve()],
};
