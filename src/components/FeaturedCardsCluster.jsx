import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import { projects } from '../data/projects';

const CARD_DESCRIPTIONS = {
  zeno: 'Privacy-first zero-based envelope budgeting, multi-asset net worth tracking, and receipt OCR in RWF without bank scraping.',
  internbridge: 'Role-based university internship portal unifying student placements, weekly mentor sign-offs, and grading rubrics.',
  talentlens: 'Multimodal resume screening with Gemini 1.5 Flash extraction, weighted match scoring, and candidate gap analysis.',
};

const FEATURED_BADGE_LABELS = {
  zeno: 'Flagship',
  internbridge: 'Enterprise',
  talentlens: 'Hackathon Winner',
};

/**
 * Updates CSS pointer coordinates directly on the card element to render
 * the hairline surface glint without triggering React re-renders.
 */
function handleCardPointerMove(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
}

function handleCardLinkClick(e, projectId, onCardClick) {
  if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey && onCardClick) {
    e.preventDefault();
    onCardClick(projectId);
  }
}

function ZenoBrandMark() {
  return (
    <svg width="20" height="18" viewBox="0 0 24 20" fill="none" aria-hidden="true">
      <rect x="1" y="9" width="3.5" height="9" rx="1.75" fill="#065F46" />
      <rect x="6.5" y="5" width="3.5" height="13" rx="1.75" fill="#10B981" />
      <rect x="12" y="1" width="3.5" height="17" rx="1.75" fill="#F59E0B" />
      <circle cx="19.5" cy="16" r="2" fill="#F59E0B" />
    </svg>
  );
}

/**
 * Domain UI specimen for Zeno: crisp Budget Envelopes & 50/25/15/10 allocation window.
 */
