const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // Ponto de entrada do seu aplicativo, o arquivo JavaScript principal
  entry: path.resolve(__dirname, "src", "index.js"),

  // Configuração de saída para o código gerado
  output: {
    path: path.resolve(__dirname, "build"),  // Diretório de saída
    filename: "bundle[fullhash].js",         // Nome do arquivo de saída com um hash único
    clean: true,                             // Limpa o diretório de saída antes de cada compilação
  },

  // Plugins adicionais para o webpack, como a geração de um arquivo HTML
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"), // Arquivo HTML de modelo
      inject: "body", // Inserir o script no final do corpo do HTML
    }),
  ],

  // Regras de carregamento para diferentes tipos de arquivos
  module: {
    rules: [
      {
        // Regra para arquivos JavaScript (usando Babel para transpilação)
        test: /\.js$/,              // Teste para identificar arquivos .js
        exclude: /node_modules/,    // Excluir arquivos em node_modules
        use: "babel-loader",        // Use o Babel para transpilação
      },
      {
        // Regra para arquivos SCSS (Sass)
        test: /\.scss$/,             // Teste para identificar arquivos .scss
        use: [
          "style-loader",           // Carrega os estilos diretamente no DOM
          {
            loader: "css-loader",   // Processa os arquivos CSS
            options: {
              modules: true,         // Habilita módulos CSS para escopo de componente
            },
          },
          "sass-loader",            // Processa arquivos SCSS
        ],
      },
    ],
  },

  // Configurações do servidor de desenvolvimento
  devServer: {
    port: 3000,  // Porta em que o servidor será executado
  },
};
