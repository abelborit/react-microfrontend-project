const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = (_, argv) => ({
  output: {
    // para simular ambiente local
    // publicPath: "http://localhost:3000/",
    // página de producción subida a Netlify
    publicPath: "https://host-mf-project-app.netlify.app/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3000,
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
      // remotes -> es para llamar microfrontend. Darle un nombre al módulo que vamos a llamar y luego llamarlo con la siguiente nomenclatura: "nombre del módulo que se está federando@direccion de la URL/remoteEntry.js"
      remotes: {
        navbarModuleFederation:
          "navbar_component@https://navbar-mf-project-app.netlify.app//remoteEntry.js",
        counterModuleFederation:
          "counter_mf_app@https://counter-mf-project-app.netlify.app//remoteEntry.js",
      },
      // exposes -> es para exponer microfrontend. Se tiene que colocar en un string y colocar ./ para que el nombre del componente sea tal cual se coloca que normalmente es el nombre del propio componente. Luego exponer el componente.
      exposes: {},
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
