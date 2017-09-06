const webpack = require('webpack');
const config = require('./webpack.config');

const host = process.env.DEV_SERVER_HOST || '0.0.0.0';
const port = process.env.DEV_SERVER_PORT || 3000;


module.exports = Object.assign(
  config,
  {
    entry: [
      'react-hot-loader/patch',
      ...config.entry,
      `webpack-dev-server/client?http://${host}:${port}`,
      'webpack/hot/dev-server',
    ],
    plugins: [
      ...config.plugins,
      new webpack.HotModuleReplacementPlugin(),
    ],
    module: Object.assign(
      config.module,
      {
        loaders: [
          ...config.module.loaders,
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              presets: ['react'],
              plugins: ['react-hot-loader/babel'],
            }
          },
        ],
      },
    ),
  },
);
