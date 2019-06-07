const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src','index.js'),
    output: {
        path: path.normalize(__dirname + '/build'),
        publicPath: '/',
        filename: 'js/bundle.js',
        library: '[name]',
        chunkFilename: '[name].[chunkhash].js'        
    },
    devServer: {
        contentBase: path.join(__dirname, '/public'),
        compress: true,
        historyApiFallback: true,
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jpg|jpeg|svg)$/,
                loader: 'file-loader'
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html'),
            inject: 'body'
        }),
    ],
};