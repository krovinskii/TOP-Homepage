const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/assets/js/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist/assets/js"),
    clean: true,
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    watchFiles: ["src/**/*.html", "src/**/*.njk", "src/**/*.md"],
    hot: true,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.md",
      filename: "../index.html", // Output to dist/
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
