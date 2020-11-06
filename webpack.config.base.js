const HtmlWebpackPlugin = require('html-webpack-plugin')

const babelRules ={
  test: /\.js$/,
  loader: 'babel-loader',
  exclude: /node_modules/
}

module.exports = {
  entry: './src/index.jsx',
  module: {
    rules: [babelRules]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}