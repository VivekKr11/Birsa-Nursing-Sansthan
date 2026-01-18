import { GraduationCap, Microscope, Heart, Globe, Users, Award } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description: "Rigorous curriculum designed to meet global healthcare standards with emphasis on both theory and practical application.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=400&q=80",
  },
  {
    icon: Microscope,
    title: "Research Focus",
    description: "Opportunities to contribute to advancing medical knowledge through dedicated research facilities and mentorship.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=400&q=80",
  },
  {
    icon: Heart,
    title: "Patient-Centered Care",
    description: "Training that emphasizes empathy and compassionate practice, preparing students for holistic patient care.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&q=80",
  },
  {
    icon: Globe,
    title: "Global Opportunities",
    description: "Alumni serving in healthcare systems across the world, with international exposure and exchange programs.",
    image: "https://images.unsplash.com/photo-1559523182-a284c3fb7cff?auto=format&fit=crop&w=400&q=80",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description: "Learn from experienced clinicians and researchers who bring real-world expertise to the classroom.",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=400&q=80",
  },
  {
    icon: Award,
    title: "Recognized Excellence",
    description: "Nationally recognized programs with a track record of producing successful healthcare professionals.",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=400&q=80",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-subtle relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Sets Us Apart
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover the unique advantages of pursuing your healthcare education at the University of Medical Sciences.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 animate-fade-in-up card-hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                
                {/* Icon */}
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-primary/90 backdrop-blur-sm flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
