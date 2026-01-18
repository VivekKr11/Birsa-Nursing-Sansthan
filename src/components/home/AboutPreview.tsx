import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  "Comprehensive medical and nursing education under one umbrella",
  "Qualified faculty with strong academic and clinical backgrounds",
  "State-of-the-art infrastructure and modern learning facilities",
  "Strong emphasis on practical training and clinical exposure",
  "Commitment to ethical healthcare practices and patient-centered care",
  "Industry-aligned curriculum designed for future healthcare needs",
];

const AboutPreview = () => {
  return (
    <section className="py-24 lg:py-32 bg-card overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          
          {/* Image Side */}
          <div className="relative animate-fade-in-up">
            
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-elevated image-zoom">
              <img
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=800&q=80"
                alt="Medical students in laboratory"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-background rounded-xl p-6 shadow-card-hover  hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center">
                  <span className="text-2xl font-display font-bold text-white">10+</span>
                </div>
                <div>
                  <p className="font-display text-lg font-semibold text-foreground">
                    Advanced
                  </p>
                  <p className="text-muted-foreground">Laboratories</p>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -z-10 -top-8 -left-8 w-full h-full rounded-2xl bg-secondary/50" />
          </div>

          {/* Content Side */}
          <div className="animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              About Our University
            </span>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Building Tomorrow's Healthcare Leaders
            </h2>

            <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
              Our university is committed to delivering high-quality medical and
              nursing education through a modern, student-focused learning
              environment. We aim to prepare future healthcare professionals
              with the knowledge, skills, and values required to serve society.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              By integrating academic excellence with hands-on clinical
              exposure, we ensure that students gain practical insights alongside
              strong theoretical foundations from the very beginning of their
              educational journey.
            </p>

            {/* Features List */}
            <ul className="space-y-3 mb-10">
              {features.slice(0, 4).map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 animate-fade-in-up"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Button variant="hero" size="lg" asChild className="group">
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
