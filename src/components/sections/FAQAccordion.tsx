"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  heading: string;
  items: FAQItem[];
}

export default function FAQAccordion({ heading, items }: FAQAccordionProps) {
  const [openIdx, setOpenIdx] = useState<number>(0);

  return (
    <section className="bg-[#F2F5F9] py-[72px] border-t border-[#E0E5EC]" aria-label="Common questions">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
        <span className="stag">COMMON QUESTIONS</span>
        <h2 className="font-display text-[28px] text-[#3E3E3E] leading-[1.3] mt-1 mb-10">
          {heading}
        </h2>

        <div className="max-w-[760px]">
          {items.map((item, idx) => {
            const isOpen = openIdx === idx;
            const panelId = `faq-panel-${idx}`;
            const btnId = `faq-btn-${idx}`;

            return (
              <div key={idx} className="border-b border-[#E0E5EC] last:border-b-0">
                <button
                  id={btnId}
                  type="button"
                  className={[
                    "w-full flex items-center justify-between gap-4 py-5 text-left",
                    "font-display text-[17px] leading-[1.35] transition-colors duration-150",
                    isOpen ? "text-[#014584]" : "text-[#3E3E3E] hover:text-[#014584]",
                  ].join(" ")}
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span>{item.question}</span>
                  <span
                    aria-hidden="true"
                    className="flex-shrink-0 text-[#014584] text-[20px] font-sans font-light leading-none transition-transform duration-200"
                    style={{ transform: isOpen ? "rotate(45deg)" : "none" }}
                  >
                    +
                  </span>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  hidden={!isOpen}
                  className="pb-5"
                >
                  <p className="text-[15px] text-[#52525B] font-sans leading-[1.7]">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
