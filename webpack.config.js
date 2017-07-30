const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'es2016']
                }
            }, {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    },

    stats: {
        colors: true
    },
    devtool: 'source-map',
    plugins: [
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            filename: "./index.html",
            template: './index.template.ejs',
            title: 'Algorithms',
            inject: true
        }),
        new ExtractTextPlugin('style.css')
    ],
    target: 'node'

};

