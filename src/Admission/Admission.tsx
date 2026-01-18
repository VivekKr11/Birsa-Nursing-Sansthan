import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { ClipboardList, FileText, Users, Stethoscope, GraduationCap, CheckCircle, AlertCircle, Home, Calendar, BookOpen } from "lucide-react";

const applicationFees = [
  { course: "ANM (Auxiliary Nursing & Midwifery)", fee: "Rs. 500/-", icon: FileText },
  { course: "GNM (General Nursing & Midwifery)", fee: "Rs. 500/-", icon: Users },
  { course: "B.Sc. Nursing", fee: "Rs. 500/-", icon: GraduationCap },
];

const selectionSteps = [
  {
    title: "State Entrance Examination",
    description: "Admission is based on the state examination conducted by the Jharkhand Combined Entrance Competitive Examination Board (J. C.E.C.E. B.), organized by the Jharkhand government.",
    icon: FileText,
  },
  {
    title:  "Written Test",
    description:  "There will be a written test of 2 hours at Birsa Institute of Medical Science & Research campus.  Medium of test will be English. Test will comprise Current Affairs, General Knowledge, essay writing, and translation from Hindi to English and English to Hindi.",
    icon: ClipboardList,
  },
  {
    title: "Interview",
    description:  "Those who clear the written test will be called for an interview. The interview will be conducted by a committee, and the decision of the selection committee will be final.",
    icon: Users,
  },
  {
    title: "Document Verification",
    description: "Candidates must bring the original certificates and mark sheets of Class 10th and 10+2/equivalent examination at the time of the interview.",
    icon: CheckCircle,
  },
  {
    title: "Medical Check-up",
    description: "Selected candidates will undergo a medical check-up at our premises. A fee of Rs.150/- will be charged for the medical check-up.",
    icon: Stethoscope,
  },
];

const bscRequirements = [
  "The minimum age for admission shall be 17 years on 31st December of the year in which admission is sought.  The maximum age limit for admission shall be 35 years.",
  "Candidate with Science who have passed the qualifying 12th Standard examination (10+2) and must have obtained a minimum of 45% marks in Physics, Chemistry and Biology taken together. The candidate must have pass marks in English.",
  "English is a compulsory subject in 10+2 for being eligible for admission to B.Sc. (Nursing).",
  "Colour blind candidates are eligible provided that colour corrective contact lens and spectacles are worn by such candidates.",
  "Candidate shall be medically fit.",
  "Married candidates are also eligible for admission.",
  "Students shall be admitted once in a year.",
  "Hostel is mandatory.",
];

const anmRequirements = [
  "The minimum age for admission shall be 17 years on or before 31st December of the year in which admission is sought.",
  "The maximum age for admission shall be 35 years.",
  "Anganwadi, Asha workers and Trained Dias for admission to ANM course in Government Multipurpose Health Worker Training Schools/ANM schools shall be relaxed from 35 years to 42 years.",
  "The minimum educational requirements shall be the passing of 12 years of schooling (10+2 year course) recognized by CBSE/ICSE/SSSCE/HSCE or a recognized equivalent examination board.",
  "Admission is subject to satisfactory medical examination report.",
  "Admission for ANM is restricted only for female candidates.",
  "Hostel is optional.",
];

const gnmRequirements = [
  "10+2 with English and must have obtained a minimum of 40% at the qualifying examination and English individually from any recognized board. However Science is preferable. Three (core elective) subject marks may be taken for calculating the percentage of marks excluding the marks in English. Also, it has to be ensured the candidate has pass marks in English.",
  "10+2 with English having 40% of marks in vocational ANM course from the school recognized by Indian Nursing Council.",
  "10+2 with English having 40% of marks in Vocational Stream-Health care Science from a recognized CBSE board/State/Centre.",
  "Registered ANM with pass marks.",
  "Hostel is mandatory.",
];

