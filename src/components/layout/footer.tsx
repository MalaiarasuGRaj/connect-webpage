import Link from "next/link";
import { Logo } from "@/components/logo";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "../ui/button";

const navItems = [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ];

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 flex flex-col gap-4">
             <Link href="/" className="mr-6 flex items-center w-fit">
                <Logo />
            </Link>
            <p className="text-sm max-w-sm">
                Connect Training Solutions Pvt Ltd is dedicated to bridging the gap between academics and industry, empowering the next generation of professionals.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
                {navItems.map(item => (
                    <li key={item.label}>
                        <Link href={item.href} className="text-sm hover:text-primary transition-colors">
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Twitter">
                    <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
            <div className="mt-4 text-sm space-y-1">
                <p>Tirunelveli, Tamil Nadu</p>
                <p>contact@connecttrainings.com</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} Connect Training Solutions Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
