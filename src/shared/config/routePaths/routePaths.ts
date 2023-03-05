interface IRouterData {
  path: string;
  name: string;
  showGlobalMenu?: boolean
};
//Список маршрутов в приложени
export enum AppRoute {
  About = 'about',
  Second = 'second',
  Main = 'main'
};

export const routerPaths: Record<AppRoute, IRouterData> = {
  [AppRoute.Main]: {
    path: '',
    name: 'Главная',
    showGlobalMenu: true
  },
  [AppRoute.About]: {
    path: 'about',
    name: 'О нас',
    showGlobalMenu: true
  },
  [AppRoute.Second]: {
    path: 'second',
    name: 'Тестирование CORS-механики',
    showGlobalMenu: true
  },
};

