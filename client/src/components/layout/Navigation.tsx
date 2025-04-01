import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Logo } from "@/components/ui/logo";

const links = [
  { href: "/", label: "Strona główna" },
  { href: "/about", label: "O mnie" },
  { href: "/books", label: "Książki" },
  { href: "/gallery", label: "Galeria" },
  { href: "/contact", label: "Kontakt" }
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <Logo className="h-10 w-auto text-primary" animate={false} />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <div className={`hover:text-primary transition-colors cursor-pointer ${
                location === link.href ? "text-primary" : "text-muted-foreground"
              }`}>
                {link.label}
              </div>
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
          >
            <div className="py-4 px-4 space-y-4 bg-background border-b">
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  <div
                    className={`block py-2 cursor-pointer ${
                      location === link.href ? "text-primary" : "text-muted-foreground"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}