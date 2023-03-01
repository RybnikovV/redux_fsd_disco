import webpack from 'webpack';
import path from 'path';
import buildWebpackConfig from './config/build/buildWebpackConfig';
import { IEnv } from './config/build/types/buildConfig';

export default (env: IEnv): webpack.Configuration => {
  const mode = env.mode || 'development';
  const isDev = mode === 'development';
  const port = env.port ? env.port : 3000;

  return buildWebpackConfig({
    mode,
    paths: {
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      html: path.resolve(__dirname, 'public', 'index.html'),
      build: path.resolve(__dirname, 'build'),
      absolutePath: path.resolve(__dirname, 'src'),
    },
    port,
    isDev
  });
};