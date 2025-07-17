import "./global.css";
import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Joinus from "./components/Joinus";
import Company from "./pages/Company";
import NotFound from "./pages/NotFound";
import ApplicationMigration from "./pages/ApplicationMigration";
import ApplicationDevelopment from "./pages/ApplicationDevelopment";
import ApplicationTransformation from "./pages/ApplicationTransformation";
import ApplicationIntegration from "./pages/Applicationintegration";
import CloudOperation from "./pages/CloudOperation";
import CloudMigration from "./pages/CloudMigration";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/2" element={<ApplicationMigration />} />
              <Route path="/3" element={<ApplicationDevelopment />} />
              <Route path="/4" element={<ApplicationTransformation />} />
              <Route path="/5" element={<ApplicationIntegration />} />
              <Route path="/6" element={<CloudOperation />} />
              <Route path="/7" element={<CloudMigration />} />
              <Route path="/" element={<Company />} />
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
          </main>
          <Joinus />
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
