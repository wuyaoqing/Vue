const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const uglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  // 入口，可以是字符串/数组/对象。
  entry: './src/main.js',
  // 出口，通常是一个对象，里面至少包含path和filename
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new htmlWebpackPlugin({
      // 指定打包用的html模板
      template: 'index.html'
    }),
    new uglifyJsPlugin()
  ]
}