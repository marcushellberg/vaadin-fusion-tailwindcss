/**
 * This file has been autogenerated as it didn't exist or was made for an older
 * incompatible version.
 *
 * This file can be used for manual configuration. It will not be modified
 * if the flowDefaults constant exists.
 */
const merge = require('webpack-merge');
const flowDefaults = require('./webpack.generated.js');

flowDefaults.module.rules = [
  {
    test: /\.ts$/,
    use: [
      'awesome-typescript-loader'
    ]
  },
  {
    test: /\.css$/i,
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader',
        options: {
          url: false
        }
      }, 
      {
        loader: 'postcss-loader'
      }
    ]
  }
];
module.exports = merge(flowDefaults,
  // Override default configuration
  // {
  //   mode: 'development',
  //   devtool: 'inline-source-map',
  // },

  // Add a custom plugin
  // (install the plugin with `npm install --save-dev webpack-bundle-analyzer`)
  // {
  //   plugins: [
  //     new require('webpack-bundle-analyzer').BundleAnalyzerPlugin({
  //       analyzerMode: 'static'
  //     })
  //   ]
  // },
);
