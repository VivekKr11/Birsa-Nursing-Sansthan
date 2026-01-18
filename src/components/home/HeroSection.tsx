import { ArrowRight, Award, Users, BookOpen, Newspaper, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const stats = [
  { icon: Users, value: "180+", label: "Students" },
  { icon: UserCheck, value: "15+", label: "Experienced Doctors" },
  { icon:  Newspaper, value: "15+", label: "in - News" },
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
        <div className="max-w-5xl">
          {/* Top Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 animate-fade-in-up"
            style={{ animationDelay: "0s" }}
          >
            <Award className="w-4 h-4 text-accent" />
            <span className="font-serif text-sm text-white/90 font-medium">
              A unit of Birsa Institute of Medical Sciences & Research
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span
              className="block text-transparent bg-clip-text p-3"
              style={{
                background: 
                  "linear-gradient(135deg, hsl(175, 60%, 55%) 0%, hsl(200, 70%, 60%) 50%, hsl(210, 60%, 70%) 100%)",
                WebkitBackgroundClip:  "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Birsa Nursing Sansthan
            </span>
          </h1>

          {/* Subheading */}
          <p
            className="font-serif text-lg md:text-xl text-white/80 max-w-2xl mb-10 animate-fade-in-up leading-relaxed"
            style={{ animationDelay: "0.2s" }}
          >
            Shaping healthcare professionals with excellence, innovation, and
            compassion. Discover a learning environment designed for future
            leaders in nursing.
          </p>

          {/* CTA Button */}
          <div
            className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              size="xl"
              asChild
              className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 transition-all shadow-lg font-serif font-semibold"
            >
              <Link to="/contact">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
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
                <span className="font-serif text-3xl font-bold text-white">
                  {stat. value}
                </span>
                <span className="font-serif text-base text-white/70 text-center">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;