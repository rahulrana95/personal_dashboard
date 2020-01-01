var HtmlWebpackPlugin = require("html-webpack-plugin");
var CleanWebpackPlugin = require("clean-webpack-plugin");
var AssetsPlugin = require("assets-webpack-plugin");
var BrotliPlugin = require("brotli-webpack-plugin");
var BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

var babelPollyfill = require("@babel/polyfill");

var path = require("path");

const devConfig = {
  mode: "development",
  devtool: "inline-source-map",
  plugins: []
};

const prodPlugins = [
  new CleanWebpackPlugin(["dist"]),
  new AssetsPlugin({
    prettyPrint: true,
    filename: "assets.json",
    path: path.resolve(__dirname, "build")
  }),
  new BrotliPlugin({
    asset: "[path].br[query]",
    test: /\.(js|css|html|svg)$/,
    threshold: 10240,
    minRatio: 0.8
  })
];

if (process.env.NODE_ENV === "production" || true) {
  devConfig.mode = "production";
  devConfig.devtool = ""; //"source-map";
  devConfig.plugins = prodPlugins;
}
console.log(process.env);

module.exports = {
  entry: ["@babel/polyfill", "./src/index.js"],
  mode: devConfig.mode,
  devtool: devConfig.devtool,
  optimization: {
    usedExports: true,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/"
  },
  devServer: {
    historyApiFallback: true
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components/"),
      containers: path.resolve(__dirname, "src/containers/"),
      services: path.resolve(__dirname, "src/services/"),
      constants: path.resolve(__dirname, "src/constants/"),
      utils: path.resolve(__dirname, "src/utils/"),
      styleComponents: path.resolve(__dirname, "src/styles/components/"),
      widgetsStyle: path.resolve(__dirname, "src/styles/widgets/")
    },
    extensions: [".js", ".jsx", ".css", ".png", ".jpg", ".gif", ".jpeg"]
  },
  module: {
    rules: [
      // Js compilers
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      // CSS / SASS
      {
        test: /\.(s*)css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      // Image loaders
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: ["file-loader"]
      },
      // Font-loader
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      },
      // CSV and XML support
      {
        test: /\.(csv|tsv)$/,
        use: ["csv-loader"]
      },
      {
        test: /\.xml$/,
        use: ["xml-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      title: "Output Management"
    }),
    ...devConfig.plugins

    // new BundleAnalyzerPlugin()
  ]
};
