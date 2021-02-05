/* eslint-disable */
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const base = require('./webpack.common');

module.exports = merge(base, {
  entry: {
    app: './src/entry-client.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"client"',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks(module) {
        return (
          /node_modules/.test(module.context)
          && !/\.css$/.test(module.request)
        );
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity,
    }),
    new VueSSRClientPlugin(),
  ],
});
