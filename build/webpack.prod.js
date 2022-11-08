/*
 * @Author: fanhua 
 * @Date: 2022-11-08 13:41:29 
 * @Last Modified by: fanhua
 * @Last Modified time: 2022-11-08 14:23:09
 */
const path = require("path");
const MiniCssPlugin = require("mini-css-extract-plugin")
module.exports = {
  entry: './source/js/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../source/dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssPlugin.loader, 'css-loader']
      },
      {
        test: /\.less$/,
        use: [MiniCssPlugin.loader, 'css-loader', 'less-loader']
      }
    ],
  },
  plugins: [
    new MiniCssPlugin({
      filename: "./css/[name].css",
      chunkFilename: "[name].css"
    })
  ]
};