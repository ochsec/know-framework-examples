const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  output: {
    filename: '[name].[hash].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}
