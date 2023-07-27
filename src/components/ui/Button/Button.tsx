import { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

const button = tv({
  base: "rounded bg-zinc-200 px-4 py-1.5 text-sm font-medium text-emerald-600 hover:bg-zinc-500",
  variants: {
    contained: {
      default: "",
      primary: "bg-primary-100 hover:bg-blue-700",
      secondary: "bg-purple-500 hover:bg-purple-700",
      success: "bg-green-500 hover:bg-green-700",
      error: "bg-red-500 hover:bg-red-700",
    },
    size: {
      default: "h-10, px-4",
      sm: "h-8 px-3",
      xs: "h-6 px-2 text-xs",
    },
  },
  defaultVariants: {
    contained: "default",
    size: "default",
  },
});

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof button> & {
    type?: "button" | "submit";
  };

export function Button({
  contained,
  size,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button type={type} className={button({ contained, size })} {...props}>
      Button
    </button>
  );
}
