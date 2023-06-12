import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import generatePackageJSON from "rollup-plugin-generate-package-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import styles from "rollup-plugin-styles";
import terser from "@rollup/plugin-terser";

const dev = process.env.NODE_ENV !== "production";

export default {
  input: "packages/index.ts",
  output: {
    file: "dist/index.js",
    format: "cjs",
  },
  external: ["react", "react-dom", "next/router"],
  plugins: [
    nodeResolve({
      extensions: [".ts", ".tsx"],
    }),
    babel({
      extensions: [".ts", ".tsx"],
      exclude: "node_modules/**",
      presets: ["@babel/preset-react", "@babel/preset-typescript"],
      plugins: ["styled-components"],
    }),
    generatePackageJSON({
      outputFolder: "dist",
      baseContents: (pkg) => ({
        name: pkg.name,
        main: "/dist/index.js",
        peerDependencies: {
          react: "latest",
          "styled-components": "latest",
        },
      }),
    }),
    terser({
      ecma: 2015,
      mangle: { toplevel: true },
      compress: {
        toplevel: true,
        drop_console: !dev,
        drop_debugger: !dev,
      },
      output: { quote_style: 1 },
    }),
    commonjs(),
    styles(),
  ],
};
