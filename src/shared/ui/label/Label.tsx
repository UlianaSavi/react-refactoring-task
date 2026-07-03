import type { ComponentPropsWithoutRef, ReactNode } from "react";

type LabelProps = Omit<ComponentPropsWithoutRef<"label">, "children"> & {
  children: ReactNode;
};

export const Label = ({ children, ...props }: LabelProps) => {
  return <label {...props}>{children}</label>;
};
