const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //context: path.join(__dirname, '/src'),
    entry: path.resolve(__dirname, 'src','index.js'),
    output: {
        path: path.resolve(__dirname, '/dist'),
        filename: 'bundle.js',
        publicPath: '/',
        
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
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html')
        }),
    ],
};