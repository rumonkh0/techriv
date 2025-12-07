"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/products", label: "Products" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className="
      sticky top-0 z-50
      flex justify-between items-center 
      px-4 sm:px-6 lg:px-8 py-4 
      rounded-tl-[20px] rounded-br-[20px]
      shadow-[0_0_15px_1px_rgba(0,0,0,0.15)]
      bg-white
    "
    >
      <div className="font-bold text-xl tracking-wide text-[#0F53C3] cursor-pointer">
        TechRiv
      </div>

      {/* Desktop Navigation */}
      <nav aria-label="Main Navigation" className="hidden lg:block">
        <ul className="flex gap-6 xl:gap-8 text-sm text-[#535353] font-medium">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="cursor-pointer hover:text-[#0F53C3] transition-colors"
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop CTA Button */}
      <Link
        href="/contact"
        className="
          hidden lg:block
          bg-[#0F53C3] text-white 
          rounded-xl px-6 py-2.5 
          font-medium
          hover:bg-[#0d45a3] 
          transition-colors
        "
      >
        Let&apos;s Talk
      </Link>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden p-2 text-gray-700 hover:text-[#0F53C3] transition-colors"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-2xl lg:hidden">
          <nav className="px-4 py-4">
            <ul className="flex flex-col gap-4 text-sm text-[#535353] font-medium">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-2 px-4 rounded-lg hover:bg-gray-100 hover:text-[#0F53C3] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="
                block mt-4 text-center
                bg-[#0F53C3] text-white 
                rounded-xl px-6 py-3 
                font-medium
                hover:bg-[#0d45a3] 
                transition-colors
              "
              onClick={() => setIsMenuOpen(false)}
            >
              Let&apos;s Talk
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
