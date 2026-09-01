import { type ReactNode, useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingSocial } from '@/components/FloatingSocial';
import HomePage from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ServicesPage } from '@/pages/ServicesPage';
import { WorkPage } from '@/pages/WorkPage';
import { PackagesPage } from '@/pages/PackagesPage';
import { InternshipsPage } from '@/pages/InternshipsPage';
import { ContactPage } from '@/pages/ContactPage';
import NotFound from '@/pages/not-found';

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return null;
}

function AnimatedPage({ children }: { children: ReactNode }) {
  const [displayedChildren, setDisplayedChildren] = useState(children);
  const [stage, setStage] = useState<'visible' | 'fading'>('visible');

  useEffect(() => {
    if (children !== displayedChildren) {
      setStage('fading');
      const timer = setTimeout(() => {
        setDisplayedChildren(children);
        setStage('visible');
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [children, displayedChildren]);

  return (
    <div
      className={`transition-all duration-300 ease-out ${
        stage === 'visible' ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
      }`}
    >
      {displayedChildren}
    </div>
  );
}

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="page-shell noise relative min-h-[100dvh] w-full overflow-x-hidden">
      <Header />
      <main className="w-full min-h-[calc(100dvh-68px)] overflow-x-hidden">
        <AnimatedPage>{children}</AnimatedPage>
      </main>
      <Footer />
      <FloatingSocial />
    </div>
  );
}

function Home() {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}

function About() {
  return (
    <Layout>
      <AboutPage />
    </Layout>
  );
}

function Services() {
  return (
    <Layout>
      <ServicesPage />
    </Layout>
  );
}

function Work() {
  return (
    <Layout>
      <WorkPage />
    </Layout>
  );
}

function Packages() {
  return (
    <Layout>
      <PackagesPage />
    </Layout>
  );
}

function Internships() {
  return (
    <Layout>
      <InternshipsPage />
    </Layout>
  );
}

function Contact() {
  return (
    <Layout>
      <ContactPage />
    </Layout>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/services/:serviceId" component={Services} />
      <Route path="/work" component={Work} />
      <Route path="/work/:projectId" component={Work} />
      <Route path="/packages" component={Packages} />
      <Route path="/internships" component={Internships} />
      <Route path="/internships/:internshipId" component={Internships} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <ScrollToTop />
          <RoutedErrorBoundary>
            <Router />
          </RoutedErrorBoundary>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
