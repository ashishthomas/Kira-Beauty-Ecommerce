import React, { ButtonHTMLAttributes, ReactNode } from "react";
import "./Button.scss";

type ButtonVariant = "primary" | "secondary" | "outline" | "text";
type ButtonSize = "small" | "medium" | "large";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "medium",
  disabled = false,
  type = "button",
  className = "",
  isLoading = false,
  ...props
}) => {
  return (
    <button
      className={`button button--${variant} button--${size} ${
        isLoading ? "loading" : ""
      } ${className}`}
      onClick={onClick}
      disabled={disabled || isLoading}
      type={type}
      {...props}
    >
      {!isLoading ? children : <span style={{ opacity: 0 }}>{children}</span>}
    </button>
  );
};

export default Button;