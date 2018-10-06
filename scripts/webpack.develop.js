const fs = require('fs');
fs.copyFile('develop.env','.env',function(err){
  if(err) console.error(err.stack);
  console.log('file copy done!');
});

const dotenv = require('dotenv').config().parsed;
let dir = __dirname + '/dist';
if (dotenv.DIR_PATH != '') dir = dotenv.DIR_PATH;

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
  output: {
    path: dir,
    filename: 'js/bundle_[hash:4].js'
  }
};