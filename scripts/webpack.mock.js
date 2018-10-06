const fs = require('fs');
fs.copyFile('mock.env','.env',function(err){
  if(err) console.error(err.stack);
  console.log('file copy done!');
});

const dotenv = require('dotenv').config().parsed;

module.exports = {
  mode: 'development',
  entry: ['./src/index.jsx'],
  module: {
    rules: require('./common/loader')
  },
  resolve: {
    extensions: require('./common/resolve')
  },
  plugins: require('./common/plugins'),
  devServer: {
    contentBase: './public',
    port: 3000
  }
};