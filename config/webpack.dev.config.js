var path = require('path');
var webpack = require('webpack');

var babelLoaderQueryString = 'presets[]=react,presets[]=es2015,presets[]=stage-1,plugins[]=transform-decorators-legacy';

module.exports = {
  context: path.resolve(__dirname, '../src'),
  entry: {
    'admin': './index.js'
  },
  output: {
    path: './server/public/dist/js',
    filename: '[name].bundle.js',
  },
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules'
    ],
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader?' + babelLoaderQueryString],
        exclude: /node_modules/
      }
    ]
  },
  // polyfill for fetch
  plugins: [
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
  ]

};
