const rules = require('./rules');
const legacy = require('./legacy');

module.exports = {
    extends: [legacy],
    rules: rules,
}