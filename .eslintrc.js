/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
    root: true,
    extends: [
        "neon/common",
        "neon/browser",
        "neon/node",
        "neon/typescript",
        "neon/react",
        "neon/next",
        "neon/edge",
        "neon/prettier",
    ],
    settings: {
        react: {
            version: "detect",
        },
    },
    parserOptions: {
        project: "./tsconfig.json",
    },
    ignorePatterns: ["**/dist/*"],
    rules: {
        "react/react-in-jsx-scope": 0,
        "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
    },
};
