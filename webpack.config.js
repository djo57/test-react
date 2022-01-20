const path = require('path');
const webpack = require('webpack');

const config = {
  resolve:{
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules'),
    ]
  },
  entry: {
    app: ['./src/index.js'],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  optimization:{
    splitChunks:{
      cacheGroups: {
        commons:{
          test: /[\\/]node_modules[\\/](react|react-dom|regenerator-runtime|prop-types|axios|lodash.debounce|lodash.pickBy)/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  }
};

module.exports = config;