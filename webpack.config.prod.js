const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
// cssをcssとして書き出す
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const common = require('./webpack.config.js');

module.exports = merge(common, {
  mode: 'production',
  entry: {
    'js/bandle': path.resolve(__dirname, 'src/ts/index.tsx')
  },
  output: {
    filename: '[name].[hash].js',
    publicPath: './',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: ['awesome-typescript-loader']
    }, {
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            url: false,
            sourceMap: true,
            importLoaders: 3
          }
        },
        'postcss-loader',
        'sass-loader'
      ]
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/common.[hash].css',
    })
  ]
});
