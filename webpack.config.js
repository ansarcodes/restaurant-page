import path from "node:path";
import { Script } from "node:vm";

export default {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "script.js",
        path: path.resolve(import.meta.dirname, "dist"),
        clean: true,
    },
}