import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import Image from "next/image";

const STATS = [
  { value: "24K+", label: "active learners" },
  { value: "120+", label: "expert-led courses" },
  { value: "92%", label: "complete their first course" },
];

export function SocialProof() {
  return (
    <section
      aria-label="Social proof and platform statistics"
      className="w-full bg-background-white"
    >
      <Container
        as="div"
        spacing="lg"
        innerClassName="flex flex-col lg:flex-row lg:items-center gap-[60px] lg:gap-33.75 w-full"
      >
        <figure className="w-full lg:max-w-150">
          <svg
            width="24"
            height="22"
            viewBox="0 0 24 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="mb-4 text-primary-blue"
          >
            <path
              d="M23.7109 4.375C23.7109 5.41667 23.3724 7.42188 22.6953 10.3906C22.0182 13.3594 21.263 17.2135 20.4297 21.9531H18.0078C17.4089 18.099 16.7318 14.4271 15.9766 10.9375C15.2474 7.44792 14.8828 5.26042 14.8828 4.375C14.8828 3.17708 15.2474 2.14844 15.9766 1.28906C16.7057 0.429688 17.8125 0 19.2969 0C20.7292 0 21.8229 0.429688 22.5781 1.28906C23.3333 2.14844 23.7109 3.17708 23.7109 4.375ZM8.78906 4.375C8.78906 5.41667 8.45052 7.42188 7.77344 10.3906C7.09635 13.3594 6.34115 17.2135 5.50781 21.9531H3.125C2.42188 17.526 1.71875 13.75 1.01562 10.625C0.338542 7.47396 0 5.39062 0 4.375C0 3.17708 0.364583 2.14844 1.09375 1.28906C1.82292 0.429688 2.92969 0 4.41406 0C5.82031 0 6.90104 0.429688 7.65625 1.28906C8.41146 2.14844 8.78906 3.17708 8.78906 4.375Z"
              fill="currentColor"
            />
          </svg>

          <blockquote className="mb-6 sm:mb-8">
            <Heading variant="h2" className="max-w-full lg:max-w-150" as="h3">
              The lessons are short enough to fit into my week, but detailed
              enough that I actually leave with something I can use.
            </Heading>
          </blockquote>

          <figcaption className="flex items-center gap-3.5 sm:gap-4">
            <Image
              src="/alex-morgan.png"
              alt="Alex Morgan"
              width={48}
              height={48}
              className="size-11 sm:size-12 shrink-0 rounded-full object-cover"
            />
            <div className="flex flex-col gap-0.5">
              <Paragraph size="default" className="font-bold leading-tight">
                Alex Morgan
              </Paragraph>
              <Paragraph size="sm" tone="secondary" className="leading-tight">
                Product Manager
              </Paragraph>
            </div>
          </figcaption>
        </figure>

        <div className="grid grid-cols-3 lg:flex lg:flex-col lg:gap-5  lg:border-l border-line-1 lg:pl-12 shrink-0">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <Heading color="primaryBlue" className="mb-1" as="h3">
                {stat.value}
              </Heading>
              <Paragraph size="sm" tone="tertiary">
                {stat.label}
              </Paragraph>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
