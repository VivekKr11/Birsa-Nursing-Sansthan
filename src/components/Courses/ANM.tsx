import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { ArrowRight, CheckCircle, Calendar, Users, Award, BookOpen, Heart, Stethoscope, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const eligibilityCriteria = [
  "The minimum age for admission shall be 17 years on or before 31st December of the year in which admission is sought.",
  "The maximum age for admission shall be 35 years.",
  "Angawadi, Asha workers and Trained Dias for admission to ANM course in Government Multipurpose Health Worker Training Schools/ANM schools shall be relaxed from 35 years to 42 years.",
  "The minimum educational requirements shall be the passing of 12 years of schooling (10+2 year course) recognized by CBSE/ICSE/SSSCE/HSCE or a recognized equivalent examination.",
  "Admission is subject to satisfactory medical examination report.",
  "Admission for ANM is restricted only for female candidates.",
];

const highlights = [
  {
    icon: Calendar,
    title: "Duration",
    value: "24 Months",
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
    title: "Recognition",
    value: "INC Approved",
    color: "primary",
  },
  {
    icon: BookOpen,
    title: "Established",
    value: "Since 2024",
    color: "accent",
  },
];

const features = [
  {
    icon: Heart,
    title: "Patient-Centered Care",
    description:  "Learn compassionate nursing practices focused on holistic patient care and wellbeing.",
  },
  {
    icon: Stethoscope,
    title: "Clinical Excellence",
    description: "Gain hands-on experience through extensive clinical training in real healthcare settings.",
  },
  {
    icon: GraduationCap,
    title: "Expert Faculty",
    description: "Learn from experienced nursing professionals with decades of healthcare expertise.",
  },
];

const ANM = () => {
  return (
    <>
      <Helmet>
        <title>ANM Course - Auxiliary Nursing & Midwifery | Birsa Nursing Sansthan</title>
        <meta
          name="description"
          content="Join our INC recognized 24-month ANM (Auxiliary Nursing & Midwifery) program at Birsa Nursing Sansthan. Quality nursing education since 2003 with 100% placement assistance."
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
                alt="Nursing students"
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
                  <span className="font-serif text-sm font-semibold text-white">INC Recognized Program Since 2003</span>
                </div>

                {/* Main Heading */}
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                  Auxiliary Nursing &
                  <span className="block text-accent mt-2">Midwifery (ANM)</span>
                </h1>

                {/* Subheading */}
                <p className="font-serif text-lg md:text-xl text-white/90 max-w-3xl mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                  A comprehensive 24-month program producing quality ANM nurses placed across the state in both Private and Public Sector.  Shape your future as a compassionate healthcare professional.
                </p>

                {/* CTA Button */}
                <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                  <Button size="xl" asChild className="font-serif font-semibold shadow-glow">
                    <Link to="/contact">
                      Apply Now for Admission
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
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
                      src="/images/image3.jpeg"
                      alt="Nursing student with patient"
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
                    The Institute has started 24 months ANM Course in the year 2003 with a recognition from Indian Nursing Council, New Delhi and approval from the department of Health, Family Welfare and Medical Education, Govt. of Jharkhand.
                  </p>
                  <p className="font-serif text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                    The ANM Course started by the Institute produces quality ANM Nurses and they are placed across the state in both Private and Public Sector. 
                  </p>

                  {/* Key Points */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" />
                      <span className="font-serif text-base text-foreground">
                        Recognized by Indian Nursing Council (INC), New Delhi
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" />
                      <span className="font-serif text-base text-foreground">
                        Approved by Govt. of Jharkhand Health Department
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" />
                      <span className="font-serif text-base text-foreground">
                        100% placement assistance in Private & Public Sector
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
                  Why Choose ANM
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

          {/* Eligibility Criteria Section with Image Background */}
          <section className="py-20 lg:py-28 bg-card">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-5xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-12">
                  <span className="inline-block font-serif text-sm font-bold text-accent uppercase tracking-wider mb-4">
                    Admission Requirements
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                    Eligibility Criteria
                  </h2>
                  <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto">
                    Please review the following requirements carefully before applying for the ANM program.
                  </p>
                </div>

                {/* Eligibility Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {eligibilityCriteria.map((criterion, index) => (
                    <div
                      key={index}
                      className="bg-background rounded-xl p-6 shadow-card border border-border hover:shadow-card-hover transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="font-serif text-lg font-bold text-primary">
                            {index + 1}
                          </span>
                        </div>
                        <p className="font-serif text-base text-foreground leading-relaxed flex-1 pt-1">
                          {criterion}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Important Note */}
                <div className="mt-10 bg-accent/10 border-l-4 border-accent rounded-lg p-6">
                  <p className="font-serif text-base text-foreground">
                    <strong>Important:</strong> Admission for ANM is restricted only for female candidates and is subject to satisfactory medical examination report. 
                  </p>
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
                  Ready to Start Your Nursing Career?
                </h2>
                <p className="font-serif text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                  Join our ANM program and become part of a legacy of excellence in nursing education. Applications are now open for the upcoming academic year.
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

export default ANM;