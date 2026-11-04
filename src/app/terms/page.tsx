import type { Metadata } from "next";
import type { ReactNode } from "react";
import GlobalHeader from "@/components/global/GlobalHeader";
import GlobalFooter from "@/components/global/GlobalFooter";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms for using octmark.com and engaging the services of Octmark Technologies India Private Limited.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/terms" },
};

const EFFECTIVE_DATE = "4 November 2026";
const LEGAL_NAME = "Octmark Technologies India Private Limited";
const CONTACT_EMAIL = "hello@octmark.io";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-b border-[#E5E8EE] py-8 first:pt-0 last:border-b-0">
      <h2 className="font-display text-[22px] lg:text-[26px] text-[#3E3E3E] mb-4">{title}</h2>
      <div className="space-y-4 text-[15px] text-[#52525B] font-sans leading-[1.7]">{children}</div>
    </section>
  );
}

const linkClass = "text-[#014584] underline";

export default function TermsPage() {
  return (
    <>
      <GlobalHeader darkHero={false} />
      <main id="main" className="flex-1">
        <section className="bg-white pt-[120px] pb-20">
          <div className="mx-auto max-w-[760px] px-6 md:px-10">
            <h1 className="font-display text-[40px] text-[#014584] mb-4">Terms of Service</h1>
            <p className="text-[13px] text-[#8A96A8] font-sans mb-10">
              Effective date: {EFFECTIVE_DATE}
            </p>

            <Section title="1. Who We Are and Scope">
              <p>
                These terms govern your use of octmark.com (the &quot;Website&quot;) and your
                engagement of our agency services. The Website and services are provided by{" "}
                <strong>{LEGAL_NAME}</strong> (&quot;Octmark,&quot; &quot;we,&quot; &quot;us&quot;),
                a company incorporated in India with its registered address at 8-39/1, Narayanapuram
                Colony, Dammaiguda, Nagaram (K.V. Rangareddy), Hyderabad, Telangana 500083, India.
              </p>
              <p>
                By using the Website you agree to these terms. If you engage us for services, a
                separate written proposal or services agreement will set the scope, fees and timelines;
                these terms apply alongside it, and if the two conflict, the signed agreement prevails.
              </p>
            </Section>

            <Section title="2. Octrackit Has Its Own Terms">
              <p>
                Octrackit (octrackit.com) is a software product operated by {LEGAL_NAME}. Use of the
                Octrackit platform is governed by its own terms, available at{" "}
                <a
                  href="https://octrackit.com/terms"
                  className={linkClass}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://octrackit.com/terms
                </a>
                , and not by these terms.
              </p>
            </Section>

            <Section title="3. Our Services">
              <p>
                Our services include marketing strategy, paid media, SEO, social media, CRM and
                automation work. Descriptions on the Website are for general information and are not an
                offer. A service engagement begins only when both parties agree a written scope. We do
                not guarantee specific results such as rankings, leads, revenue or return on ad spend,
                because outcomes depend on factors outside our control.
              </p>
            </Section>

            <Section title="4. Acceptable Use">
              <p>You agree not to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>use the Website for anything unlawful, fraudulent or harmful;</li>
                <li>attempt to gain unauthorised access to the Website, its servers or other users&apos; data;</li>
                <li>introduce malware, or interfere with or overload the Website;</li>
                <li>scrape or copy Website content at scale, or use automated tools to submit forms;</li>
                <li>submit false, misleading or third-party personal information through our forms.</li>
              </ul>
            </Section>

            <Section title="5. Intellectual Property">
              <p>
                The Website, including its text, design, graphics, logos and code, is owned by or
                licensed to {LEGAL_NAME} and protected by intellectual property law. You may view and
                share links to the Website for personal or internal business purposes, but you may not
                copy, modify, distribute or create derivative works from it without our written
                permission.
              </p>
              <p>
                Ownership of deliverables created for a client is set out in the relevant services
                agreement. Unless that agreement says otherwise, we keep ownership of our pre-existing
                tools, methods and know-how.
              </p>
            </Section>

            <Section title="6. Your Content and Information">
              <p>
                When you send us information through the Website, you confirm that it is accurate and
                that you have the right to share it. We handle personal data as described in our{" "}
                <a href="/privacy" className={linkClass}>
                  Privacy Policy
                </a>
                .
              </p>
            </Section>

            <Section title="7. Third-Party Services and Links">
              <p>
                The Website may link to or embed third-party services, such as the Zoho Bookings
                scheduler. These are governed by their own terms and privacy policies, and we are not
                responsible for them.
              </p>
            </Section>

            <Section title="8. Disclaimers">
              <p>
                The Website and its content are provided &quot;as is&quot; and &quot;as available&quot;.
                To the fullest extent permitted by law, we disclaim all warranties, express or implied,
                including fitness for a particular purpose and non-infringement, and we do not warrant
                that the Website will be uninterrupted, error-free or secure. Content on the Website is
                general information and not professional, legal or financial advice.
              </p>
            </Section>

            <Section title="9. Limitation of Liability">
              <p>
                To the fullest extent permitted by law, {LEGAL_NAME} will not be liable for any
                indirect, incidental, special, consequential or punitive damages, or for loss of
                profits, revenue, data or goodwill, arising from your use of the Website. For services,
                our total liability is limited as stated in the applicable services agreement and, if
                it is silent, to the fees you paid us for the service giving rise to the claim in the
                three months before the claim. Nothing in these terms excludes liability that cannot be
                excluded under applicable law.
              </p>
            </Section>

            <Section title="10. Indemnity">
              <p>
                You agree to indemnify {LEGAL_NAME} against claims and losses arising from your breach
                of these terms or your misuse of the Website.
              </p>
            </Section>

            <Section title="11. Changes and Termination">
              <p>
                We may update these terms and the Website at any time. The effective date above shows
                the latest version, and continued use after a change means you accept it. We may
                suspend or restrict access to the Website if you breach these terms.
              </p>
            </Section>

            <Section title="12. Governing Law and Jurisdiction">
              <p>
                These terms are governed by the laws of India. The courts at Hyderabad, Telangana have
                exclusive jurisdiction over any dispute arising from these terms or your use of the
                Website.
              </p>
            </Section>

            <Section title="13. Contact">
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
        </section>
      </main>
      <GlobalFooter />
    </>
  );
}
