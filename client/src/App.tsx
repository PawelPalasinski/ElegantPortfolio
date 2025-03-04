import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Navigation from "@/components/layout/Navigation";
import Home from "@/pages/home";
import About from "@/pages/about";
import Books from "@/pages/books";
import Upcoming from "@/pages/upcoming";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";
import SimpleGallery from "@/components/SimpleGallery";
import { BackgroundImage } from "@/components/ui/background-image"; // Added import


function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/books" component={Books} />
      <Route path="/upcoming" component={Upcoming} />
      <Route path="/contact" component={Contact} />
      <Route path="/gallery" component={SimpleGallery} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen relative bg-background text-foreground">
        <BackgroundImage />
        <Navigation />
        <main className="pt-16">
          <Router />
        </main>
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;