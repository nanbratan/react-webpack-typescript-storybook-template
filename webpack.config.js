const HTMLWebpackPlugin = require("html-webpack-plugin");

const path = require("path");
const webpack = require("webpack");

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: path.join(__dirname, "/public/index.html"),
  filename: "index.html",
  inject: "body"
});

const development = process.env.NODE_ENV !== "production";

const defaultPlugins = [HTMLWebpackPluginConfig];

const developmentPlugins = [new webpack.HotModuleReplacementPlugin()];

const productionPlugins = [];

const plugins = defaultPlugins.concat(
  development ? developmentPlugins : productionPlugins
);

module.exports = {
  entry: path.join(__dirname, "/src/index.tsx"),

  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },

  mode: development ? "development" : "production",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      { test: /\.(tsx?|d.ts)$/, loader: "awesome-typescript-loader" },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      }
    ]
  },

  plugins: plugins,

  devServer: {
    host: "localhost",
    port: "3000",
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    historyApiFallback: true
  }
};
