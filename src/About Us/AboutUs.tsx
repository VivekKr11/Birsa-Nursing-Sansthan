import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Target, Eye, Heart, GraduationCap, Users, TrendingUp, Award, Stethoscope, BookOpen, CheckCircle } from "lucide-react";

const visionPoints = [
  "Function as efficient members of the health team in all kinds of health care settings",
  "Develop competencies for first level positions in healthcare",
  "Coordinate with health teams in disease prevention, health promotion and rehabilitation",
];

const missionPoints = [
  "Prepare caring, innovative, professional nurses who are leaders in addressing evolving healthcare needs",
  "Foster quality in academic education and research in nursing",
  "Nurture diversity and collegiality of nursing programs",
  "Establish university policies, standards and procedures defining best practices",
];

const clinicalPractice = [
  "Demonstrate competency in providing healthcare services using nursing process",
  "Assess nursing needs of clients from birth to death",
  "Plan and carry out appropriate action to meet nursing needs",
  "Provide effective nursing care for maintaining best possible health",
  "Promote self-care in people under their care",
];

const professionalDevelopment = [
  "Apply knowledge from humanities and sciences in nursing practice",
  "Function effectively with health team members using communication skills",
  "Recognize need for continuing education for professional growth",
  "Demonstrate basic skills in teaching patients",
  "Apply problem-solving techniques in nursing practice",
];

