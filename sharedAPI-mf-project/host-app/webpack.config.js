const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

// deps es una importación del package.json y está jalando todas las dependencias que tiene
const deps = require("./package.json").dependencies;
module.exports = (_, argv) => ({
  output: {
    publicPath: "http://localhost:8080/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8080,
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
      name: "host_app",
      filename: "remoteEntry.js",
      remotes: {
        HeaderModFed: "mf_remote@http://localhost:8081/remoteEntry.js",
      },
      exposes: {},
      shared: {
        // las dependencias que se quieren compartir tienen que estar tanto en el orquestador como en el módulo que se va a federar
        ...deps,
        react: {
          // singleton: true, hará que la dependencia se descargue una sola vez
          // requiredVersion para pasarle la versión la cual puede ser dinámica (sacada desde deps) o manual (colocando la versión exacta que queremos)
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
