import type { Metadata } from "next";
import type { ReactNode } from "react";
import GlobalHeader from "@/components/global/GlobalHeader";
import GlobalFooter from "@/components/global/GlobalFooter";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Octmark Technologies India Private Limited collects, uses, shares and protects personal data on octmark.com and through its agency services.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/privacy" },
};

const EFFECTIVE_DATE = "4 November 2026";
const LEGAL_NAME = "Octmark Technologies India Private Limited";
const CONTACT_EMAIL = "hello@octmark.io";

const TOC: { id: string; label: string }[] = [
  { id: "overview", label: "1. Overview" },
  { id: "who-we-are", label: "2. Who We Are" },
  { id: "data-we-collect", label: "3. Data We Collect" },
  { id: "purposes-legal-bases", label: "4. Purposes and Legal Bases" },
  { id: "sharing", label: "5. Sharing and Sub-processors" },
  { id: "transfers", label: "6. International Transfers" },
  { id: "retention", label: "7. Data Retention" },
  { id: "security", label: "8. Security" },
  { id: "rights", label: "9. Your Rights (DPDPA and GDPR)" },
  { id: "cookies", label: "10. Cookies" },
  { id: "children", label: "11. Children's Privacy" },
  { id: "octrackit", label: "12. Octrackit Has Its Own Policy" },
  { id: "grievance-officer", label: "13. Grievance Officer" },
  { id: "changes", label: "14. Changes to This Policy" },
  { id: "contact", label: "15. Contact Us" },
];

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 border-b border-[#E5E8EE] py-8 first:pt-0 last:border-b-0">
      <h2 className="font-display text-[22px] lg:text-[26px] text-[#3E3E3E] mb-4">{title}</h2>
      <div className="space-y-4 text-[15px] text-[#52525B] font-sans leading-[1.7]">{children}</div>
    </section>
  );
}

