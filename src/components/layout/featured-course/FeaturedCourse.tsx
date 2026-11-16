import { Button } from "@/components/ui";
import { Container } from "@/components/ui/container/Container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading/Heading";
import { Paragraph } from "@/components/ui/paragraph/Paragraph";
import Image from "next/image";

const COURSE_METADATA = ["8 lessons", "2h 40min", "Intermediate"] as const;

export function FeaturedCourse() {
  return (
    <section
      aria-labelledby="featured-course-heading"
      className="w-full bg-primary-blue"
      id="course"
    >
      <Container
        as="div"
        spacing="lg"
        innerClassName="flex flex-col lg:flex-row items-center justify-between gap-[37.88px] lg:gap-[60px]"
      >
        <div className="relative w-full max-w-134.5 lg:w-fit shrink-0">
          <div className="absolute -top-3 -left-2 sm:-left-3 z-10 w-fit py-1.5 px-3 bg-secondary-yellow rounded-md shadow-sm">
            <Paragraph
              tone="primary"
              size="xs"
              className="uppercase font-medium"
            >
              Featured Course
            </Paragraph>
          </div>

          <Image
            src="/product-design.png"
            alt="Product design course — student working on interface designs"
            width={538}
            height={408}
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="max-w-full h-auto rounded-2xl object-cover"
          />
        </div>

        <div className="w-full lg:flex-1 max-w-134.5 lg:max-w-none">
          <Eyebrow variant="white" className="mb-4">
            Most popular this month
          </Eyebrow>

          <Heading
            id="featured-course-heading"
            variant="h1"
            color="white"
            as="h2"
            className="max-w-full lg:max-w-134 mb-5"
          >
            Designing products people understand.
          </Heading>

          <Paragraph
            size="md"
            tone="white"
            className="max-w-full lg:max-w-134 mb-6"
          >
            Learn how to turn complex workflows into simple, intentional product
            experiences through research, structure and thoughtful interaction
            design.
          </Paragraph>

          <Paragraph size="md" tone="white" className="mb-6">
            with Maya Chen · Senior Product Designer
          </Paragraph>

          {/* Tags / Badges com flex-wrap para não quebrar em telas muito pequenas */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-8">
            {COURSE_METADATA.map((item) => (
              <Paragraph key={item} variant="outlined" size="sm" tone="white">
                {item}
              </Paragraph>
            ))}
          </div>

          {/* Botões: empilhados no mobile, lado a lado a partir de 'sm' */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Button
              variant="secondary"
              size="md"
              className="w-full sm:w-fit"
              href="#cta"
            >
              View course
            </Button>

            <Button
              variant="ghost"
              size="md"
              className="w-full sm:w-fit inline-flex items-center justify-center gap-2"
              href="/#courses"
            >
              Browse all courses
              <svg
                aria-hidden="true"
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.75 5.75H12.75M7.75 10.75L12.75 5.75L7.75 0.75"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="currentColor"
                />
              </svg>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
