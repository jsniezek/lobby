module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'app.js'
  },
  devServer: {
    inline: true,
    port: 8080
  },
  module: {
    loaders: [
      {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }
    ]
  }
}
