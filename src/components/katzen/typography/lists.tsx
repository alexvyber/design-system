import { cn } from "cvax"

function Ul({ children, className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)} {...props}>
      {children}
    </ul>
  )
}

function Li({ children, className, ...props }: React.ComponentProps<"li">) {
  return (
    <li className={cn(className)} {...props}>
      {children}
    </li>
  )
}

export { Ul, Li }
