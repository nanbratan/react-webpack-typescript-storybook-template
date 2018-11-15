const JsConfigWebpackPlugin = require('js-config-webpack-plugin');
const TsConfigWebpackPlugin = require('ts-config-webpack-plugin');
const FontConfigWebpackPlugin = require('font-config-webpack-plugin');
const ImageConfigWebpackPlugin = require('image-config-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
const webpack = require('webpack');

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: path.join(__dirname, '/public/index.html'),
  filename: 'index.html',
  inject: 'body',
});

const DefinePluginConfig = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('production'),
});

const development = process.env.NODE_ENV !== 'production';

const defaultPlugins = [
  new JsConfigWebpackPlugin(),
  new TsConfigWebpackPlugin(),
  new FontConfigWebpackPlugin(),
  new ImageConfigWebpackPlugin(),
  HTMLWebpackPluginConfig,
];

const developmentPlugins = [new webpack.HotModuleReplacementPlugin()];

const productionPlugins = [DefinePluginConfig];

const plugins = defaultPlugins.concat(
  development ? developmentPlugins : productionPlugins
);

module.exports = {
  entry: path.join(__dirname, '/src/index.tsx'),
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },

  mode: development ? 'development' : 'production',

  plugins: plugins,

  devServer: {
    host: 'localhost',
    port: '3000',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    historyApiFallback: true,
  },
};
