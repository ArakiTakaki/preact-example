const HtmlWebpackPlugin = require('html-webpack-plugin');

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