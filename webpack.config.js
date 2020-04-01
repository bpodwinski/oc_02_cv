const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

if (process.env.NODE_ENV === 'production') {
    sourceMap = false;
}

module.exports = {
    entry: {
        main: [
            './sass/style.scss'
        ]
    },
    output: {
        path: path.resolve(__dirname, './'),
        filename: 'webpack.log'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: "css-loader" },
                    { loader: "sass-loader" }
                ]
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css"
        }),
    ]
};