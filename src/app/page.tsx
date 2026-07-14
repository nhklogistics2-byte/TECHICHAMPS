"use client";

import { ConsultationProvider } from "@/components/site/consultation-context";
import { ConsultationDialog } from "@/components/site/consultation-dialog";
import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { TrustedBrands } from "@/components/site/trusted-brands";
import { Services } from "@/components/site/services";
import { CaseStudies } from "@/components/site/case-studies";
import { WhyUs } from "@/components/site/why-us";
import { Process } from "@/components/site/process";
import { Testimonials } from "@/components/site/testimonials";
import { FAQ } from "@/components/site/faq";
import { FinalCTA } from "@/components/site/final-cta";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <ConsultationProvider>
      <div className="flex min-h-screen flex-col bg-background">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <TrustedBrands />
          <Services />
          <CaseStudies />
          <WhyUs />
          <Process />
          <Testimonials />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
        <ConsultationDialog />
      </div>
    </ConsultationProvider>
  );
}
