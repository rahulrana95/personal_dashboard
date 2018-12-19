var HtmlWebPackPlugin = require("html-webpack-plugin");
var path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
    resolve: {
        alias: {
          components: path.resolve(__dirname, 'src/components/'),
          client: path.resolve(__dirname, 'src/client/'),
          fonts: path.resolve(__dirname, 'src/fonts/'),
          helpers: path.resolve(__dirname, 'src/helpers/'),
          images: path.resolve(__dirname, 'src/images/'),
          stories: path.resolve(__dirname, 'src/stories/'),
          styles: path.resolve(__dirname, 'src/styles/'),
          tests: path.resolve(__dirname, 'src/tests/'),
        },
        extensions: ['.js', '.jsx', '.css', '.png', '.jpg', '.gif', '.jpeg'],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    plugins: [htmlPlugin]
  };