
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

export function Router() {
  return (
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
  );
}
