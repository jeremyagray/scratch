const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  'devServer': {
    'static': {
      'directory': path.join(__dirname, 'public'),
    },
    'compress': true,
    'port': 3003,
  },
  'entry': {
    'index': path.resolve(__dirname, 'src', 'index.js')
  },
  'mode': 'development',
  'module': {
    'rules': [
      {
        'test': /\.css$/,
        'use': [
          'style-loader',
          'css-loader'
        ]
      },
      {
        'test': /\.js$/,
        'exclude': /node_modules/,
        'use': [
          'babel-loader'
        ]
      }
    ]
  },
  'output': {
    'path': path.resolve(__dirname, 'dist'),
    'filename': 'bundle.js'
  },
  'plugins': [
    new HtmlWebpackPlugin({ template: './public/index.html' })
  ]
};
