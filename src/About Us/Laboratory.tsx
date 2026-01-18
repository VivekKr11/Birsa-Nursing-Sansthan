import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Microscope, Heart, Users, Utensils, Monitor, BookOpen, Video, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const laboratories = [
  {
    icon:  Microscope,
    title: "Pre-Clinical (Fundamental) Laboratory",
    description: "Well-equipped lab for practicing nursing procedures before clinical fieldwork. Features realistic medical models and simulated ward environment.",
    features: [
      "10 advanced nursing beds",
      "CPR training manikins",
      "Life-size anatomical models",
      "Birth demonstration models",
      "Clinical procedure charts",
    ],
    color: "primary",
  },
  {
    icon:  Users,
    title: "Community Health Nursing Laboratory",
    description:  "Training hub for public health activities and family healthcare strategies with IEC resource development capabilities.",
    features: [
      "Community health project kits",
      "Health camp organization tools",
      "Mass campaign equipment",
      "Audio-visual aid production",
      "Health education materials",
    ],
    color: "accent",
  },
  {
    icon: Heart,
    title: "Maternal & Child Health Laboratory",
    description: "Advanced simulation center for obstetric and pediatric care training with lifelike medical models.",
    features: [
      "Obstetric mannequins",
      "Neonatal care equipment",
      "Episiotomy suture simulators",
      "Postnatal care kits",
      "Gynecologic procedure tools",
    ],
    color: "primary",
  },
  {
    icon: Utensils,
    title: "Nutrition Laboratory",
    description: "Modern facility for dietary management studies and clinical nutrition practice.",
    features: [
      "Food composition analyzers",
      "Dietary assessment tools",
      "Clinical nutrition kits",
      "Meal preparation models",
      "Diet planning resources",
    ],
    color: "accent",
  },
  {
    icon: Monitor,
    title: "Computer Laboratory",
    description: "Technology-enabled learning space with latest healthcare IT systems and research tools.",
    features: [
      "High-performance workstations",
      "Medical software suites",
      "Data analysis tools",
      "Electronic health record systems",
      "Research databases",
    ],
    color:  "primary",
  },
  {
    icon: BookOpen,
    title: "Institutional Library",
    description: "Comprehensive knowledge resource center with extensive medical collections.",
    features: [
      "Latest nursing journals",
      "E-learning portals",
      "Multimedia resources",
      "Research publications",
      "Academic databases",
    ],
    color: "accent",
  },
  {
    icon: Video,
    title:  "Audio-Visual Laboratory",
    description:  "Digital media center for creating educational content and interactive learning experiences.",
    features: [
      "Video production equipment",
      "E-learning modules",
      "Presentation tools",
      "Interactive screens",
      "Digital editing software",
    ],
    color: "primary",
  },
];

const carouselImages = [
  {
    url: "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?auto=format&fit=crop&w=1200&q=80",
    title: "Modern Nursing Laboratory",
    description: "State-of-the-art equipment for hands-on training",
  },
  {
    url: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1200&q=80",
    title: "Clinical Simulation Center",
    description:  "Realistic healthcare scenarios for skill development",
  },
  {
    url: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1200&q=80",
    title: "Computer & Technology Lab",
    description: "Advanced IT infrastructure for digital learning",
  },
  {
    url: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80",
    title: "Library & Resource Center",
    description: "Extensive collection of nursing literature and research",
  },
  {
    url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    title: "Practical Training Areas",
    description: "Comprehensive facilities for skill mastery",
  },
];

