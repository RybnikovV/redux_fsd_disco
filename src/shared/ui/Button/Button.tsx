import React, { FC, ButtonHTMLAttributes } from 'react';
import { clsNames } from 'shared/helpers/index';
import cls from './Button.module.scss';

export enum ButtonTheme {
  INVERS = 'invers',
  MAIN = '',
  CLEAR = 'clear',
};

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>
  theme?: ButtonTheme
};

export const Button: FC<IButtonProps> = (props) => {
  const {
    className,
    children,
    onClick,
    theme = ButtonTheme.MAIN,
    ...otherProps
   } = props;

  return (
    <button
      className={clsNames(cls.button, {}, [cls[theme], className])}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  );
};