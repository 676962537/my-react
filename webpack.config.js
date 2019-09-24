var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack  = require('webpack')
module.exports = {
    mode:"development",
    entry: './index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'js/index.js',
        publicPath: "/"
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ }
      ]
    },
    devServer:{
      // quiet:true,
      contentBase: './dist',
      hot: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template:path.resolve('index.html'),
        data:new Date(),
        minify:{
          collapseWhitespace: false,
        }
      }),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ]
}
