module.exports = {
  webpack: function(config, env) {
    
    //TODO: add MiniCssExtractPlugin on production
    const lessRule = {
      test: /\.less$/,
      use: [
        'style-loader',
        'css-loader',
        'less-loader'
      ],
    };

    config.module.rules = config.module.rules.concat(lessRule);

    return config;
  }
}