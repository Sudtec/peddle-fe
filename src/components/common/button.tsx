import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
};

const Button = ({
  children,
  className,
  onClick,
  disabled,
  loading,
  type = "button",
}: ButtonProps) => {
  return (
    <button
      className={`main-btn-primary disabled:opacity-50 ${className} ${
        loading ? "cursor-progress" : ""
      }`}
      onClick={onClick}
      disabled={disabled || loading}
      type={type}
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.009 8.009 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {children}
    </button>
  );
};

export default Button;
