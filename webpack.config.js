const path = require('path');
const webpack = require('webpack');
// HTMLを出力するパッケージ
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 処理毎にフォルダを削除する
const CleanWebpackPlugin = require('clean-webpack-plugin');
// ファイルパスの大文字と小文字を区別できるようにする
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
// 足りてないパッケージをインストールする際にdevserverを停止しなくてもよくなる
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');

module.exports = {
  entry: {
    'js/bandle': path.resolve(__dirname, 'src/ts/index.ts')
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    // import忘れをエラーにする
    strictExportPresence: true,
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
        test: /\.pug$/,
        use: [
          {
            loader: 'pug-loader',
            options: {
              pretty: true
            }
          }
        ]
      },
      {
        enforce: 'pre',
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'tslint-loader',
            options: {
              typeCheck: true,
              fix: true //エラーを自動で修正する
            }
          }
        ]
      }
    ]
  },
  // 共通コードをvenderに分離する
  optimization: {
    splitChunks: {
      cacheGroups: {
        vender: {
          test: /node_modules/,
          name: 'js/vender',
          chunks: 'initial',
          enforce: true
        }
      }
    }
  },
  resolve: {
    // 以下のファイルを拡張子無しで読めるようにする
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  plugins: [
    new WatchMissingNodeModulesPlugin(path.resolve('node_modules')),
    new CaseSensitivePathsPlugin(),
    //moment.jsを使用する場合enとここで指定しているja以外を除去する
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ja/),
    // distフォルダをビルド毎に削除
    // dist内に削除したくないフォルダ等がある場合option追加{exclude: ['folder']}
    new CleanWebpackPlugin([path.resolve(__dirname, 'dist')]),
    // html出力 デフォルトでoutputのパスにindex.htmlを出力
    // なおpugの場合title等使用できないoptionもある
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.pug')
    })
  ]
};
