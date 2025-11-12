import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Credentials } from "@/components/credentials";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { CaseStudies } from "@/components/case-studies";
import { Testimonials } from "@/components/testimonials";
import { Faqs } from "@/components/faqs";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Credentials />
        <Services />
        <Process />
        <CaseStudies />
        <Testimonials />
        <Faqs />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
