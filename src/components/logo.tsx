import { cn } from "@/lib/utils"
import Image from "next/image"

export function Logo({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex items-center gap-1 font-bold font-headline select-none", className)} {...props}>
      <Image
        src="/images/logo.jpeg"
        alt="Connect Training Solutions Logo"
        width={32}
        height={32}
        className="rounded-lg shadow-lg shadow-primary/20"
      />
      <span className="text-3xl leading-none tracking-tight text-primary">onnect</span>
    </div>
  )
}
