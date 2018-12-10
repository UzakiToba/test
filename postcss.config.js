module.exports = {
  plugins: [
    require('autoprefixer')({
      grid: true,
      browsers: [
        'last 4 versions',
        'android 4.0', 'android 4.1'
      ]
    })
  ]
}
