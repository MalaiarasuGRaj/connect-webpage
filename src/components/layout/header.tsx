"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/careers", label: "Careers" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <Link
      href={href}
      className={cn(
        "text-sm font-bold transition-colors hover:text-primary",
        pathname === href ? "text-primary" : "text-foreground"
      )}
      onClick={() => setIsMobileMenuOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
              <Link href="/" className="mr-6 flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                <Logo />
              </Link>
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <NavLink key={item.href} {...item} />
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <Link href="/" className="hidden md:flex items-center mr-auto">
          <Logo />
        </Link>

         <div className="flex items-center justify-center md:justify-start flex-1 md:flex-none">
          <Link href="/" className="flex items-center md:hidden">
            <Logo />
          </Link>
        </div>


        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <NavLink key={item.href} {...item} />
            ))}
          </nav>
           <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
        </div>
      </div>
    </header>
  );
}
