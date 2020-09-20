const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      components: path.resolve(__dirname, "src/components/"),
      catActions: path.resolve(__dirname, "src/store/cats/actions"),
      catTypes: path.resolve(__dirname, "src/store/cats/types"),
      voteActions: path.resolve(__dirname, "src/store/votes/actions"),
      voteTypes: path.resolve(__dirname, "src/store/votes/types"),
      hooks: path.resolve(__dirname, "src/hooks"),
      api: path.resolve(__dirname, "src/api"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { modules: true } },
        ],
      },
    ],
  },
  plugins: [new Dotenv()],
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    liveReload: true,
    port: 9000,
    writeToDisk: true,
    open: true,
    historyApiFallback: true,
  },
  devtool: "inline-source-map",
};
