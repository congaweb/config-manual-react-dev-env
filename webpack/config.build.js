const { merge } = require('webpack-merge');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const devConfig = require('./config.dev');

const filteredRules = devConfig.module.rules.filter(
  ({ test: regExp }) => !regExp.test('.css')
);

const buildConfig = merge(devConfig, {
  mode: 'production',
  devtool: false,
  module: {
    rules: [
      ...filteredRules,
      {
        test: /\.css$/i,
        use: [MiniCSSExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: 'css/[name].min.css',
    }),
  ],
});

module.exports = buildConfig;
