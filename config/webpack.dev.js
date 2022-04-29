const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");
const commonConfig = require('./webpack.common');
const path = require('path');
const packageJson = require('../package.json');

const devConfig = {
  entry: "./src/index",
  mode: 'development',
  output: {
    publicPath: 'auto',
  },
  devServer: {
    port: 8080,
    static: path.join(__dirname, "dist"),
    historyApiFallback: {
      index: 'index.html',
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        pikachu: 'pikachu@http://localhost:8081/remoteEntry.js',
      },
      shared: packageJson.dependencies,
    }),
    new ExternalTemplateRemotesPlugin(),
  ],
};

module.exports = merge(commonConfig, devConfig);

