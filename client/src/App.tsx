import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { Navigation } from "@/components/layout/Navigation";
import { FernPattern } from "@/components/ui/fern-pattern";
import AnimatedBackground from "@/components/ui/animated-background";
import Home from "@/pages/home";
import About from "@/pages/about";
import Books from "@/pages/books";
import Upcoming from "@/pages/upcoming";
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
      <Route path="/upcoming" component={Upcoming} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
        <AnimatedBackground />
        <FernPattern />
        <Navigation />
        <main className="pt-16 relative z-10">
          <Router />
        </main>
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;