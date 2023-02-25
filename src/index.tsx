import { createRoot } from 'react-dom/client';
import React from 'react';
import { router } from './routes/router';
import {
  RouterProvider
} from 'react-router-dom';
import ThemeProvider from './theme/ThemeProvider';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);