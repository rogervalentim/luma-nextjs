import { Categories } from "@/components/layout/categories/Categories";
import { FeaturedCourse } from "@/components/layout/featured-course/FeaturedCourse";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/layout/hero/Hero";
import { HowItWorks } from "@/components/layout/how-it-works/HowItWorks";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedCourse />
        <HowItWorks />
      </main>
    </>
  );
}
