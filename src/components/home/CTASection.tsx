import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/image4.jpeg"
          alt="Medical campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215,35%,10%)]/95 via-[hsl(215,35%,10%)]/85 to-[hsl(215,35%,10%)]/75" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-sm font-bold text-accent uppercase tracking-wider mb-6 animate-fade-in">
            Start Your Journey
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-8 animate-fade-in-up leading-tight" style={{ animationDelay: '0.1s' }}>
            Begin Your Journey in Nursing Excellence
          </h2>
          <p className="font-serif text-lg md:text-xl lg:text-2xl text-white/90 mb-6 max-w-3xl mx-auto animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Join our community of dedicated nursing professionals.  Whether you aspire to pursue ANM, GNM, or B.Sc Nursing, we have the right program for you.  Birsa Nursing Sansthan offers a supportive learning environment where students can develop their skills and pursue meaningful careers in healthcare.
          </p>
          <p className="font-serif text-base md:text-lg text-white/80 mb-12 max-w-2xl mx-auto animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.3s' }}>
            Our INC recognized programs and comprehensive admissions process are designed to identify students who demonstrate academic potential and the dedication required for success in nursing professions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="xl" asChild className="shadow-glow font-semibold">
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button 
              size="xl" 
              asChild
              className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 transition-all font-semibold"
            >
              <Link to="/about/about-us">About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;