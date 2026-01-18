import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Target, Eye, Heart, Award, Users, BookOpen, Building, Shield, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We believe in serving humanity with empathy and kindness, ensuring quality healthcare reaches every corner of society.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80",
  },
  {
    icon:  Award,
    title: "Excellence",
    description: "We are committed to maintaining the highest standards in medical education and healthcare services.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=400&q=80",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Transparency, ethical conduct, and accountability form the foundation of our operations and services.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&q=80",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace modern healthcare practices and innovative teaching methodologies to create future-ready professionals.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=400&q=80",
  },
  {
    icon: Users,
    title: "Community Service",
    description: "Dedicated to serving the community through accessible healthcare, education, and social welfare initiatives.",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=400&q=80",
  },
];

const milestones = [
  { 
    year: "2025", 
    title:  "Foundation & Vision", 
    description: "Abhyuday Seva Sansthan was established with a noble mission to provide quality healthcare education and services to the community." 
  },
  { 
    year: "Early 2025", 
    title: "BIMSR Established", 
    description: "Birsa Institute of Medical Sciences & Research was founded, marking the beginning of comprehensive medical education programs." 
  },
  { 
    year: "Mid 2025", 
    title: "Nursing Institute Launch", 
    description: "Birsa Nursing Sansthan was inaugurated to train skilled and compassionate nursing professionals for the healthcare sector." 
  },
  { 
    year: "Late 2025", 
    title: "Infrastructure Growth", 
    description: "Rapid development of modern facilities including laboratories, libraries, and clinical training centers across both institutions." 
  },
  { 
    year: "2026", 
    title: "Expanding Horizons", 
    description: "Building on our strong foundation with growing student enrollment, experienced faculty recruitment, and community healthcare initiatives." 
  },
];

