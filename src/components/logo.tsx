import { cn } from "@/lib/utils"
import Image from "next/image"

export function Logo({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex items-center gap-2 font-bold text-primary font-headline", className)} {...props}>
      <Image 
        src="/images/logo.jpeg"
        alt="Connect Training Solutions Logo"
        width={32}
        height={32}
        className="rounded-md"
      />
      <div className="flex flex-col">
        <span className="text-lg leading-tight">Connect</span>
        <span className="text-xs leading-tight">Training Solutions</span>
      </div>
    </div>
  )
}
