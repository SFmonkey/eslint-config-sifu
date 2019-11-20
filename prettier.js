const index = require('./index');
const prettierConfig = require('./.prettierrc.js');

module.exports = {
    extends: [
        index, 
        "plugin:prettier/recommended"
    ],
    rules: {
        'prettier/prettier': ['error', prettierConfig]
    },
    plugins: ['prettier']
}