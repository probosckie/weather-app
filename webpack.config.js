const path = require('path');
const webpack = require('webpack');
module.exports = {
  entry: [
    './src/index.js'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot-loader!babel-loader'
    }, 
    {
      test:/\.css/,
      loader:'style-loader!css-loader'
    }, 
    { test: /\.(png|jpg|gif)$/, 
      loader: 'url-loader?limit=8192' 
    }]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname + '/dist/'),
    filename: 'bundle.js'
  },
  plugins: [new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
  })],
  devServer: {
    contentBase: './dist'
  }
};