const missionPoints = [
  "Provide accessible and affordable quality medical and nursing education to aspiring healthcare professionals",
  "Establish world-class healthcare facilities that serve the community with compassion and expertise",
  "Foster research, innovation, and continuous learning in medical sciences",
  "Develop healthcare leaders equipped with knowledge, skills, and strong ethical values",
  "Bridge the gap in healthcare accessibility through community outreach and public health programs",
  "Create employment opportunities and contribute to the socio-economic development of the region",
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Abhyuday Seva Sansthan</title>
        <meta
          name="description"
          content="Learn about Abhyuday Seva Sansthan - our vision, mission, values, and commitment to excellence in medical education and healthcare services through BIMSR and Birsa Nursing Sansthan."
        />
      </Helmet>
      <Layout>
        {/* Hero Section with Banner */}
        <section className="relative pt-32 pb-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
              alt="Abhyuday Seva Sansthan campus"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215,35%,10%)]/90 via-[hsl(215,35%,10%)]/80 to-[hsl(215,35%,10%)]/70" />
          </div>
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4 animate-fade-in">
                About Us
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Empowering Healthcare Through Education & Service
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Abhyuday Seva Sansthan is a pioneering organization dedicated to transforming healthcare education and delivery.  Through our flagship institutions - Birsa Institute of Medical Sciences & Research and Birsa Nursing Sansthan - we are building a healthier tomorrow. 
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
              <div className="animate-fade-in-up">
                <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                  Our Story
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  A New Dawn in Healthcare Education
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Abhyuday Seva Sansthan was founded with a transformative vision: to create institutions that would not only educate but inspire the next generation of healthcare professionals to serve society with dedication and excellence.
                  </p>
                  <p>
                    Our organization operates two premier institutions - <strong>Birsa Institute of Medical Sciences & Research (BIMSR)</strong> and <strong>Birsa Nursing Sansthan</strong> - both designed to provide comprehensive, contemporary medical and nursing education in a nurturing environment.
                  </p>
                  <p>
                    With modern infrastructure, experienced faculty from renowned medical institutions, and a curriculum aligned with global healthcare standards, we are committed to producing competent, compassionate healthcare professionals who make a real difference in people's lives.
                  </p>
                  <p>
                    As a seva sansthan (service organization), we are deeply committed to community welfare, affordable healthcare access, and contributing to the overall development of the healthcare ecosystem in our region.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6 animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
                <div className="bg-background rounded-2xl p-8 text-center shadow-card hover:shadow-card-hover transition-all card-hover-lift">
                  <Building className="w-10 h-10 text-primary mx-auto mb-4" />
                  <span className="font-display text-4xl font-bold text-foreground block">2</span>
                  <span className="text-muted-foreground">Premier Institutions</span>
                </div>
                <div className="bg-background rounded-2xl p-8 text-center shadow-card hover:shadow-card-hover transition-all card-hover-lift">
                  <Users className="w-10 h-10 text-primary mx-auto mb-4" />
                  <span className="font-display text-4xl font-bold text-foreground block">500+</span>
                  <span className="text-muted-foreground">Students Enrolled</span>
                </div>
                <div className="bg-background rounded-2xl p-8 text-center shadow-card hover:shadow-card-hover transition-all card-hover-lift">
                  <BookOpen className="w-10 h-10 text-primary mx-auto mb-4" />
                  <span className="font-display text-4xl font-bold text-foreground block">15+</span>
                  <span className="text-muted-foreground">Programs Offered</span>
                </div>
                <div className="bg-background rounded-2xl p-8 text-center shadow-card hover:shadow-card-hover transition-all card-hover-lift">
                  <Award className="w-10 h-10 text-primary mx-auto mb-4" />
                  <span className="font-display text-4xl font-bold text-foreground block">100%</span>
                  <span className="text-muted-foreground">Commitment</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Break Section */}
        <section className="relative h-80 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=2000&q=80"
            alt="Students in medical training"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/30" />
        </section>

        {/* Vision & Mission */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                Our Direction
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Vision & Mission
              </h2>
            </div>

            <div className="grid lg: grid-cols-2 gap-8 max-w-6xl mx-auto">
              <article className="relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all group">
                <div className="absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1559523182-a284c3fb7cff?auto=format&fit=crop&w=800&q=80"
                    alt="Vision"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/90 to-card/40" />
                </div>
                <div className="relative p-8 pt-48">
                  <div className="w-14 h-14 rounded-xl bg-primary/90 flex items-center justify-center mb-6">
                    <Eye className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To emerge as a leading healthcare education organization that transforms lives through quality medical and nursing education, creating compassionate healthcare professionals who serve society with excellence, integrity, and dedication to the betterment of humanity.
                  </p>
                </div>
              </article>

              <article className="relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all group">
                <div className="absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
                    alt="Mission"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/90 to-card/40" />
                </div>
                <div className="relative p-8 pt-48">
                  <div className="w-14 h-14 rounded-xl bg-accent/90 flex items-center justify-center mb-6">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                    Our Mission
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {missionPoints.slice(0, 4).map((point, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span className="text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                What We Stand For
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-muted-foreground text-lg">
                These principles guide our journey and define our commitment to healthcare and education. 
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
              {values.map((value, index) => (
                <article
                  key={value.title}
                  className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all animate-fade-in-up card-hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={value.image}
                      alt={value.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                    <div className="absolute bottom-4 left-4 w-10 h-10 rounded-lg bg-primary/90 flex items-center justify-center">
                      <value.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4 lg: px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                Our History
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Journey
              </h2>
              <p className="text-muted-foreground text-lg">
                Key milestones in our mission to transform healthcare education and services.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-hero md:-translate-x-1/2" />

                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className={`relative flex items-start gap-6 mb-12 last:mb-0 animate-fade-in-up ${
                      index % 2 === 0 ?  "md:flex-row" : "md:flex-row-reverse"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full md:-translate-x-1/2 border-4 border-card shadow-lg" />

                    {/* Content */}
                    <div
                      className={`ml-12 md:ml-0 md:w-1/2 bg-background rounded-xl p-6 shadow-card ${
                        index % 2 === 0 ? "md: mr-8 md:text-right" : "md:ml-8"
                      }`}
                    >
                      <span className="inline-block text-sm font-bold text-accent mb-1">
                        {milestone.year}
                      </span>
                      <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;