type ButtonProps = {
  children: React.ReactNode;
  variant?: "filled" | "outlined";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
};

export default function Button({
  children,
  variant = "filled",
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  let variantClasses = "";

  if (variant === "filled") {
    variantClasses =
      "bg-yellow-400 text-black hover:bg-primary-yellow border border-transparent";
  } else if (variant === "outlined") {
    variantClasses =
      "bg-transparent text-primary-yellow border border-primary-yellow hover:bg-primary-yellow hover:text-black";
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-2 rounded-full font-medium text-base transition duration-200 ${variantClasses} ${className}`}
    >
      {children}
    </button>
  );
}
