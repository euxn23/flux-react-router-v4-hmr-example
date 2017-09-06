const webpack = require('webpack');
const config = require('./webpack.config');

const host = process.env.DEV_SERVER_HOST || '0.0.0.0';
const port = process.env.DEV_SERVER_PORT || 3000;


module.exports = Object.assign(
  config,
  {
    plugins: [
      ...config.plugins,
      new webpack.optimize.UglifyJsPlugin(),
    ],
    devtool: 'nosource-source-map',
  });
