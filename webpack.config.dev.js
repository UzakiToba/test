const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
// 型チェックを別プロセスで実行する
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const common = require('./webpack.config.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
    path.resolve(__dirname, 'src/ts/index.tsx')
  ],
  output: {
    filename: 'js/bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 3000,
    noInfo: true,
    open: true,
    hot: false, // Hotを使用する場合true
    historyApiFallback: true, // 404の時indexを返す,
    watchContentBase: true
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    })
  ]
});
