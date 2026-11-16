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
      <Header />
      <main>
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
