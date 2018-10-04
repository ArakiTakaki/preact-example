const HtmlWebpackPlugin = require('html-webpack-plugin');

const fs = require('fs');
fs.copyFile('mock.env','.env',function(err){
  if(err) console.error(err.stack);
  console.log('file copy done!');
});

const dotenv = require('dotenv').config().parsed;

module.exports = {
  mode: 'development',
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
  devServer: {
    contentBase: './public',
    port: 3000
  }
};