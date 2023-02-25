import webpack from 'webpack';
import { IBuildConfig } from './types/buildConfig';
import { getLoaders } from './getLoaders';
import { getPlugins } from './getPlugins';
import { getResolvers } from './getResolvers';
import { getDevServer } from './getDevServer';

export default function buildWebpackConfig(options: IBuildConfig): webpack.Configuration {
  const {entry, build} = options.paths;

  return {
    mode: options.mode,
    entry: {
      testBuild: entry,
    },
    devtool: options.isDev ? 'inline-source-map' : undefined,
    devServer: options.isDev ? getDevServer(options) : undefined,
    output: {
      path: build,
      filename: '[name].[contenthash].js',
      clean: true,
    },
    plugins: getPlugins(options.paths),
    module: {
      rules: getLoaders(options),
    },
    resolve: getResolvers()
  };
}