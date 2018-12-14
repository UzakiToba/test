const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
// 型チェックを別プロセスで実行する
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
// cssをcssとして書き出す
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const common = require('./webpack.config.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, 'src/ts/index.tsx')
  ],
  output: {
    filename: 'js/bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              // ForkTsCheckerWebpackPluginで型チェックを実行するため、ここではトランスパイルのみ実行する
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'css-hot-loader',
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
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 3000,
    noInfo: true,
    open: true,
    hot: true, // Hotを使用する場合true
    historyApiFallback: true, // 404の時indexを返す,
    watchContentBase: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/common.css'
    })
  ]
});
