const webpack = require('webpack');
const nodeEnv = process.env.NODE_ENV || 'production'
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    filename: './app.js'
  },
  output: {
    filename: '_build/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
            presets: ['es2015-native-modules']
        }
      }
    ]
  },
  optimization: {
    minimizer: [
        new UglifyJsPlugin({
        compress: { warnings: false },
        output: {comments :false},
        sourceMap: true
      }),
    ],
  },
  plugins: [
    //uglify js

    // env plugin
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv)}
    })
  ]
}
