"use client";

import { HeroSection } from "../hero-section";
import { TrustedBrandsSection } from "../sections/trusted-brands-section";
import { ServicesSection } from "../sections/services-section";
import { CaseStudiesSection } from "../sections/case-studies-section";
import { WhyUsSection } from "../sections/why-us-section";
import { ProcessSection } from "../sections/process-section";
import { TestimonialsSection } from "../sections/testimonials-section";
import { FaqSection } from "../sections/faq-section";
import { FinalCtaSection } from "../sections/final-cta-section";

export function HomePage() {
  return (
    <>
      <HeroSection
        eyebrow="Strategy. Design. Technology. Growth."
        title="Digital Solutions That Drive"
        highlight="Real Business Growth"
        description="Techi Champs partners with ambitious businesses to grow through branding, websites, mobile applications, digital marketing, and AI automation — engineered to convert and built to scale."
        primaryCta={{ label: "Book a Free Consultation" }}
        secondaryCta={{ label: "View Our Work" }}
        laptopHeadline="Building Experiences.\nDelivering Results."
        laptopSubtext="Let's Build Together"
        phoneMetricLabel="Revenue Growth"
        phoneMetricValue="+240%"
        stat1={{ label: "Revenue Growth", value: "250%" }}
        stat2={{ label: "Higher Engagement", value: "70%" }}
        stat3={{ label: "Operational Efficiency", value: "45%" }}
        showStats
        stats={[
          { value: "200", suffix: "+", label: "Happy Clients" },
          { value: "320", suffix: "+", label: "Projects Delivered" },
          { value: "98", suffix: "%", label: "Client Satisfaction" },
          { value: "6", suffix: "+", label: "Years of Experience" },
        ]}
        trustIndicator
      />
      <TrustedBrandsSection />
      <ServicesSection />
      <CaseStudiesSection limit={3} />
      <WhyUsSection />
      <ProcessSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
