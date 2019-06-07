const merge = require('webpack-merge'); // eslint-disable-line import/no-extraneous-dependencies
const TerserPlugin = require('terser-webpack-plugin'); // eslint-disable-line import/no-extraneous-dependencies
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // eslint-disable-line import/no-extraneous-dependencies
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserPlugin({}),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
});
