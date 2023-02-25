import { IBuildConfig } from './types/buildConfig';
import { Configuration } from 'webpack-dev-server';

export function getDevServer(options: IBuildConfig): Configuration {
  return {
    port: options.port,
    historyApiFallback: true
  }
}