const Admission = () => {
  return (
    <>
      <Helmet>
        <title>Admission Procedure | Birsa Nursing Sansthan</title>
        <meta
          name="description"
          content="Learn about the admission procedure for ANM, GNM, and B. Sc. Nursing programs at Birsa Nursing Sansthan.  Application process, selection criteria, and requirements."
        />
      </Helmet>
      <Layout>
        <div className="min-h-screen bg-background">
          {/* Hero Section */}
          <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=2000&q=80"
                alt="Admission"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215,35%,10%)]/95 via-[hsl(215,35%,10%)]/85 to-[hsl(215,35%,10%)]/75" />
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 animate-fade-in-up">
                  <ClipboardList className="w-4 h-4 text-accent" />
                  <span className="font-serif text-sm font-semibold text-white">Admission 2025-26</span>
                </div>

                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                  Admission
                  <span className="block text-accent mt-2">Procedure</span>
                </h1>

                <p className="font-serif text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                  Start your journey towards becoming a professional nurse. Follow our comprehensive admission process to secure your seat in our nursing programs.
                </p>
              </div>
            </div>
          </section>

          {/* Application Procedure */}
          <section className="py-20 lg:py-28 bg-card">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <span className="inline-block font-serif text-sm font-bold text-accent uppercase tracking-wider mb-4">
                    Step 1
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                    Application Procedure
                  </h2>
                </div>

                {/* Application Steps */}
                <div className="bg-background rounded-2xl p-8 md:p-10 shadow-card border border-border mb-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-serif text-lg font-bold text-primary">1</span>
                      </div>
                      <p className="font-serif text-base text-foreground leading-relaxed pt-2">
                        Click online application form and fill details as per the high school certificate.
                      </p>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-serif text-lg font-bold text-primary">2</span>
                      </div>
                      <div className="flex-1 pt-2">
                        <p className="font-serif text-base text-foreground leading-relaxed mb-4">
                          Pay the online application fee for respective courses: 
                        </p>
                        <div className="grid md:grid-cols-3 gap-4">
                          {applicationFees.map((item, index) => (
                            <div key={index} className="bg-card rounded-lg p-4 border border-border">
                              <div className="flex items-center gap-3 mb-2">
                                <item.icon className="w-5 h-5 text-primary" />
                                <p className="font-serif text-sm font-semibold text-foreground">{item.course}</p>
                              </div>
                              <p className="font-serif text-xl font-bold text-primary">{item.fee}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-serif text-lg font-bold text-primary">3</span>
                      </div>
                      <p className="font-serif text-base text-foreground leading-relaxed pt-2">
                        Submit the completed application form online. 
                      </p>
                    </div>
                  </div>

                  {/* Warning */}
                  <div className="mt-8 bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-red-500 mt-0.5 flex-shrink-0" />
                      <p className="font-serif text-base text-foreground">
                        <strong>Important:</strong> The information given in the application form should be correct, any false information may lead to disqualification.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Apply Now Button */}
                <div className="text-center">
                  <button className="font-serif font-semibold px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all shadow-lg text-lg">
                    <a href="/contact">Apply Online Now</a>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Selection Process */}
          <section className="py-20 lg:py-28 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <span className="inline-block font-serif text-sm font-bold text-accent uppercase tracking-wider mb-4">
                    Step 2
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                    Selection Process
                  </h2>
                  <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto">
                    Our comprehensive selection process ensures we admit the most deserving candidates. 
                  </p>
                </div>

                <div className="space-y-6">
                  {selectionSteps.map((step, index) => (
                    <div
                      key={index}
                      className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border hover:shadow-card-hover transition-all"
                    >
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                          <step.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-3">
                            {step.title}
                          </h3>
                          <p className="font-serif text-base text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* General Admission Requirements */}
          <section className="py-20 lg:py-28 bg-card">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <span className="inline-block font-serif text-sm font-bold text-accent uppercase tracking-wider mb-4">
                    Step 3
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                    Admission
                  </h2>
                  <p className="font-serif text-lg text-muted-foreground">
                    General requirements for admission to all programs
                  </p>
                </div>

                <div className="bg-background rounded-2xl p-8 md:p-10 shadow-card border border-border">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-6">
                    Documents Required (Original Certificates):
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" />
                      <span className="font-serif text-base text-foreground leading-relaxed">
                        The minimum age for admission shall be 17 years on or before 1st October of the year in which admission is sought.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" />
                      <span className="font-serif text-base text-foreground leading-relaxed">
                        The maximum age for admission shall be 35 years.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" />
                      <span className="font-serif text-base text-foreground leading-relaxed">
                        The minimum educational requirement shall be passing of Inter-mediate Examination (10 + 2 Years Course), 10 + 2 Class or Central Board Secondary education or a recognized equivalent Public Examination.  Subjects of study must be equivalent to those prescribed by the CBSE for the class XII.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Program-Specific Requirements */}
          <section className="py-20 lg:py-28 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <span className="inline-block font-serif text-sm font-bold text-accent uppercase tracking-wider mb-4">
                    Detailed Requirements
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                    Admission Terms & Conditions
                  </h2>
                  <p className="font-serif text-lg text-muted-foreground">
                    Specific eligibility criteria for each nursing program
                  </p>
                </div>

                <div className="space-y-8">
                  {/* B.Sc. Nursing */}
                  <div className="bg-card rounded-2xl p-8 md:p-10 shadow-card border-2 border-primary/20">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                        <GraduationCap className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                          B.Sc. (Nursing)
                        </h3>
                        <p className="font-serif text-sm text-muted-foreground">4 Years Degree Program</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {bscRequirements.map((req, index) => (
                        <div key={index} className="flex items-start gap-3 pb-4 border-b border-border last:border-b-0 last:pb-0">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                            <span className="font-serif text-xs font-bold text-primary">
                              {index + 1}
                            </span>
                          </div>
                          <p className="font-serif text-base text-foreground leading-relaxed flex-1">
                            {req}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center gap-3 bg-primary/5 rounded-lg p-4">
                      <Home className="w-6 h-6 text-primary flex-shrink-0" />
                      <p className="font-serif text-base font-bold text-primary">
                        Hostel is mandatory for B.Sc. Nursing students
                      </p>
                    </div>
                  </div>

                  {/* ANM */}
                  <div className="bg-card rounded-2xl p-8 md:p-10 shadow-card border-2 border-accent/20">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center">
                        <FileText className="w-8 h-8 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                          ANM (Auxiliary Nursing & Midwifery)
                        </h3>
                        <p className="font-serif text-sm text-muted-foreground">24 Months Diploma Program</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {anmRequirements.map((req, index) => (
                        <div key={index} className="flex items-start gap-3 pb-4 border-b border-border last:border-b-0 last:pb-0">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                            <span className="font-serif text-xs font-bold text-accent">
                              {index + 1}
                            </span>
                          </div>
                          <p className="font-serif text-base text-foreground leading-relaxed flex-1">
                            {req}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center gap-3 bg-accent/5 rounded-lg p-4">
                      <Home className="w-6 h-6 text-accent flex-shrink-0" />
                      <p className="font-serif text-base font-bold text-accent">
                        Hostel is optional for ANM students
                      </p>
                    </div>
                  </div>

                  {/* GNM */}
                  <div className="bg-card rounded-2xl p-8 md:p-10 shadow-card border-2 border-primary/20">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Users className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                          GNM (General Nursing & Midwifery)
                        </h3>
                        <p className="font-serif text-sm text-muted-foreground">3 Years Diploma Program</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-serif text-lg font-bold text-foreground mb-4">
                        Minimum Educational Qualification (Any one of the following):
                      </h4>
                      <div className="space-y-4">
                        {gnmRequirements.map((req, index) => (
                          <div key={index} className="flex items-start gap-3 pb-4 border-b border-border last:border-b-0 last:pb-0">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                              <span className="font-serif text-xs font-bold text-primary">
                                {index === gnmRequirements.length - 1 ? "✓" : String.fromCharCode(65 + index)}
                              </span>
                            </div>
                            <p className="font-serif text-base text-foreground leading-relaxed flex-1">
                              {req}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 bg-primary/5 rounded-lg p-4">
                      <Home className="w-6 h-6 text-primary flex-shrink-0" />
                      <p className="font-serif text-base font-bold text-primary">
                        Hostel is mandatory for GNM students
                      </p>
                    </div>
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
                  Ready to Apply?
                </h2>
                <p className="font-serif text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                  For any queries regarding the admission process, feel free to contact our admissions office.  We're here to help you begin your nursing career. 
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="font-serif font-semibold px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all shadow-lg text-lg">
                    <a href="/contact">Start Your Application</a>
                  </button>
                  <button className="font-serif font-semibold px-8 py-4 bg-transparent border-2 border-border text-foreground rounded-lg hover:bg-card transition-all text-lg">
                    <a href="/admission/fee-structure">View Fee Structure</a>
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

export default Admission;