import React from "react";
import { Heart } from "lucide-react";
import { Link } from "wouter";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t mt-24 py-12 relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <Link href="/">
              <div className="inline-flex items-center cursor-pointer">
                <Logo className="h-10 w-auto text-primary" animate={false} />
              </div>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">
              Oficjalna strona Magdaleny Piorun, autorki książek fantasy i powieści młodzieżowych.
              Odkryj magiczne światy stworzone piórem pisarki z Krakowa.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-x-16 gap-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold mb-4">Nawigacja</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/">
                    <div className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                      Strona główna
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/books">
                    <div className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                      Książki
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <div className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                      O mnie
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/gallery">
                    <div className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                      Galeria
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-bold mb-4">Kontakt</h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground">
                  <a 
                    href="mailto:m.piorun@example.com" 
                    className="hover:text-primary transition-colors"
                  >
                    m.piorun@example.com
                  </a>
                </li>
                <li>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a 
                    href="https://tiktok.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    TikTok
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Magdalena Piorun. Wszelkie prawa zastrzeżone.
          </p>
          <p className="text-sm text-muted-foreground mt-4 md:mt-0 flex items-center">
            Strona stworzona z <Heart className="h-4 w-4 mx-1 text-red-500 fill-red-500" /> przez MoonTech Studio
          </p>
        </div>
      </div>
    </footer>
  );
}