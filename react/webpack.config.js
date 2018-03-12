const path = require('path');

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: "sandbox-react.bundle.js"
  },
  module: {
    rules: [
      {
        // Will look for all .js files, ignore node_modules to speed up build
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};
