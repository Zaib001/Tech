import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Description */}
          <div className="md:col-span-1">
            <p className="text-gray-300 text-sm leading-relaxed">
              Top IT Consulting Delivering
              <br />
              Custom Innovation Solutions
            </p>
          </div>

          {/* About us */}
          <div>
            <h3 className="text-white font-medium mb-6">About us</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/company"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Company
                </Link>
              </li>
              <li>
                <Link
                  to="/capabilities"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Capabilities
                </Link>
              </li>
              <li>
                <Link
                  to="/industries"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  to="/insights"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Insights
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Link
                  to="/careers"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Careers
                </Link>
                <Button
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-2 py-1 h-auto rounded"
                >
                  We're hiring
                </Button>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  to="/cookies"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Cookies
                </Link>
              </li>
              <li>
                <Link
                  to="/employees-alumni"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Employees & Alumni
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  to="/suppliers"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Suppliers
                </Link>
              </li>
              <li>
                <Link
                  to="/eeo"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  EEO
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-medium mb-6">Social Media</h3>
            <p className="text-gray-300 text-sm mb-4">
              Don't Miss to follow us on our social networks accounts
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-8 h-8 border border-gray-600 rounded flex items-center justify-center hover:border-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 border border-gray-600 rounded flex items-center justify-center hover:border-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 border border-gray-600 rounded flex items-center justify-center hover:border-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 border border-gray-600 rounded flex items-center justify-center hover:border-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 border border-gray-600 rounded flex items-center justify-center hover:border-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright - Full Width Border */}
      <div className="border-t border-gray-800 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-400 text-sm">
            2024 HighPoint Information Technology
          </p>
        </div>
      </div>
    </footer>
  );
}
