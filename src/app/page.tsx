import { Categories } from "@/components/layout/categories/Categories";
import { CommunityShowcase } from "@/components/layout/community-showcase/CommunityShowcase";
import { ContactSection } from "@/components/layout/contact-section/ContactSection";
import { FeaturedCourse } from "@/components/layout/featured-course/FeaturedCourse";
import { FinalCTA } from "@/components/layout/final-cta/FinalCTA";
import { Footer } from "@/components/layout/footer/Footer";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/layout/hero/Hero";
import { HowItWorks } from "@/components/layout/how-it-works/HowItWorks";
import { SocialProof } from "@/components/layout/social-proof/SocialProof";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-background-white focus:px-4 focus:py-2 focus:text-text-primary focus:outline-2 focus:outline-offset-2 focus:outline-primary-blue"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Categories />
        <FeaturedCourse />
        <HowItWorks />
        <SocialProof />
        <CommunityShowcase />
        <ContactSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
