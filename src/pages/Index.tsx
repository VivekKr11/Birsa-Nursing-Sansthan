import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import InstitutionsSection from "@/components/home/InstitutionsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Abhyuday Seva Sansthan</title>
        <meta
          name="description"
          content=""
        />
        <meta name="keywords" content=" " />
      </Helmet>
      <Layout>
        <HeroSection />
        <AboutPreview />
        <InstitutionsSection />
        <WhyChooseUs />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
