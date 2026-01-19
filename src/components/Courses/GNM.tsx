import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { ArrowRight, Download, CheckCircle, Calendar, Users, Award, BookOpen, Heart, Stethoscope, GraduationCap, FileText, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const keyInformation = [
  "Minimum age for admission will be 17 years (as on 31st December of that year). The upper age limit is 35 year. For RANM/for RLHV there is no age bar.",
  "Admission of students shall be once in a year.",
  "Students shall be medically fit.",
];

const educationRequirements = [
  {
    title: "10+2 with English (General Stream)",
    description: "Must have obtained a minimum of 40% at the qualifying examination and English individually from any recognized board.  Candidates are also eligible from State Open School recognized by State Government and National Institute of Open School (NIOS) recognized by Central Government. However, Science is preferable. Three (core elective) subject marks may be taken for calculating the percentage of marks excluding the marks in English. Also, it has to be ensured the candidate has pass marks in English.",
  },
  {
    title:  "10+2 with Vocational ANM Course",
    description: "10+2 with English having 40% of marks in vocational ANM course from the school recognized by Indian Nursing Council.",
  },
  {
    title: "10+2 with Vocational Healthcare Science",
    description: "10+2 with English having 40% of marks in Vocational Stream-Health care Science from a recognized CBSE board/State/Centre.",
  },
  {
    title: "Registered ANM",
    description: "Registered ANM with pass marks.",
  },
];

const reservationPolicy = [
  {
    title: "Disabled Candidates",
    description: "3% Disability reservation to be considered with a disability of locomotor to the tune of 40% to 50% of the lower extremity and other eligibility criteria with regard to age and qualification will be same as prescribed for each nursing program.",
  },
  {
    title: "SC/ST Candidates",
    description: "5% of total marks is relaxed for SC/ST candidates.",
  },
  {
    title: "State Government Reservation",
    description: "Any other reservation as per the State Government.",
  },
  {
    title: "Foreign Students",
    description: "10% supernumerary seats for foreign students shall be reserved.",
  },
];

const highlights = [
  {
    icon: Calendar,
    title: "Duration",
    value: "3 Years",
    color: "primary",
  },
  {
    icon: Users,
    title: "Intake Capacity",
    value: "60 Students",
    color: "accent",
  },
  {
    icon: Award,
    title: "Affiliation",
    value: "JNRC Ranchi",
    color: "primary",
  },
  {
    icon: BookOpen,
    title: "Established",
    value: "Since 2024",
    color:  "accent",
  },
];

const features = [
  {
    icon: Heart,
    title: "Comprehensive Nursing",
    description: "Master general nursing principles with extensive focus on patient care and clinical excellence.",
  },
  {
    icon: Stethoscope,
    title: "Midwifery Training",
    description: "Specialized training in midwifery practices and maternal & child healthcare services.",
  },
  {
    icon: GraduationCap,
    title: "Professional Development",
    description: "Three-year diploma program designed to create competent nursing professionals.",
  },
];

const GNM = () => {
  return (
    <>
      <Helmet>
        <title>GNM Course - General Nursing & Midwifery | Birsa Nursing Sansthan</title>
        <meta
          name="description"
          content="Join our Government approved 3-year GNM (General Nursing & Midwifery) diploma program at Birsa Nursing Sansthan. Affiliated to JNRC Ranchi with comprehensive nursing education."
        />
      </Helmet>
      <Layout>
        <div className="min-h-screen bg-background">
          {/* Hero Section with Background Image */}
          <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=2000&q=80"
                alt="GNM Nursing students"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215,35%,10%)]/95 via-[hsl(215,35%,10%)]/85 to-[hsl(215,35%,10%)]/75" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
            
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <div className="max-w-4xl">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 animate-fade-in-up">
                  <Award className="w-4 h-4 text-accent" />
                  <span className="font-serif text-sm font-semibold text-white">Government Approved Program • JNRC Affiliated</span>
                </div>

                {/* Main Heading */}
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                  General Nursing &
                  <span className="block text-accent mt-2">Midwifery (GNM)</span>
                </h1>

                {/* Subheading */}
                <p className="font-serif text-lg md:text-xl text-white/90 max-w-3xl mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                  A comprehensive 3-year diploma program approved by the Government of Jharkhand and affiliated to the Jharkhand Nurses Registration Council, Ranchi.  Build your career as a skilled nursing professional. 
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                  <Button size="xl" asChild className="font-serif font-semibold shadow-glow">
                    <Link to="/contact">
                      Apply Now for Admission
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                  <Button size="xl" variant="outline" asChild className="font-serif font-semibold bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                    <a href="/forms/gnm-application-form. pdf" download>
                      <Download className="w-5 h-5 mr-2" />
                      Download Form
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Highlights Section */}
          <section className="py-20 lg:py-24 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500 text-center animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div
                      className={`w-16 h-16 mx-auto mb-5 rounded-xl flex items-center justify-center ${
                        item.color === "primary"
                          ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
                          : "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white"
                      } transition-all duration-300`}
                    >
                      <item.icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-sm text-muted-foreground mb-2 font-medium uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <p className=" text-3xl font-semibold text-foreground">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* About Course Section with Image */}
          <section className="py-20 lg:py-28 bg-card">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                
                {/* Image Side */}
                <div className="relative order-2 lg:order-1">
                  <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                    <img
                      src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=800&q=80"
                      alt="GNM nursing education"
                      className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                  </div>
                  {/* Decorative Background */}
                  <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-2xl bg-primary/10" />
                </div>

                {/* Content Side */}
                <div className="order-1 lg:order-2">
                  <span className="inline-block font-serif text-sm font-bold text-accent uppercase tracking-wider mb-4">
                    About the Program
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                    Course Overview
                  </h2>
                  
                  <p className="font-serif text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                    The Diploma in General Nursing and Midwifery (GNM) started by the Institute has been approved by the Department of Health, Family Welfare and Medical Education, Government of Jharkhand. 
                  </p>
                  <p className="font-serif text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                    It is a 3 Years Course and is Affiliated to the Jharkhand Nurses Registration Council, Ranchi.
                  </p>

                  {/* Key Points */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" />
                      <span className="font-serif text-base text-foreground">
                        Approved by Government of Jharkhand Health Department
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" />
                      <span className="font-serif text-base text-foreground">
                        Affiliated to Jharkhand Nurses Registration Council, Ranchi
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" />
                      <span className="font-serif text-base text-foreground">
                        Comprehensive 3-year diploma program
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 lg:py-28 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-block font-serif text-sm font-bold text-accent uppercase tracking-wider mb-4">
                  Why Choose GNM
                </span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Program Highlights
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500"
                  >
                    <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="font-serif text-base text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Key Information Section */}
          <section className="py-20 lg:py-28 bg-card">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <span className="inline-block font-serif text-sm font-bold text-accent uppercase tracking-wider mb-4">
                    Admission Guidelines
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                    Key Information
                  </h2>
                </div>

                <div className="bg-background rounded-2xl p-8 md:p-10 shadow-card border border-border">
                  <ul className="space-y-5">
                    {keyInformation. map((info, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-4 pb-5 border-b border-border last:border-b-0 last:pb-0"
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <FileText className="w-4 h-4 text-primary" />
                        </div>
                        <p className="font-serif text-base text-foreground leading-relaxed flex-1">
                          {info}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Education Requirements Section */}
          <section className="py-20 lg:py-28 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <span className="inline-block font-serif text-sm font-bold text-accent uppercase tracking-wider mb-4">
                    Eligibility Criteria
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                    Minimum Education Eligibility
                  </h2>
                  <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto">
                    Candidates must meet one of the following educational requirements to be eligible for admission to GNM program. 
                  </p>
                </div>

                <div className="space-y-6">
                  {educationRequirements.map((req, index) => (
                    <div
                      key={index}
                      className="bg-card rounded-xl p-6 md:p-8 shadow-card border border-border hover:shadow-card-hover transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="font-serif text-xl font-bold text-primary">
                            {String. fromCharCode(65 + index)}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-serif text-lg font-bold text-foreground mb-3">
                            {req.title}
                          </h3>
                          <p className="font-serif text-base text-muted-foreground leading-relaxed">
                            {req.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Foreign Nationals */}
                <div className="mt-8 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <Globe className="w-6 h-6 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-serif text-lg font-bold text-foreground mb-2">
                        For Foreign Nationals
                      </h4>
                      <p className="font-serif text-base text-foreground">
                        The entry qualification equivalency i.e., 12th standard will be obtained by Association of Indian Universities, New Delhi. Institution and SNRC will be responsible to ensure that the qualification and eligibility will be equivalent to what has been prescribed by the Council. 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Reservation Policy Section */}
          <section className="py-20 lg:py-28 bg-card">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <span className="inline-block font-serif text-sm font-bold text-accent uppercase tracking-wider mb-4">
                    Reservation Guidelines
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                    Reservation Policy
                  </h2>
                  <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto">
                    The following reservation policies are applicable for GNM program admissions.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {reservationPolicy.map((policy, index) => (
                    <div
                      key={index}
                      className="bg-background rounded-xl p-6 shadow-card border border-border hover: shadow-card-hover transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                            {policy.title}
                          </h3>
                          <p className="font-serif text-base text-muted-foreground leading-relaxed">
                            {policy.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Image Gallery Section */}
          <section className="py-20 lg:py-28 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Campus Life & Learning
                </h2>
              </div>
              
              <div className="grid md: grid-cols-3 gap-6 max-w-6xl mx-auto">
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-elevated group">
                  <img
                    src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=600&q=80"
                    alt="Nursing classroom"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="font-serif text-white font-semibold text-lg">Modern Classrooms</p>
                  </div>
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-elevated group">
                  <img
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80"
                    alt="Nursing lab"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="font-serif text-white font-semibold text-lg">Advanced Laboratories</p>
                  </div>
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-elevated group">
                  <img
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80"
                    alt="Clinical training"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="font-serif text-white font-semibold text-lg">Clinical Training</p>
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
                  Ready to Start Your GNM Journey?
                </h2>
                <p className="font-serif text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                  Join our GNM program and become a skilled nursing professional. Applications are now open for the upcoming academic year.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="xl" asChild className="font-serif font-semibold shadow-lg">
                    <Link to="/contact">
                      Apply for Admission
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                  <Button size="xl" variant="outline" asChild className="font-serif font-semibold">
                    <Link to="/about/about-us">
                      Learn More About Us
                    </Link>
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

export default GNM;