import NextLink from "next/link"
import { cn } from "cvax"

export function Link({ className, ...props }: React.ComponentProps<typeof NextLink>) {
  return (
    <NextLink
      className={cn(
        "text-primary-700 hover:text-primary-500",
        "font-medium underline  underline-offset-4 ",
        className
      )}
      {...props}
    />
  )
}
