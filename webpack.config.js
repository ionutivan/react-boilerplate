const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

var babelLoader = {
    loader: 'babel-loader',
    options: {
        presets: ['@babel/preset-env','@babel/preset-react']
    }
  };

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'app.bundle.js'
      },
    module: {
      rules: [
        {
            test: /\.tsx$/,
            exclude: /node_modules/,
            use: [
                babelLoader,
                {
                    loader: 'ts-loader'
                }
            ]
        }
      ]
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js']
      },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
      })],
}

