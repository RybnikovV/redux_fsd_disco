import { useContext } from 'react';
import { Theme } from './ThemeContext';
import { ThemeContext } from './ThemeContext';

interface useThemeResult {
  changeTheme: () => void
  theme: Theme
};

export const useTheme = (): useThemeResult => {
  const {theme, setTheme} = useContext(ThemeContext);

  const changeTheme = (): void => {
    const newTheme = Theme.DARK === theme ? Theme.LIGHT : Theme.DARK;

    localStorage.setItem('currentTheme', newTheme);
    setTheme(newTheme);
  };

  return {changeTheme, theme}
};