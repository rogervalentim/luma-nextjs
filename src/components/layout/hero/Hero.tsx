"use client";

import Image from "next/image";
import { Button } from "../../ui";
import { Eyebrow } from "../../ui/eyebrow";
import { Heading } from "../../ui/heading/Heading";
import { Paragraph } from "../../ui/paragraph/Paragraph";
import { Badge } from "@/components/ui/badge/Badge";
import { AvatarGroup } from "@/components/ui/avatar-group/AvatarGroup";
import { Container } from "@/components/ui/container/Container";

const avatars = [
  { src: "/learners/learner-1.png", alt: "" },
  { src: "/learners/learner-2.png", alt: "" },
  { src: "/learners/learner-3.png", alt: "" },
];

export function Hero() {
  return (
    <Container
      as="section"
      spacing="lg"
      id="hero"
      aria-labelledby="hero-heading"
      className="overflow-x-clip px-6 sm:px-10 xl:px-0"
      innerClassName="flex flex-col-reverse items-center justify-center lg:flex-row lg:justify-between gap-12 lg:gap-15"
    >
      <div className="w-full lg:max-w-140">
        <Eyebrow variant="blue" className="mb-4">
          Learn at your own pace
        </Eyebrow>

        {/* Garanta que o componente Heading renderize um <h1> quando variant="display" */}
        <Heading id="hero-heading" variant="display" className="mb-6" as="h1">
          Build skills that
          <br /> actually move you
          <br /> forward.
        </Heading>

        <Paragraph className="max-w-full lg:max-w-120 mb-8" tone="secondary">
          Practical courses taught by people who do the work every day. Learn
          design, technology, business and more — one focused lesson at a time.
        </Paragraph>

        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <Button
            variant="primary"
            size="md"
            href="#courses"
            className="w-full sm:w-fit"
          >
            Explore courses
          </Button>
          <Button
            variant="outline"
            size="md"
            href="#about"
            className="w-full sm:w-fit"
          >
            See how it works
          </Button>
        </div>

        <div className="flex gap-3 items-center">
          <div aria-hidden="true">
            <AvatarGroup avatars={avatars} />
          </div>
          <p className="text-sm font-bold leading-6 text-text-primary">
            Trusted by 24,000+{" "}
            <span className="text-sm leading-6 text-text-secondary font-normal">
              learners
            </span>
          </p>
        </div>
      </div>

      <div className="relative w-full max-w-85 sm:max-w-100 md:max-w-115 lg:max-w-125 lg:mx-0 shrink-0">
        <Image
          src="/whoman-hero.png"
          alt="Student smiling while studying on a laptop at a desk"
          width={500}
          height={520}
          priority
          className="w-full h-auto rounded-3xl relative z-10 object-cover"
        />

        {/* Badge superior esquerdo */}
        <div className="px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 flex items-center gap-2 sm:gap-3 bg-background-white shadow-[0px_4px_24px_0px_rgba(0,0,0,0.10)] absolute top-3 md:top-4 -left-2 sm:-left-4 md:-left-6 z-20 rounded-xl">
          <Badge className="h-7 px-1.5 rounded-lg">120+</Badge>
          <p className="text-xs sm:text-sm font-normal leading-6 text-text-primary whitespace-nowrap">
            expert-led courses
          </p>
        </div>

        {/* Círculo azul decorativo */}
        <div
          aria-hidden="true"
          className="absolute -left-3 sm:-left-5 md:-left-8 lg:-left-11 bottom-2 sm:bottom-3 md:bottom-4 w-14 h-14 sm:w-18 sm:h-18 md:w-22 md:h-22 lg:w-26.5 lg:h-26.5 rounded-full bg-primary-blue-light z-0"
        />

        {/* Badge inferior direito */}
        <div className="px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 flex items-center gap-2 sm:gap-3 bg-background-white shadow-[0px_4px_24px_0px_rgba(0,0,0,0.10)] absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-[35.5px] -right-2 sm:-right-4 md:-right-7 lg:-right-10 xl:-right-14 z-20 rounded-xl">
          <div
            role="img"
            aria-label="5 out of 5 stars"
            className="flex gap-0.5 items-center shrink-0"
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <Image
                key={index}
                src="/star.png"
                alt=""
                aria-hidden="true"
                width={14}
                height={14}
              />
            ))}
          </div>
          <p className="text-xs sm:text-sm font-normal leading-6 text-text-primary whitespace-nowrap">
            4.9 avg rating
          </p>
        </div>

        <div
          aria-hidden="true"
          className="w-12 sm:w-16 md:w-18 lg:w-22.25 h-[90%] md:h-[84%] lg:h-117 rounded-2xl bg-[#FFC599] absolute -right-3 sm:-right-4 md:-right-6 lg:-right-9.75 top-1/2 -translate-y-1/2 z-0"
        />
      </div>
    </Container>
  );
}
