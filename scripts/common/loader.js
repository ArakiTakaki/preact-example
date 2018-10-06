module.exports = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: ['babel-loader']
  },
  {
    test: /\.html$/,
    loader: "html-loader"
  },
  {
    test: /\.svg$/,
    loader: ['preact-svg-loader'],
  }
]