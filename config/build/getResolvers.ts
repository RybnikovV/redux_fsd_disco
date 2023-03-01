import webpack from 'webpack';
import { IBuildConfig } from './types/buildConfig';

export function getResolvers(options: IBuildConfig): webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [options.paths.absolutePath, 'node_modules'],
    alias: {},
    preferAbsolute: true,
    mainFiles: ['index']
  }
}