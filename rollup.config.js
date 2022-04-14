import { terser } from "rollup-plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "dist/ts-build/entry.js",
  output: {
    exports: "named",
    format: "es",
    file: "dist/delegator.mjs",
    sourcemap: true,
  },
  plugins: [
    commonjs(),
    nodeResolve({
      exportConditions: ["browser", "worker"],
      browser: true,
    }),
    terser(),
  ],
};