export default function HonestAuditCallout() {
  return (
    <section className="bg-white py-[72px]" aria-label="Our commitment">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
        <div
          className="max-w-[720px] mx-auto rounded-r-[4px]"
          style={{
            borderLeft: "3px solid #FEA781",
            background: "#F8F9FC",
            padding: "28px 32px",
          }}
        >
          <span
            className="block font-sans text-[11px] uppercase tracking-[0.14em] mb-4"
            style={{ color: "#FEA781" }}
          >
            Our Commitment
          </span>
          <h2 className="font-display text-[22px] text-[#3E3E3E] leading-[1.35] mb-5">
            &ldquo;We will tell you what we see, even if what you need isn&rsquo;t us.&rdquo;
          </h2>
          <p className="text-[16px] text-[#52525B] font-sans leading-[1.7]">
            The audit we produce is genuine. If we look at your growth situation and the
            highest-leverage change is something we don&rsquo;t build, a different CRM, a channel
            we don&rsquo;t operate, a hire you need to make, we will tell you that clearly, with
            enough specificity to act on.
          </p>
          <p className="text-[16px] text-[#52525B] font-sans leading-[1.7] mt-4">
            We&rsquo;d rather send you to the right answer than close a client who needs
            something else. This is how we build the kind of reputation that brings the right
            clients back.
          </p>
        </div>
      </div>
    </section>
  );
}
