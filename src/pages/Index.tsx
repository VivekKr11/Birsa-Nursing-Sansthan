import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import InstitutionsSection from "@/components/home/InstitutionsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTASection from "@/components/home/CTASection";
import CoursesSection from "@/components/home/CoursesSection";
import FounderSection from './../components/home/FounderSection';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Birsa Nursing Sansthan</title>
        <meta
          name="description"
          content=""
        />
        <meta name="keywords" content=" " />
      </Helmet>
      <Layout>
        <HeroSection />
        <AboutPreview />
        <CoursesSection/>
        <FounderSection/>
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
