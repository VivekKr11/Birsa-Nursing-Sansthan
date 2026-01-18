import { Link } from "react-router-dom";
import { GraduationCap, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="relative p-1 rounded-xl bg-white/90 shadow-lg transition-all duration-300 group-hover:bg-white">
              <img className="h-[65px]" src="/images/abhuday logo.png" alt="Abhuday Logo" />
            </div>
              <div className="flex flex-col">
                <span className="font-display text-base font-semibold leading-tight">
                  Abhyuday 
                </span>
                <span className="font-display text-base font-semibold text-primary leading-tight" style={{ color: 'hsl(200, 70%, 55%)' }}>
                  Seva Sansthan
                </span>
              </div>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Dedicated to excellence in medical and nursing education, shaping the future of healthcare professionals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/institutions", label: "Our Institutions" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-background text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Institutions */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-5">Our Institutions</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://bimsr.com/"
                  className="text-background/70 hover:text-background text-sm transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Birsa Institute of Medical Sciences & Research
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-background/70 hover:text-background text-sm transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Birsa Nursing Sansthan
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" style={{ color: 'hsl(200, 70%, 55%)' }} />
                <span className="text-background/70 text-sm">
                 Village- Jiyarappa,  <br />
                  NH 75, Khunti,<br />
                  Jharkhand
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" style={{ color: 'hsl(200, 70%, 55%)' }} />
                <a
                  href="tel:+918877880011"
                  className="text-background/70 hover:text-background text-sm transition-colors"
                >
                  +91 8877880011
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" style={{ color: 'hsl(200, 70%, 55%)' }} />
                <a
                  href="mailto:info@university.edu"
                  className="text-background/70 hover:text-background text-sm transition-colors"
                >
                  info@university.edu
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © {new Date().getFullYear()} Abhyuday Seva Sansthan. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
