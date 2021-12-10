const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const devConfig = require('./config.dev');
const TerserPlugin = require('terser-webpack-plugin');

const filteredRules = devConfig.module.rules.filter(
  ({ test: regExp }) => !regExp.test('.css')
);

const buildConfig = merge(devConfig, {
  mode: 'production',
  devtool: false, // 배포시 sorce-map은 필요없음
  module: {
    rules: [
      ...filteredRules,
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'], // 쓰는 느낌
      },
    ],
  },
  plugins: [
    // 설치하는 느낌
    new MiniCssExtractPlugin({
      filename: 'css/[name].min.css',
    }),
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
});

module.exports = buildConfig;
