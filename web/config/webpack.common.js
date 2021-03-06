const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')


const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/main.js'),
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, "../dist", "assets"),
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      exclude: /node_modules/
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.css$/,
      use: [
        'style-loader', //生成页面head标签里的style标签
        'css-loader', //css转化为字符串
        'postcss-loader',
        'sass-loader' //解析sass
      ],
      exclude: /node_modules/
    }
    ],

  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, "../dist", 'index.html'),
      template: path.resolve(__dirname, '../template/index.html'),
      inject: true,
      publicPath: ASSET_PATH,
      title: 'vue',
    })
  ]
}