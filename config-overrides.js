const { override } = require('customize-cra');

const webpack = () => (config, env) => {
    config.ignoreWarnings = [/Failed to parse source map/];
    return config;
};

module.exports = override(webpack());
