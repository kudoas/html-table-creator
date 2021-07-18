const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  const IS_DEVELOPMENT = argv.mode === 'development'

  return {
    entry: './src/index.tsx',
    devtool: IS_DEVELOPMENT ? 'source-map' : false,
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    devServer: {
      historyApiFallback: true,
      port: '3030',
      hot: true,
    },
    module: {
      rules: [
        {
          test: /\.js(x?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [['@babel/preset-env', '@emotion/babel-preset-css-prop']],
              },
            },
          ],
        },
        {
          test: /\.ts(x?)$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(ico|png|jpg)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html',
      }),
    ],
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
    },
  }
};
