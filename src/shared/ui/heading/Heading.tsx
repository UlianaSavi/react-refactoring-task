import type { ComponentPropsWithoutRef, ReactNode } from "react";

type HeadingVariant = "h1" | "h2" | "h3";

type HeadingProps = Omit<ComponentPropsWithoutRef<"h1">, "children"> & {
  variant?: HeadingVariant;
  children: ReactNode;
};

export const Heading = ({ variant = "h1", children, ...props }: HeadingProps) => {
  const Tag = variant;
  return <Tag {...props}>{children}</Tag>;
};
