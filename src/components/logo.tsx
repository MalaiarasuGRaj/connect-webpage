import { cn } from "@/lib/utils"
import Image from "next/image"

export function Logo({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex items-center gap-1 font-bold text-primary font-headline", className)} {...props}>
      <Image 
        src="/images/logo.jpeg"
        alt="Connect Training Solutions Logo"
        width={32}
        height={32}
        className="rounded-md"
      />
      <span className="text-3xl leading-none">onnect</span>
    </div>
  )
}
