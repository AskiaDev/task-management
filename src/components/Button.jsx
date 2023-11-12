import React from "react";
import { cls } from "../utils/helper";

const Button = ({ children, icon, onClick, className, type = 'button', variant = 'primary', size = 'normal', pill, disabled, ...props }) => {
  const classes = {
    base: "focus:outline-none transition ease-in-out duration-300",
    disabled: "opacity-50 cursor-not-allowed",
    pill: "rounded-full",
    size: {
      small: "px-2 py-1 text-sm",
      normal: "px-4 py-2",
      large: "px-8 py-3 text-lg"
    },
    variant: {
      primary:
        "bg-primary hover:bg-dark hover:text-primary hover:border hover:border-primary focus:ring-2 focus:ring-dark focus:ring-opacity-50 text-dark",
      secondary:
        "bg-dark text-primary focus:ring-2 focus:ring-dark focus:ring-opacity-50 hover:bg-lightDark  ",
      danger:
        "bg-red-500 hover:bg-red-800 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white"
    }
  };



  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={cls(`
    ${classes.base}
    ${classes.size[size]}
    ${classes.variant[variant]}
    ${pill && classes.pill}
    ${disabled && classes.disabled}
    ${className}
`)}
      {...props}>
      {icon} {children}
    </button>
  );
};

export default Button;
