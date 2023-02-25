import React, { ReactElement, FC, useState} from 'react';
import { ThemeContext, Theme } from './ThemeContext';

const currentTheme = localStorage.getItem('currentTheme') as Theme;

const ThemeProvider: FC<{children: ReactElement}> = ({ children }): ReactElement => {
  const [theme, setTheme] = useState<Theme>(currentTheme || Theme.DARK);

  return (
    <ThemeContext.Provider value={{
      theme,
      setTheme
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

