var path = require('path');

module.exports = {
  context: path.resolve(__dirname, '../src'),
  entry: {
    'admin': './index.js'
  },
  output: {
    path: './server/public/dist',
    filename: '[name].bundle.js',
  },
  resolve: {
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
