import { ArrowRight, Stethoscope, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const institutions = [
  {
    id: "bimsr",
    name: "Birsa Institute of Medical Sciences & Research",
    icon: Stethoscope,
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80",
    description:
      "Our flagship institution offering comprehensive medical education programs designed to produce skilled physicians and specialists with cutting-edge facilities and distinguished faculty.",
    programs: ["MBBS Program", "MD/MS Specializations", "Research Excellence", "Teaching Hospital"],
    link: "https://bimsr.com/",
    color: "primary",
  },
  {
    id: "nursing",
    name: "Birsa Nursing Sansthan",
    icon: HeartPulse,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    description:
      "Preparing compassionate and skilled nurses through comprehensive programs that blend theoretical knowledge with hands-on clinical experience for diverse healthcare roles.",
    programs: ["B.Sc Nursing", "GNM Program", "ANM Program", "Patient Care Focus"],
    link: "#",
    color: "accent",
  },
];
        
const InstitutionsSection = () => {
  return (
    <section id="institutions" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Our Institutions
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Two Pillars of Medical Excellence
          </h2>
          <p className="text-muted-foreground text-lg">
            The University of Medical Sciences operates two distinguished institutions, each dedicated to excellence in their respective domains of healthcare education.
          </p>
        </div>

        {/* Institution Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {institutions.map((institution, index) => (
            <article
              key={institution.id}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 animate-fade-in-up card-hover-lift"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={institution.image}
                  alt={institution.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Icon Badge */}
                <div
                  className={`absolute top-4 left-4 w-14 h-14 rounded-xl flex items-center justify-center ${
                    institution.color === "primary"
                      ? "bg-primary/90 backdrop-blur-sm"
                      : "bg-accent/90 backdrop-blur-sm"
                  }`}
                >
                  <institution.icon className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8 -mt-12 relative">
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  {institution.name}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {institution.description}
                </p>

                {/* Programs */}
                <ul className="grid grid-cols-2 gap-2 mb-8">
                  {institution.programs.map((program) => (
                    <li
                      key={program}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          institution.color === "primary" ? "bg-primary" : "bg-accent"
                        }`}
                      />
                      {program}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant={institution.color === "primary" ? "default" : "accent"}
                  className="w-full group/btn"
                  asChild
                >
                  <a href={institution.link} target="_blank" rel="noopener noreferrer">
                    Visit Website
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* Learn More Link */}
        <div className="text-center mt-14">
          <Button variant="outline" size="lg" asChild className="group">
            <Link to="/institutions">
              View All Institution Details
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstitutionsSection;
