import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Stethoscope,
  HeartPulse,
  GraduationCap,
  FlaskConical,
  Users,
  Hospital,
  BookOpen,
  Award,
  Building2,
  Microscope,
  ClipboardCheck,
  UserCheck,
  CheckCircle,
} from "lucide-react";

const institutions = [
  {
    id: "bimsr",
    name: "Birsa Institute of Medical Sciences & Research",
    tagline: "Shaping Tomorrow's Healthcare Leaders",
    icon: Stethoscope,
    overview: "Birsa Institute of Medical Sciences & Research (BIMSR) is the flagship medical institution under Abhyuday Seva Sansthan, committed to delivering world-class medical education with a focus on clinical excellence and research.",
    description:
      "BIMSR offers comprehensive medical programs that blend theoretical knowledge with extensive hands-on clinical training. Our curriculum is designed to meet global healthcare standards while addressing local community health needs.  With state-of-the-art infrastructure, experienced faculty from premier medical institutions, and a student-centric approach, we prepare competent and compassionate doctors ready to serve society.",
    features: [
      "Modern simulation and skill labs",
      "Well-equipped anatomy and physiology labs",
      "Experienced faculty from renowned institutions",
      "Clinical training in affiliated hospitals",
      "Research-oriented curriculum",
      "Digital library with latest medical resources",
    ],
    image:  "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80",
    ],
    programs: [
      { name: "MBBS", duration: "5.5 Years", description: "Undergraduate medical degree with internship" },
      { name:  "MD/MS", duration: "3 Years", description: "Postgraduate medical specializations" },
      { name: "Diploma Courses", duration: "2 Years", description: "Specialized diploma programs" },
    ],
    highlights: [
      { icon:  Hospital, label: "Hospital Training" },
      { icon: GraduationCap, label:  "Expert Faculty" },
      { icon:  FlaskConical, label: "Research Focus" },
      { icon: Award, label: "NMC Recognized" },
      { icon:  Microscope, label: "Advanced Labs" },
      { icon: Building2, label: "Modern Campus" },
    ],
    link: "https://bimsr.com/",
    color: "primary",
  },
  {
    id:  "nursing",
    name: "Birsa Nursing Sansthan",
    tagline:  "Nurturing Compassionate Healthcare Professionals",
    icon: HeartPulse,
    overview:  "Birsa Nursing Sansthan is dedicated to training skilled, compassionate, and professional nurses who form the backbone of quality healthcare delivery in hospitals, clinics, and community settings.",
    description:
      "Our nursing institute offers comprehensive programs that emphasize both theoretical knowledge and practical clinical skills. We believe that nursing is not just a profession but a calling that requires dedication, empathy, and excellence.  With modern teaching methods, well-equipped skill laboratories, and clinical rotations in reputed hospitals, we ensure our students are job-ready and confident to handle real-world healthcare challenges with competence and care.",
    features: [
      "Comprehensive clinical training programs",
      "Modern nursing skill laboratories",
      "Community health and rural postings",
      "Experienced nursing faculty",
      "Patient care simulation training",
      "100% placement assistance support",
    ],
    image:  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=600&q=80",
    ],
    programs: [
      { name:  "B.Sc Nursing", duration: "4 Years", description: "Bachelor of Science in Nursing degree" },
      { name: "GNM", duration: "3. 5 Years", description: "General Nursing & Midwifery diploma" },
      { name: "ANM", duration: "2 Years", description: "Auxiliary Nurse Midwife program" },
    ],
    highlights: [
      { icon: Users, label: "Personal Attention" },
      { icon:  Hospital, label: "Hospital Rotations" },
      { icon: BookOpen, label: "Updated Curriculum" },
      { icon: HeartPulse, label: "Patient-Centered" },
      { icon: ClipboardCheck, label: "Skill Training" },
      { icon: UserCheck, label: "Career Support" },
    ],
    link: "#",
    color: "accent",
  },
];

