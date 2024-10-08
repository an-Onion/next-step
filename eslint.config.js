// eslint.config.js
import markdown from "@eslint/markdown";

export default [
    {
        files: ["**/*.md"],
        plugins: {
            markdown
        },
        language: "markdown/commonmark",
        rules: {
            "markdown/no-html": "off",
            "@typescript-eslint/no-this-alias": "off"
        }
    }
];