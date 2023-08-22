const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = (_, argv) => ({
  output: {
    publicPath: "http://localhost:8081/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8081,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "mf_remote",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./HeaderFederated": "./src/components/Header.jsx",
      },
      shared: {
        // las dependencias que se quieren compartir tienen que estar tanto en el orquestador como en el módulo que se va a federar. Se recomienda manejar las versiones manualmente para saber en todo momento qué versión se está compartiendo y evitar que uno tenga una versión más o menos reciente
        ...deps,
        react: {
          singleton: true,
          // requiredVersion: deps.react,
          requiredVersion: "^18.2.0",
        },
        "react-dom": {
          singleton: true,
          // requiredVersion: deps["react-dom"],
          requiredVersion: "^18.2.0",
        },
        sweetalert2: {
          singleton: true,
          requiredVersion: "^11.7.27",
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
});
