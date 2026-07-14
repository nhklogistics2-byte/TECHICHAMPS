"use client";

import { ConsultationProvider } from "@/components/site/consultation-context";
import { ConsultationDialog } from "@/components/site/consultation-dialog";
import { RouterProvider, useRouter } from "@/components/site/page-router";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { HomePage } from "@/components/site/pages/home-page";
import { WorkPage } from "@/components/site/pages/work-page";
import { ProcessPage } from "@/components/site/pages/process-page";
import { AboutPage } from "@/components/site/pages/about-page";
import { ReviewsPage } from "@/components/site/pages/reviews-page";
import { FaqPage } from "@/components/site/pages/faq-page";
import { ContactPage } from "@/components/site/pages/contact-page";
import { ServiceDetailPage } from "@/components/site/pages/service-detail-page";
import { getServiceBySlug } from "@/lib/services-data";

function PageRouter() {
  const { page } = useRouter();

  switch (page.name) {
    case "home":
      return <HomePage />;
    case "work":
      return <WorkPage />;
    case "process":
      return <ProcessPage />;
    case "about":
      return <AboutPage />;
    case "reviews":
      return <ReviewsPage />;
    case "faq":
      return <FaqPage />;
    case "contact":
      return <ContactPage />;
    case "service": {
      const service = getServiceBySlug(page.slug);
      if (!service) {
        return <HomePage />;
      }
      return <ServiceDetailPage key={service.slug} service={service} />;
    }
    default:
      return <HomePage />;
  }
}

export default function Home() {
  return (
    <RouterProvider>
      <ConsultationProvider>
        <div className="flex min-h-screen flex-col bg-background">
          <Navbar />
          <main className="flex-1">
            <PageRouter />
          </main>
          <Footer />
          <ConsultationDialog />
        </div>
      </ConsultationProvider>
    </RouterProvider>
  );
}
