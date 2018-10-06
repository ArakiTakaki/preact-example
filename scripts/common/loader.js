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
    test: /\.css$/,
    use: [
      "style-loader",
      "css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]"
    ]
  },
  {
    test: /\.svg$/,
    loader: ['preact-svg-loader'],
  }
]