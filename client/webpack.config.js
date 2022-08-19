const HtmlWebpackPlugin = require('html-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const is_prod = process.env.NODE_ENV === 'production';

const plugins = [
  new HtmlWebpackPlugin({
    title: 'Webpack Fun - Generated',
    filename: 'index.html',
    template: path.join(__dirname, 'src/index.html'),
    inject: 'body'
  }),
  new MiniCssExtractPlugin({
    filename: is_prod ? 'style.[contenthash].css' : 'style.css'
  })
];

if (is_prod) plugins.push(...[
  new GenerateSW(),
  new WebpackPwaManifest({
    name: 'Webpack Example',
    short_name: 'WPEx',
    description: 'Example on setting PWA workflow',
    background_color: '#555555',
    start_url: './',
    publicPath: './',
    inject: true,
    theme_color: '#555555',
    icons: [
      {
        src: path.resolve('src/images/blue-robot.png'),
        sizes: [96, 128, 192, 256, 384, 512], // multiple sizes,
        ios: true
      },
    ]
  })
]);


module.exports = {
  mode: is_prod ? 'production' : 'development',
  entry: {
    bundle: path.join(__dirname, 'src/index.js')
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    hot: true,
    watchFiles: ['./src/index.html'],
    proxy: {
      '/': 'http://localhost:3333'
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: plugins
}