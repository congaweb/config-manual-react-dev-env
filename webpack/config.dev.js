const path = require('path');
const __root = process.cwd();

const devConfig = {
  target: ['web'],
  mode: 'development',
  devtool: 'source-map',
  // 진입
  // 출력
  output: {
    path: path.resolve(__root, 'dist'), // 반드시 절대 경로!!!
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /(node_modules|dist)/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};

module.exports = devConfig;
