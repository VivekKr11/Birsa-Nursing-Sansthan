import { ArrowRight, GraduationCap, BookOpen, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const courses = [
  {
    id: "anm",
    name: "Auxiliary Nursing & Midwifery (ANM)",
    icon: BookOpen,
    image: "/images/image3.jpeg",
    description: 
      "A duly INC Recognized 24-months program, producing quality ANM nurses placed across private and public sectors.",
    duration: "24 Months",
    intake: "60",
    highlights: ["INC Recognized", "Quality Training", "Job Placement", "Clinical Practice"],
    link: "/courses/anm",
    color:   "primary",
  },
  {
    id:   "gnm",
    name:   "General Nursing & Midwifery (GNM)",
    icon: GraduationCap,
    image: "/images/image5.jpeg",
    description:
      "A duly INC Recognized comprehensive three years program focusing on general nursing principles, patient care, and midwifery practices with hands-on clinical experience.",
    duration: "3 Years",
    intake: "60",
    highlights: ["INC Recognized", "Patient Care", "Midwifery Practice", "Clinical Experience"],
    link: "/courses/gnm",
    color: "accent",
  },
  {
    id: "bsc-nursing",
    name: "B.Sc. Nursing",
    icon: Award,
    image: "/images/image6.jpeg",
    description:
      "A duly INC Recognized four years degree program providing in-depth knowledge of nursing science, clinical practice, and healthcare management.",
    duration: "4 Years",
    intake:   "60",
    highlights:  ["INC Recognized", "Degree Program", "Healthcare Management", "Advanced Practice"],
    link: "/courses/bsc-nursing",
    color: "primary",
  },
];
        
const CoursesSection = () => {
  return (
    <section id="courses" className="py-12 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block font-serif text-sm font-bold text-accent uppercase tracking-wider mb-4">
            Our Courses
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive Nursing Programs
          </h2>
          <p className="font-serif text-muted-foreground text-lg">
            Discover our comprehensive range of nursing programs designed to prepare you for a successful career in healthcare.  
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {courses.map((course, index) => (
            <article
              key={course.id}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 animate-fade-in-up card-hover-lift flex flex-col"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Icon Badge */}
                <div
                  className={`absolute top-4 left-4 w-14 h-14 rounded-xl flex items-center justify-center ${
                    course.color === "primary"
                      ? "bg-primary/90 backdrop-blur-sm"
                      : "bg-accent/90 backdrop-blur-sm"
                  }`}
                >
                  <course.icon className="w-7 h-7 text-white" />
                </div>

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-sm">
                  <span className="font-serif text-xs font-semibold text-gray-900">
                    {course.duration}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 -mt-8 relative flex flex-col flex-1">
                <h3 className="font-serif text-xl font-bold text-foreground mb-3 leading-tight">
                  {course.name}
                </h3>
                <p className="font-serif text-muted-foreground mb-6 leading-relaxed text-base flex-1">
                  {course.description}
                </p>

                {/* Intake Info */}
                <div className="mb-6 p-4 rounded-lg bg-secondary/50 border border-border">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-base text-muted-foreground">Intake Capacity</span>
                    <span className="font-serif text-2xl font-bold text-foreground">
                      {course.intake}
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {course. highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-center gap-2 font-serif text-base text-foreground"
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          course.color === "primary" ?  "bg-primary" : "bg-accent"
                        }`}
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant={course.color === "primary" ? "default" : "accent"}
                  className="w-full group/btn font-serif font-semibold"
                  asChild
                >
                  <Link to={course.link}>
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn: translate-x-1" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-14">
          <p className="font-serif text-muted-foreground text-base mb-6">
            All programs are recognized by the Indian Nursing Council (INC) and affiliated with JNRC of Jharkhand. 
          </p>
          <Button variant="outline" size="lg" asChild className="group font-serif font-semibold">
            <Link to="/contact">
              Apply Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;