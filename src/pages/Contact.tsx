import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { MapPin, Phone, Mail, Clock, Building, GraduationCap, HelpCircle, FileText } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "Village- Jiyarappa, NH 75, Khunti, Jharkhand",
    href:  null,
  },
  {
    icon: Phone,
    label:  "Phone",
    value: "8877880011",
    href: "tel:8877880011",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@bimsr. com",
    href: "mailto:info@bimsr.com",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Sat: 9:00 AM - 6:00 PM",
    href: null,
  },
];

const departments = [
  {
    icon: GraduationCap,
    name: "Admissions Office",
    description: "For inquiries about admission requirements, application procedures, and eligibility.",
    email: "admissions@bimsr.com",
    phone: "06528-220000",
  },
  {
    icon: Building,
    name:  "Administrative Office",
    description:  "For general institutional inquiries, partnerships, and administrative matters.",
    email: "admin@bimsr.com",
    phone: "8877880011",
  },
  {
    icon: FileText,
    name: "Academic Affairs",
    description: "For questions about academic programs, curriculum, and course details.",
    email: "academics@bimsr.com",
    phone: "06528-220000",
  },
  {
    icon: HelpCircle,
    name: "Student Services",
    description: "For current students regarding hostel, facilities, and campus life.",
    email: "students@bimsr.com",
    phone: "8877880011",
  },
];

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Birsa Nursing Sansthan</title>
        <meta
          name="description"
          content="Get in touch with Birsa Nursing Sansthan.  Contact us for admissions inquiries, general information, or any questions about BIMSR and Birsa Nursing Sansthan programs."
        />
      </Helmet>
      <Layout>
        {/* Hero Section with Banner */}
        <section className="relative pt-32 pb-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/HOSPITAL.jpg"
              alt="Contact us"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215,35%,10%)]/90 via-[hsl(215,35%,10%)]/80 to-[hsl(215,35%,10%)]/70" />
          </div>
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4 animate-fade-in">
                Contact Us
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                We're Here to Help
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Have questions about admissions, programs, or campus life? Our dedicated team at Birsa Nursing Sansthan is ready to assist you.  Reach out to us through any of the channels below.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
                  Get In Touch
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Contact Information
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Connect with us through any of these channels.  We're committed to responding promptly to all inquiries.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {contactInfo.map((info, index) => (
                  <div
                    key={info.label}
                    className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all card-hover-lift animate-fade-in-up text-center"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                      <info.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground mb-2">
                      {info.label}
                    </h3>
                    {info.href ?  (
                      <a
                        href={info.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{info.value}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Map Section */}
              
              <div className="bg-card rounded-2xl overflow-hidden shadow-elevated animate-fade-in-up">
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d939119.9382022879!2d85.259618!3d23.154236!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f52399e0fa172d%3A0x6554f9a6e16bad31!2sBirsa%20Institute%20of%20Medical%20Sciences%20and%20Research!5e0!3m2!1sen!2sin!4v1767694883973!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border:  0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Birsa Nursing Sansthan Location"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Departments Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
                  Department Contacts
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Reach the Right Department
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  To ensure your inquiry is handled by the most appropriate team, please contact the specific department directly. 
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {departments.map((dept, index) => (
                  <div
                    key={dept.name}
                    className="group bg-background rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all card-hover-lift animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center mb-4">
                      <dept.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      {dept. name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {dept.description}
                    </p>
                    <div className="space-y-2 text-sm">
                      <a
                        href={`mailto:${dept.email}`}
                        className="block text-primary hover:underline truncate"
                      >
                        {dept.email}
                      </a>
                      <a
                        href={`tel:${dept.phone. replace(/\s|-/g, "")}`}
                        className="block text-muted-foreground hover:text-primary transition-colors"
                      >
                        {dept.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Visit Campus Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elevated">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                      Visit Our Campus
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      We warmly welcome prospective students and their families to visit our campus and experience our state-of-the-art facilities, meet our faculty, and get a feel for campus life at Birsa Nursing Sansthan.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-foreground">Our Location</p>
                          <p className="text-sm text-muted-foreground">Village- Jiyarappa, NH 75, Khunti, Jharkhand</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-foreground">Campus Tours</p>
                          <p className="text-sm text-muted-foreground">Available Mon-Sat, 9:00 AM - 6:00 PM</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-foreground">Book a Tour</p>
                          <p className="text-sm text-muted-foreground">Call us in advance to schedule your visit</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src="/images/HOSPITAL.jpg"
                      alt="Campus visit"
                      className="rounded-xl shadow-card w-full h-64 md:h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                We're Ready to Answer Your Questions
              </h2>
              <p className="text-muted-foreground mb-6">
                Birsa Nursing Sansthan is committed to open and transparent communication. Whether you're a prospective student, parent, healthcare professional, or partner organization, we value your interest and look forward to connecting with you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:06528220000"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Us Now
                </a>
                <a
                  href="mailto: info@bimsr.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;