import { createBrowserRouter } from 'react-router-dom';
import {AboutAsync} from '../page/about/About.async';
import App from '../App';
import Error from '../page/error/error';
import { ErrorLazy } from '../page/error/Error.async';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorLazy />,
    children: [
      {
        path: 'about',
        element: <AboutAsync />,
      }, {
        path: 'second',
        element: <div>second</div>
      },
    ]
  },
]);