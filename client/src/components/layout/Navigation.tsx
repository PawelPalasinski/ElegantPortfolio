import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "/", label: "Strona główna" },
  { href: "/about", label: "O mnie" },
  { href: "/books", label: "Książki" },
  { href: "/upcoming", label: "Nadchodzące" },
  { href: "/contact", label: "Kontakt" },
  { href: "/gallery", label: "Galeria" }, // Added gallery link
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-800/50 backdrop-blur-md border-b border-gray-400/30"> {/* Updated Navigation Style */}
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <span className="text-2xl font-bold text-sky-500 cursor-pointer font-sans">Autor</span> {/* Updated Link Style */}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <span className={`hover:text-sky-500 transition-colors cursor-pointer font-sans ${
                location === link.href ? "text-sky-500" : "text-gray-300"
              }`}>
                {link.label}
              </span>
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
            className="md:hidden bg-gray-800 border-gray-400"
          >
            <div className="py-4 px-4 space-y-4">
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className={`block py-2 cursor-pointer font-sans ${
                      location === link.href ? "text-sky-500" : "text-gray-300"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navigation;