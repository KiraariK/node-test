'use strict';

module.exports = {
  entry: './home',
  output: {
    filename: "./build.js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ['env']
        }
      }
    ]
  }
};