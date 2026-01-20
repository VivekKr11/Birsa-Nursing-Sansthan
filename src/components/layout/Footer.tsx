import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="relative p-1 rounded-xl bg-white/90 shadow-lg transition-all duration-300 hover: bg-white">
                <img className="h-[65px]" src="./images/birsa-nursing-sansthan logo.webp" alt="BNS Logo" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold leading-tight">
                  Birsa Nursing
                </span>
                <span className="font-serif text-lg font-bold text-primary leading-tight" style={{ color: 'hsl(200, 70%, 55%)' }}>
                  Sansthan
                </span>
              </div>
            </Link>
            <p className="font-serif text-background/70 text-base leading-relaxed">
              Dedicated to excellence in nursing education, shaping compassionate and skilled healthcare professionals since <span className="font-mono">2024</span>.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about/about-us", label: "About Us" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link. href}>
                  <Link
                    to={link.href}
                    className="font-serif text-background/70 hover:text-background text-base transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-5">Our Courses</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/courses/anm"
                  className="font-serif text-background/70 hover:text-background text-base transition-colors duration-200"
                >
                  Auxiliary Nursing & Midwifery (ANM)
                </Link>
              </li>
              <li>
                <Link
                  to="/courses/gnm"
                  className="font-serif text-background/70 hover:text-background text-base transition-colors duration-200"
                >
                  General Nursing & Midwifery (GNM)
                </Link>
              </li>
              <li>
                <Link
                  to="/courses/bsc-nursing"
                  className="font-serif text-background/70 hover:text-background text-base transition-colors duration-200"
                >
                  B.Sc. Nursing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" style={{ color: 'hsl(200, 70%, 55%)' }} />
                <span className="font-serif text-background/70 text-base">
                  Village- Jiyarappa,  <br />
                  NH <span className="font-mono">75</span>, Khunti,<br />
                  Jharkhand
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" style={{ color: 'hsl(200, 70%, 55%)' }} />
                <a
                  href="tel:+918877880011"
                  className=" text-background/70 hover:text-background text-base transition-colors"
                >
                   06528- 220000 <br /> 9241200244
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" style={{ color: 'hsl(200, 70%, 55%)' }} />
                <a
                  href="mailto:info@birsanursing.edu"
                  className="font-serif text-background/70 hover:text-background text-base transition-colors"
                >
                  info@birsanursing.edu
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-serif text-background/60 text-base">
              © {new Date().getFullYear()} Birsa Nursing Sansthan.  All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy-policy" className="font-serif text-background/60 hover:text-background text-base transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="font-serif text-background/60 hover:text-background text-base transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;