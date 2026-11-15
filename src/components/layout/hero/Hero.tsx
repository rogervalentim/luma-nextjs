import Image from "next/image";
import { Button } from "../../ui";
import { Eyebrow } from "../../ui/eyebrow";
import { Heading } from "../../ui/heading/Heading";
import { Paragraph } from "../../ui/paragraph/Paragraph";
import { Badge } from "@/components/ui/badge/Badge";
import { AvatarGroup } from "@/components/ui/avatar-group/AvatarGroup";
import { Container } from "@/components/ui/container/Container";

const avatars = [
  { src: "/learners/learner-1.png", alt: "Usuária 1" },
  { src: "/learners/learner-2.png", alt: "Usuário 2" },
  { src: "/learners/learner-3.png", alt: "Usuário 3" },
];

export function Hero() {
  return (
    <Container
      as="section"
      spacing="lg"
      className="overflow-x-clip px-6 sm:px-10  xl:px-0"
      innerClassName="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-15"
    >
      <div className="w-full lg:max-w-140">
        <Eyebrow variant="blue" className="mb-4">
          Learn at your own pace
        </Eyebrow>
        <Heading variant="display" className="mb-6">
          Build skills that
          <br /> actually move you
          <br /> forward.
        </Heading>
        <Paragraph className="max-w-full lg:max-w-120 mb-8">
          Practical courses taught by people who do the work every day. Learn
          design, technology, business and more — one focused lesson at a time.
        </Paragraph>
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <Button variant="primary" size="md" className="w-full sm:w-fit">
            Explore courses
          </Button>
          <Button variant="outline" size="md" className="w-full sm:w-fit">
            See how it works
          </Button>
        </div>

        <div className="flex gap-3 items-center">
          <AvatarGroup avatars={avatars} />
          <p className="text-sm font-bold leading-6 text-text-primary">
            Trusted by 24,000+{" "}
            <span className="text-sm leading-6 text-text-secondary font-normal">
              learners
            </span>
          </p>
        </div>
      </div>

      <div className="relative w-fit max-w-full mx-auto lg:mx-0 shrink-0">
        <Image
          src="/whoman-hero.png"
          alt="Person focused on learning at their laptop"
          width={500}
          height={520}
          priority
          className="w-full max-w-105 lg:max-w-125 h-auto rounded-3xl relative z-10"
        />

        <div className="px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2.5 sm:gap-3 bg-background-white shadow-[0px_4px_24px_0px_rgba(0,0,0,0.10)] absolute top-4 -left-3 sm:-left-5.5 z-20 rounded-xl">
          <Badge className="h-7 px-1 rounded-lg">120+</Badge>
          <p className="text-xs sm:text-sm font-normal leading-6 text-text-primary whitespace-nowrap">
            expert-led courses
          </p>
        </div>

        <div className="absolute -left-4 sm:-left-8 lg:-left-11 bottom-2 sm:bottom-3 w-16 h-16 sm:w-20 sm:h-20 lg:w-26.5 lg:h-26.5 rounded-full bg-primary-blue-light z-0" />

        <div className="px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2.5 sm:gap-3 bg-background-white shadow-[0px_4px_24px_0px_rgba(0,0,0,0.10)] absolute bottom-6 sm:bottom-[35.5px] -right-3 sm:-right-6 lg:-right-10 xl:-right-14 z-20 rounded-xl">
          <div className="flex gap-0.5 items-center shrink-0">
            <Image src="/star.png" alt="star" width={14} height={14} />
            <Image src="/star.png" alt="star" width={14} height={14} />
            <Image src="/star.png" alt="star" width={14} height={14} />
            <Image src="/star.png" alt="star" width={14} height={14} />
            <Image src="/star.png" alt="star" width={14} height={14} />
          </div>
          <p className="text-xs sm:text-sm font-normal leading-6 text-text-primary whitespace-nowrap">
            4.9 avg rating
          </p>
        </div>

        <div className="w-16 sm:w-22.25 h-[82%] lg:h-117 rounded-2xl bg-[#FFC599] absolute -right-3 sm:-right-6 lg:-right-9.75 top-1/2 -translate-y-1/2 z-0" />
      </div>
    </Container>
  );
}
