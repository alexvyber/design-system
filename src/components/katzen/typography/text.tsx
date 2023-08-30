import { cn, cvax, VariantProps } from "cvax"
import React from "react"

const configs = {
  variants: {
    variant: {
      default: "text-xl",

      large: "text-2xl",
      subtle: "text-xl",
      small: "text-xs",
    },
    ghost: {
      true: "opacity-50",
    },
    hoverable: {
      true: "hover:opacity-100",
    },
    mode: {
      default: "text-night-900",
      dark: "text-black",
    },
    as: {} as Record<As, string>,
  },

  defaultVariants: {
    variant: "default",
    mode: "dark",
  } as const,

  compoundVariants: [
    {
      as: "label",
      className: ["select-none"],
    },
    // {
    // 	variant: "large",
    // 	className: "text-lg font-semibold",
    // },
    // {
    // 	variant: "small",
    // 	className: "text-sm font-medium ",
    // },
    // {
    // 	variant: "subtle",
    // 	className: "text-sm",
    // },
    // {
    // 	variant: "blockquote",
    // 	className: ["mt-6 border-l-2 border-neutral-300 pl-4 italic"],
    // },
  ],
}
const variants = cvax(configs)

type As =
  | "p"
  | "div"
  | "label"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "small"
  | "dd"
  | "dt"
  | "tr"
  | "th"
  | "span"
  | "blockquote"

type Variant = Omit<VariantProps<typeof variants>, "as">

function Text<T extends As>({
  as,
  className,
  variant = "default",
  ...props
}: { as: T } & React.ComponentProps<T> & Variant): React.ReactElement
function Text({
  as,
  className,
  variant = "default",
  ...props
}: { as?: undefined } & React.ComponentProps<"p"> & Variant): React.ReactElement
function Text<T extends As>({
  as,
  className,
  variant = "default",
  ...props
}: { as?: T } & React.ComponentProps<T> & Variant) {
  const Component = as || "p"

  return (
    // @ts-ignore I know better =))
    <Component className={cn(variants({ variant, className, as }))} {...props} />
  )
}

export { Text, variants as textVariants, configs as textConfigs }
