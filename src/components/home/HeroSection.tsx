import { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const slides = [
  {
     image: "/images/hero1.avif",
    badge: "INC Recognized Programs",
    title: "Birsa Nursing Sansthan",
    subtitle: "Shaping healthcare professionals with excellence, innovation, and compassion.  Discover a learning environment designed for future leaders in nursing.",
    highlight: "Birsa Nursing Sansthan",
  },
  {
     image: "/images/hero2.avif",
    badge: "Quality Education Since 2024",
    title: "Empowering Future Nurses",
    subtitle: "Join our comprehensive nursing programs – ANM, GNM, and B.Sc.  Nursing. Experience world-class education with modern facilities and expert faculty committed to your success.",
    highlight: "Empowering Future Nurses",
  },
  {
     image: "/images/hero3.avif",
    badge: "Excellence in Healthcare Education",
    title: "Your Career Begins Here",
    subtitle:  "State-of-the-art laboratories, experienced faculty, and hands-on clinical training. Transform your passion for healthcare into a rewarding nursing career with us.",
    highlight: "Your Career Begins Here",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slides
  useEffect(() => {
    if (! isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Images Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215,35%,10%)]/90 via-[hsl(215,35%,10%)]/70 to-[hsl(215,35%,10%)]/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(215,35%,10%)]/80 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
      <div
        className="absolute bottom-1/4 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-soft"
        style={{ animationDelay: "1s" }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className="max-w-5xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 animate-fade-in-up"
            key={`badge-${currentSlide}`}
          >
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="font-serif text-sm font-semibold text-white">
              {slides[currentSlide].badge}
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
            key={`title-${currentSlide}`}
          >
            <span
              className="block text-transparent bg-clip-text p-3"
              style={{
                background: 
                  "linear-gradient(135deg, hsl(175, 60%, 55%) 0%, hsl(200, 70%, 60%) 50%, hsl(210, 60%, 70%) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {slides[currentSlide].highlight}
            </span>
          </h1>

          {/* Subheading */}
          <p
            className="font-serif text-lg md:text-xl text-white/90 max-w-3xl mb-10 animate-fade-in-up leading-relaxed"
            style={{ animationDelay: "0.2s" }}
            key={`subtitle-${currentSlide}`}
          >
            {slides[currentSlide].subtitle}
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
            style={{ animationDelay:  "0.3s" }}
          >
            <Button
              size="xl"
              asChild
              className="bg-gradient-to-r from-primary to-accent text-white hover:from-primary/90 hover:to-accent/90 transition-all shadow-lg font-serif font-semibold"
            >
              <Link to="/admission/admission">
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="xl"
              asChild
              className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 transition-all shadow-lg font-serif font-semibold"
            >
              <Link to="/about/about-us">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Hidden on Mobile */}
      <button
        onClick={prevSlide}
        className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "w-12 h-3 bg-white"
                : "w-3 h-3 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;