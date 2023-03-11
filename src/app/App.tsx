import React, { Suspense } from 'react';
import './styles/index.scss';
import './styles/app.scss';
import { Outlet } from 'react-router-dom';
import { useTheme } from './providers/ThemeProvider';
import { clsNames } from 'shared/helpers';
import { Navbar } from 'widgets';

function App() {
  const { theme } = useTheme();

  return (
    <div className={clsNames('app',  {}, ['additionalClass', theme, 'testClass'])}>
      <Navbar/>

      <div>
        <Suspense fallback={<div>Загрузка...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  )
}

export default App