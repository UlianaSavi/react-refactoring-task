import type { ComponentPropsWithoutRef, ReactNode } from "react";

type TextProps = Omit<ComponentPropsWithoutRef<"p">, "children"> & {
  children: ReactNode;
};

export const Text = ({ children, ...props }: TextProps) => {
  return <p {...props}>{children}</p>;
};
