const path = require('path')

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'app.bundle.js'
      }
}