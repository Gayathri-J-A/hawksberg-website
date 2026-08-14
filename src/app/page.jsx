"use client";

import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import TrainingGrid from "@/components/TrainingGrid";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
// import ValuesStrip from "@/components/ValuesStrip";
// import Testimonials from "@/components/Testimonials";
// import Clients from "@/components/Clients";
import EnquiryForm from "@/components/EnquiryForm";
// import CompanyExperience from "@/components/CompanyExperience";
// import Hero from "@/components/Hero";
import HeroCarousel from "@/components/HeroCarousel";
import { lazy, Suspense } from "react";

const ValuesStrip = lazy(() => import("@/components/ValuesStrip"));
const Clients = lazy(() => import("@/components/Clients"));
// const HomeClients = lazy(() => import("@/components/HomeClients"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const CompanyExperience = lazy(() => import("@/components/CompanyExperience"));

export default function Home() {
  return (
    <Layout>
      {/* <Hero /> */}
      <HeroCarousel />
      <ServicesGrid />
      <AboutSection />
      {/* <ValuesStrip />
      <TrainingGrid />
      <Clients />
      <Testimonials />
      <CompanyExperience /> */}
      {/* <Suspense fallback={<div className="h-32" />}>
  <ValuesStrip />
</Suspense>

<TrainingGrid />

<Suspense fallback={<div className="h-32" />}>
  <Clients />
</Suspense>

<Suspense fallback={<div className="h-32" />}>
  <Testimonials />
</Suspense>

<Suspense fallback={<div className="h-32" />}>
  <CompanyExperience />
</Suspense> */}
{/* <Suspense fallback={<div className="h-32" />}>
  <ValuesStrip />
</Suspense>

<TrainingGrid />

<Suspense fallback={<div className="h-32" />}>
  <HomeClients />
</Suspense>

<Suspense fallback={<div className="h-32" />}>
  <Testimonials />
</Suspense>

<Suspense fallback={<div className="h-32" />}>
  <CompanyExperience />
</Suspense> */}
<Suspense fallback={<div className="h-32" />}>
  <ValuesStrip />
</Suspense>

<TrainingGrid />

<Suspense fallback={<div className="h-32" />}>
  <Clients />
</Suspense>

<Suspense fallback={<div className="h-32" />}>
  <Testimonials />
</Suspense>

<Suspense fallback={<div className="h-32" />}>
  <CompanyExperience />
  <CTASection />
</Suspense>
      {/* <section className="container-x py-20">
        <EnquiryForm />
      </section> */}
      <section className="container-x pt-16 pb-0">
  <EnquiryForm />
</section>
    </Layout>
  );
}