function ZenoShowcaseVisual() {
  const allocations = [
    { label: 'Needs', pct: 50, color: 'bg-emerald-600 dark:bg-emerald-500' },
    { label: 'Invest', pct: 25, color: 'bg-sky-600 dark:bg-sky-500' },
    { label: 'Savings', pct: 15, color: 'bg-amber-500 dark:bg-amber-400' },
    { label: 'Personal', pct: 10, color: 'bg-slate-400 dark:bg-slate-500' },
  ];

  const envelopes = [
    { name: 'Groceries', ratio: '57%', width: 'w-[57%]', tone: 'bg-emerald-500' },
    { name: 'Clothing', ratio: '69%', width: 'w-[69%]', tone: 'bg-amber-500' },
  ];

  return (
    <div
      aria-hidden="true"
      className="relative w-full h-full flex items-end justify-end pt-4 pl-4 sm:pl-6 md:pt-6"
    >
      <div className="w-full rounded-tl-xl border-t border-l border-black/[0.08] dark:border-white/[0.09] bg-white dark:bg-[#0D1017] shadow-[0_-4px_24px_rgba(15,23,42,0.05)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] p-4 sm:p-5 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-[-3px] group-hover:translate-x-[-2px] motion-reduce:transition-none motion-reduce:group-hover:transform-none">
        {/* App Header Row */}
        <div className="flex items-center justify-between gap-3 pb-3.5 border-b border-black/[0.06] dark:border-white/[0.06]">
          <div className="flex items-center gap-2">
            <ZenoBrandMark />
            <span className="font-space font-semibold text-xs text-slate-900 dark:text-white tracking-tight">
              Budget Envelopes
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            On Track
          </span>
        </div>

        {/* Balance & Framework Strip */}
        <div className="pt-3.5 pb-3">
          <div className="flex items-baseline justify-between gap-2 mb-2">
            <div>
              <span className="block font-mono text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Needs · 35% Split
              </span>
              <span className="font-space font-bold text-xl sm:text-2xl text-slate-900 dark:text-white tabular-nums tracking-tight">
                RF 49,000
              </span>
            </div>
            <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400 tabular-nums">
              100% Assigned
            </span>
          </div>

          {/* 50 / 25 / 15 / 10 Segmented Allocation Bar */}
          <div className="flex h-2 w-full rounded-full overflow-hidden gap-0.5 bg-slate-100 dark:bg-white/[0.05]">
            {allocations.map((seg) => (
              <div
                key={seg.label}
                style={{ width: `${seg.pct}%` }}
                className={`${seg.color} transition-opacity duration-200 group-hover:opacity-90`}
              />
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 mt-1.5 text-[9px] sm:text-[10px] font-mono text-slate-400 dark:text-slate-500 tabular-nums">
            {allocations.map((seg) => (
              <span key={seg.label} className="whitespace-nowrap">
                {seg.label} {seg.pct}%
              </span>
            ))}
          </div>
        </div>

        {/* Envelope Progress Rows */}
        <div className="space-y-2 pt-2.5 border-t border-black/[0.05] dark:border-white/[0.06]">
          {envelopes.map((env) => (
            <div
              key={env.name}
              className="flex items-center justify-between gap-3 rounded-lg bg-slate-50/90 dark:bg-white/[0.03] border border-black/[0.04] dark:border-white/[0.04] px-2.5 py-2"
            >
              <span className="font-sans text-[11px] font-medium text-slate-700 dark:text-slate-300 w-20 shrink-0">
                {env.name}
              </span>
              <div className="flex-1 h-1.5 rounded-full bg-slate-200/80 dark:bg-white/[0.07] overflow-hidden">
                <div className={`h-full rounded-full ${env.tone} ${env.width}`} />
              </div>
              <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400 tabular-nums w-8 text-right">
                {env.ratio}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Domain UI specimen for InternBridge: RBAC placement & mentor sign-off flow.
 */
function InternBridgeSpecimen() {
  const steps = [
    { role: 'Student Logbook', meta: 'Week 08 · Submitted', done: true },
    { role: 'Industrial Mentor', meta: 'Signed & Verified', done: true },
    { role: 'Academic Rubric', meta: 'Evaluation · 94/100', done: false },
  ];

  return (
    <div
      aria-hidden="true"
      className="w-full h-[168px] p-4 sm:p-5 bg-slate-100/70 dark:bg-[#0D1017] border-b border-black/[0.06] dark:border-white/[0.06] flex items-center justify-center overflow-hidden"
    >
      <div className="w-full max-w-[330px] rounded-xl bg-white dark:bg-[#141822] border border-black/[0.07] dark:border-white/[0.08] shadow-xs p-3 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover:transform-none">
        <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-black/[0.05] dark:border-white/[0.06]">
          <span className="font-mono text-[10px] font-medium text-slate-500 dark:text-slate-400">
            Placement Workflow
          </span>
          <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400">
            RBAC · Active
          </span>
        </div>

        <div className="space-y-1.5">
          {steps.map((step) => (
            <div
              key={step.role}
              className="flex items-center justify-between gap-2 px-2 py-1 rounded-md bg-slate-50/80 dark:bg-white/[0.025]"
            >
              <div className="flex items-center gap-2 min-w-0">
                <span
                  className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                    step.done
                      ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                      : 'bg-slate-200/80 dark:bg-white/10 text-slate-500 dark:text-slate-400'
                  }`}
                >
                  {step.done ? (
                    <Check size={10} strokeWidth={2.5} />
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  )}
                </span>
                <span className="font-sans text-[11px] font-medium text-slate-800 dark:text-slate-200 truncate">
                  {step.role}
                </span>
              </div>
              <span className="font-mono text-[9px] sm:text-[10px] text-slate-400 dark:text-slate-500 shrink-0 tabular-nums">
                {step.meta}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Domain UI specimen for TalentLens: structured resume parsing & MatchScore breakdown.
 */
function TalentLensSpecimen() {
  const criteria = [
    { label: 'Core Stack', score: 94, barClass: 'w-[94%] bg-slate-900 dark:bg-white' },
    { label: 'System Design', score: 86, barClass: 'w-[86%] bg-brand-blue dark:bg-brand-cyan' },
  ];

  return (
    <div
      aria-hidden="true"
      className="w-full h-[168px] p-4 sm:p-5 bg-slate-100/70 dark:bg-[#0D1017] border-b border-black/[0.06] dark:border-white/[0.06] flex items-center justify-center overflow-hidden"
    >
      <div className="w-full max-w-[330px] rounded-xl bg-white dark:bg-[#141822] border border-black/[0.07] dark:border-white/[0.08] shadow-xs p-3 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover:transform-none">
        <div className="flex items-center justify-between mb-2.5 pb-1.5 border-b border-black/[0.05] dark:border-white/[0.06]">
          <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400 truncate">
            candidate_cv.pdf
          </span>
          <span className="font-mono text-[11px] font-semibold text-slate-900 dark:text-white tabular-nums">
            89% Match
          </span>
        </div>

        <div className="space-y-2.5">
          {criteria.map((item) => (
            <div key={item.label}>
              <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                <span className="text-slate-500 dark:text-slate-400">{item.label}</span>
                <span className="text-slate-800 dark:text-slate-200 tabular-nums">{item.score}%</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-slate-100 dark:bg-white/[0.06] overflow-hidden">
                <div
                  className={`h-full rounded-full ${item.barClass} transition-[width] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-1.5 mt-2.5 pt-2 border-t border-black/[0.04] dark:border-white/[0.05]">
          {['TypeScript', 'Node.js', 'MongoDB'].map((tag) => (
            <span
              key={tag}
              className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-white/[0.05] text-slate-600 dark:text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Shared double-bezel interactive card wrapper matching EditorialSidebar chassis.
 */
function BentoProjectCard({ project, onCardClick, className = '', children }) {
  return (
    <Link
      to={`/projects/${project.id}`}
      onClick={(e) => handleCardLinkClick(e, project.id, onCardClick)}
      onPointerMove={handleCardPointerMove}
      className={`group block min-w-0 text-left rounded-[22px] p-1 bg-white dark:bg-[#11141C] border border-black/[0.08] dark:border-white/[0.08] shadow-soft hover:shadow-soft-hover hover:border-black/20 dark:hover:border-white/20 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue dark:focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-light-bg dark:focus-visible:ring-offset-dark-bg transition-[transform,box-shadow,border-color] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none motion-reduce:active:scale-100 ${className}`}
    >
      <article className="relative h-full rounded-[17px] bg-slate-50/75 dark:bg-[#161A23] border border-black/[0.05] dark:border-white/[0.05] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] overflow-hidden">
        <div className="bento-glint" />
        {children}
      </article>
    </Link>
  );
}

export default function FeaturedCardsCluster({ onCardClick, className = '' }) {
  const featuredMap = useMemo(() => {
    const byId = Object.fromEntries(projects.map((p) => [p.id, p]));
    return {
      zeno: byId.zeno,
      internbridge: byId.internbridge,
      talentlens: byId.talentlens,
    };
  }, []);

  const { zeno, internbridge, talentlens } = featuredMap;
  const companionProjects = [internbridge, talentlens].filter(Boolean);

  return (
    <div className={`w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 ${className}`}>
      {/* ---------------- FLAGSHIP ROW: ZENO ---------------- */}
      {zeno && (
        <BentoProjectCard project={zeno} onCardClick={onCardClick} className="md:col-span-2">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 items-stretch">
            {/* Editorial Copy Column */}
            <div className="md:col-span-5 min-w-0 p-6 sm:p-7 flex flex-col justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-slate-500 dark:text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {zeno.domain}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300">
                    {FEATURED_BADGE_LABELS.zeno}
                  </span>
                </div>

                <h3 className="font-instrument font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight mb-2.5">
                  {zeno.shortName}
                </h3>

                <p className="font-sans text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {CARD_DESCRIPTIONS.zeno}
                </p>
              </div>

              <div className="flex items-center justify-between gap-3 pt-4 border-t border-black/[0.06] dark:border-white/[0.06]">
                <span className="font-mono text-[11px] text-slate-400 dark:text-slate-500 whitespace-nowrap">
                  {zeno.tech.slice(0, 2).join(' · ')}
                </span>

                <span className="inline-flex items-center gap-1 font-sans text-xs font-semibold text-slate-900 dark:text-white group-hover:text-brand-blue dark:group-hover:text-brand-cyan transition-colors whitespace-nowrap shrink-0">
                  <span>Case study</span>
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                  />
                </span>
              </div>
            </div>

            {/* Domain UI Specimen Column */}
            <div className="md:col-span-7 min-w-0 bg-slate-100/60 dark:bg-[#0F131C]/70 border-t md:border-t-0 md:border-l border-black/[0.05] dark:border-white/[0.05]">
              <ZenoShowcaseVisual />
            </div>
          </div>
        </BentoProjectCard>
      )}

      {/* ---------------- COMPANION ROW: INTERNBRIDGE & TALENTLENS ---------------- */}
      {companionProjects.map((project) => (
        <BentoProjectCard key={project.id} project={project} onCardClick={onCardClick}>
          <div className="relative z-10 h-full flex flex-col">
            {project.id === 'internbridge' ? <InternBridgeSpecimen /> : <TalentLensSpecimen />}

            <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-4">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-slate-500 dark:text-slate-400 truncate">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span className="truncate">{project.domain}</span>
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-500 shrink-0">
                    {FEATURED_BADGE_LABELS[project.id]}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <h3 className="font-space font-bold text-lg sm:text-xl text-slate-900 dark:text-white tracking-tight group-hover:text-brand-blue dark:group-hover:text-brand-cyan transition-colors">
                    {project.shortName}
                  </h3>
                  <ArrowUpRight
                    size={16}
                    className="text-slate-400 dark:text-slate-500 group-hover:text-brand-blue dark:group-hover:text-brand-cyan transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 motion-reduce:transition-none"
                  />
                </div>

                <p className="font-sans text-xs sm:text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  {CARD_DESCRIPTIONS[project.id]}
                </p>
              </div>

              <div className="pt-3 border-t border-black/[0.05] dark:border-white/[0.06] font-mono text-[11px] text-slate-400 dark:text-slate-500">
                {project.tech.slice(0, 3).join(' · ')}
              </div>
            </div>
          </div>
        </BentoProjectCard>
      ))}
    </div>
  );
}
