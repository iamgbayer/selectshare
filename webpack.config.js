var webpack = require('webpack'),
		path    = require('path');

var src  = path.resolve('./src/'),
		dist = path.resolve('./dist/'); 

module.exports = {
	entry  :	src + 'scripts/selectShr.js',
	output : {
		path : client,
		filename : 'bundle.js'
	},
	  resolve : {
    extensions : ['', '.js', '.styl']
  },
  module : {
    loaders : [
      {
        test    : /\.styl$/,
        loaders : ['style-loader','css-loader','stylus-loader'],
        include : path.join(__dirname, 'src/styl/')
      },
      {
        test    : /\.jsx?$/,
        loader  : 'babel-loader',
        exclude : /node_modules/,
        query : {
          presets : ['es2015']
        },
        include : path.join(__dirname, 'src/scripts/')
      }
    ]
  }
};	 					