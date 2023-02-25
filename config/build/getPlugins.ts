import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { IPaths } from './types/buildConfig';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function getPlugins(paths: IPaths): webpack.WebpackPluginInstance[] {
  
  return [
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[name].[contenthash].css'
    }),
  ]
}