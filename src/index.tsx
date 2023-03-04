import { createRoot } from 'react-dom/client';
import React from 'react';
import { router } from './app/router/routes/router';
import {
  RouterProvider
} from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);