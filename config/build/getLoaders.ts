import webpack from 'webpack';
import { IBuildConfig } from './types/buildConfig';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function getLoaders({ isDev }: IBuildConfig): webpack.RuleSetRule[] {
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.css$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      "css-loader"],
  };

  const styleLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      // "style-loader",
      //MiniCssExtractPlugin.loader подключаем вместо style-loader
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      //Translates CSS into CommonJS
      // 'css-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64]'
          },
        }
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };

  return [
    tsLoader,
    cssLoader,
    styleLoader
  ]
}