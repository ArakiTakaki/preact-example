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
    loader: "svg-react-loader"
  },
  {
    test: /\.css$/,
    loaders: [
      "style-loader",
      "css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]"
    ]
  }
]