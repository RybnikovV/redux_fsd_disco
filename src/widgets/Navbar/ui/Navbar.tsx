import React from 'react'
import { clsNames } from 'shared/helpers/index';
import cls from './Navbar.module.scss';
import { routerPaths } from 'shared/config/routePaths/routePaths';
import { AppLink, AppLinkTheme } from 'shared/ui';
import { ThemeSwitcher } from 'shared/ui';

interface INavbarProps {
  className?: string; 
};

export const Navbar = (props: INavbarProps) => {
  const { className } = props;

  return (
    <div className={clsNames(cls.navbar, {}, [className])}>
      <div>
        LOGO
      </div>
      <div className='d-flex a-center'>
        <nav>
          {
            Object.entries(routerPaths)
              .filter(([_, value]) => value.showGlobalMenu)
              .map(([_, value]) => {
                return <AppLink 
                  to={value.path} 
                  className={cls['navbar__link-item']} 
                  theme={AppLinkTheme.INVERS}
                  key={value.path}>
                    {value.name}
                  </AppLink>
              })
          }
        </nav>
        <ThemeSwitcher className='margin_l-l'/>
      </div>
    </div>
  );
};
