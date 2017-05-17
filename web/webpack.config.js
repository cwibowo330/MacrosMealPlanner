const path = require('path');
const webpack = require('webpack');

const currentEnv = JSON.stringify(process.env.NODE_ENV || 'development');

module.exports = {
  devtool:   'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'src'),
  },
  externals: {
    'react/addons':                   true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext':         true,
  },
  entry: [
    'babel-polyfill',
    path.join(__dirname, '../index.web.js'),
  ],
  module: {
    loaders: [
      {
        test:   /\.js$/,
        loader: 'babel-loader',
        query:  { cacheDirectory: true },
      },
      {
        test:   /\.(gif|jpe?g|png|svg)$/,
        loader: 'url-loader',
        query:  { name: '[name].[hash:16].[ext]' },
      },
      {
        test:    /\.ttf$/,
        loader:  'file-loader',
        include: path.join(__dirname, iconModulePath),
      },
    ],
  },
  output: {
    filename:   'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': currentEnv }),
    new webpack.optimize.OccurrenceOrderPlugin(),
  ],
  resolve: {
    alias: {
      'react-native': 'react-native-web',
    },
    extensions: ['.web.js', '.jsx', '.js'],
  },
};
