import Link from "next/link";
import { Logo } from "@/components/logo";
import { Linkedin } from "lucide-react";
import { Button } from "../ui/button";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2 flex flex-col gap-6">
            <Link href="/" className="flex items-center w-fit">
              <Logo />
            </Link>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Connect Training Solutions Pvt Ltd is dedicated to bridging the gap between academics and industry, empowering the next generation of professionals.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-6 text-foreground">Quick Links</h3>
            <ul className="space-y-4">
              {navItems.map(item => (
                <li key={item.label}>
                  <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors hover:pl-2 duration-300 block">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-6 text-foreground">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <Button variant="outline" size="icon" className="rounded-full bg-white/5 border-white/10 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all duration-300" asChild>
                <a href="https://www.linkedin.com/company/connect-training-solutions-private-limited/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>Tirunelveli, Tamil Nadu</p>
              <p className="hover:text-foreground transition-colors cursor-pointer">+91 96009 65961</p>
              <p className="hover:text-foreground transition-colors cursor-pointer">contact@connecttrainings.com</p>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Connect Training Solutions Pvt Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

