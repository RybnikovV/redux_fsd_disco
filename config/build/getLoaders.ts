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
      {
        loader: "sass-loader",
        options: {
          // Prefer `dart-sass`
          implementation: require("sass"),
        },
      }
    ],
  };

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    loader: 'file-loader',
    options: {
      outputPath: isDev ? '' : 'assets/img',
      name: isDev ? '[path][name].[ext]' : '[contenthash].[ext]',
    }
  };

  return [
    tsLoader,
    cssLoader,
    styleLoader,
    svgLoader,
    fileLoader,
  ]
}