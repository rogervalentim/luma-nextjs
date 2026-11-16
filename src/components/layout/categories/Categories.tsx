import { Container } from "@/components/ui/container/Container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading/Heading";
import { Paragraph } from "@/components/ui/paragraph/Paragraph";
import { ServiceCard } from "@/components/ui/service-card/ServiceCard";

const categories = [
  {
    step: "01",
    title: "Product Design",
    description: "Turn complex problems into clear, useful experiences.",
    href: "/#course",
  },
  {
    step: "02",
    title: "Technology",
    description:
      "Build a stronger understanding of the tools shaping digital products.",
    href: "/#course",
  },
  {
    step: "03",
    title: "Business",
    description:
      "Develop practical skills for better decisions and stronger teams.",
    href: "/#course",
  },
  {
    step: "04",
    title: "Creative",
    description: "Explore new ways to communicate, create and tell stories.",
    href: "/#course",
  },
];

export function Categories() {
  return (
    <section className="bg-background-white w-full" id="courses">
      <Container as="div" spacing="lg">
        <Eyebrow className="mb-4">Find your next skill</Eyebrow>
        <Heading className="max-w-full lg:max-w-140 mb-4" variant="h1" as="h2">
          Learn something worth knowing.
        </Heading>
        <Paragraph
          className="max-w-full lg:max-w-140 mb-12 lg:mb-10"
          tone="secondary"
        >
          Short, practical courses designed around skills you can put to work
          immediately.
        </Paragraph>

        <div className="grid grid-cols-1 gap-4 lg:gap-5 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <ServiceCard
              key={category.step}
              step={category.step}
              title={category.title}
              description={category.description}
              href={category.href}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
