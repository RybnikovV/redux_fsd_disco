import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import { ErrorPage } from 'pages/Error';
import { routerConfig } from '../config/routerConfig';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    //Error компонент не работает с lazy
    errorElement: <ErrorPage />,
    children: routerConfig
  },
]);