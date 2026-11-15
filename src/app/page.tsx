import { Categories } from "@/components/layout/categories/Categories";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/layout/hero/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
      </main>
    </>
  );
}
