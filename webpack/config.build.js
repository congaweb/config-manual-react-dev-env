const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const devConfig = require('./config.dev');

const buildConfig = merge(devConfig, {
  mode: 'production',
  devtool: false, // 배포시 sorce-map은 필요없음
  module: {
    rules: devConfig.module.rules.map((rule) => {
      const { test: regExp } = rule;
      if (regExp.test('.css')) {
        return {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        };
      }
      return rule;
    }),
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
