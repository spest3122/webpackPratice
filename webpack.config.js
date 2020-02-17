const HtmlWebpackPlugin = require('html-webpack-plugin');
const ConsoleLogOnBuildWebpackPlugin = require('./ConsoleLogOnBuildWebpackPlugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    plugins: [
        new HtmlWebpackPlugin({ title: 'pluginTest' }),
        new ConsoleLogOnBuildWebpackPlugin()
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
}