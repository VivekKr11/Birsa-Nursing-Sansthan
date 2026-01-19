import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { IndianRupee, BookOpen, Home, GraduationCap, FileText, Building2, CreditCard, Info } from "lucide-react";

const anmFees = [
  { particular: "Admission", year1: "10,000/-", year2: "—" },
  { particular: "Tuition Fee", year1: "45,000/-", year2: "45,000/-" },
  { particular: "Library Fee", year1: "3,000/-", year2: "3,000/-" },
  { particular:  "Clinical Fee", year1: "5,000/-", year2: "5,000/-" },
  { particular: "Laboratory Fee", year1: "3,000/-", year2: "3,000/-" },
  { particular:  "Examination Fee", year1: "4,000/-", year2: "4,000/-" },
  { particular: "Total", year1: "70,000/-", year2: "60,000/-", isTotal: true },
];

const gnmFees = [
  { particular: "Admission", year1: "10,000/-", year2: "—", year3: "—" },
  { particular: "Tuition Fee", year1: "70,000/-", year2: "70,000/-", year3: "70,000/-" },
  { particular: "Library Fee", year1: "3,000/-", year2: "3,000/-", year3: "3,000/-" },
  { particular: "Clinical Fee", year1: "5,000/-", year2: "5,000/-", year3: "5,000/-" },
  { particular: "Laboratory Fee", year1: "3,000/-", year2: "3,000/-", year3: "3,000/-" },
  { particular: "Examination Fee", year1: "4,000/-", year2: "4,000/-", year3: "4,000/-" },
  { particular: "Total", year1: "95,000/-", year2: "85,000/-", year3: "85,000/-", isTotal: true },
];

const bscFees = [
  { particular:  "Admission", year1: "10,000/-", year2: "—", year3: "—", year4: "—" },
  { particular: "Tuition Fee", year1: "80,000/-", year2: "80,000/-", year3: "80,000/-", year4: "80,000/-" },
  { particular: "Library Fee", year1: "3,000/-", year2: "3,000/-", year3: "3,000/-", year4: "3,000/-" },
  { particular: "Clinical Fee", year1: "5,000/-", year2: "5,000/-", year3: "5,000/-", year4: "5,000/-" },
  { particular:  "Laboratory Fee", year1: "3,000/-", year2: "3,000/-", year3: "3,000/-", year4: "3,000/-" },
  { particular: "Examination Fee", year1: "4,000/-", year2: "4,000/-", year3: "4,000/-", year4: "4,000/-" },
  { particular: "Total", year1: "1,05,000/-", year2: "95,000/-", year3: "95,000/-", year4: "95,000/-", isTotal: true },
];

const additionalCharges = [
  { item: "Hostel & Mess Fees", amount: "Rs.  4,000/- Per Month", icon: Home },
  { item: "Books & Kit", amount: "Rs. 6,000/- One Time", icon: BookOpen },
  { item: "Uniform Fee", amount: "Rs. 4,000/- One Time", icon: GraduationCap },
];

const additionalInfo = [
  "All fees are to be paid at the beginning of each academic year",
  "Hostel accommodation is optional but recommended",
  "Miscellaneous fees include library, laboratory, and other facilities",
  "Fees can be paid through DD/NEFT/Online Payment",
];

