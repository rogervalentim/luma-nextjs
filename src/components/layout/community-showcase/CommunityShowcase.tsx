"use client";

import Image from "next/image";
import { Button } from "@/components/ui";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { CommunityCollage } from "@/components/ui/community-collage/CommunityCollage";

interface CommunityShowcaseProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export function CommunityShowcase({
  eyebrow = "the people",
  title = "Meet international students & teachers",
  description = "Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.",
  ctaLabel = "Explore teachers and students",
  ctaHref = "/community",
  imageSrc = "/community-showcase-image.png",
  imageAlt = "Group of international students and teachers smiling together",
}: CommunityShowcaseProps) {
  return (
    <Container
      as="section"
      spacing="lg"
      aria-labelledby="community-showcase-heading"
      id="community"
      innerClassName="w-full flex flex-col items-start lg:flex-row lg:items-center justify-between gap-6 lg:gap-15"
    >
      <div className="w-full lg:132.5 flex-1">
        <Eyebrow className="mb-2">{eyebrow}</Eyebrow>

        <Heading
          id="community-showcase-heading"
          as="h2"
          variant="h1"
          className="mb-6 lg:mb-8"
        >
          {title}
        </Heading>

        <Paragraph tone="secondary" className="mb-6 lg:mb-8">
          {description}
        </Paragraph>

        <Button href="/#" variant="outline">
          Explore teachers and students
        </Button>
      </div>

      <CommunityCollage />
    </Container>
  );
}