const Laboratory = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToSlide = (index:  number) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <Helmet>
        <title>Laboratory Facilities | Birsa Nursing Sansthan</title>
        <meta
          name="description"
          content="Explore our state-of-the-art laboratory facilities at Birsa Nursing Sansthan. Advanced learning spaces equipped with modern technology and simulation equipment."
        />
      </Helmet>
      <Layout>
        <div className="min-h-screen bg-background">
          {/* Hero Section */}
          <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=2000&q=80"
                alt="Laboratory facilities"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215,35%,10%)]/95 via-[hsl(215,35%,10%)]/85 to-[hsl(215,35%,10%)]/75" />
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <div className="max-w-4xl">
                <span className="inline-block font-serif text-sm font-bold text-accent uppercase tracking-wider mb-4 animate-fade-in">
                  Our Facilities
                </span>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                  Advanced Learning
                  <span className="block text-accent mt-2">Facilities</span>
                </h1>
                <p className="font-serif text-lg md:text-xl text-white/90 max-w-3xl mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                  Our cutting-edge laboratories integrate clinical practice with academic rigor, featuring industry-standard equipment and simulation technologies. 
                </p>
              </div>
            </div>
          </section>

          {/* Commitment Section */}
          <section className="py-20 lg:py-28 bg-card">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <span className="inline-block font-serif text-sm font-bold text-accent uppercase tracking-wider mb-4">
                  Our Commitment
                </span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Excellence in Nursing Education
                </h2>
                <p className="font-serif text-lg text-muted-foreground leading-relaxed">
                  We are committed to providing world-class laboratory facilities that empower our students with practical skills and knowledge.  Our state-of-the-art infrastructure ensures that every student receives hands-on training in a professional environment.
                </p>
              </div>
            </div>
          </section>

          {/* Laboratories Grid */}
          <section className="py-20 lg:py-28 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Our Laboratory Facilities
                </h2>
                <p className="font-serif text-lg text-muted-foreground">
                  Explore our comprehensive range of specialized laboratories designed for excellence in nursing education. 
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                {laboratories.map((lab, index) => (
                  <article
                    key={index}
                    className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500 border border-border"
                  >
                    <div
                      className={`w-16 h-16 mb-6 rounded-xl flex items-center justify-center ${
                        lab.color === "primary"
                          ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
                          : "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white"
                      } transition-all duration-300`}
                    >
                      <lab.icon className="w-8 h-8" />
                    </div>

                    <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-4">
                      {lab.title}
                    </h3>

                    <p className="font-serif text-base text-muted-foreground leading-relaxed mb-6">
                      {lab.description}
                    </p>

                    <div className="space-y-3">
                      <h4 className="font-serif text-sm font-bold text-foreground uppercase tracking-wide">
                        Key Features: 
                      </h4>
                      <ul className="space-y-2">
                        {lab.features. map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                            <span className="font-serif text-base text-foreground">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Image Carousel Section */}
          <section className="py-20 lg:py-28 bg-card">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-block font-serif text-sm font-bold text-accent uppercase tracking-wider mb-4">
                  Gallery
                </span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Inside Our Laboratories
                </h2>
                <p className="font-serif text-lg text-muted-foreground">
                  Take a visual tour of our state-of-the-art facilities and learning spaces.
                </p>
              </div>

              <div className="max-w-6xl mx-auto">
                {/* Carousel Container */}
                <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                  {/* Images */}
                  <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
                    {carouselImages.map((image, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-500 ${
                          index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <img
                          src={image. url}
                          alt={image.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent" />
                        
                        {/* Caption */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                          <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
                            {image.title}
                          </h3>
                          <p className="font-serif text-base md:text-lg text-white/90">
                            {image.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white flex items-center justify-center shadow-lg transition-all duration-300 hover: scale-110"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-900" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-6 h-6 text-gray-900" />
                  </button>

                  {/* Dots Indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                    {carouselImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all duration-300 ${
                          index === currentSlide
                            ? "w-8 h-3 bg-white rounded-full"
                            : "w-3 h-3 bg-white/50 rounded-full hover:bg-white/75"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-accent/5">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Experience Our World-Class Facilities
                </h2>
                <p className="font-serif text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                  Visit our campus and see how our advanced laboratories can transform your nursing education journey.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="xl" asChild className="font-serif font-semibold shadow-lg">
                    <a href="/contact">
                      Schedule a Campus Tour
                    </a>
                  </Button>
                  <Button size="xl" variant="outline" asChild className="font-serif font-semibold">
                    <a href="/about/about-us">
                      Learn More About Us
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default Laboratory;