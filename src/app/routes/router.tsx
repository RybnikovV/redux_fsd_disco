import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { ErrorPage } from 'pages/Error';
import { AboutPage } from 'pages/About';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    //Error компонент не работает с lazy
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'about',
        element: <AboutPage />,
      }, {
        path: 'second',
        element: <div>second</div>
      },
    ]
  },
]);