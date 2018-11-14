const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: './src/js/app.js'
	},
	output: {
		filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
			{
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader'
            /*loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
              publicPath: 'img/'
            }*/
          }
        ]
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      }
		]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'My Portfolio Page',
      template: 'src/index.html'
    })
  ]
};