const communityLeadership = [
  "Participate in curative, preventive, promotive and rehabilitative healthcare",
  "Mobilize community resources and involvement",
  "Demonstrate basic skills in administration and leadership",
  "Work with health team and community effectively",
  "Assist in research activities",
];

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Birsa Nursing Sansthan</title>
        <meta
          name="description"
          content="Learn about Birsa Nursing Sansthan - our vision, mission, and commitment to excellence in nursing education.  Preparing caring, innovative, professional nurses."
        />
      </Helmet>
      <Layout>
        <div className="min-h-screen bg-background">
          {/* Hero Section */}
          <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=2000&q=80"
                alt="Birsa Nursing Sansthan"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215,35%,10%)]/95 via-[hsl(215,35%,10%)]/85 to-[hsl(215,35%,10%)]/75" />
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <div className="max-w-4xl">
                <span className="inline-block font-serif text-sm font-bold text-accent uppercase tracking-wider mb-4 animate-fade-in">
                  About Us
                </span>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                  About Birsa Nursing
                  <span className="block text-accent mt-2">Sansthan</span>
                </h1>
                <p className="font-serif text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                  Committed to excellence in nursing education, blending compassionate care with professional expertise to shape the healthcare leaders of tomorrow.
                </p>
              </div>
            </div>
          </section>

          {/* Guiding Principles Section */}
          <section className="py-20 lg:py-28 bg-card">
            <div className="container mx-auto px-4 lg: px-8">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <span className="inline-block font-serif text-sm font-bold text-accent uppercase tracking-wider mb-4">
                    Our Guiding Principles
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                    Excellence in Nursing Education
                  </h2>
                </div>

                <div className="bg-background rounded-2xl p-8 md:p-12 shadow-card border border-border text-center">
                  <p className="font-serif text-lg md:text-xl text-foreground leading-relaxed">
                    Birsa Nursing Sansthan committed to excellence in nursing education, blending compassionate care with professional expertise to shape the healthcare leaders of tomorrow.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Vision & Mission Section */}
          <section className="py-20 lg: py-28 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-block font-serif text-sm font-bold text-accent uppercase tracking-wider mb-4">
                  Our Direction
                </span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Vision & Mission
                </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* Vision Card */}
                <article className="relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all group">
                  <div className="absolute inset-0">
                    <img
                      src="https://images.unsplash.com/photo-1559523182-a284c3fb7cff?auto=format&fit=crop&w=800&q=80"
                      alt="Vision"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/95 to-card/50" />
                  </div>
                  
                  <div className="relative p-8 pt-56">
                    <div className="w-16 h-16 rounded-xl bg-primary/90 flex items-center justify-center mb-6">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                      Our Vision
                    </h3>
                    <p className="font-serif text-base text-muted-foreground mb-4 leading-relaxed">
                      To prepare nurses with a sound educational programme in nursing to enable them to: 
                    </p>
                    <ul className="space-y-3">
                      {visionPoints. map((point, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                          <span className="font-serif text-base text-foreground">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>

                {/* Mission Card */}
                <article className="relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all group">
                  <div className="absolute inset-0">
                    <img
                      src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
                      alt="Mission"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/95 to-card/50" />
                  </div>
                  
                  <div className="relative p-8 pt-56">
                    <div className="w-16 h-16 rounded-xl bg-accent/90 flex items-center justify-center mb-6">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                      Our Mission
                    </h3>
                    <p className="font-serif text-base text-muted-foreground mb-4 leading-relaxed">
                      The mission of Birsa Nursing Sansthan (BNS) of Birsa Institute of Medical Science & Research (BIMSR) is to:
                    </p>
                    <ul className="space-y-3">
                      {missionPoints.map((point, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                          <span className="font-serif text-base text-foreground">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* Image Break */}
          <section className="relative h-80 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=2000&q=80"
              alt="Nursing education"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/30" />
          </section>

          {/* Educational Objectives Section */}
          <section className="py-20 lg:py-28 bg-card">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-block font-serif text-sm font-bold text-accent uppercase tracking-wider mb-4">
                  Learning Outcomes
                </span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Educational Objectives
                </h2>
                <p className="font-serif text-lg text-muted-foreground">
                  Our comprehensive curriculum is designed to develop competent nursing professionals equipped with both theoretical knowledge and practical skills. 
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {/* Clinical Practice */}
                <article className="bg-background rounded-2xl p-8 shadow-card border border-border hover:shadow-card-hover transition-all">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                    <Stethoscope className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-6">
                    Clinical Practice
                  </h3>
                  <ul className="space-y-4">
                    {clinicalPractice.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <span className="font-serif text-xs font-bold text-primary">
                            {index + 1}
                          </span>
                        </div>
                        <span className="font-serif text-base text-foreground leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>

                {/* Professional Development */}
                <article className="bg-background rounded-2xl p-8 shadow-card border border-border hover:shadow-card-hover transition-all">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-6">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-6">
                    Professional Development
                  </h3>
                  <ul className="space-y-4">
                    {professionalDevelopment.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                          <span className="font-serif text-xs font-bold text-accent">
                            {index + 1}
                          </span>
                        </div>
                        <span className="font-serif text-base text-foreground leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>

                {/* Community & Leadership */}
                <article className="bg-background rounded-2xl p-8 shadow-card border border-border hover: shadow-card-hover transition-all">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-6">
                    Community & Leadership
                  </h3>
                  <ul className="space-y-4">
                    {communityLeadership.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <span className="font-serif text-xs font-bold text-primary">
                            {index + 1}
                          </span>
                        </div>
                        <span className="font-serif text-base text-foreground leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-20 lg:py-28 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                <div className="bg-card rounded-2xl p-8 text-center shadow-card hover:shadow-card-hover transition-all">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="font-serif text-4xl font-bold text-foreground mb-2">3</div>
                  <div className="font-serif text-base text-muted-foreground">Programs Offered</div>
                </div>
                <div className="bg-card rounded-2xl p-8 text-center shadow-card hover:shadow-card-hover transition-all">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className=" text-4xl font-bold text-foreground mb-2">180+</div>
                  <div className="font-serif text-base text-muted-foreground">Students</div>
                </div>
                <div className="bg-card rounded-2xl p-8 text-center shadow-card hover:shadow-card-hover transition-all">
                  <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className=" text-4xl font-bold text-foreground mb-2">15+</div>
                  <div className="font-serif text-base text-muted-foreground">Expert Faculty</div>
                </div>
                <div className="bg-card rounded-2xl p-8 text-center shadow-card hover:shadow-card-hover transition-all">
                  <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className=" text-4xl font-bold text-foreground mb-2">100%</div>
                  <div className="font-serif text-base text-muted-foreground">Placement</div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 lg: py-28 bg-gradient-to-br from-primary/5 via-background to-accent/5">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Join Our Nursing Community
                </h2>
                <p className="font-serif text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                  Become part of a legacy of excellence in nursing education.  Start your journey towards becoming a compassionate healthcare professional. 
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="font-serif font-semibold px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all shadow-lg text-lg">
                    <a href="/contact">Apply Now</a>
                  </button>
                  <button className="font-serif font-semibold px-8 py-4 bg-transparent border-2 border-border text-foreground rounded-lg hover:bg-card transition-all text-lg">
                    <a href="/courses/anm">Explore Programs</a>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default AboutUs;