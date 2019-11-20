module.exports = {
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
    extends: ["eslint:recommended"],
    env: {
        browser: true,
        node: true,
        amd: true,
        commonjs: true,
        es6: true
    },
    root: true
}