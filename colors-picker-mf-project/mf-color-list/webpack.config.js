const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
/* (_, argv) son un argumento que se le conoce como guión bajo y un argv y este trae los modos de webpack, es decir, en qué modo está (desarrollo, producción, etc), estos modos son en automático que se le asignan */
module.exports = (_, argv) => ({
  output: {
    /* cuando se tenga una ruta de producción se realiza de esta forma, para que cuando estemos en desarrollo apunte al puerto 3002 y cuando esté en producción apunto a su url de producción como tal */
    // publicPath: argv.mode === "development" ? "http://localhost:3002/" : "ruta de producción" ,
    publicPath: "http://localhost:3002/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3002,
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
      name: "mf_color_list",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: { "./ColorList": "./src/components/ColorList.jsx" },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
});
