const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv').config().parsed;

let dir = __dirname + '/dist';
if(dotenv.DIR_PATH != '') dir = dotenv.DIR_PATH;

module.exports = {
  mode: 'production',
  entry: [
    './src/index.jsx'
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx','.html']
  },
  plugins:[
    new HtmlWebpackPlugin({template: __dirname + "/public/index.html"})
  ],
  output: {
    path: dir,
    filename: 'js/bundle_[hash:4].js'
  }
};