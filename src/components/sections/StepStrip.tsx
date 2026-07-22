interface Step {
  number: string;
  title: string;
  body: string;
}

interface StepStripProps {
  heading: string;
  subheading?: string;
  steps: Step[];
}

export default function StepStrip({ heading, subheading, steps }: StepStripProps) {
  return (
    <section className="bg-[#F2F5F9] py-20 border-t border-[#E0E5EC]" aria-label="What happens next">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
        <div className="mb-12">
          <span className="stag">WHAT HAPPENS NEXT</span>
          <h2 className="font-display text-[28px] text-[#3E3E3E] leading-[1.3] mt-1">{heading}</h2>
          {subheading && (
            <p className="text-[15px] text-[#52525B] font-sans mt-3 max-w-[480px] leading-[1.6]">{subheading}</p>
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-0">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={[
                "flex-1 py-8 md:py-0",
                "border-b border-[#E0E5EC] last:border-b-0",
                "md:border-b-0 md:border-r md:border-[#E0E5EC] md:last:border-r-0",
                i === 0 ? "md:pr-8" : i === steps.length - 1 ? "md:pl-8" : "md:px-8",
              ].join(" ")}
            >
              <span className="font-mono text-[32px] font-medium text-[#014584] opacity-25 block mb-4 leading-none">
                {step.number}
              </span>
              <h3 className="font-display text-[17px] text-[#3E3E3E] mb-2.5 leading-[1.3]">{step.title}</h3>
              <p className="text-[14px] text-[#52525B] font-sans leading-[1.65]">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
