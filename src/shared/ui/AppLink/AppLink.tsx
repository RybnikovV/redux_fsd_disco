import React, { FC } from 'react';
import { clsNames } from 'shared/helpers/index';
import cls from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';

export enum AppLinkTheme {
  INVERS = 'invers',
  MAIN = '',
};

interface IAppLinkProps extends LinkProps {
  className?: string;
  children?: React.ReactNode;
  theme?: AppLinkTheme;
};

export const AppLink: FC<IAppLinkProps> = (props) => {
  const { 
    className,
    children,
    to,
    theme = AppLinkTheme.INVERS,
    ...otherProps
   } = props;

  return (
    <Link 
      className={clsNames(cls.appLink, {}, [cls[theme], className])} 
      to={to}
      {...otherProps}
      >
      {children}
    </Link>
  );
};