const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');

module.exports = {
    entry: {
        app: './src/js/app.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: './dist/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        }]
    },
    devServer: {
        overlay: true
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};