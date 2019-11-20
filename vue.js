const rules = require('./rules');

module.exports = {
    extends: [
        "plugin:vue/essential",
        './legacy.js'
    ],
    plugins: ['vue'],
    rules: rules,
}