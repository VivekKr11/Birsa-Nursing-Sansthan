import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import About from "./pages/About";
import Institutions from "./pages/Institutions";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ANM from "./components/Courses/ANM";
import GNM from "./components/Courses/GNM";
import BScNursing from "./components/Courses/BScNursing";
import Laboratory from "./About Us/Laboratory";
import AboutUs from "./About Us/AboutUs";
import FeeStructure from "./Admission/FeeStructure";
import AntiRagging from "./Admission/AntiRagging";
import Admission from "./Admission/Admission";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/institutions" element={<Institutions />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/courses/anm" element={<ANM />} />
             <Route path="/courses/gnm" element={<GNM />} />
             <Route path="/courses/bsc-nursing" element={<BScNursing />} />
             <Route path="/about/laboratory" element={<Laboratory />} />
             <Route path="/about/about-us" element={<AboutUs />} />
             <Route path="/admission/fee-structure" element={<FeeStructure />} />
             <Route path="/admission/anti-ragging" element={<AntiRagging />} />
             <Route path="admission/admission" element={<Admission />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
