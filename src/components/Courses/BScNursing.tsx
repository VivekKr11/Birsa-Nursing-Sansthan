import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { ArrowRight, Download, CheckCircle, Calendar, Users, Award, BookOpen, Heart, Stethoscope, GraduationCap, FileText, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const generalInformation = [
  "The minimum age for admission shall be 17 years on 31st December of the year in which admission is sought.  The maximum age limit for admission shall be 35 years.",
  "Colour blind candidates are eligible provided that colour corrective contact lens and spectacles are worn by such candidates.",
  "Candidate shall be medically fit.",
  "Married candidates are also eligible for admission.",
  "Students shall be admitted once in a year.",
];

const entranceTestSubjects = [
  { subject: "Aptitude for Nursing", marks: "20 marks" },
  { subject: "Physics", marks: "20 marks" },
  { subject: "Chemistry", marks: "20 marks" },
  { subject: "Biology", marks: "20 marks" },
  { subject: "English", marks: "20 marks" },
];

const qualifyingCriteria = [
  { category: "General", percentage: "50%" },
  { category: "General (PwD)", percentage: "45%" },
  { category: "SC/ST/OBC", percentage: "40%" },
];

const highlights = [
  {
    icon: Calendar,
    title: "Duration",
    value: "4 Years",
    color: "primary",
  },
  {
    icon: Users,
    title:  "Intake Capacity",
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
    title: "Advanced Nursing Science",
    description: "Comprehensive study of nursing science with in-depth theoretical and practical knowledge.",
  },
  {
    icon: Stethoscope,
    title: "Clinical Expertise",
    description: "Extensive clinical training in hospitals and healthcare facilities for hands-on experience.",
  },
  {
    icon: GraduationCap,
    title: "Bachelor's Degree",
    description:  "Four-year professional degree program recognized for advanced nursing career opportunities.",
  },
];

const BScNursing = () => {
  return (
    <>
      <Helmet>
        <title>B.Sc. Nursing - Bachelor of Science in Nursing | Birsa Nursing Sansthan</title>
        <meta
          name="description"
          content="Join our Government approved 4-year B.Sc. Nursing degree program at Birsa Nursing Sansthan. Affiliated to JNRC Ranchi with comprehensive nursing education and clinical training."
        />
      </Helmet>
      <Layout>
        <div className="min-h-screen bg-background">
          {/* Hero Section with Background Image */}
          <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src="/images/image5.jpeg"
                alt="B.Sc. Nursing students"
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
                  <span className="font-serif text-sm font-semibold text-white">Government Approved Degree Program • JNRC Affiliated</span>
                </div>

                {/* Main Heading */}
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                  Bachelor of Science in
                  <span className="block text-accent mt-2">Nursing (B.Sc.  Nursing)</span>
                </h1>

                {/* Subheading */}
                <p className="font-serif text-lg md:text-xl text-white/90 max-w-3xl mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                  A prestigious 4-year degree program approved by the Government of Jharkhand and affiliated to the Jharkhand Nurses Registration Council, Ranchi.  Excel in your nursing career with advanced education. 
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
                    <a href="/forms/bsc-nursing-application-form. pdf" download>
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
                      src="/images/image6.jpeg"
                      alt="B.Sc.  Nursing education"
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
                    The B. Sc. Nursing program started by the Institute has been approved by the Department of Health, Family Welfare and Medical Education, Government of Jharkhand. 
                  </p>
                  <p className="font-serif text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                    It is a 4 Years Course and is Affiliated to the Jharkhand Nurses Registration Council, Ranchi.
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
                        Professional 4-year bachelor's degree program
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
                  Why Choose B.Sc. Nursing
                </span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Program Highlights
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group bg-card rounded-2xl p-8 shadow-card hover: shadow-card-hover transition-all duration-500"
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

          {/* General Information Section */}
          <section className="py-20 lg:py-28 bg-card">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <span className="inline-block font-serif text-sm font-bold text-accent uppercase tracking-wider mb-4">
                    Admission Guidelines
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                    General Information
                  </h2>
                </div>

                <div className="bg-background rounded-2xl p-8 md:p-10 shadow-card border border-border">
                  <ul className="space-y-5">
                    {generalInformation. map((info, index) => (
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

          {/* Educational Requirements Section */}
          <section className="py-20 lg:py-28 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <span className="inline-block font-serif text-sm font-bold text-accent uppercase tracking-wider mb-4">
                    Eligibility Criteria
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                    Minimum Educational Qualification
                  </h2>
                  <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto">
                    Candidates must meet the following educational requirements to be eligible for admission to B. Sc. Nursing program. 
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="bg-card rounded-xl p-6 md:p-8 shadow-card border border-border hover:shadow-card-hover transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-serif text-xl font-bold text-primary">A</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif text-lg font-bold text-foreground mb-3">
                          Science Stream (10+2)
                        </h3>
                        <p className="font-serif text-base text-muted-foreground leading-relaxed">
                          Candidate with Science who have passed the qualifying 12th Standard examination (10+2) and must have obtained a minimum of 45% marks in Physics, Chemistry and Biology taken together. The candidate must have pass marks in English. 
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card rounded-xl p-6 md:p-8 shadow-card border border-border hover: shadow-card-hover transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-serif text-xl font-bold text-primary">B</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif text-lg font-bold text-foreground mb-3">
                          English Requirement
                        </h3>
                        <p className="font-serif text-base text-muted-foreground leading-relaxed">
                          English is a compulsory subject in 10+2 for being eligible for admission to B.Sc. (Nursing).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Entrance Examination Section */}
          <section className="py-20 lg:py-28 bg-card">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <span className="inline-block font-serif text-sm font-bold text-accent uppercase tracking-wider mb-4">
                    Selection Process
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                    Entrance Examination
                  </h2>
                  <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto">
                    Selection of candidates should be based on the merit of the entrance examination. 
                  </p>
                </div>

                {/* Entrance Test Subjects */}
                <div className="bg-background rounded-2xl p-8 md:p-10 shadow-card border border-border mb-8">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <ClipboardList className="w-6 h-6 text-primary" />
                    Entrance Test Composition
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {entranceTestSubjects.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 rounded-lg bg-card border border-border"
                      >
                        <span className="font-serif text-base font-medium text-foreground">
                          {item.subject}
                        </span>
                        <span className="font-serif text-base font-bold text-primary">
                          {item.marks}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-lg font-bold text-foreground">
                        Total Marks
                      </span>
                      <span className="font-serif text-2xl font-bold text-primary">
                        100 marks
                      </span>
                    </div>
                  </div>
                </div>

                {/* Qualifying Criteria */}
                <div className="bg-background rounded-2xl p-8 md:p-10 shadow-card border border-border">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-6">
                    Minimum Qualifying Criteria
                  </h3>
                  <div className="space-y-4">
                    {qualifyingCriteria.map((criteria, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-5 rounded-lg bg-card border border-border hover:shadow-md transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                            <CheckCircle className="w-5 h-5 text-accent" />
                          </div>
                          <span className="font-serif text-base font-medium text-foreground">
                            {criteria.category}
                          </span>
                        </div>
                        <span className="font-serif text-xl font-bold text-primary">
                          {criteria.percentage}
                        </span>
                      </div>
                    ))}
                  </div>
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
                    src="/images/image12.jpeg"
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
                    src="/images/image8.jpeg"
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
                    src="/images/image5.jpeg"
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
                  Ready to Pursue B.Sc. Nursing? 
                </h2>
                <p className="font-serif text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                  Join our B.Sc. Nursing program and earn a professional degree in nursing. Take your first step towards an advanced nursing career.
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

export default BScNursing;