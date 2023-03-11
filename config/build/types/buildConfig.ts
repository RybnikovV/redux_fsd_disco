type BuildMode = 'development' | 'production';

export interface IPaths {
  entry: string;
  html: string;
  build: string;
  absolutePath: string;
};

export interface IBuildConfig {
  mode: BuildMode;
  paths: IPaths;
  port: number;
  isDev: boolean;
};

export interface IEnv {
  mode?: BuildMode;
  port?: number;
}