import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, lazy } from "react";
import { Toaster } from "./components/ui/toaster";
import { Navigation } from "./components/layout/Navigation";
import { FernPattern } from "./components/ui/background-image";
import { Router } from "./Router";

const queryClient = new QueryClient();

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