import { FC, ButtonHTMLAttributes } from "react";

import { Loader } from "./Loader";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export const Button: FC<IButtonProps> = ({ children, isLoading }) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded min-h-10">
      {isLoading ? <Loader /> : children}
    </button>
  );
};
