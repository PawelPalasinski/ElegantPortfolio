import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { FernPattern } from "@/components/ui/fern-pattern";
import AnimatedBackground from "@/components/ui/animated-background";
import { Loader } from "@/components/ui/loader";
import Home from "@/pages/home";
import About from "@/pages/about";
import Books from "@/pages/books";
import Contact from "@/pages/contact";
import Gallery from "@/pages/gallery";
import NotFound from "@/pages/not-found";

// Importujemy style globalne
import "./styles/theme-variables.css";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/books" component={Books} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Symulacja ładowania strony
  useEffect(() => {
    // Możemy tutaj dodać dodatkową logikę ładowania zasobów
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Czas trwania loadera
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {/* Loader jest wyświetlany podczas ładowania */}
      {isLoading && <Loader />}
      
      <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
        {/* Tło obrazu */}
        <div className="fixed inset-0 z-0 bg-image-overlay"></div>
        <AnimatedBackground />
        <FernPattern />
        <Navigation />
        <main className="pt-16 relative z-10">
          <Router />
        </main>
        <Footer />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;