const FeeStructure = () => {
  return (
    <>
      <Helmet>
        <title>Fee Structure | Birsa Nursing Sansthan</title>
        <meta
          name="description"
          content="View detailed fee structure for ANM, GNM, and B.Sc. Nursing programs at Birsa Nursing Sansthan.  Transparent pricing with no hidden costs."
        />
      </Helmet>
      <Layout>
        <div className="min-h-screen bg-background">
          {/* Hero Section */}
          <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=2000&q=80"
                alt="Fee Structure"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215,35%,10%)]/95 via-[hsl(215,35%,10%)]/85 to-[hsl(215,35%,10%)]/75" />
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <div className="max-w-4xl">
                <span className="inline-block font-serif text-sm font-bold text-accent uppercase tracking-wider mb-4 animate-fade-in">
                  Admission Information
                </span>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                  Fee Structure
                  <span className="block text-accent mt-2"><span className="font-sans">2025-26</span> Session</span>
                </h1>
                <p className="font-serif text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                  Transparent and affordable fee structure for all our nursing programs.  Invest in your future with quality education at competitive costs.
                </p>
              </div>
            </div>
          </section>

          {/* ANM Fee Structure */}
          <section className="py-20 lg:py-28 bg-card">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                    <FileText className="w-4 h-4 text-primary" />
                    <span className=" text-sm font-semibold text-primary">24 Months Program</span>
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                    ANM Fee Structure
                  </h2>
                  <p className="font-serif text-base text-muted-foreground">
                    Session <span className="font-sans">2025 - 2027</span>
                  </p>
                </div>

                {/* ANM Table */}
                <div className="bg-background rounded-2xl shadow-card border border-border overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-primary/5 border-b border-border">
                          <th className="font-serif text-left text-base font-bold text-foreground px-6 py-4">Particulars</th>
                          <th className="font-serif text-center text-base font-bold text-foreground px-6 py-4">1st Year (12 Months)</th>
                          <th className="font-serif text-center text-base font-bold text-foreground px-6 py-4">2nd Year (12 Months)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {anmFees. map((row, index) => (
                          <tr
                            key={index}
                            className={`border-b border-border last:border-b-0 ${
                              row.isTotal ?  "bg-accent/5" : "hover:bg-muted/50"
                            }`}
                          >
                            <td className={`font-serif px-6 py-4 text-base ${row.isTotal ? "font-bold text-foreground" : "text-foreground"}`}>
                              {row.particular}
                            </td>
                            <td className={` text-center px-6 py-4 text-base ${row. isTotal ? "font-bold text-primary" : "text-muted-foreground"}`}>
                              {row.year1}
                            </td>
                            <td className={` text-center px-6 py-4 text-base ${row.isTotal ? "font-bold text-primary" : "text-muted-foreground"}`}>
                              {row.year2}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="bg-primary/10 px-6 py-4 border-t-2 border-primary">
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-lg font-bold text-foreground">Grand Total</span>
                      <span className=" text-2xl md:text-3xl font-bold text-primary">₹ 1,30,000/-</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* GNM Fee Structure */}
          <section className="py-20 lg:py-28 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
                    <FileText className="w-4 h-4 text-accent" />
                    <span className=" text-sm font-semibold text-accent">3 Years Program</span>
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                    GNM Fee Structure
                  </h2>
                  <p className="font-serif text-base text-muted-foreground">
                    Session October <span className="font-sans">2025 – September 2028</span> 
                  </p>
                </div>

                {/* GNM Table */}
                <div className="bg-card rounded-2xl shadow-card border border-border overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-accent/5 border-b border-border">
                          <th className="font-serif text-left text-base font-bold text-foreground px-6 py-4">Particulars</th>
                          <th className="font-serif text-center text-base font-bold text-foreground px-6 py-4">1st Year (12 Months)</th>
                          <th className="font-serif text-center text-base font-bold text-foreground px-6 py-4">2nd Year (12 Months)</th>
                          <th className="font-serif text-center text-base font-bold text-foreground px-6 py-4">3rd Year (12 Months)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {gnmFees.map((row, index) => (
                          <tr
                            key={index}
                            className={`border-b border-border last:border-b-0 ${
                              row. isTotal ? "bg-accent/5" : "hover:bg-muted/50"
                            }`}
                          >
                            <td className={`font-serif px-6 py-4 text-base ${row. isTotal ? "font-bold text-foreground" : "text-foreground"}`}>
                              {row.particular}
                            </td>
                            <td className={` text-center px-6 py-4 text-base ${row.isTotal ? "font-bold text-accent" : "text-muted-foreground"}`}>
                              {row.year1}
                            </td>
                            <td className={` text-center px-6 py-4 text-base ${row. isTotal ? "font-bold text-accent" : "text-muted-foreground"}`}>
                              {row.year2}
                            </td>
                            <td className={` text-center px-6 py-4 text-base ${row.isTotal ? "font-bold text-accent" : "text-muted-foreground"}`}>
                              {row.year3}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="bg-accent/10 px-6 py-4 border-t-2 border-accent">
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-lg font-bold text-foreground">Grand Total</span>
                      <span className=" text-2xl md:text-3xl font-bold text-accent">₹ 2,65,000/-</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* B.Sc. Nursing Fee Structure */}
          <section className="py-20 lg:py-28 bg-card">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                    <FileText className="w-4 h-4 text-primary" />
                    <span className=" text-sm font-semibold text-primary">4 Years Program</span>
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                    B. Sc. Nursing Fee Structure
                  </h2>
                  <p className="font-serif text-base text-muted-foreground">
                    Session October <span className="font-sans">2025 – September 2029</span>
                  </p>
                </div>

                {/* B.Sc. Table */}
                <div className="bg-background rounded-2xl shadow-card border border-border overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-primary/5 border-b border-border">
                          <th className="font-serif text-left text-base font-bold text-foreground px-6 py-4">Particulars</th>
                          <th className="font-serif text-center text-base font-bold text-foreground px-6 py-4">1st Year (12 Months)</th>
                          <th className="font-serif text-center text-base font-bold text-foreground px-6 py-4">2nd Year (12 Months)</th>
                          <th className="font-serif text-center text-base font-bold text-foreground px-6 py-4">3rd Year (12 Months)</th>
                          <th className="font-serif text-center text-base font-bold text-foreground px-6 py-4">4th Year (12 Months)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {bscFees.map((row, index) => (
                          <tr
                            key={index}
                            className={`border-b border-border last:border-b-0 ${
                              row. isTotal ? "bg-primary/5" : "hover:bg-muted/50"
                            }`}
                          >
                            <td className={`font-serif px-6 py-4 text-base ${row. isTotal ? "font-bold text-foreground" : "text-foreground"}`}>
                              {row.particular}
                            </td>
                            <td className={` text-center px-6 py-4 text-base ${row.isTotal ? "font-bold text-primary" : "text-muted-foreground"}`}>
                              {row.year1}
                            </td>
                            <td className={` text-center px-6 py-4 text-base ${row.isTotal ? "font-bold text-primary" : "text-muted-foreground"}`}>
                              {row.year2}
                            </td>
                            <td className={` text-center px-6 py-4 text-base ${row.isTotal ? "font-bold text-primary" : "text-muted-foreground"}`}>
                              {row.year3}
                            </td>
                            <td className={` text-center px-6 py-4 text-base ${row.isTotal ?  "font-bold text-primary" : "text-muted-foreground"}`}>
                              {row.year4}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="bg-primary/10 px-6 py-4 border-t-2 border-primary">
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-lg font-bold text-foreground">Grand Total</span>
                      <span className=" text-2xl md:text-3xl font-bold text-primary">₹ 3,90,000/-</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Additional Charges */}
          <section className="py-20 lg:py-28 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <span className="inline-block font-serif text-sm font-bold text-accent uppercase tracking-wider mb-4">
                    Additional Costs
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                    Additional Charges
                  </h2>
                  <p className="font-serif text-base text-muted-foreground">
                    In addition to the program fees, the following charges are also to be borne by the candidates
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {additionalCharges.map((charge, index) => (
                    <div
                      key={index}
                      className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-card-hover transition-all text-center"
                    >
                      <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <charge.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-serif text-lg font-bold text-foreground mb-3">
                        {charge.item}
                      </h3>
                      <p className=" text-xl font-bold text-primary">
                        {charge.amount}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Note Box */}
                <div className="mt-12 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <Info className="w-6 h-6 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-serif text-lg font-bold text-foreground mb-2">
                        Important Note
                      </h4>
                      <p className="font-serif text-base text-foreground">
                        The additional charges mentioned above are applicable to all programs (ANM, GNM, and B.Sc. Nursing) and must be paid separately as per the specified schedule.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Additional Information */}
          <section className="py-20 lg:py-28 bg-card">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                    Additional Information
                  </h2>
                </div>

                <div className="bg-background rounded-2xl p-8 md:p-10 shadow-card border border-border">
                  <ul className="space-y-4">
                    {additionalInfo.map((info, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <span className="font-serif text-xs font-bold text-primary">
                            {index + 1}
                          </span>
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

          {/* Bank Details */}
          <section className="py-20 lg:py-28 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
                    <CreditCard className="w-4 h-4 text-accent" />
                    <span className="font-serif text-sm font-semibold text-accent">Payment Information</span>
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                    Bank Details
                  </h2>
                  <p className="font-serif text-base text-muted-foreground">
                    For fee payment through DD/NEFT/Online Transfer
                  </p>
                </div>

                <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-10 shadow-card border border-border">
                  <div className="flex items-center gap-3 mb-8">
                    <Building2 className="w-10 h-10 text-primary" />
                    <h3 className="font-serif text-2xl font-bold text-foreground">
                      Abhyuday Seva Sansthan
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-border">
                      <p className="font-serif text-sm text-muted-foreground mb-2">Bank Name</p>
                      <p className="font-serif text-lg font-bold text-foreground">Union Bank of India</p>
                    </div>

                    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-border">
                      <p className="font-serif text-sm text-muted-foreground mb-2">Branch</p>
                      <p className="font-serif text-lg font-bold text-foreground">Mahabir Chowk, Ranchi</p>
                    </div>

                    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-border">
                      <p className="font-serif text-sm text-muted-foreground mb-2">Account Number</p>
                      <p className="font-serif text-lg font-bold text-primary">722501010050443</p>
                    </div>

                    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-border">
                      <p className="font-serif text-sm text-muted-foreground mb-2">IFSC Code</p>
                      <p className="font-serif text-lg font-bold text-primary">UBIN0572250</p>
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
                  Ready to Begin Your Journey? 
                </h2>
                <p className="font-serif text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                  For any queries regarding fee structure or payment process, feel free to contact our admissions office.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="font-serif font-semibold px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all shadow-lg text-lg">
                    <a href="/contact">Contact Admissions</a>
                  </button>
                  <button className="font-serif font-semibold px-8 py-4 bg-transparent border-2 border-border text-foreground rounded-lg hover:bg-card transition-all text-lg">
                    <a href="/courses/anm">View Programs</a>
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

export default FeeStructure;