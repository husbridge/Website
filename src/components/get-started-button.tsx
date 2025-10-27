import Link from "next/link";
import React from "react";
import Button from "./button";

export default function GetStartedButton({
  variant,
  className,
  customLink,
}: {
  variant?: "filled" | "outlined" | undefined;
  className?: string;
  customLink?: string;
}) {
  return (
    <Link href={customLink || "https://app.husridge.com/welcome"}>
      <Button variant={variant} className={className}>
        Get Started
      </Button>
    </Link>
  );
}
