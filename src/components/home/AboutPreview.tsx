import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  "Recognized by the Indian Nursing Council (INC)",
  "Affiliated with JNRC of Jharkhand",
  "Experienced faculties with extensive healthcare backgrounds",
  "State-of-the-art modern facilities and infrastructure",
  "Integrated theoretical knowledge with practical training",
  "Environment conducive to academic excellence and professional growth",
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
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136? auto=format&fit=crop&w=800&q=80"
                alt="Medical students in laboratory"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-background rounded-xl p-6 shadow-card-hover hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center">
                  <span className=" text-2xl font-bold text-white">2024</span>
                </div>
                <div>
                  <p className="font-serif text-lg font-bold text-foreground">
                    Established
                  </p>
                  <p className=" text-base text-muted-foreground"><span className="font-serif  text-foreground">Since</span> 2024</p>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -z-10 -top-8 -left-8 w-full h-full rounded-2xl bg-secondary/50" />
          </div>

          {/* Content Side */}
          <div className="animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
            <span className="inline-block font-serif text-sm font-bold text-accent uppercase tracking-wider mb-4">
              Excellence in Nursing Education Since 2024
            </span>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Birsa Nursing Sansthan
            </h2>

            <p className="font-serif text-muted-foreground mb-6 leading-relaxed text-lg">
              BNS, a nursing training school located in the heart of Khunti
              District, offers high-quality nursing education under the
              prestigious BIMSR Group.  It is recognized by the Indian Nursing
              Council (INC) and affiliated with JNRC of Jharkhand. We are
              dedicated to producing skilled healthcare professionals. 
            </p>

            <p className="font-serif text-muted-foreground mb-6 leading-relaxed text-base">
              Our programs integrate theoretical knowledge with extensive
              practical training, delivered by experienced faculties duly
              supported by "state of art" modern facilities. This ensures that
              our graduates are well-prepared to meet the challenges of modern
              healthcare. 
            </p>

            <p className="font-serif text-muted-foreground mb-8 leading-relaxed text-base">
              Our Institute provides an environment conducive to academic
              excellence and professional growth. 
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
                  <span className="font-serif text-base text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Button variant="hero" size="lg" asChild className="group font-serif font-semibold">
              <Link to="/about/about-us">
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