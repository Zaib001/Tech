import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Globe, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import hamburger from "../svg/Vector (5).svg"
import search from "../svg/Vector (6).svg";
import web from "../svg/Group (3).svg";
import cross from "../svg/close-line-icon (1).svg"

const navigationItems = [
  { name: "Company", href: "/company" },
  { name: "Capabilities", href: "/capabilities" },
  { name: "Industries", href: "/industries" },
  { name: "Insight", href: "/insight" },
  { name: "Career", href: "/career" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 relative">
          {/* Desktop Navigation - absolutely centered */}
          <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-[16px] font-medium transition-all duration-200 relative group",
                  location.pathname === item.href
                    ? "text-white"
                    : "text-gray-300 hover:text-white",
                )}
              >
                {item.name}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full",
                    location.pathname === item.href && "w-full",
                  )}
                />
              </Link>
            ))}
          </nav>

          {/* Right side icons - search, web, and hamburger */}


          <div className="ml-auto flex items-center space-x-8">
            {/* Search Icon */}
            <img
              src={search} // Replace with your actual search icon path
              alt="Search"
              className="h-5 w-5 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => console.log("Search clicked")}
            />

            {/* Language Icon */}
            <img
              src={web} // Replace with your actual globe icon path
              alt="Language"
              className="h-5 w-5 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => console.log("Language clicked")}
            />

            {/* Menu Toggle Icon */}
            <img
              src={isMobileMenuOpen ? cross : hamburger} // Toggle icons
              alt="Toggle menu"
              className="h-6 w-6 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>

        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-white/10">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block px-3 py-2 text-base font-medium rounded-md transition-colors",
                    location.pathname === item.href
                      ? "text-white bg-white/10"
                      : "text-gray-300 hover:text-white hover:bg-white/5",
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-4 px-3 py-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-300 hover:text-white hover:bg-white/10"
                >
                  <Search className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-300 hover:text-white hover:bg-white/10"
                >
                  <Globe className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
