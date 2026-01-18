import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  {
    label: "Courses",
    dropdownItems: [
      { href: "/courses/anm", label: "ANM" },
      { href:  "/courses/gnm", label: "GNM" },
      { href: "/courses/bsc-nursing", label: "B.  Sc Nursing" },
    ],
  },
  {
    label: "About Us",
    dropdownItems: [
      { href: "/about/laboratory", label: "Laboratory" },
      { href: "/about/faculty", label: "Faculty" },
      { href: "/about/about-us", label: "About Us" },
      { href:   "/about/news-events", label: "News and Events" },
    ],
  },
  {
    label:   "Admission",
    dropdownItems: [
      { href:   "/admission/fee-structure", label: "Fee Structure" },
      { href:  "/admission/anti-ragging", label: "Anti Ragging" },
      { href: "/admission/admission", label: "Admission" },
    ],
  },
  { href: "/contact", label: "Contact Us" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window. addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileExpandedMenu(null);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const handleMobileMenuToggle = (label: string) => {
    setMobileExpandedMenu(mobileExpandedMenu === label ? null : label);
  };

  const isActiveLink = (link:   any) => {
    if (link.href) {
      return location.pathname === link.href;
    }
    if (link.dropdownItems) {
      return link.dropdownItems.some((item: any) => location.pathname === item.href);
    }
    return false;
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ?   "bg-card/95 backdrop-blur-md shadow-soft border-b border-border"
            :  "bg-transparent"
        )}
      >
        <nav className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group relative">
              <div className="relative p-1 rounded-xl bg-white/90 shadow-lg transition-all duration-300 group-hover:bg-white">
                <img
                  className="h-[65px]"
                  src="/images/birsa-nursing-sansthan logo.webp"
                  alt="Abhuday Logo"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                if (link.href) {
                  // Simple link without dropdown
                  return (
                    <Link
                      key={link.href}
                      to={link.href}
                      className={cn(
                        "font-serif px-4 py-2 rounded-lg text-base font-medium transition-colors duration-200",
                        location.pathname === link.href
                          ? "text-primary bg-secondary"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                } else {
                  // Dropdown link - HOVER ACTIVATED
                  return (
                    <div
                      key={link.label}
                      className="relative"
                      ref={(el) => (dropdownRefs.current[link.label] = el)}
                      onMouseEnter={() => setOpenDropdown(link.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <button
                        className={cn(
                          "font-serif px-4 py-2 rounded-lg text-base font-medium transition-colors duration-200 flex items-center gap-1",
                          isActiveLink(link)
                            ? "text-primary bg-secondary"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        )}
                      >
                        {link. label}
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 transition-transform duration-200",
                            openDropdown === link.label && "rotate-180"
                          )}
                        />
                      </button>

                      {/* Dropdown Menu */}
                      {openDropdown === link.label && (
                        <div className="absolute top-full left-0 w-56 bg-card/95 backdrop-blur-md shadow-lg rounded-lg border border-border py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                          {link.dropdownItems?.map((item) => (
                            <Link
                              key={item. href}
                              to={item.href}
                              className={cn(
                                "font-serif block px-4 py-2.5 text-base font-medium transition-colors duration-200",
                                location.pathname === item.href
                                  ?   "text-primary bg-secondary/50"
                                  :  "text-muted-foreground hover:text-foreground hover:bg-muted"
                              )}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Button variant="hero" size="default" asChild className="font-serif font-semibold">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2.5 rounded-xl bg-white shadow-lg hover:bg-gray-50 transition-all duration-200 hover:shadow-xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
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
          <div className="absolute top-0 right-0 w-[320px] h-full bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 shadow-2xl border-l border-gray-200 dark:border-gray-800 overflow-y-auto">
            <div className="flex flex-col min-h-full">
              {/* Header Space */}
              <div className="h-20 flex items-center justify-end px-6 border-b border-gray-200 dark:border-gray-800 sticky top-0 bg-white dark:bg-gray-900 z-10">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6 text-gray-900 dark:text-white" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-2 p-6 flex-1">
                {navLinks.map((link) => {
                  if (link.href) {
                    // Simple link without dropdown
                    return (
                      <Link
                        key={link.href}
                        to={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "font-serif px-5 py-4 rounded-xl text-base font-medium transition-all duration-200",
                          location.pathname === link.href
                            ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/30"
                            : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-md"
                        )}
                      >
                        {link.label}
                      </Link>
                    );
                  } else {
                    // Expandable dropdown link
                    return (
                      <div key={link.label} className="flex flex-col">
                        <button
                          onClick={() => handleMobileMenuToggle(link.label)}
                          className={cn(
                            "font-serif px-5 py-4 rounded-xl text-base font-medium transition-all duration-200 flex items-center justify-between",
                            isActiveLink(link)
                              ?  "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/30"
                              : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-md"
                          )}
                        >
                          <span>{link.label}</span>
                          <ChevronDown
                            className={cn(
                              "w-5 h-5 transition-transform duration-200",
                              mobileExpandedMenu === link.label && "rotate-180"
                            )}
                          />
                        </button>

                        {/* Expandable Menu Items */}
                        {mobileExpandedMenu === link.label && (
                          <div className="mt-2 ml-4 flex flex-col gap-1 animate-in slide-in-from-top-2 duration-200">
                            {link.dropdownItems?.map((item) => (
                              <Link
                                key={item.href}
                                to={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn(
                                  "font-serif px-5 py-3 rounded-lg text-base font-medium transition-all duration-200",
                                  location. pathname === item.href
                                    ?  "bg-gradient-to-r from-blue-500 to-blue-400 text-white shadow-md"
                                    : "text-gray-600 dark:text-gray-300 bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                                )}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }
                })}
              </nav>

              {/* CTA Button */}
              <div className="px-6 pb-6">
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full shadow-lg font-serif font-semibold"
                  asChild
                >
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get in Touch
                  </Link>
                </Button>
              </div>

              {/* Footer Info */}
              <div className="p-6 border-t border-gray-200 dark:border-gray-800">
                <p className="font-serif text-sm text-center text-gray-600 dark:text-gray-400">
                  © 2026 Birsa Nursing Sansthan
                </p>
                <p className="font-serif text-xs text-center text-gray-500 dark:text-gray-500 mt-1">
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