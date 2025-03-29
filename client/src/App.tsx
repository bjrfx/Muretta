import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { useEffect, lazy, Suspense } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import NotFound from "@/pages/not-found";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { registerServiceWorker } from "./lib/utils";
import { AuthProvider } from "./lib/auth";

// Lazy load pages for better performance
const Home = lazy(() => import("@/pages/Home"));
const Contact = lazy(() => import("@/pages/Contact"));
const Projects = lazy(() => import("@/pages/Projects"));
const Services = lazy(() => import("@/pages/Services"));
const ProjectDetail = lazy(() => import("@/pages/projects/[id]"));
const SIP = lazy(() => import("@/pages/structural/SIP"));
const CSF = lazy(() => import("@/pages/structural/CSF"));
const Timber = lazy(() => import("@/pages/structural/Timber"));
const WPC = lazy(() => import("@/pages/cladding/WPC"));
const Aluminum = lazy(() => import("@/pages/cladding/Aluminum"));
const Terracotta = lazy(() => import("@/pages/cladding/Terracotta"));
const SolarGreenhouse = lazy(() => import("@/pages/SolarGreenhouse"));
const Prefabs = lazy(() => import("@/pages/Prefabs"));
const About = lazy(() => import("@/pages/About"));
const Auth = lazy(() => import("@/pages/admin/Auth"));
const Dashboard = lazy(() => import("@/pages/admin/Dashboard"));

// Loading component for suspense fallback
const PageLoading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-pulse text-primary font-semibold">Loading...</div>
  </div>
);

function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}

function App() {
  useEffect(() => {
    // Register service worker for PWA capabilities
    registerServiceWorker();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider defaultTheme="light" storageKey="muretta-theme">
        <div className="flex flex-col min-h-screen">
          <Header />
          <ScrollToTop />
          <main className="flex-grow">
            <Suspense fallback={<PageLoading />}>
              <Switch>
                <Route path="/" component={Home} />
                <Route path="/contact" component={Contact} />
                <Route path="/projects" component={Projects} />
                <Route path="/prefab-models" component={Projects} />
                <Route path="/projects/:id" component={ProjectDetail} />
                <Route path="/structural/sip" component={SIP} />
                <Route path="/structural/csf" component={CSF} />
                <Route path="/structural/timber" component={Timber} />
                <Route path="/cladding/wpc" component={WPC} />
                <Route path="/cladding/aluminum" component={Aluminum} />
                <Route path="/cladding/terracotta" component={Terracotta} />
                <Route path="/solar-greenhouse" component={SolarGreenhouse} />
                <Route path="/prefabs" component={Prefabs} />
                <Route path="/services" component={Services} />
                <Route path="/about" component={About} />
                <Route path="/admin" component={Auth} />
                <Route path="/admin/dashboard" component={Dashboard} />
                <Route component={NotFound} />
              </Switch>
            </Suspense>
          </main>
          <Footer />
          <Toaster />
        </div>
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
