import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Shield, AlertTriangle, Phone, Users, FileText, Scale, Heart, Bell, MessageCircle, BookOpen, CheckCircle } from "lucide-react";

const commitments = [
  {
    icon: BookOpen,
    title: "Awareness Programs",
    description: "We conduct regular awareness programs for students to understand the detrimental effects of ragging and the importance of maintaining a friendly and respectful atmosphere.",
    color: "primary",
  },
  {
    icon:  FileText,
    title: "Strict Regulations",
    description:  "We have implemented strict regulations against any form of ragging. Any student found guilty of ragging will face disciplinary action, which may include suspension, expulsion, or legal action.",
    color: "accent",
  },
  {
    icon: Phone,
    title: "24/7 Helpline",
    description: "We provide a dedicated helpline that students can contact in case of any ragging incidents or concerns. This helpline ensures immediate assistance and support.",
    color: "primary",
  },
  {
    icon: MessageCircle,
    title: "Counseling Services",
    description: "Our counseling services are available for both victims and perpetrators. We believe in rehabilitation and guiding students towards positive behavior.",
    color: "accent",
  },
];

const reportingSteps = [
  "Contact our 24/7 Anti-Ragging Helpline immediately",
  "Report to the Anti-Ragging Committee or any faculty member",
  "File a written complaint with the institution's administration",
  "Contact UGC Anti-Ragging Helpline:  1800-180-5522",
  "Email your complaint to helpline@antiragging.in",
  "Use the online complaint system on www.antiragging.in",
];

