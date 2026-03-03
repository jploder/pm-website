import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const headingFont = Fraunces({
  subsets: ["latin"],
  variable: "--font-heading",
});

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Julian Ploder — Product Manager",
  description:
    "Projects and experience of Julian Ploder, a product manager building trustworthy B2B fintech products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${bodyFont.variable} ${headingFont.variable} bg-[#f7f5f2] text-[#111111] antialiased`}
      >
        <div className="min-h-screen">
          <header className="border-b border-neutral-200 bg-[#fdfbf7]/90 backdrop-blur">
            <div className="mx-auto flex max-w-4xl items-center justify-between pr-6 pl-0 py-5">
              <Link href="/" className="flex items-center">
                <img
                  src="/jplogo-removebg-preview.png"
                  alt="Julian Ploder logo"
                  className="block origin-left scale-90"
                />
              </Link>
              <nav className="flex items-center gap-6 text-[0.9rem] font-medium text-neutral-800">
                <Link
                  href="/#about"
                  className="border-b border-transparent pb-0.5 transition-colors hover:border-neutral-900 hover:text-black"
                >
                  About
                </Link>
                <Link
                  href="/#projects"
                  className="border-b border-transparent pb-0.5 transition-colors hover:border-neutral-900 hover:text-black"
                >
                  Projects
                </Link>
                <Link
                  href="/#experience"
                  className="border-b border-transparent pb-0.5 transition-colors hover:border-neutral-900 hover:text-black"
                >
                  Experience
                </Link>
                <Link
                  href="/#contact"
                  className="rounded-full border border-neutral-300 px-3 py-1.5 text-[0.8rem] font-semibold text-neutral-900 transition-colors hover:border-neutral-900 hover:bg-neutral-900 hover:text-[#fdfbf7]"
                >
                  Contact
                </Link>
              </nav>
            </div>
          </header>
          <main className="pt-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
