//Список маршрутов в приложени
export enum AppRoute {
  About = 'about',
  SECOND = 'second'
};

export const routerPaths: Record<AppRoute, string> = {
  [AppRoute.SECOND]: 'second',
  [AppRoute.About]: 'about'
};

