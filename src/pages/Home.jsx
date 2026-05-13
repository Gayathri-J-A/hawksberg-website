import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import TrainingGrid from "@/components/TrainingGrid";
import AboutSection from "@/components/AboutSection";
import ValuesStrip from "@/components/ValuesStrip";
import Testimonials from "@/components/Testimonials";
import Clients from "@/components/Clients";
import EnquiryForm from "@/components/EnquiryForm";
import CompanyExperience from "@/components/CompanyExperience";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <ServicesGrid />
      <AboutSection />
      <ValuesStrip />
      <TrainingGrid />
      <Clients />
      <Testimonials />
      <CompanyExperience />
      <section className="container-x py-20">
        <EnquiryForm />
      </section>
    </Layout>
  );
}
