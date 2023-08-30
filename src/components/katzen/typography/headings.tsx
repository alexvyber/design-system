import { cn, cvax, VariantProps } from "cvax"

type Props = React.HTMLAttributes<HTMLElement> & {
  as?: keyof React.ReactHTML
}

const configs = {
  base: "",
  variants: {
    variant: {
      pageHeader:
        "text-2xl 2xs:text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-medium",
      h1: "text-2xl 2xs:text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-medium",
      h2: "font-furore text-[30px] 2xs:text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[64px]",
      h3: "text-[26px] font-medium",
      h4: "text-xl font-semibold tracking-tight",
    },
    size: {
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      default: "",
    },
    mode: {
      default: "text-night",
    },
  },
  defaultVariants: {
    mode: "default",
    size: "unset",
  } as const,
}

const variants = cvax(configs)

type HeadingsPropsWithVariants = Props & VariantProps<typeof variants>

function Headings({
  as: Component = "div",
  variant = "h2",
  className,
  size,
  ...props
}: HeadingsPropsWithVariants) {
  return <Component className={cn(variants({ variant, size, className }))} {...props} />
}

export { Headings, configs as headingsConfigs }