function List({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[#014584]" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const linkClass = "text-[#014584] underline";

export default function PrivacyPage() {
  return (
    <>
      <GlobalHeader darkHero={false} />
      <main id="main" className="flex-1">
        <section className="bg-white pt-[120px] pb-20">
          <div className="mx-auto max-w-[1080px] px-6 md:px-10">
            <h1 className="font-display text-[40px] text-[#014584] mb-4">Privacy Policy</h1>
            <p className="text-[15px] text-[#52525B] font-sans leading-[1.7] max-w-[720px]">
              This policy explains how {LEGAL_NAME} (&quot;Octmark,&quot; &quot;we,&quot; &quot;us&quot;)
              collects, uses, shares and protects personal data when you use octmark.com or engage our
              agency services, in line with India&apos;s Digital Personal Data Protection Act, 2023
              (&quot;DPDPA&quot;) and, where it applies, the EU/UK General Data Protection Regulation
              (&quot;GDPR&quot;).
            </p>
            <p className="mt-3 text-[13px] text-[#8A96A8] font-sans">
              Effective date: {EFFECTIVE_DATE}
            </p>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10">
              <aside className="lg:sticky lg:top-24 lg:h-fit">
                <nav aria-label="Table of contents" className="rounded-xl border border-[#E5E8EE] p-4">
                  <p className="px-2 pb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8A96A8]">
                    On this page
                  </p>
                  <ul className="space-y-0.5">
                    {TOC.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="block rounded-lg px-2 py-1.5 text-[13px] leading-snug text-[#52525B] hover:bg-[#F2F5F9] hover:text-[#014584] transition-colors"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </aside>

              <div>
                <Section id="overview" title="1. Overview">
                  <p>
                    This policy covers personal data we handle through the octmark.com website and
                    through our agency services (marketing strategy, paid media, SEO, CRM and
                    automation work for clients). It does not cover our SaaS product, Octrackit, which
                    has its own policy (see section 12).
                  </p>
                </Section>

                <Section id="who-we-are" title="2. Who We Are">
                  <p>
                    The website octmark.com is operated by <strong>{LEGAL_NAME}</strong>, a company
                    incorporated in India. For personal data collected through this website and in
                    managing our own client relationships, we are the data fiduciary (DPDPA) and
                    controller (GDPR).
                  </p>
                  <p>
                    Registered address: 8-39/1, Narayanapuram Colony, Dammaiguda, Nagaram (K.V.
                    Rangareddy), Hyderabad, Telangana 500083, India.
                  </p>
                  <p>
                    When we process personal data on behalf of a client as part of an engagement (for
                    example, a client&apos;s leads inside their CRM), the client decides why and how
                    that data is used and we act as their processor under a written agreement.
                  </p>
                </Section>

                <Section id="data-we-collect" title="3. Data We Collect">
                  <p>We collect the following categories of personal data:</p>
                  <List
                    items={[
                      <>
                        <strong>Forms.</strong> When you submit our contact, growth audit, demo or
                        support forms we collect your name, work email, company, role or interest,
                        phone number if provided, and the message you write.
                      </>,
                      <>
                        <strong>Booking (Zoho Bookings).</strong> When you book a call, the Zoho
                        Bookings scheduler collects your name, email, phone number if provided, chosen
                        time slot and any notes you add.
                      </>,
                      <>
                        <strong>Spam protection.</strong> Our forms use Cloudflare Turnstile, which
                        processes technical signals such as IP address and browser characteristics to
                        tell people from bots.
                      </>,
                      <>
                        <strong>Server and technical data.</strong> Our hosting and security layers
                        log IP address, browser and device type, pages requested, referrer and
                        timestamps.
                      </>,
                      <>
                        <strong>Analytics.</strong> At the date above, octmark.com does not run
                        third-party advertising or behavioural analytics trackers. If we add
                        analytics, we will update this policy first and, where required, ask for your
                        consent.
                      </>,
                      <>
                        <strong>Client engagement data.</strong> Business contact details, billing
                        details and project communications of people at our client organisations.
                      </>,
                    ]}
                  />
                </Section>

                <Section id="purposes-legal-bases" title="4. Purposes and Legal Bases">
                  <List
                    items={[
                      <>
                        <strong>Responding to enquiries and booking calls:</strong> consent, and steps
                        taken at your request before entering a contract.
                      </>,
                      <>
                        <strong>Delivering and managing our services and invoicing:</strong>{" "}
                        performance of a contract.
                      </>,
                      <>
                        <strong>Securing the website and preventing spam or abuse:</strong> our
                        legitimate interests (GDPR) and legitimate uses (DPDPA).
                      </>,
                      <>
                        <strong>Sending you relevant updates about our services:</strong> your consent,
                        which you can withdraw at any time.
                      </>,
                      <>
                        <strong>Meeting legal, tax and accounting obligations:</strong> legal
                        obligation.
                      </>,
                    ]}
                  />
                  <p>We do not sell personal data.</p>
                </Section>

                <Section id="sharing" title="5. Sharing and Sub-processors">
                  <p>
                    We share personal data only with service providers that help us run the website and
                    deliver our services, under contracts that require them to protect it:
                  </p>
                  <List
                    items={[
                      <>
                        <strong>Zoho</strong> (CRM, Desk and Bookings): stores enquiries, support
                        tickets and bookings.
                      </>,
                      <>
                        <strong>Cloudflare</strong> (Turnstile and CDN): spam protection and content
                        delivery.
                      </>,
                      <>
                        <strong>Our hosting provider:</strong> serves the website and holds server
                        logs.
                      </>,
                      <>
                        <strong>Professional advisers, auditors and authorities:</strong> where
                        required by law or to protect our legal rights.
                      </>,
                    ]}
                  />
                  <p>
                    If we are involved in a merger, acquisition or sale of assets, personal data may be
                    transferred as part of that transaction, subject to this policy. A current list of
                    sub-processors is available on request at{" "}
                    <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>
                      {CONTACT_EMAIL}
                    </a>
                    .
                  </p>
                </Section>

                <Section id="transfers" title="6. International Transfers">
                  <p>
                    Our providers may process data outside your country, including outside India and
                    the EEA/UK. Where GDPR applies, we rely on appropriate safeguards such as Standard
                    Contractual Clauses. Transfers out of India are made in line with the DPDPA and
                    any restrictions notified by the Government of India.
                  </p>
                </Section>

                <Section id="retention" title="7. Data Retention">
                  <List
                    items={[
                      "Enquiry and booking records: kept while the conversation is active and for up to 24 months after the last contact, then deleted or anonymised.",
                      "Client and billing records: kept for the period required by Indian tax and company law.",
                      "Server logs: kept for a short rolling period for security and debugging.",
                    ]}
                  />
                  <p>
                    We delete or anonymise personal data sooner if you ask us to and no legal reason
                    requires us to keep it.
                  </p>
                </Section>

                <Section id="security" title="8. Security">
                  <p>
                    We use reasonable technical and organisational safeguards, including encryption in
                    transit (HTTPS), access controls on our systems and CRM, spam and abuse protection
                    on forms, and limiting access to personal data to staff who need it. No system is
                    perfectly secure. If a personal data breach affects you, we will notify you and the
                    relevant authority as required by law.
                  </p>
                </Section>

                <Section id="rights" title="9. Your Rights (DPDPA and GDPR)">
                  <p>
                    Under the DPDPA, you have the right to access information about your personal data,
                    to correct and update it, to have it erased, to withdraw consent, to nominate
                    another person to exercise your rights if you die or become incapacitated, and to
                    have your grievances addressed.
                  </p>
                  <p>
                    If the GDPR applies to you (EEA/UK), you also have the right to restrict or object
                    to processing, to data portability, and to lodge a complaint with your local
                    supervisory authority.
                  </p>
                  <p>
                    To exercise any right, email{" "}
                    <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>
                      {CONTACT_EMAIL}
                    </a>
                    . We may need to verify your identity and will respond within the time required by
                    applicable law. If we cannot resolve your concern, you may complain to the Data
                    Protection Board of India.
                  </p>
                </Section>

                <Section id="cookies" title="10. Cookies">
                  <p>
                    octmark.com does not set advertising or behavioural tracking cookies. Essential
                    technologies, such as those used by Cloudflare Turnstile for spam protection and
                    those set by the embedded Zoho Bookings scheduler when you open it, may store small
                    pieces of data in your browser so that the features work. You can block or delete
                    cookies in your browser settings, but parts of the site (such as booking) may stop
                    working.
                  </p>
                </Section>

                <Section id="children" title="11. Children's Privacy">
                  <p>
                    Our website and services are intended for businesses and are not directed at anyone
                    under 18. We do not knowingly collect personal data from children. If you believe
                    a child has given us personal data, contact us and we will delete it.
                  </p>
                </Section>

                <Section id="octrackit" title="12. Octrackit Has Its Own Policy">
                  <p>
                    Octrackit (octrackit.com) is a software product operated by {LEGAL_NAME}. Data
                    processed inside the Octrackit platform is governed by the Octrackit privacy
                    policy, not this one:{" "}
                    <a
                      href="https://octrackit.com/privacy-policy"
                      className={linkClass}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://octrackit.com/privacy-policy
                    </a>
                    .
                  </p>
                </Section>

                <Section id="grievance-officer" title="13. Grievance Officer">
                  <p>
                    In line with the DPDPA, you can raise questions or complaints about how we handle
                    your personal data with our Grievance Officer:
                  </p>
                  <div className="rounded-xl border border-[#E5E8EE] p-4">
                    <p className="text-[#3E3E3E]">Grievance Officer</p>
                    <p>{LEGAL_NAME}</p>
                    <p>
                      8-39/1, Narayanapuram Colony, Dammaiguda, Nagaram (K.V. Rangareddy), Hyderabad,
                      Telangana 500083, India
                    </p>
                    <p>
                      Email:{" "}
                      <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>
                        {CONTACT_EMAIL}
                      </a>
                    </p>
                  </div>
                  <p>We acknowledge complaints promptly and aim to resolve them within 30 days.</p>
                </Section>

                <Section id="changes" title="14. Changes to This Policy">
                  <p>
                    We may update this policy from time to time. The effective date at the top shows
                    when it last changed. For material changes we will give clear notice on this
                    website or by email.
                  </p>
                </Section>

                <Section id="contact" title="15. Contact Us">
                  <p>
                    {LEGAL_NAME}
                    <br />
                    8-39/1, Narayanapuram Colony, Dammaiguda, Nagaram (K.V. Rangareddy), Hyderabad,
                    Telangana 500083, India
                    <br />
                    Email:{" "}
                    <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>
                      {CONTACT_EMAIL}
                    </a>
                  </p>
                </Section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <GlobalFooter />
    </>
  );
}
