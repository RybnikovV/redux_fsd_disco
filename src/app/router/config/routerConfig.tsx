import { AppRoute, routerPaths } from 'shared/config/routePaths/routePaths';
import { AboutPage } from 'pages/About';

export const routerConfig = [
  {
    path: routerPaths[AppRoute.About],
    element: <AboutPage/>,
  }, {
    path: routerPaths[AppRoute.SECOND],
    element: <div>second</div>,
  },
];