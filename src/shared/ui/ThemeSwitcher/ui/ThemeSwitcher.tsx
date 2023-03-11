import React, { FC } from 'react';
import { clsNames } from '../../../helpers';
import cls from './ThemeSwitcher.module.scss';
import { Button, ButtonTheme } from '../../Button/Button';
import ThemeDark from 'shared/assets/icons/svg/theme-dark.svg';
import ThemeLight from 'shared/assets/icons/svg/theme-light.svg';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { useTheme } from 'app/providers/ThemeProvider';

interface IThemeSwitcherProps {
  className?: string;
};

export const ThemeSwitcher: FC<IThemeSwitcherProps> = (props) => {
  const { 
    className,
   } = props;
  const { theme, changeTheme } = useTheme();

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={clsNames(cls.themeSwitcher, {}, [className])}
      onClick={() => changeTheme()}>
      {theme === Theme.DARK ? <ThemeDark /> : <ThemeLight />}
    </Button>
  );
};