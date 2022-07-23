const { merge } = require('webpack-merge');
const config = require('./webpack.config.js')

module.exports = merge(config, {
    mode: "developement",
    devtool: "inline-source-map"
});