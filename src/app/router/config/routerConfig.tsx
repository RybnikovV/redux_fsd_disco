import { AppRoute, routerPaths } from 'shared/config/routePaths/routePaths';
import { AboutPage } from 'pages/About';

export const routerConfig = [
  {
    path: routerPaths[AppRoute.About].path,
    element: <AboutPage/>,
  }, {
    path: routerPaths[AppRoute.Second].path,
    element: <div>second</div>,
  },
];