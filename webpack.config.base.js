const HtmlWebpackPlugin = require('html-webpack-plugin');

const babelRules = {
  test: /\.(js|jsx)$/,
  loader: 'babel-loader',
  exclude: /node_modules/,
};

const styleRules = {
  test: /\.s[ac]ss$/i,
  use: [
    // Creates `style` nodes from JS strings
    'style-loader',
    // Translates CSS into CommonJS
    'css-loader',
    // Compiles Sass to CSS
    'sass-loader',
  ],
};

module.exports = {
  entry: './src/index.jsx',
  module: {
    rules: [babelRules, styleRules],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
