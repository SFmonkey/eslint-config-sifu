const rules = require('./rules');
const legacy = require('./legacy');

module.exports = {
    extends: [
        "plugin:vue/essential",
        legacy
    ],
    plugins: ['vue'],
    rules: rules,
}