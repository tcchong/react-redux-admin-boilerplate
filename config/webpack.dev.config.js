var path = require('path');

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
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }

};
