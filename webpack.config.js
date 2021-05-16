const path = require('path');

module.exports = {
  mode: 'development',

  entry: './src/js/index.ts',

  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js"
  },

  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader'
    }]
  }
};
