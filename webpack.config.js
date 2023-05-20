
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/js/scripts.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'docs')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new HtmlWebPackPlugin ({
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
}