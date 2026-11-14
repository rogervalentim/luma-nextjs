"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../ui";
import { Container } from "@/components/ui/container/Container";

const NAV_LINKS = [
  { label: "Courses", href: "/courses" },
  { label: "For Teams", href: "/teams" },
  { label: "Community", href: "/community" },
  { label: "About", href: "/about" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <Container
      as="header"
      className="relative h-17.5 border-b border-b-line-1 items-center"
      innerClassName="flex justify-between items-center"
    >
      <nav
        aria-label="Main navigation"
        className="w-full max-w-280 flex justify-between items-center"
      >
        <Link href="/" onClick={closeMenu} className="shrink-0">
          <Image
            src="/luma.png"
            alt="Luma"
            width={54}
            height={17}
            className="w-[53.74px] h-[16.92px]"
            priority
          />
        </Link>

        {/* Navegação Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="text-sm font-normal leading-6 text-text-secondary hover:opacity-80 transition-opacity"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-2 items-center">
          <Link
            href="/#"
            className="hidden md:inline-block text-sm font-normal leading-6 text-text-secondary py-2 px-2.5 hover:opacity-80 transition-opacity"
          >
            Log in
          </Link>

          <Link href="/#" className="hidden md:inline-flex">
            <Button variant="primary" size="sm">
              Start learning
            </Button>
          </Link>

          <button
            type="button"
            onClick={toggleMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden p-2 -mr-2 hover:opacity-80 transition-opacity cursor-pointer"
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#171B2C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                width="20"
                height="12"
                viewBox="0 0 20 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M0.75 0.75H18.75M0.75 5.75H18.75M0.75 10.75H18.75"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  stroke="#171B2C"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden absolute top-full left-0 w-full bg-background-light-yellow border-b border-line-1 px-4 py-6 shadow-sm z-50"
        >
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="block text-base font-normal leading-6 text-text-secondary hover:opacity-80 transition-opacity"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-4 border-t border-line-1 flex flex-col gap-3">
            <Link
              href="/login"
              onClick={closeMenu}
              className="text-center text-sm font-normal leading-6 text-text-secondary py-2 hover:opacity-80 transition-opacity"
            >
              Log in
            </Link>
            <Button variant="primary" className="w-full" onClick={closeMenu}>
              Start learning
            </Button>
          </div>
        </div>
      )}
    </Container>
  );
}
