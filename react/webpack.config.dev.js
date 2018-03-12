const config = require('./webpack.config')
const path = require('path')

config.devServer = {
  contentBase: path.resolve(__dirname, 'public'),
  host: '0.0.0.0'
}

module.exports = config
