/// <reference types="vitest" />
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

import { configDefaults } from "vitest/dist/config.js";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./test/setup.ts",

        reporters: ["html"],
        coverage: {
            provider: "v8",
            reporter: ["text", "html", "json"],
            enabled: true,
            reportOnFailure: true,
            exclude: [
                "coverage/**",
                "dist/**",
                "**/[.]**",
                "packages/*/test?(s)/**",
                "**/*.d.ts",
                "**/virtual:*",
                "**/__x00__*",
                "**/\x00*",
                "cypress/**",
                "test?(s)/**",
                "test?(-*).?(c|m)[jt]s?(x)",
                "**/*{.,-}{test,spec}.?(c|m)[jt]s?(x)",
                "**/__tests__/**",
                "**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*",
                "**/vitest.{workspace,projects}.[jt]s?(on)",
                "**/.{eslint,mocha,prettier}rc.{?(c|m)js,yml}",
                "**/assets/**",
                "**/html/**",
                "**/shad/**",
                "**/TailBlocks/**",
                "*.config.*",
            ],
        },
        include: ["**/*.{test,spec}.?(c|m)[jt]s?(x)"],
        exclude: [
            ...configDefaults.exclude,
            "packages/template/*",
            "**/*/assets/*",
            "**/*/shad/*",
            "**/*/TailBlocks/*",
            "**/*/assets/*",
        ],
    },
});
