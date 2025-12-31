import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Profile from "./pages/Profile";
import RealEstate from "./pages/RealEstate";
import Wholesale from "./pages/Wholesale";
import Services from "./pages/Services";
import RawMaterials from "./pages/RawMaterials";
import FinancialAssets from "./pages/FinancialAssets";
import Insurance from "./pages/Insurance";
import DigitalGoods from "./pages/DigitalGoods";
import EnergyUtilities from "./pages/EnergyUtilities";
import Agriculture from "./pages/Agriculture";
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
          <Route path="/profile" element={<Profile />} />
          <Route path="/real-estate" element={<RealEstate />} />
          <Route path="/wholesale" element={<Wholesale />} />
          <Route path="/services" element={<Services />} />
          <Route path="/materials" element={<RawMaterials />} />
          <Route path="/financial-assets" element={<FinancialAssets />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/digital-goods" element={<DigitalGoods />} />
          <Route path="/energy-utilities" element={<EnergyUtilities />} />
          <Route path="/agriculture" element={<Agriculture />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
