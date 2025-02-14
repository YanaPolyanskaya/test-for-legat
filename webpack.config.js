const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // подключите плагин
//const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//const bootstrap = require('bootstrap');
module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: ''
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'),
    compress: true,
    port: 8080,

    open: true
  },
  module: {
    rules: [ // rules — это массив правил
      // добавим в него объект правил для бабеля
      {
        // регулярное выражение, которое ищет все js файлы
        test: [/\.js$/,/\.css$/, /\.scss$/],

        // при обработке этих файлов нужно использовать babel-loader
        use: [
          'babel-loader',
          'style-loader',
          'css-loader',
          'sass-loader'
        ],

        // исключает папку node_modules, файлы в ней обрабатывать не нужно
        exclude: '/node_modules/'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html' // путь к файлу index.html
    }),
    // new CleanWebpackPlugin(),
    //new bootstrap.BootstrapPlugin() // подключаем Bootstrap плагин для Webpack
  ]
}