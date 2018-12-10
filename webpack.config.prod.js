const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
// cssをcssとして書き出す
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// 画像圧縮用パッケージ
const imageminSvgo = require('imagemin-svgo');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminGifsicle = require('imagemin-gifsicle');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

// PWA
const OfflinePlugin = require('offline-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

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
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['awesome-typescript-loader']
      },
      {
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
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/common.[hash].css'
    }),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      plugins: [
        imageminPngquant({
          options: {
            quality: 85 - 90
          }
        }),
        imageminMozjpeg({
          progressive: true
        }),
        imageminGifsicle(),
        imageminSvgo()
      ]
    }),
    new WebpackPwaManifest({
      name: 'My Progressive Web App',
      short_name: 'MyPWA',
      description: 'My awesome Progressive Web App!',
      background_color: '#ffffff',
      crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
      display: 'standalone',
      theme_color: '#ffffff',
      start_url: '/',
      icons: [
        {
          src: path.resolve('src/assets/img/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
        },
        {
          src: path.resolve('src/assets/img/large-icon.png'),
          size: '1024x1024' // you can also use the specifications pattern
        }
      ]
    }),
    new OfflinePlugin()
  ]
});
