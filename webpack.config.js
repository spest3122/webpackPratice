const path = require('path');

module.exports = {
    // entry: './src/index.js',
    entry: {
        main: './src/index.js',
        two: './src/second.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    }
}