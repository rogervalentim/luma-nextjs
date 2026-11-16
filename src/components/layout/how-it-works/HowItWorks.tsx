import { Container } from "@/components/ui/container/Container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading/Heading";
import { Paragraph } from "@/components/ui/paragraph/Paragraph";

const steps = [
  {
    step: "STEP 01",
    title: "Choose your focus",
    description:
      "Find courses based on the skill you want to build, not endless content categories.",
    icon: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28Z"
          fill="#E2E8FF"
        />
        <path
          d="M8 14C8 10.6863 10.6863 8 14 8H26C29.3137 8 32 10.6863 32 14V26C32 29.3137 29.3137 32 26 32H14C10.6863 32 8 29.3137 8 26V14Z"
          fill="#3157F6"
        />
      </svg>
    ),
  },
  {
    step: "STEP 02",
    title: "Learn from experience",
    description:
      "Follow concise lessons created by professionals who use these skills.",
    icon: (
      <svg
        width="67"
        height="67"
        viewBox="0 0 67 67"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.97977 7.82518C10.8984 3.50345 15.1465 0.744682 19.4682 1.66329L58.5942 9.97976C62.9159 10.8984 65.6747 15.1465 64.756 19.4682L56.4396 58.5941C55.521 62.9159 51.2728 65.6746 46.9511 64.756L7.82519 56.4396C3.50346 55.5209 0.744694 51.2728 1.66331 46.9511L9.97977 7.82518Z"
          fill="#FFCB9F"
        />
        <path
          d="M29.2097 43.2097C29.2097 35.4777 35.4777 29.2097 43.2097 29.2097C50.9417 29.2097 57.2097 35.4777 57.2097 43.2097C57.2097 50.9417 50.9417 57.2097 43.2097 57.2097C35.4777 57.2097 29.2097 50.9417 29.2097 43.2097Z"
          fill="#FF704D"
        />
      </svg>
    ),
  },
  {
    step: "STEP 03",
    title: "Put it into practice",
    description:
      "Every course includes practical exercises designed to turn knowledge into action.",
    icon: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 12C0 5.37258 5.37258 0 12 0H44C50.6274 0 56 5.37258 56 12V44C56 50.6274 50.6274 56 44 56H12C5.37258 56 0 50.6274 0 44V12Z"
          fill="#FFF1C2"
        />
        <path
          d="M8 38C8 32.4772 12.4772 28 18 28C23.5228 28 28 32.4772 28 38C28 43.5228 23.5228 48 18 48C12.4772 48 8 43.5228 8 38Z"
          fill="#E9D659"
        />
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <Container
      as="section"
      spacing="lg"
      innerClassName="w-full"
      id="about"
      aria-labelledby="how-it-works-heading"
    >
      <Eyebrow className="text-center mb-4">How Luma works</Eyebrow>
      <Heading
        id="how-it-works-heading"
        variant="h1"
        className="text-center mb-10 lg:mb-[102.79px]"
        as="h2"
      >
        Less browsing. More learning.
      </Heading>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
        <div
          className="hidden md:block absolute top-8 left-7 right-[30%] h-px bg-line-1 z-0"
          aria-hidden="true"
        />

        {steps.map((item, index) => (
          <div
            key={index}
            className="relative z-10 flex flex-col items-start h-full"
          >
            <div className="relative flex items-center mb-6">
              {index > 0 && (
                <div
                  className="md:hidden absolute bottom-full left-7 w-px h-8 bg-line-1 -mb-1 z-0"
                  aria-hidden="true"
                />
              )}
              <div className="relative z-10">{item.icon}</div>
            </div>

            <Paragraph size="xs" tone="tertiary" className="mb-2">
              {item.step}
            </Paragraph>

            <Heading variant="h3" className="mb-3" as="h3">
              {item.title}
            </Heading>

            <Paragraph
              size="default"
              tone="secondary"
              className="mt-auto max-w-full lg:max-w-[320px] font-normal"
            >
              {item.description}
            </Paragraph>
          </div>
        ))}
      </div>
    </Container>
  );
}