const AntiRagging = () => {
  return (
    <>
      <Helmet>
        <title>Anti-Ragging Policy | Birsa Nursing Sansthan</title>
        <meta
          name="description"
          content="Birsa Nursing Sansthan is committed to maintaining a ragging-free campus. Learn about our anti-ragging policy, reporting mechanisms, and support services."
        />
      </Helmet>
      <Layout>
        <div className="min-h-screen bg-background">
          {/* Hero Section */}
          <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="/images/image10.jpeg"
                alt="Safe campus environment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215,35%,10%)]/95 via-[hsl(215,35%,10%)]/85 to-[hsl(215,35%,10%)]/75" />
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 backdrop-blur-sm border border-red-500/30 mb-6 animate-fade-in-up">
                  <Shield className="w-4 h-4 text-red-400" />
                  <span className="font-serif text-sm font-semibold text-white">Zero Tolerance Policy</span>
                </div>

                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                  Anti-Ragging
                  <span className="block text-accent mt-2">Policy</span>
                </h1>

                <p className="font-serif text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                  BNS – a safe and inclusive environment for learning and personal growth. We are committed to maintaining a campus free from any form of ragging, harassment, or bullying. 
                </p>
              </div>
            </div>
          </section>

          {/* Introduction */}
          <section className="py-20 lg:py-28 bg-card">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-5xl mx-auto">
                <div className="bg-background rounded-2xl p-8 md:p-12 shadow-card border border-border text-center">
                  <Shield className="w-16 h-16 mx-auto mb-6 text-primary" />
                  <p className="font-serif text-lg md:text-xl text-foreground leading-relaxed">
                    Our anti-ragging policy is designed to ensure the well-being of every student and create a positive and respectful community where everyone feels safe, valued, and protected.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* What is Ragging */}
          <section className="py-20 lg:py-28 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-5xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Image Side */}
                  <div className="relative order-2 lg:order-1">
                    <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                      <img
                        src="/images/image12.jpeg"
                        alt="Students together"
                        className="w-full h-[400px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                          <Heart className="w-8 h-8 text-red-500" />
                          <p className="font-serif text-sm font-bold text-gray-900">
                            Fostering Friendship, Camaraderie & Mutual Respect
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-2xl bg-primary/10" />
                  </div>

                  {/* Content Side */}
                  <div className="order-1 lg:order-2">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 mb-6">
                      <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-400" />
                      <span className="font-serif text-sm font-semibold text-red-600 dark:text-red-400 uppercase tracking-wider">
                        Definition
                      </span>
                    </div>

                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                      What is Ragging?
                    </h2>

                    <p className="font-serif text-base md:text-lg text-foreground leading-relaxed mb-6">
                      Ragging refers to any form of <strong>physical or mental abuse, bullying, intimidation, or harassment</strong> within the premises of an educational institution. 
                    </p>

                    <div className="bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 rounded-lg p-6">
                      <p className="font-serif text-base text-foreground font-semibold">
                        We strictly condemn such activities and are dedicated to creating an atmosphere that fosters friendship, camaraderie, and mutual respect.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Commitment */}
          <section className="py-20 lg:py-28 bg-card">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-block font-serif text-sm font-bold text-accent uppercase tracking-wider mb-4">
                  Our Commitment
                </span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  How We Ensure Safety
                </h2>
                <p className="font-serif text-lg text-muted-foreground">
                  We have implemented comprehensive measures to prevent ragging and ensure a safe learning environment for all students. 
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {commitments.map((commitment, index) => (
                  <article
                    key={index}
                    className="group bg-background rounded-2xl p-8 shadow-card border border-border hover:shadow-card-hover transition-all duration-500"
                  >
                    <div
                      className={`w-16 h-16 mb-6 rounded-xl flex items-center justify-center ${
                        commitment.color === "primary"
                          ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
                          : "bg-accent/10 text-accent group-hover:bg-accent group-hover: text-white"
                      } transition-all duration-300`}
                    >
                      <commitment.icon className="w-8 h-8" />
                    </div>

                    <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-4">
                      {commitment.title}
                    </h3>

                    <p className="font-serif text-base text-muted-foreground leading-relaxed">
                      {commitment.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Legal Consequences */}
          <section className="py-20 lg:py-28 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 mb-6">
                    <Scale className="w-4 h-4 text-red-600 dark:text-red-400" />
                    <span className="font-serif text-sm font-semibold text-red-600 dark:text-red-400 uppercase tracking-wider">
                      Legal Action
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                    Legal Consequences
                  </h2>
                </div>

                <div className="bg-card rounded-2xl p-8 md:p-10 shadow-card border-2 border-red-200 dark:border-red-900">
                  <div className="flex items-start gap-4 mb-6">
                    <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                        Ragging is a Criminal Offense
                      </h3>
                      <p className="font-serif text-base text-foreground leading-relaxed mb-6">
                        Ragging is not only a violation of institutional policies but also a <strong>criminal offense</strong>. Perpetrators may face severe legal consequences, including: 
                      </p>

                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-start gap-3 bg-red-50 dark:bg-red-950/20 rounded-lg p-4">
                          <CheckCircle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-serif text-base font-bold text-foreground mb-1">Heavy Fines</p>
                            <p className="font-serif text-sm text-muted-foreground">Monetary penalties as per law</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 bg-red-50 dark:bg-red-950/20 rounded-lg p-4">
                          <CheckCircle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-serif text-base font-bold text-foreground mb-1">Imprisonment</p>
                            <p className="font-serif text-sm text-muted-foreground">Jail term as prescribed by law</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 bg-red-50 dark: bg-red-950/20 rounded-lg p-4">
                          <CheckCircle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-serif text-base font-bold text-foreground mb-1">Suspension/Expulsion</p>
                            <p className="font-serif text-sm text-muted-foreground">Immediate removal from institution</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 bg-red-50 dark:bg-red-950/20 rounded-lg p-4">
                          <CheckCircle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-serif text-base font-bold text-foreground mb-1">Criminal Record</p>
                            <p className="font-serif text-sm text-muted-foreground">Permanent mark on background</p>
                          </div>
                        </div>
                      </div>

                      <p className="font-serif text-base text-foreground">
                        We work closely with law enforcement to ensure the safety and well-being of our students.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Reporting Section */}
          <section className="py-20 lg:py-28 bg-card">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                    <Bell className="w-4 h-4 text-primary" />
                    <span className="font-serif text-sm font-semibold text-primary uppercase tracking-wider">
                      Report Incidents
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                    Reporting Ragging Incidents
                  </h2>
                  <p className="font-serif text-lg text-muted-foreground">
                    If you witness or experience ragging, report it immediately through any of the following channels:
                  </p>
                </div>

                <div className="bg-background rounded-2xl p-8 md:p-10 shadow-card border border-border">
                  <ul className="space-y-4">
                    {reportingSteps.map((step, index) => (
                      <li key={index} className="flex items-start gap-4 pb-4 border-b border-border last:border-b-0 last:pb-0">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="font-serif text-lg font-bold text-primary">
                            {index + 1}
                          </span>
                        </div>
                        <p className="font-serif text-base text-foreground leading-relaxed flex-1 pt-2">
                          {step}
                        </p>
                      </li>
                    ))}
                  </ul>

                  {/* Emergency Contact Box */}
                  <div className="mt-8 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-2 border-red-200 dark:border-red-900 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Phone className="w-8 h-8 text-red-600 dark:text-red-400" />
                      <h3 className="font-serif text-xl font-bold text-foreground">
                        24/7 Emergency Helpline
                      </h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-serif text-sm text-muted-foreground mb-1">BNS Anti-Ragging Helpline</p>
                        <p className="font-serif text-2xl font-bold text-primary">+91 8877880011</p>
                      </div>
                      <div>
                        <p className="font-serif text-sm text-muted-foreground mb-1">UGC National Helpline</p>
                        <p className="font-serif text-2xl font-bold text-primary">1800-180-5522</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Join Us Section */}
          <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-accent/5">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-5xl mx-auto">
                <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card border border-border text-center">
                  <Users className="w-16 h-16 mx-auto mb-6 text-primary" />
                  
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                    Join Us in Creating a Safe Environment
                  </h2>

                  <p className="font-serif text-base md:text-lg text-foreground leading-relaxed mb-6 max-w-3xl mx-auto">
                    We believe that each member of our community plays a crucial role in preventing ragging. By treating each other with <strong>respect, kindness, and empathy</strong>, we can create a positive and inclusive space for everyone to thrive. 
                  </p>

                  <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-6 mb-8">
                    <p className="font-serif text-base md:text-lg text-foreground font-semibold">
                      Thank you for being a part of Birsa Nursing Sansthan (BNS). Let us work together to build a community where every individual feels valued and protected.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/contact" className="font-serif font-semibold px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all shadow-lg text-lg inline-block">
                      Report an Incident
                    </a>
                    <a href="/about/about-us" className="font-serif font-semibold px-8 py-4 bg-transparent border-2 border-border text-foreground rounded-lg hover:bg-card transition-all text-lg inline-block">
                      Learn More About BNS
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default AntiRagging;