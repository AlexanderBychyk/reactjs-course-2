const path = require('path');

module.exports = (env) => {
  const isProduction = env === 'production';
  return {
    mode: isProduction ? 'production' : 'development',
    entry: './src/App.js',
    output: {
      filename: 'main.js',
      path: path.join(__dirname, 'dist'),
    },
    module: {
      rules: [{
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      }, {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }, {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }],
    },
    devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
    },
  };
};
