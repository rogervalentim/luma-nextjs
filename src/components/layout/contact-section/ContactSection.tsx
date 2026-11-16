import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import Image from "next/image";
import Link from "next/link";
import { Form } from "../form/Form";

export function ContactSection() {
  return (
    <section
      className="w-full bg-background-white"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <Container
        as="div"
        spacing="lg"
        innerClassName="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-12"
      >
        <div className="max-w-full lg:max-w-120">
          <Eyebrow className="mb-4">CONTACT</Eyebrow>
          <Heading id="contact-heading" variant="h1" as="h2" className="mb-4">
            Get in touch
          </Heading>
          <Paragraph tone="secondary" className="mb-10">
            Have a question? We’re here to help. Whether you’re looking for the
            right course, learning with your team or interested in teaching with
            Luma, we’d love to hear from you.
          </Paragraph>
          <div>
            <div className="max-w-full p-5 bg-background-light-yellow rounded-xl mb-4">
              <div className="flex items-center gap-4">
                {/* icon */}
                <Badge className="h-10 px-2.5 rounded-lg w-fit" aria-hidden="true">
                  <Image
                    src="/Icon-email.png"
                    alt=""
                    aria-hidden="true"
                    width={24}
                    height={24}
                    sizes="24px"
                  />
                </Badge>
                <div>
                  <Paragraph size="sm">Email</Paragraph>
                  <Link
                    href="mailto:contact@luma.com"
                    className="text-primary-blue text-sm leading-6"
                  >
                    contact@luma.com
                  </Link>
                </div>
              </div>
            </div>
            <div className="max-w-full p-5 bg-background-light-yellow rounded-xl">
              <div className="flex items-center gap-4">
                {/* icon */}
                <Badge className="h-10 px-2.5 rounded-lg w-fit" aria-hidden="true">
                  <Image
                    src="/icon-clock.png"
                    alt=""
                    aria-hidden="true"
                    width={24}
                    height={24}
                    sizes="24px"
                  />
                </Badge>
                <div>
                  <Paragraph size="sm">Response Time</Paragraph>
                  <Paragraph size="sm" tone="tertiary">
                    Up to 24 hours on business days
                  </Paragraph>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Form />
      </Container>
    </section>
  );
}
