import { Container } from "@/components/ui/container";
import { Paragraph } from "@/components/ui/paragraph";
import Image from "next/image";
import Link from "next/link";

const FOOTER_SECTIONS = [
  {
    title: "Explore",
    links: [
      { label: "Courses", href: "/#courses" },
      { label: "Categories", href: "/#course" },
      { label: "Instructors", href: "/#community" },
      { label: "For Teams", href: "/#teams" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/#about" },
      { label: "Careers", href: "/#cta" },
      { label: "Journal", href: "/#cta" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/#cta" },
      { label: "Contact", href: "/#contact" },
      { label: "Terms", href: "/#cta" },
      { label: "Privacy", href: "/#cta" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="w-full bg-background-darkblue">
      <Container
        as="div"
        spacing="none"
        innerClassName="pt-[60px] pb-5 lg:pt-[80px] lg:pb-10"
      >
        <div className="mb-16 grid grid-cols-2 gap-8 lg:flex">
          <div className="col-span-2 w-full lg:w-104">
            <Link href="/" className="mb-3 inline-block" aria-label="Luma — Go to homepage">
              <Image
                src="/luma-white.png"
                alt="Luma"
                width={54}
                height={17}
                sizes="54px"
                className="h-[16.92px] w-[53.74px]"
              />
            </Link>

            <Paragraph size="sm" tone="whiteTertiary">
              Practical learning for curious
              <br className="hidden lg:inline" /> people.
            </Paragraph>
          </div>

          {FOOTER_SECTIONS.map((section) => (
            <nav
              key={section.title}
              aria-label={section.title}
              className="w-full lg:w-52"
            >
              <Paragraph
                size="xs"
                tone="textWhiteSecondary"
                className="mb-4 uppercase lg:normal-case"
              >
                {section.title}
              </Paragraph>

              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="block text-sm font-normal leading-6 text-text-white-tertiary transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="border-t border-text-secondary pt-6 text-center lg:text-left">
          <Paragraph size="sm" tone="textWhiteSecondary">
            © 2026 Luma Learning
          </Paragraph>
        </div>
      </Container>
    </footer>
  );
}
