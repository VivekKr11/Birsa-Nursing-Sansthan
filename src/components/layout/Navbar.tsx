import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href:  "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/institutions", label:  "Institutions" },
  { href: "/contact", label:   "Contact Us" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window. scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style. overflow = "hidden";
    } else {
      document.body. style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-card/95 backdrop-blur-md shadow-soft border-b border-border"
            : "bg-transparent"
        )}
      >
        <nav className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group relative">
              <div className="relative p-1 rounded-xl bg-white/90 shadow-lg transition-all duration-300 group-hover:bg-white">
                <img
                  className="h-[65px]"
                  src="/images/abhuday logo.png"
                  alt="Abhuday Logo"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks. map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
                    location.pathname === link. href
                      ? "text-primary bg-secondary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Button variant="hero" size="default" asChild>
                <Link to="/institutions">
                <a>Explore Institutions</a>
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button - Only this has white background now */}
            <button
              className="lg:hidden p-2.5 rounded-xl bg-white shadow-lg hover:bg-gray-50 transition-all duration-200 hover:shadow-xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ?  (
                <X className="w-6 h-6 text-gray-900" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[9999] lg:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Panel - Full Height */}
          <div className="absolute top-0 right-0 w-[320px] h-full bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 shadow-2xl border-l border-gray-200 dark:border-gray-800">
            <div className="flex flex-col h-full">
              {/* Header Space */}
              <div className="h-20 flex items-center justify-end px-6 border-b border-gray-200 dark:border-gray-800">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6 text-gray-900 dark:text-white" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-2 p-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "px-5 py-4 rounded-xl text-base font-medium transition-all duration-200",
                      location.pathname === link.href
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                        : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-md"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* CTA Button */}
              <div className="px-6 mt-4">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full shadow-lg" 
                  asChild
                >
                  <Link to="/institutions">
                  <a 
                    
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Explore Institutions
                  </a>
                  </Link>
                </Button>
              </div>

              {/* Footer Info */}
              <div className="mt-auto p-6 border-t border-gray-200 dark:border-gray-800">
                <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                  © 2026 Abhuday
                </p>
                <p className="text-xs text-center text-gray-500 dark:text-gray-500 mt-1">
                  All rights reserved. 
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;