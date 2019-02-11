const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  output: {
    filename: 'bundle.js',
  },
  performance: {
    hints: process.env.NODE_ENV === 'production' ? "warning" : false
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
