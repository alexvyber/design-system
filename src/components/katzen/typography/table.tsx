import { cn } from "cvax"

export function Tr({ className, ...props }: React.ComponentPropsWithoutRef<"tr">) {
  return (
    <tr
      className={cn(
        // "border-t",
        "m-0 py-2 px-4 ",
        // "even:bg-night-50",
        className
      )}
      {...props}
    />
  )
}

export function Th({ className, ...props }: React.ComponentPropsWithoutRef<"th">) {
  return (
    <th
      className={cn(
        // "border",
        "px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  )
}

export function Td({ className, ...props }: React.ComponentPropsWithoutRef<"td">) {
  return (
    <td
      className={cn(
        "border-t border-neutral-200",
        "px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  )
}
