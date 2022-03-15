
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  output: {
    filename: '[name].bundle.js'
  },
  devServer: {
    static: [path.join(__dirname, '..', 'build')],
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
};
