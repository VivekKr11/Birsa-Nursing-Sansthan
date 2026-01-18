import {
  Users,
  GraduationCap,
  FlaskConical,
  TrendingUp,
  Quote,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "180+",
    label: "Students Enrolled",
    color: "primary",
  },
  {
    icon: GraduationCap,
    value: "10+",
    label: "Experienced Faculty",
    color: "accent",
  },
  {
    icon: FlaskConical,
    value: "7+",
    label: "Advanced Labs",
    color: "primary",
  },
  {
    icon: TrendingUp,
    value: "100%",
    label: "Placement Assistance",
    color: "accent",
  },
];

const FounderSection = () => {
  return (
    <section className="relative py-12 bg-gradient-to-b from-background via-card to-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">

        {/* ================= Stats Section ================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-24">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative rounded-2xl p-8 text-center backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 mx-auto mb-5 rounded-xl flex items-center justify-center ${
                  stat.color === "primary"
                    ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
                    : "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white"
                } transition-all duration-300`}
              >
                <stat.icon className="w-8 h-8" />
              </div>

              {/* Value */}
              <div className="font-serif text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </div>

              {/* Label */}
              <div className="font-serif text-sm md:text-base text-muted-foreground">
                {stat.label}
              </div>

              {/* Bottom Accent */}
              <div
                className={`absolute inset-x-0 bottom-0 h-1 rounded-b-2xl ${
                  stat.color === "primary" ? "bg-primary" : "bg-accent"
                } scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
              />
            </div>
          ))}
        </div>

        {/* ================= Section Title ================= */}
        <div className="text-center max-w-5xl mt-12 mx-auto mb-10">
          <span className="inline-block font-serif text-sm font-bold text-accent uppercase tracking-wider mb-3">
            Words from Our Founder
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            A Vision for Healthcare Excellence
          </h2>
          <p className="mt-4 text-muted-foreground text-base md:text-lg">
            Guiding principles that shape compassionate professionals and future leaders.
          </p>
        </div>

        {/* ================= Founder Card ================= */}
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-xl bg-white dark:bg-gray-900">

          {/* Quote Section */}
          <div className="relative p-8 md:p-12 lg:p-16 text-center">
            <Quote className="w-16 h-16 text-primary/20 mx-auto mb-6" />

            <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl font-medium text-gray-900 dark:text-white leading-relaxed max-w-4xl mx-auto">
              “Knowledge for the sake of knowledge, without benefitting fellow
              beings, is a dead end. Our only goal is to shape caring,
              innovative, professional nurses who are leaders in addressing
              the evolving health care needs of all people.”
            </blockquote>
          </div>

          {/* Founder Info */}
          <div className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center md:items-center gap-8">

              {/* Image */}
              <div className="relative">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white dark:border-gray-900 shadow-lg">
                  <img
                    src="./images/ASHOK-BHAGAT.webp"
                    alt="Ashok Kumar Bhagat"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Details */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  Ashok Kumar Bhagat
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium">
                  Founder & Visionary Leader
                </p>
                <p className="text-accent font-semibold mt-1">
                  Birsa Nursing Sansthan
                </p>
              </div>

              {/* Established Badge */}
              <div className="rounded-2xl px-6 py-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm text-center">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  Established
                </p>
                <p className="font-serif text-2xl font-bold text-primary">
                  2024
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FounderSection;
