"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const HERO_QUOTES = [
  "Good product managers are like sponges, absorbing data to synthesize solutions to real problems that move the needle.",
  "Product managers need to understand subtext, cultural norms, and motive. The data will reflect when you've got it right but may not take you there directly.",
];

export default function Home() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typedQuote, setTypedQuote] = useState("");

  useEffect(() => {
    const currentQuote = HERO_QUOTES[quoteIndex];

    if (charIndex < currentQuote.length) {
      const timeout = window.setTimeout(() => {
        setTypedQuote(currentQuote.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 35);

      return () => window.clearTimeout(timeout);
    }

    return undefined;
  }, [quoteIndex, charIndex]);

  return (
    <div className="space-y-0">
      {/* Hero / current conviction */}
      <section className="bg-[#f7f5f2] py-10">
        <div className="mx-auto max-w-3xl px-6 space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight text-[#121212] sm:text-4xl italic">
          &ldquo;{typedQuote}&rdquo;
        </h1>
        <div className="flex gap-2 pt-2">
          {HERO_QUOTES.map((quote, index) => (
            <button
              key={quote}
              type="button"
              onClick={() => {
                setQuoteIndex(index);
                setCharIndex(0);
                setTypedQuote("");
              }}
              className={`h-1.5 w-4 rounded-full transition-colors ${
                index === quoteIndex ? "bg-neutral-900" : "bg-neutral-300"
              }`}
              aria-label={`Show quote ${index + 1}`}
            />
          ))}
        </div>
        <p className="max-w-xl text-sm text-neutral-700">
          Atlanta, GA · Sr. Product Manager at PrimeRevenue
        </p>
        <p className="max-w-xl text-sm text-neutral-700">
          When products are confusing, real businesses stall. I like taking the flows that feel opaque and making them predictable and trustworthy.
        </p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-[#f4f1ec] py-10">
        <div className="mx-auto max-w-3xl px-6 space-y-4">
          <h2 className="text-sm font-semibold tracking-[0.12em] text-neutral-600">
            About
          </h2>
          <div className="space-y-3 text-sm text-neutral-700">
          <p className="max-w-xl">
            I started on the analytical side of financial services, mapping
            processes and uncovering revenue leaks. That work made it clear how
            much damage a clumsy flow or unclear product can do to a business
            that&apos;s already stretched thin.
          </p>
          <p className="max-w-xl">
            At PrimeRevenue I moved from Business Analyst to Sr. Product
            Manager, and now own key journeys for suppliers and funders on a
            global supply chain finance and payments platform. I think in terms
            of end-to-end experiences, not isolated features.
          </p>
          <p className="max-w-xl">
            I also lean heavily on tools like Cursor, Claude, and ChatGPT to
            prototype ideas, reason about tradeoffs, and keep documentation
            tight. Not as a shortcut, but so more of my time goes into decisions
            that actually change outcomes.
          </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-[#f7f5f2] py-10">
        <div className="mx-auto max-w-3xl px-6 space-y-4">
          <h2 className="text-sm font-semibold tracking-[0.12em] text-neutral-600">
            Projects
          </h2>
          <p className="max-w-xl text-sm text-neutral-700">
            A few problems I&apos;ve worked on recently. These are intentionally
            high-level here; each has a deeper story behind it.
          </p>
          <div className="space-y-3">
          <ProjectItem
            title="Plaid integration"
            description="Brought Plaid into onboarding flows to strengthen bank account verification and reduce fraud risk, without turning the experience into a dead end for suppliers and funders."
            gifSrc="/gifs/plaid-integration.gif"
            gifAlt="Animated view of the Plaid integration flow"
          />
          <ProjectItem
            title="Working capital assessment tool"
            description="Helped shape an assessment experience that guides suppliers toward the right working capital solution based on their needs and risk profile."
            gifSrc="/gifs/working-capital-assessment.gif"
            gifAlt="Animated view of the working capital assessment tool"
          />
          <ProjectItem
            title="Supplier onboarding flow"
            description="Worked to reduce supplier onboarding time by simplifying steps, templatizing documents, and tightening UX around key decision points."
            gifSrc="/gifs/supplier-onboarding.gif"
            gifAlt="Animated view of the supplier onboarding flow"
          />
          <ProjectItem
            title="Document templatizer"
            description="Replaced wet-signature-heavy processes with prefilled, templatized documents so onboarding requires fewer manual touches and less back-and-forth."
            gifSrc="/gifs/document-templatizer.gif"
            gifAlt="Animated view of the document templatizer in action"
          />
          </div>
        </div>
      </section>

      {/* Experience timeline */}
      <section id="experience" className="bg-[#f4f1ec] py-10">
        <div className="mx-auto max-w-3xl px-6 space-y-4">
          <h2 className="text-sm font-semibold tracking-[0.12em] text-neutral-600">
            Experience
          </h2>
          <div className="space-y-4 border-l border-neutral-200 pl-4 text-sm text-neutral-700">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-neutral-500">
              2020 — Present
            </p>
            <p className="font-medium text-neutral-900">
              Sr. Product Manager · PrimeRevenue
            </p>
            <p className="mt-1 max-w-xl">
              Own the end-to-end experience and roadmap for two key customer
              groups (suppliers and funders) on a global supply chain finance
              and payments platform.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-neutral-500">
              2018 — 2020
            </p>
            <p className="font-medium text-neutral-900">
              Business Analyst II · PrimeRevenue
            </p>
            <p className="mt-1 max-w-xl">
              Served as functional product owner and scrum master, automating
              key onboarding steps and tightening how feedback and user behavior
              informed product decisions.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-neutral-500">
              2016 — 2017
            </p>
            <p className="font-medium text-neutral-900">
              Global Process Improvement · Equifax
            </p>
            <p className="mt-1 max-w-xl">
              Consulted with financial services clients on LEAN initiatives,
              mapped processes, and uncovered a revenue leak of unpaid services.
            </p>
          </div>
          </div>
        </div>
      </section>

      {/* Say hi */}
      <section id="contact" className="bg-[#f7f5f2] py-10">
        <div className="mx-auto max-w-3xl px-6 space-y-4">
          <h2 className="text-sm font-semibold tracking-[0.12em] text-neutral-600">
            Let&apos;s talk.
          </h2>
          <div className="flex items-start gap-4">
            <div className="shrink-0">
              <img
                src="/Julian Ploder Headshot.JPG"
                alt="Headshot of Julian Ploder"
                className="h-16 w-16 rounded-full object-cover"
              />
            </div>
            <p className="max-w-xl text-sm text-neutral-700">
              I&apos;d love to learn more about the problems you&apos;re passionate
              about solving.
            </p>
          </div>
          <ul className="space-y-1 text-sm text-neutral-800">
            <li>
              <span className="font-medium">Email:</span>{" "}
              <a
                href="mailto:julianploder@gmail.com"
                className="underline underline-offset-2 hover:text-black"
              >
                julianploder@gmail.com
              </a>
            </li>
            <li>
              <span className="font-medium">LinkedIn:</span>{" "}
              <a
                href="https://linkedin.com/in/julian-ploder"
                className="underline underline-offset-2 hover:text-black"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/julian-ploder
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

type ProjectItemProps = {
  title: string;
  description: string;
  gifSrc: string;
  gifAlt: string;
};

function ProjectItem({ title, description, gifSrc, gifAlt }: ProjectItemProps) {
  const [open, setOpen] = useState(false);
  const panelId = `project-${title.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <article className="rounded-md border border-neutral-200 bg-white px-4 py-3">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-start justify-between gap-3 text-left"
        aria-expanded={open}
        aria-controls={panelId}
      >
        <div>
          <h3 className="text-sm font-semibold text-neutral-900">{title}</h3>
          <p className="mt-1 text-sm text-neutral-700">{description}</p>
        </div>
        <span
          aria-hidden
          className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-neutral-300 text-xs font-medium text-neutral-700"
        >
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <div
          id={panelId}
          className="mt-3 overflow-hidden rounded-md border border-neutral-200 bg-neutral-50"
        >
          {/* Replace src paths with your actual GIF files in /public/gifs */}
          <Image
            src={gifSrc}
            alt={gifAlt}
            width={800}
            height={450}
            className="h-auto w-full"
          />
        </div>
      )}
    </article>
  );
}
