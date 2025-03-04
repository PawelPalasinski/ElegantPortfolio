import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { Navigation } from "@/components/layout/Navigation";
import { FernPattern } from "@/components/ui/fern-pattern";
import Home from "@/pages/home";
import About from "@/pages/about";
import Books from "@/pages/books";
import Upcoming from "@/pages/upcoming";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/books" component={Books} />
      <Route path="/upcoming" component={Upcoming} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background text-foreground relative">
        <FernPattern />
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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Switch } from "wouter";
import { Suspense, lazy } from "react";
import { PageTransition } from "./components/ui/page-transition";

// Komponenty stron
const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const Books = lazy(() => import("./pages/books"));
const BookDetails = lazy(() => import("./pages/book-details"));
const Contact = lazy(() => import("./pages/contact"));
const Events = lazy(() => import("./pages/events"));
const Upcoming = lazy(() => import("./pages/upcoming"));

// Provider zapytań
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <Suspense fallback={<div className="flex h-screen items-center justify-center">Ładowanie...</div>}>
          <Switch>
            <Route path="/">
              <PageTransition>
                <Home />
              </PageTransition>
            </Route>
            <Route path="/about">
              <PageTransition>
                <About />
              </PageTransition>
            </Route>
            <Route path="/books">
              <PageTransition>
                <Books />
              </PageTransition>
            </Route>
            <Route path="/books/:id">
              {(params) => (
                <PageTransition>
                  <BookDetails id={params.id} />
                </PageTransition>
              )}
            </Route>
            <Route path="/contact">
              <PageTransition>
                <Contact />
              </PageTransition>
            </Route>
            <Route path="/events">
              <PageTransition>
                <Events />
              </PageTransition>
            </Route>
            <Route path="/upcoming">
              <PageTransition>
                <Upcoming />
              </PageTransition>
            </Route>
            <Route>
              <PageTransition>
                <div className="flex h-screen items-center justify-center">
                  <h1 className="text-4xl font-bold">404 - Nie znaleziono strony</h1>
                </div>
              </PageTransition>
            </Route>
          </Switch>
        </Suspense>
      </div>
    </QueryClientProvider>
  );
}
