import { FC, ButtonHTMLAttributes, useMemo } from "react";

import { Loader } from "./Loader";
import Link from "next/link";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  href?: string;
}

export const Button: FC<IButtonProps> = ({
  children,
  isLoading,
  href,
  ...props
}) => {
  const btn = useMemo(
    () => (
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded min-h-10"
        {...props}
      >
        {isLoading ? <Loader /> : children}
      </button>
    ),
    [children, isLoading, props]
  );

  if (href) {
    return <Link href={href}>{btn}</Link>;
  }
  return btn;
};
