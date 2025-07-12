import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/company"
            element={
              <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white flex items-center justify-center">
                <h1 className="text-4xl font-bold">
                  Company Page - Coming Soon
                </h1>
              </div>
            }
          />
          <Route
            path="/capabilities"
            element={
              <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white flex items-center justify-center">
                <h1 className="text-4xl font-bold">
                  Capabilities Page - Coming Soon
                </h1>
              </div>
            }
          />
          <Route
            path="/industries"
            element={
              <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white flex items-center justify-center">
                <h1 className="text-4xl font-bold">
                  Industries Page - Coming Soon
                </h1>
              </div>
            }
          />
          <Route
            path="/insight"
            element={
              <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white flex items-center justify-center">
                <h1 className="text-4xl font-bold">
                  Insight Page - Coming Soon
                </h1>
              </div>
            }
          />
          <Route
            path="/career"
            element={
              <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white flex items-center justify-center">
                <h1 className="text-4xl font-bold">
                  Career Page - Coming Soon
                </h1>
              </div>
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
