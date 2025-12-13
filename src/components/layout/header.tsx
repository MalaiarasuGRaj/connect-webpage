"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/careers", label: "Careers" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLink = ({ href, label, mobile = false }: { href: string; label: string, mobile?: boolean }) => (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-all duration-300 hover:text-primary relative group",
        mobile ? "text-lg py-2" : "",
        pathname === href ? "text-primary font-bold" : "text-muted-foreground"
      )}
    >
      {label}
      {!mobile && (
        <span className={cn(
          "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
          pathname === href ? "w-full" : ""
        )} />
      )}
    </Link>
  );

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "glass py-2" : "bg-transparent py-4"
    )}>
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Logo className="transition-transform duration-300 group-hover:scale-105" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink key={item.href} {...item} />
          ))}
          <Button asChild size="sm" className="ml-4 bg-primary hover:bg-primary/90 text-white rounded-full px-6 shadow-lg shadow-primary/25 transition-all hover:shadow-primary/40 hover:-translate-y-0.5">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] border-l border-white/10 bg-background/95 backdrop-blur-xl p-6">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <Logo />
                  <SheetClose asChild>
                    {/* Close logic handled by trigger or default close */}
                  </SheetClose>
                </div>
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <NavLink {...item} mobile />
                    </SheetClose>
                  ))}
                </div>
                <div className="mt-auto">
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg shadow-primary/25">
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
