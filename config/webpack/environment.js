const { environment } = require('@rails/webpacker')

environment.loaders.set('rt', {
  test: /\.rt$/,
  use: 'react-templates-loader?modules=commonjs'
})

module.exports = environment
