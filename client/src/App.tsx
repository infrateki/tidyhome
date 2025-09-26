import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Switch, useLocation } from "wouter";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/home";
import Connect from "@/pages/connect";
import ConnectWithUs from "@/pages/connect-with-us";
import Contact from "@/pages/contact";
import About from "@/pages/about";
import Services from "@/pages/services";
import Portfolio from "@/pages/portfolio";
import FAQs from "@/pages/faqs";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";
import { initializeAnalytics, trackPageView } from "@/lib/analytics";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
});

function RouteTracker({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  useEffect(() => {
    // Track page views on route changes
    trackPageView(location, document.title);

    // Scroll to top when navigating to a new page
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
}

function App() {
  useEffect(() => {
    // Initialize GA4 on app load
    initializeAnalytics();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <RouteTracker>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/connect" component={Connect} />
            <Route path="/connect-with-us" component={ConnectWithUs} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/faqs" component={FAQs} />
            <Route component={NotFound} />
          </Switch>
        </RouteTracker>
        <Toaster />
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
