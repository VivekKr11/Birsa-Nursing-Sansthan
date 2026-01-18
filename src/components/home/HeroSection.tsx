import { ArrowRight, Award, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const stats = [
  { icon: BookOpen, value: "10+", label: "Academic Programs" },
  { icon: Users, value: "100+", label: "Expert Faculty & Mentors" },
  { icon: Award, value: "50+ Acres", label: "Integrated Campus" },

];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=2000&q=80"
          alt="Medical education campus"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215,35%,10%)]/90 via-[hsl(215,35%,10%)]/70 to-[hsl(215,35%,10%)]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(215,35%,10%)]/80 via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
      <div
        className="absolute bottom-1/4 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-soft"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-white/90">
              Admissions Open for 2026–27
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Shaping the Future of
            <span
              className="block mt-2 text-transparent bg-clip-text"
              style={{
                background:
                  "linear-gradient(135deg, hsl(175, 60%, 55%) 0%, hsl(200, 70%, 60%) 50%, hsl(210, 60%, 70%) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Healthcare Education
            </span>
          </h1>

          {/* Subheading */}
          <p
            className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 animate-fade-in-up leading-relaxed"
            style={{ animationDelay: "0.2s" }}
          >
            A modern institution committed to excellence in medical and nursing
            education, fostering innovation, ethical practice, and compassionate
            care from day one.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button variant="hero" size="xl" asChild className="shadow-glow">
              <Link to="/institutions">
                Explore Our Institutions
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>

            <Button
              size="xl"
              asChild
              className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 transition-all"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-3">
                  <stat.icon className="w-6 h-6 text-accent" />
                </div>
                <span className="font-display text-3xl font-bold text-white">
                  {stat.value}
                </span>
                <span className="text-sm text-white/70">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H0Z"
            fill="hsl(var(--card))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
