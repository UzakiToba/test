const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const common = require('./webpack.config.js');

module.exports = merge(common, {
  mode: 'production',
  entry: {
    'js/bandle': path.resolve(__dirname, 'src/ts/index.tsx')
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  ]
});
