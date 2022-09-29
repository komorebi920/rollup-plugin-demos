const commonjs = require("@rollup/plugin-commonjs");

export default {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "cjs",
  },
  plugins: [commonjs()],
};
