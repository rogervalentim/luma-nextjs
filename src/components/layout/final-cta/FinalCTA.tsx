"use client";

import { Button } from "@/components/ui";
import { AvatarGroup } from "@/components/ui/avatar-group";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";

export interface AvatarItem {
  src: string;
  alt: string;
}

export interface CTAAction {
  label: string;
  href: string;
}

export interface FinalCTAProps {
  title?: string;
  description?: string;
  avatars?: AvatarItem[];
  primaryAction?: CTAAction;
  secondaryAction?: CTAAction;
  backgroundImage?: string;
  className?: string;
}

const DEFAULT_AVATARS: AvatarItem[] = [
  { src: "/learners/learner-1.png", alt: "Learner 1" },
  { src: "/learners/learner-2.png", alt: "Learner 2" },
  { src: "/learners/learner-3.png", alt: "Learner 3" },
  { src: "/learners/learner-4.png", alt: "Learner 4" },
];

export function FinalCTA({
  title = "What will you learn next?",
  description = "Start with one course. Build from there.",
  avatars = DEFAULT_AVATARS,
  primaryAction = { label: "Explore all courses", href: "/courses" },
  secondaryAction = { label: "Join Luma", href: "/signup" },
  backgroundImage = "/cta-bg.png",
  className = "",
}: FinalCTAProps) {
  return (
    <section
      aria-labelledby="final-cta-heading"
      style={
        backgroundImage
          ? { backgroundImage: `url('${backgroundImage}')` }
          : undefined
      }
      className={`w-full bg-cover bg-center bg-no-repeat ${className}`.trim()}
    >
      <Container as="div" spacing="lg">
        {avatars.length > 0 && (
          <div className="mb-8 flex items-center justify-center">
            <AvatarGroup
              avatars={avatars}
              ringClassName="ring-2 ring-secondary-yellow"
            />
          </div>
        )}

        <Heading
          id="final-cta-heading"
          variant="displaySm"
          className="mb-4 text-center"
        >
          {title}
        </Heading>

        {description && (
          <Paragraph
            tone="secondary"
            className="mx-auto mb-10 max-w-2xl text-center"
          >
            {description}
          </Paragraph>
        )}

        {(primaryAction || secondaryAction) && (
          <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
            {primaryAction && (
              <Button href={primaryAction.href} className="w-full md:w-fit">
                {primaryAction.label}
              </Button>
            )}
            {secondaryAction && (
              <Button
                href={secondaryAction.href}
                variant="outline"
                className="w-full md:w-fit"
              >
                {secondaryAction.label}
              </Button>
            )}
          </div>
        )}
      </Container>
    </section>
  );
}