const Institutions = () => {
  return (
    <>
      <Helmet>
        <title>Our Institutions | Abhyuday Seva Sansthan</title>
        <meta
          name="description"
          content="Explore BIMSR Medical College and Birsa Nursing Sansthan - two premier healthcare education institutions under Abhyuday Seva Sansthan dedicated to excellence in medical and nursing education."
        />
      </Helmet>
      <Layout>
        {/* Hero Section with Banner */}
        <section className="relative pt-32 pb-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=2000&q=80"
              alt="Medical education"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215,35%,10%)]/90 via-[hsl(215,35%,10%)]/80 to-[hsl(215,35%,10%)]/70" />
          </div>
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4 animate-fade-in">
                Our Institutions
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Two Centers of Healthcare Excellence
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Abhyuday Seva Sansthan operates two distinguished institutions - BIMSR and Birsa Nursing Sansthan - each dedicated to creating healthcare professionals who serve with skill, compassion, and integrity.
              </p>
            </div>
          </div>
        </section>

        {/* Institutions */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="space-y-32">
              {institutions.map((institution, index) => (
                <article
                  key={institution.id}
                  className="max-w-7xl mx-auto"
                >
                  {/* Main Content Grid */}
                  <div
                    className={`grid lg:grid-cols-2 gap-12 items-start ${
                      index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Image Column */}
                    <div className={`${index % 2 === 1 ? "lg: order-2" : ""} animate-fade-in-up`}>
                      {/* Main Image */}
                      <div className="relative rounded-2xl overflow-hidden shadow-elevated mb-6 image-zoom">
                        <img
                          src={institution.image}
                          alt={institution.name}
                          className="w-full h-[400px] lg:h-[500px] object-cover"
                        />
                        <div
                          className={`absolute inset-0 ${
                            institution.color === "primary"
                              ? "bg-gradient-to-t from-primary/40 to-transparent"
                              : "bg-gradient-to-t from-accent/40 to-transparent"
                          }`}
                        />
                        
                        {/* Icon Badge */}
                        <div
                          className={`absolute top-6 left-6 w-16 h-16 rounded-2xl flex items-center justify-center ${
                            institution.color === "primary"
                              ?  "bg-primary/90 backdrop-blur-sm"
                              : "bg-accent/90 backdrop-blur-sm"
                          }`}
                        >
                          <institution.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* Gallery Images */}
                      <div className="grid grid-cols-3 gap-4">
                        {institution.galleryImages.map((img, imgIndex) => (
                          <div key={imgIndex} className="rounded-xl overflow-hidden shadow-card image-zoom">
                            <img
                              src={img}
                              alt={`${institution.name} gallery ${imgIndex + 1}`}
                              className="w-full h-24 md:h-32 object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className={`${index % 2 === 1 ?  "lg:order-1" :  ""} animate-slide-in-right`} style={{ animationDelay: '0.2s' }}>
                      <div
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${
                          institution.color === "primary"
                            ? "bg-primary/10 text-primary"
                            : "bg-accent/10 text-accent"
                        }`}
                      >
                        <institution.icon className="w-4 h-4" />
                        <span className="text-sm font-medium">{institution.tagline}</span>
                      </div>

                      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                        {institution.name}
                      </h2>

                      <p className="text-lg text-muted-foreground mb-4">
                        {institution.overview}
                      </p>

                      <p className="text-muted-foreground mb-8 leading-relaxed">
                        {institution. description}
                      </p>

                      {/* Features */}
                      <div className="mb-8">
                        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                          Key Features
                        </h4>
                        <ul className="grid sm:grid-cols-2 gap-3">
                          {institution.features. map((feature, fIndex) => (
                            <li key={fIndex} className="flex items-start gap-2">
                              <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                                institution.color === "primary" ? "text-primary" : "text-accent"
                              }`} />
                              <span className="text-sm text-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Programs */}
                      <div className="bg-background rounded-xl p-6 shadow-soft mb-8">
                        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                          Programs Offered
                        </h4>
                        <div className="space-y-3">
                          {institution.programs.map((program) => (
                            <div
                              key={program.name}
                              className="flex items-center justify-between p-3 rounded-lg bg-secondary/50"
                            >
                              <div>
                                <span className="font-medium text-foreground">{program.name}</span>
                                <p className="text-xs text-muted-foreground">{program.description}</p>
                              </div>
                              <span className="text-sm text-muted-foreground bg-background px-3 py-1 rounded-full">{program.duration}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="grid grid-cols-3 gap-3 mb-8">
                        {institution.highlights.slice(0, 6).map((highlight) => (
                          <div
                            key={highlight.label}
                            className="flex flex-col items-center text-center p-3 rounded-xl bg-background shadow-soft"
                          >
                            <highlight.icon
                              className={`w-5 h-5 mb-2 ${
                                institution.color === "primary" ? "text-primary" : "text-accent"
                              }`}
                            />
                            <span className="text-xs text-foreground">{highlight.label}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <Button
                        variant={institution.color === "primary" ?  "hero" : "accent"}
                        size="lg"
                        asChild
                        className="group"
                      >
                        <a target="_blank" href={institution.link}>
                          Learn More About This Institution
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                Why Choose Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Makes Our Institutions Stand Out
              </h2>
              <p className="text-muted-foreground text-lg">
                Our commitment to quality education, modern infrastructure, and student success sets us apart. 
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-card p-6 rounded-xl shadow-card hover:shadow-card-hover transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  Quality Education
                </h3>
                <p className="text-sm text-muted-foreground">
                  Curriculum designed to meet national and international healthcare standards. 
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-card hover:shadow-card-hover transition-all">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  Modern Infrastructure
                </h3>
                <p className="text-sm text-muted-foreground">
                  State-of-the-art facilities including labs, libraries, and simulation centers.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-card hover:shadow-card-hover transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  Experienced Faculty
                </h3>
                <p className="text-sm text-muted-foreground">
                  Learn from doctors and nurses with years of clinical and teaching experience.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-card hover:shadow-card-hover transition-all">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <HeartPulse className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  Community Focus
                </h3>
                <p className="text-sm text-muted-foreground">
                  Emphasis on serving society through community health programs and outreach.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=2000&q=80"
              alt="Healthcare education"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215,35%,10%)]/95 via-[hsl(215,35%,10%)]/85 to-[hsl(215,35%,10%)]/75" />
          </div>
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in-up">
                Begin Your Healthcare Career With Us
              </h2>
              <p className="text-white/80 mb-8 text-lg animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Whether you dream of becoming a doctor or a nurse, Abhyuday Seva Sansthan is committed to providing you with the education, training, and support you need to succeed.  Get in touch with us to learn more about admissions and programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <Button variant="hero" size="xl" asChild className="shadow-glow">
                  <a href="/contact">
                    Contact Us Today
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline" size="xl" asChild className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                  <a href="/admissions">
                    View Admissions
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Institutions;