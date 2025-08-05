import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import PreWedding from "./pages/PreWedding";
import Candid from "./pages/Candid";
import Destination from "./pages/Destination";
import Teaser from "./pages/Teaser";
import Anniversary from "./pages/Anniversary";
import Birthday from "./pages/Birthday";
import Wedding from "./pages/Wedding";
import Cinematic from "./pages/Cinematic";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/pre-wedding" element={<PreWedding />} />
          <Route path="/services/candid" element={<Candid />} />
          <Route path="/services/destination" element={<Destination />} />
          <Route path="/services/teaser" element={<Teaser />} />
          <Route path="/services/anniversary" element={<Anniversary />} />
          <Route path="/services/birthday" element={<Birthday />} />
          <Route path="/services/wedding" element={<Wedding />} />
          <Route path="/services/cinematic" element={<Cinematic />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
