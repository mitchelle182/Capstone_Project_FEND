const webpack = require ("webpack");
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WorkBoxPlugin =require("workbox-webpack-plugin");


module.exports = {
    entry:"./src/client/index.js",
    mode: "production",
    devtool: "hidden-source-map",
    optimization: {
        minimizer:[
            new TerserPlugin({})
        ]
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]

    }, 
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/client/views/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'[name].css'
        }), 
        new WorkBoxPlugin.GenerateSW({})
    ]


}