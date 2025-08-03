type ButtonProps = {
  children: React.ReactNode;
  variant?: "filled" | "outlined";
  size?: "sm" | "md" | "lg"; // <-- new
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
};

export default function Button({
  children,
  variant = "filled",
  size = "md",
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  let variantClasses = "";
  let sizeClasses = "";

  if (variant === "filled") {
    variantClasses =
      "bg-yellow-400 text-black hover:bg-primary-yellow border border-transparent";
  } else if (variant === "outlined") {
    variantClasses =
      "bg-transparent text-primary-yellow border border-primary-yellow hover:bg-primary-yellow hover:text-black";
  }

  if (size === "sm") {
    sizeClasses = "px-4 py-1 text-sm";
  } else if (size === "md") {
    sizeClasses = "px-6 py-2 text-base";
  } else if (size === "lg") {
    sizeClasses = "px-8 py-3 text-lg";
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-full font-medium transition duration-200 ${sizeClasses} ${variantClasses} ${className}`}
    >
      {children}
    </button>
  );
}
