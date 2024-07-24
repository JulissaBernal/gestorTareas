const path = require("path");

module.exports = {
  entry: "./src/index.js", //punto de entrada de tu aplicacion
  output: {
    filaname: "bundle.js", //nombre del archivo de salida
    path: path.resolve(__dirname, "dist"), //carpeta de salida
  },
  module: {
    rules: [
      {
        test: /\.css$/, //regex para identificar archivos css
        use: ["style-loader", "css-loader"], //loaders para procesar
      },
      {
        test: /\.js$/, //regex para identificar archivos JS
        exclude: /node_modules/, //Excluir la carpeta node_modules
        use: {
          loader: "babel-loader", //loader para convertir js moderno  a codigo compatible para todos los navegadores
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  devtool: "source-map", //Genera source maps para facilitar la depuracion
  devServer:{
    contentBase: path.resolve(__dirname,'dist'),//carpeta en el que correra el servidor
    compress:true,//habilitar compresion gzit para mejorar la carga
    port:9000,//puerto del servidor de desarrollo
  },
};
