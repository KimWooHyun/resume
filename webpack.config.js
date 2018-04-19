module.exports = {
	entry: {
    entry: './src/index.js'
  },
	output: {
    filename: './dist/bundle.js'
  },
	module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  }
};
