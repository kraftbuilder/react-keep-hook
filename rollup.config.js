import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: "src/useKeep.ts",
    output: [
      {
        file: "dist/useKeep.cjs.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "dist/useKeep.esm.js",
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      typescript({
        tsconfig: "./tsconfig.json",
      }),
    ],
    external: ["react"],
  },
];
