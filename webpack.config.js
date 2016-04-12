var webpack = require('webpack'),
		path    = require('path') ;

 module.exports = {
  entry : {
    selectClass : path.join(__dirname + '/src/scripts/selectClass.js'),
    selectShr   : path.join(__dirname + '/src/scripts/selectShr.js')
  },
  output : {
    path : path.join(__dirname + '/dist/'),
    filename : 'bundle.js'
  }
}