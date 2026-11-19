/**
 * Engineering Essays & Blog Posts Dataset
 * ---------------------------------------
 * Publish new articles, update categories, or edit essay content here.
 */

import internbridgeImg from '../assets/internbridge.png';
import classroomImg from '../assets/classroom.png';
import portfolioImg from '../assets/Portfolio.jpg';
import zenoBlogHero from '../assets/zeno_blog_hero.webp';

export const BLOG_POSTS = [
  {
    slug: 'how-ai-can-help-your-financial-decisions',
    title: 'How AI Can Help You Make Smarter Financial Decisions (Without Giving Away Your Passwords)',
    subheading:
      'Why budgeting spreadsheets fail after four days, how proactive envelope allocation changes everything, and why privacy-first AI is the secret to building lasting wealth.',
    categories: ['AI', 'Personal'],
    date: 'November 16, 2026',
    isoDate: '2026-11-16',
    thumbnail: zenoBlogHero,
    content: [
      {
        type: 'paragraph',
        text: 'Almost everyone knows the sinking feeling of opening a banking app on the 25th of the month and wondering where all their money actually went. You didn’t splurge on a luxury vacation or gamble in Vegas. Instead, your paycheck slowly evaporated in a dozen quiet leaks: grocery runs that cost 25% more than anticipated, forgotten digital subscriptions auto-renewing in the background, and spontaneous weekend dinners.',
      },
      {
        type: 'paragraph',
        text: 'The standard advice from personal finance gurus is always the same: “Download a spreadsheet and log your expenses.” But in reality, spreadsheets are where financial resolutions go to die. They demand manual data entry every single night. Within four days, life gets busy, receipts pile up on your desk, the numbers fall behind, and you’re left with the same familiar mixture of guilt and anxiety.',
      },
      {
        type: 'heading',
        text: 'The Spreadsheet Trap: Why Traditional Budgeting Fails',
      },
      {
        type: 'paragraph',
        text: 'The fundamental flaw of traditional personal finance tools is that they are entirely reactive. They show up at the end of the month to tell you what you already messed up three weeks ago. Looking at a red bar chart that says “You overspent on food in October” does virtually nothing to help you make smarter decisions on a Tuesday afternoon in November.',
      },
      {
        type: 'paragraph',
        text: 'To make matters worse, legacy budgeting software now charges $100 or more per year just to track your own dollars. Even worse, many require you to hand over your sensitive bank login passwords and PINs to third-party data brokers who monetize your private spending habits for targeted advertising and credit scoring.',
      },
      {
        type: 'heading',
        text: 'How Everyday AI Actually Changes the Game',
      },
      {
        type: 'paragraph',
        text: 'Artificial intelligence in personal finance shouldn’t be about volatile crypto trading algorithms or opaque Wall Street speculation. Where AI truly shines is eliminating the soul-crushing friction that makes ordinary people give up on managing their money in the first place.',
      },
      {
        type: 'paragraph',
        text: 'Instead of typing thirty individual transaction lines into a spreadsheet cell by cell, modern computer vision models can read a crumpled supermarket receipt or a PDF invoice in two seconds. It instantly pulls out the merchant name, date, total amount, and accurately suggests which budget category it belongs to. By removing manual data entry, the psychological barrier to staying on top of your finances drops to near zero.',
      },
      {
        type: 'quote',
        text: 'Real financial peace of mind isn’t about counting pennies or feeling guilty over coffee. It is about assigning every single dollar an intentional job before the month begins.',
      },
      {
        type: 'heading',
        text: 'Proactive Budgeting: The 50/25/15/10 Wealth Engine',
      },
      {
        type: 'paragraph',
        text: 'The most empowering shift in personal finance is moving from retroactive tracking to proactive zero-based envelope budgeting. Rather than asking where your money went, you decide where it goes before you spend it using the calibrated 50/25/15/10 Wealth Framework:',
      },
      {
        type: 'list',
        items: [
          '50% Essential Needs: Rent, mortgage, groceries, utilities, and daily transport.',
          '25% Emergency & Short-Term Savings: Building a 3-to-6-month liquid cushion so sudden car repairs or medical bills never cause panic.',
          '15% Long-Term Investments: Low-cost index funds, equities, and retirement compounding that build true generational wealth.',
          '10% Guilt-Free Spending: Dining out, gaming, hobbies, and weekend getaways—spent with complete freedom because your future is already fully funded.',
        ],
      },
      {
        type: 'paragraph',
        text: 'When life throws an unexpected curveball—like a higher electric bill during winter—proactive systems don’t break. You simply reallocate surplus funds from your guilt-free envelope into your utilities envelope with a single tap. You stay in control without feeling deprived.',
      },
      {
        type: 'heading',
        text: 'The Math of Freedom: Snowball vs. Avalanche Debt Payoff',
      },
      {
        type: 'paragraph',
        text: 'If you are currently carrying credit card balances, personal loans, or student debt, vague intentions won’t get you out of the hole. Mathematical trajectory will. Algorithmic debt engines calculate two proven strategies side by side:',
      },
      {
        type: 'paragraph',
        text: 'The Debt Avalanche prioritizes your highest interest rate balance first, mathematically minimizing the total interest paid to lenders. The Debt Snowball prioritizes your smallest loan balance first, delivering rapid psychological wins that build momentum. Having an intelligent engine compute your exact debt-freedom date turns paralyzing worry into an empowering, predictable calendar milestone.',
      },
      {
        type: 'heading',
        text: 'The Non-Negotiable Standard: Financial Privacy',
      },
      {
        type: 'paragraph',
        text: 'There is a critical boundary that wealth builders must never cross: trading security for convenience. You should never be forced to hand over your bank login credentials, passwords, or security answers to third-party scraping aggregators. Your net worth, transactions, and balance sheets are private sovereign data.',
      },
      {
        type: 'paragraph',
        text: 'Modern financial technology must be built with local-first offline resilience, client-side encryption, and clean CSV statement imports. You deserve artificial intelligence that works for you without turning your personal spending telemetry into a product sold to advertisers.',
      },
      {
        type: 'heading',
        text: 'Putting It Into Practice with Zeno',
      },
      {
        type: 'paragraph',
        text: 'Because existing tools were either too expensive, too complex, or completely invasive of user privacy, I designed and co-architected [Zeno](https://zeno.kozza.app/)—a free, privacy-first personal financial command center built specifically to solve these challenges.',
      },
      {
        type: 'paragraph',
        text: 'Zeno combines proactive 50/25/15/10 envelope allocation, multi-asset net worth tracking (cash, investments, real estate, and liabilities), automated debt snowball payoff projections, and on-device AI receipt vision—with zero mandatory bank scraping. It gives you the full power of modern financial intelligence while keeping your sensitive passwords completely safe.',
      },
      {
        type: 'cta',
        badge: '100% Free · Privacy-First',
        title: 'Take Control of Your Wealth with Zeno',
        description:
          'Track your complete net worth, master zero-based envelope budgeting, crush debt with snowball calculators, and scan receipts with AI vision. Completely free, private, and requiring zero bank logins.',
        url: 'https://zeno.kozza.app/',
        buttonText: 'Launch Zeno for Free',
      },
      {
        type: 'subheading',
        text: 'Key Financial Principles to Remember',
      },
      {
        type: 'list',
        items: [
          'Budget proactively before the month starts rather than stressing reactively after money is gone.',
          'Use AI vision to eliminate manual data entry so your tracking habit actually lasts.',
          'Know your debt-free date mathematically using Avalanche or Snowball projections.',
          'Never compromise your security by sharing banking passwords with third-party aggregators.',
          'True wealth velocity comes from compounding consistency, not extreme deprivation.',
        ],
      },
    ],
  },
  {
    slug: 'talentlens-ai-ocr',
    title: 'Zero-Data-Entry: Building TalentLens OCR with Gemini 1.5 Flash',
    subheading:
      'Moving past basic prompt engineering to solve chaotic, multi-column CV parsing with deterministic Zod schema validation.',
    categories: ['AI', 'Engineering'],
    date: 'March 18, 2026',
    isoDate: '2026-03-18',
    thumbnail: portfolioImg,
    content: [
      {
        type: 'paragraph',
        text: 'During the Umurava AI Hackathon, our team set out to tackle one of the most frustrating bottlenecks in modern recruitment pipelines: candidate profile completion. Job seekers were routinely forced to re-type work histories, diplomas, and skills across dozens of rigid form inputs, leading to high abandonment rates and incomplete applicant records.',
      },
      {
        type: 'paragraph',
        text: 'Traditional applicant tracking systems rely on regex or rigid parser templates that break when presented with non-standard formatting. In practice, real-world resumes are messy: scanned 200 DPI PDFs, two-column layouts, mixed English and French bullet points, and creative visual skill meters that legacy OCR tools like Tesseract completely scramble.',
      },
      {
        type: 'heading',
        text: 'The Hallucination vs Schema Integrity Dilemma',
      },
      {
        type: 'paragraph',
        text: 'Our initial prototype relied on open-ended prompting: asking the model to extract candidate work history and skills as JSON. In testing, this failed production standards immediately. Without strict constraints, generative models hallucinate missing graduation dates, invent frameworks not present in the text, and return unpredictable casing that crashes downstream database schemas.',
      },
      {
        type: 'quote',
        text: 'Generative AI is only production-ready when anchored behind deterministic schema contracts and strict boundary validation.',
      },
      {
        type: 'paragraph',
        text: 'We restructured the pipeline by pairing Gemini 1.5 Flash’s native multimodal token understanding with Zod runtime schema enforcement. Raw PDF bytes are ingested directly without intermediate text scraping. If an applicant’s resume omits specific end dates, the schema enforces a null value rather than letting the LLM guess.',
      },
      {
        type: 'heading',
        text: 'Explainable Match Scoring',
      },
      {
        type: 'paragraph',
        text: 'Instead of returning an opaque numeric percentage, our system produces transparent gap analysis for hiring managers: identifying strengths, missing technical requirements, and contextual experience relevance in under 2 seconds. Recruiters can click any score component to see the exact resume snippet that justified the evaluation.',
      },
      {
        type: 'subheading',
        text: 'Key Architectural Takeaways',
      },
      {
        type: 'list',
        items: [
          'Never feed raw, unvalidated LLM output directly into transactional databases.',
          'Multimodal token processing eliminates brittle third-party PDF text extractors.',
          'Explainable scoring builds trust with recruiters far faster than black-box percentages.',
        ],
      },
    ],
  },
  {
    slug: 'internbridge-modular-monolith',
    title: 'Why We Chose a Modular Monolith for InternBridge',
    subheading:
      'Resisting the temptation of distributed microservices in favor of a disciplined Spring Boot and PostgreSQL architecture for university internship management.',
    categories: ['Engineering'],
    date: 'November 4, 2025',
    isoDate: '2025-11-04',
    thumbnail: internbridgeImg,
    content: [
      {
        type: 'paragraph',
        text: 'At Rwanda Polytechnic (IPRC Ngoma), coordinating industrial attachments across hundreds of students, dozens of academic advisors, and dispersed enterprise host companies was historically an exhausting, paper-based ordeal. Weekly logbooks were transported by hand, evaluations were filed late, and advisor visits were difficult to verify.',
      },
      {
        type: 'paragraph',
        text: 'Early in the architectural planning of InternBridge, there was enthusiastic pressure to build a distributed microservices setup: a dedicated auth service, an evaluation service, a placement service, and a notification gateway.',
      },
      {
        type: 'heading',
        text: 'The Real Cost of Premature Distribution',
      },
      {
        type: 'paragraph',
        text: 'For a focused engineering team delivering civic and academic infrastructure, microservices introduce massive operational friction: distributed transaction boundaries, network latency overhead, schema duplication, and complex orchestration tooling. A network partition during peak semester grade submission is an unacceptable failure mode.',
      },
      {
        type: 'quote',
        text: 'Boring, mature technology executed with discipline will consistently outperform trendy distributed complexity.',
      },
      {
        type: 'paragraph',
        text: 'We opted instead for a disciplined modular monolith: a single cohesive Java 21 Spring Boot application backed by a normalized PostgreSQL database, paired with a responsive React frontend. Logical boundaries were enforced in code through strict package encapsulation (`auth`, `placement`, `logbook`, `evaluation`) rather than across network boundaries.',
      },
      {
        type: 'heading',
        text: 'Multi-Tenant RBAC without Data Leaks',
      },
      {
        type: 'paragraph',
        text: 'Strict Role-Based Access Control (RBAC) ensures distinct operational perimeters: students cannot modify logged hours once signed off, academic advisors can only view cohorts within their assigned department, and host supervisors have clean, friction-free weekly signoff interfaces. With indexed relational queries, typical API response times remain under 15 milliseconds on modest server hardware.',
      },
      {
        type: 'subheading',
        text: 'Key Architectural Takeaways',
      },
      {
        type: 'list',
        items: [
          'Choose modular monoliths until organizational scale genuinely demands distributed boundaries.',
          'Enforce strict module contracts in code before attempting to enforce them over HTTP networks.',
          'Reliability and straightforward debugging matter far more to institutions than architectural novelty.',
        ],
      },
    ],
  },
  {
    slug: 'building-for-low-bandwidth',
    title: 'Building for Low-Bandwidth Reality: Lessons from Rwandan Civic & EdTech Platforms',
    subheading:
      'What happens when your web application is accessed on metered 3G data bundles and budget Android devices across provincial districts.',
    categories: ['Engineering', 'Personal'],
    date: 'August 14, 2025',
    isoDate: '2025-08-14',
    thumbnail: classroomImg,
    content: [
      {
        type: 'paragraph',
        text: 'A common blindspot in modern web development is assuming high-speed fiber connections and high-end hardware. But in provincial towns and rural learning centers across Rwanda, the lived reality is metered mobile data bundles, fluctuating 3G connectivity, and entry-level Android devices running Chrome with limited memory.',
      },
      {
        type: 'paragraph',
        text: 'In this environment, an unoptimized 4MB JavaScript bundle isn’t merely a performance benchmark warning. It represents actual airtime money spent by a student waiting for a submission portal to load, or a citizen waiting for a clearance receipt to render.',
      },
      {
        type: 'heading',
        text: 'Offline-First and Optimistic UI',
      },
      {
        type: 'paragraph',
        text: 'When designing applications like Edge Journal and educational logbooks, we treated network connectivity as an intermittent enhancement rather than an uninterrupted prerequisite. User inputs are committed immediately to local IndexedDB storage, updating the user interface optimistically while background service workers sync payloads when connection health stabilizes.',
      },
      {
        type: 'quote',
        text: 'Performance is not an optional polish step. In emerging markets, speed and lightweight payloads are the fundamental requirement for accessibility.',
      },
      {
        type: 'paragraph',
        text: 'We aggressively pruned heavy runtime dependencies: avoiding heavy charting packages in favor of native SVG drawings, eliminating unneeded font weights, and keeping initial DOM trees lean. On throttled 3G network profiles, time-to-interactive dropped from 6.8 seconds to 1.1 seconds.',
      },
      {
        type: 'subheading',
        text: 'Core Principles for Low-Bandwidth Web Apps',
      },
      {
        type: 'list',
        items: [
          'Treat local storage as the primary source of truth, synchronizing with the server asynchronously.',
          'Every kilobyte delivered across the wire has real monetary cost to users on metered connections.',
          'Restraint in third-party dependencies produces software that is fast, resilient, and equitable.',
        ],
      },
    ],
  },
  {
    slug: 'discipline-of-restraint-frontend',
    title: 'The Discipline of Restraint in Frontend Engineering',
    subheading:
      'Why modern web software feels cluttered when built with generic UI templates, and how typography, spring physics, and whitespace create lasting craft.',
    categories: ['Personal'],
    date: 'May 20, 2025',
    isoDate: '2025-05-20',
    thumbnail: portfolioImg,
    content: [
      {
        type: 'paragraph',
        text: 'The web today is inundated with interfaces that feel identical: flashy gradient buttons, floating decorative shapes that carry no meaning, generic badge callouts, and animations triggered on every scroll event. They may look eye-catching in a ten-second showcase clip, but they feel distracting and fatiguing when you sit down to actually read, write, or complete work.',
      },
      {
        type: 'paragraph',
        text: 'The highest standard of interface craft is that the interface gets out of the way. Typography should maintain a comfortable reading line length (65 to 75 characters per line). Headings should establish clear hierarchy without shouting. Colors should guide attention, not compete for it.',
      },
      {
        type: 'heading',
        text: 'Spring Physics over Mechanical Keyframes',
      },
      {
        type: 'paragraph',
        text: 'When UI motion is required — expanding a card, switching views, or closing a dialog — linear transitions feel robotic and stiff. Grounding motion in calibrated spring physics (natural mass, stiffness, and damping) gives UI elements tangible momentum, making software feel like a responsive, well-crafted physical tool.',
      },
      {
        type: 'quote',
        text: 'Restraint is not a lack of creativity. It is the conscious decision to respect the user’s attention and cognitive bandwidth.',
      },
      {
        type: 'paragraph',
        text: 'When refining my own portfolio and engineering projects, the most impactful choices were decisions about what to delete: removing decorative icons that communicated nothing, eliminating artificial callout boxes, and giving typographic rhythm the space it needs to breathe.',
      },
      {
        type: 'subheading',
        text: 'Guiding Rules of Interface Restraint',
      },
      {
        type: 'list',
        items: [
          'If a visual element does not convey meaningful state or hierarchy, remove it.',
          'Prioritize layout stability and sub-16ms response times over decorative flourishes.',
          'Let comfortable measure, clean font scales, and purposeful whitespace carry the page.',
        ],
      },
    ],
  },
];
