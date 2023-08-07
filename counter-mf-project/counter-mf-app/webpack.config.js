const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = (_, argv) => ({
  output: {
    // para simular ambiente local
    // publicPath: "http://localhost:3002/",
    // para similar ambiente de producción (usar npx serve -l 51957 dist ). Este puerto se puede cambiar colocando npx serve dist y el puerto que te retorne. Para esto se debe realizar el build de la aplicación primero. También se puede colocar el mismo puerto 3002 (es el que se definió al principio) y seguir usando ese, pero la diferencia es que ahora se tendría que levantar el servidor con ese puerto usando npx serve -l 3002 dist
    // publicPath: "http://localhost:51957/",
    // página de producción subida a Netlify
    publicPath: "https://counter-mf-project-app.netlify.app/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    // para simular ambiente local
    // port: 3002,
    // para similar ambiente de producción (usar npx serve -l 51957 dist ). Este puerto se puede cambiar colocando npx serve dist y el puerto que te retorne. Para esto se debe realizar el build de la aplicación primero. También se puede colocar el mismo puerto 3002 (es el que se definió al principio) y seguir usando ese, pero la diferencia es que ahora se tendría que levantar el servidor con ese puerto usando npx serve -l 3002 dist
    // port: 51957,
    // página de producción subida a Netlify
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
      name: "counter_mf_app",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./CounterMF": "./src/components/Counter.jsx",
      },
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
