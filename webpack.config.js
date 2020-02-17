const path = require('path');

module.exports = {
    entry: {
        app: './src/index.js',
        main: './src/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    }
}