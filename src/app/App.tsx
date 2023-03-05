import React, { Suspense } from 'react';
import 'reset-css';
import './styles/index.scss';
import { Link, Outlet } from 'react-router-dom';
import { useTheme } from './providers/ThemeProvider';
import { clsNames } from 'shared/helpers';
import { Navbar } from 'widgets';

function App() {
  const { theme, changeTheme } = useTheme();

  return (
    <div className={clsNames('app',  {kek: true, pek: false}, ['additionalClass', theme])}>
      <Navbar/>
      <button
        onClick={() => {changeTheme()}}>
        change theme
      </button>
      <div>
        <Suspense fallback={<div>Загрузка...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  )
}

export default App