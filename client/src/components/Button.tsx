import { ButtonProps } from "../interfaces";

const themeKVP = {
  outline: 'bg-primary border-primary text-primary',
  primary: 'bg-primary border-primary text-white',

}

export default function Button({ type, className="", children, theme="primary", ...props }: ButtonProps) {
  return (
    <button
      {...props}
      type={type}
      className={`${className} whitespace-nowrap p-2 px-4 focus:shadow
      ${theme ? themeKVP[theme] : 'bg-primary border-primary'} 
      text-base font-normal outline-none flex items-center gap-1
      transition-all duration-300 border-solid`}>
      {children}
    </button>
  );
}
