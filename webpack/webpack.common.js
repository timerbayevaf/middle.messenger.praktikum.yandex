const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { DIST_DIR, ROOT_DIR } = require('./dir');
const { ENVS } = require('./env');
const CopyPlugin = require('copy-webpack-plugin');

const { __DEV__ } = ENVS;

module.exports = {
  entry: {
    app: path.join(ROOT_DIR, 'src/index.ts'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Chat',
      template: path.join(ROOT_DIR, 'static/index.html'),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.join(ROOT_DIR, 'static', 'styles.css'),
          to: path.join(ROOT_DIR, 'build', 'styles.css'),
        },
      ],
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.join(DIST_DIR, '/'),
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],

    plugins: [new TsconfigPathsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.join(ROOT_DIR, 'tsconfig.json'),
            },
          },
        ],
        exclude: /(node_modules)/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: [{ loader: 'svg-inline-loader' }],
      },
      // изображения
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      // шрифты
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        type: 'asset/inline',
      },
    ],
  },
  stats: {
    all: undefined,
    builtAt: !__DEV__,
    chunks: !__DEV__,
    assets: !__DEV__,
    errors: true,
    warnings: true,
    outputPath: true,
    timings: true,
  },
};
