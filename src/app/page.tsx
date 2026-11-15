import { Categories } from "@/components/layout/categories/Categories";
import { FeaturedCourse } from "@/components/layout/featured-course/FeaturedCourse";
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
      </main>
    </>
  );
}
