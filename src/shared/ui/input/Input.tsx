import type { ComponentPropsWithoutRef } from "react";

type InputProps = ComponentPropsWithoutRef<"input">;

export const Input = (props: InputProps) => {
  return <input {...props} />;
};
