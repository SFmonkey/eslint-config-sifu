// const index = require('./index');
// const prettierConfig = require('./.prettierrc.js');

module.exports = {
    extends: ['./index.js'],
    rules: {
        'prettier/prettier': "error"
    },
    plugins: ['prettier']
}