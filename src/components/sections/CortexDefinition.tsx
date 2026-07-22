import { Brain as BrainCircuit } from "@phosphor-icons/react/dist/ssr";

/**
 * Canonical, self-contained Cortex definition (GEO quote-ready). Single
 * source of truth so the same verbatim text appears on every page.
 */
export const CORTEX_DEFINITION =
  "Octrackit Cortex is the per-client AI lead quality scoring engine in Octrackit, built by Octmark Technologies. For each incoming marketing signal or lead it makes a decision, DISPATCH (act on it) or SUPPRESS (filter it as low-quality or fake), each with a confidence score and a risk level. A dedicated machine-learning model (LightGBM) is trained per client, so every brand gets its own Cortex rather than a shared model. It scores signals across multiple quality dimensions, including a ghost score for fake identities, a velocity score for bot or suspicious activity, source poisoning and junk-rate detection, an overall DNA risk score, and platform and deal-value context. It is fail-open, so it always dispatches when it has no model yet or is not confident, and it learns continuously by retraining on real business outcomes (deals won or lost). A Cortex Strength Score from 0 to 100 (Initializing, Learning, Stabilizing, Strong) shows how mature the model is, and it surfaces insights explaining why each signal was trusted or filtered.";

/**
 * Premium glassmorphism definition card for "What is Cortex?".
 * Distinct, quote-ready treatment reused on every page Cortex appears.
 */
export default function CortexDefinition({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative rounded-2xl p-[1.5px] ${className}`}
      style={{
        background:
          "linear-gradient(135deg, rgba(1,69,132,0.75) 0%, rgba(254,167,129,0.45) 45%, rgba(1,69,132,0.10) 100%)",
        boxShadow: "0 30px 70px -28px rgba(1,69,132,0.55)",
      }}
    >
      <div className="relative overflow-hidden rounded-[15px] bg-[#0B1120] p-8 lg:p-11">
        {/* Ambient glow */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-28 -left-20 w-[380px] h-[380px] rounded-full blur-[90px]"
          style={{ background: "radial-gradient(circle, rgba(1,69,132,0.45) 0%, transparent 70%)" }}
        />
        {/* Large quote mark, signals quote-ready */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-1 right-6 font-display leading-none select-none"
          style={{ fontSize: "150px", color: "rgba(254,167,129,0.10)" }}
        >
          &ldquo;
        </span>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <span
              className="inline-flex items-center justify-center w-11 h-11 rounded-xl shrink-0"
              style={{
                background: "rgba(1,69,132,0.22)",
                border: "1px solid rgba(77,159,224,0.4)",
                boxShadow: "0 0 18px rgba(77,159,224,0.25)",
              }}
            >
              <BrainCircuit size={22} className="text-[#4D9FE0]" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#4D9FE0]">Definition</span>
          </div>

          <h2 className="font-display text-[26px] lg:text-[32px] text-[#EEF1F7] tracking-[-0.4px] leading-[1.15] mb-4">
            What is Cortex?
          </h2>

          <p className="text-[16px] lg:text-[17px] text-[#C7D0DE] font-sans leading-[1.85] max-w-[780px]">
            {CORTEX_DEFINITION}
          </p>

          <div className="mt-6 pt-5 border-t border-white/[0.08]">
            <span className="font-mono text-[11px] text-[#4E5A6C] tracking-[0.06em]">
              AI lead quality scoring · per-client model · fail-open
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
