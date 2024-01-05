import { ReactNode } from "react";

const themeKVP = {
  dark: 'black',
  primary: 'primary',
  light: 'light'
}

export function Title({ children, className, leading, small, theme, center = true }:
  {
    children: ReactNode | ReactNode[],
    className?: string,
    leading?: boolean,
    theme?: 'dark' | 'primary' | 'light' | 'primary',
    small?: boolean,
    center?: boolean
  }) {
  return (
    <div className={`
    ${leading ? 'lg:text-5xl text-3xl !leading-[60px]' : small ? ' text-xl lg:text-2xl' : 'text-2xl lg:text-3xl'} 
    ${small ? 'font-semibold' : 'font-black'}
    ${theme ? `text-${themeKVP[theme]}` : 'text-light'}
    ${theme === 'primary' ? 'text-primary' : theme === 'dark' ? 'text-black' : 'text-light'} 
    ${center ? 'text-center' : ''}
      ${className}`}>
      {children}
    </div>
  );
}
