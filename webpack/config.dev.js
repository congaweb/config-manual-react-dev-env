const devConfig = {
  target: ['web'],
  mode: 'development',
  devtool: 'source-map',
  // 모듈 > 규칙(들)> (개별) 로더 구성 (어떤 파일? 제외 항목? 어떤 로더 사용? 옵션은?)
  module: {
    rules: [
      // bable-loader 구성
      {
        test: /\.jsx?$/i,
        exclude: /(node_modules|dist)/,
        use: 'babel-loader',
      },
    ],
  },
};

module.exports = devConfig;
