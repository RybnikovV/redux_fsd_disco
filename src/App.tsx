import React, { Suspense } from 'react';
import 'reset-css';
import './styles/index.scss';
import { Link, Outlet } from 'react-router-dom';
import { useTheme } from './theme/useTheme';
import { clsNames } from './helpers/clsNames';

function App() {
  const { theme, changeTheme } = useTheme();

  return (
    <div className={clsNames({mainCls: 'app', additional: ['additionalClass', theme], mods: {kek: true, pek: false}})}>
      <nav>
        <ul>
          <li>
            <Link to={`/ `}>main</Link>
          </li>
          <li>
            <Link to={`about`}>about</Link>
          </li>
          <li>
            <Link to={`second`}>second</Link>
          </li>
          <li>
            <Link to={`smth`}>err</Link>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {changeTheme()}}>
        change theme
      </button>
      <div>smth text</div>
      <div>
        <Suspense fallback={<div>Загрузка...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  )
}

export default App