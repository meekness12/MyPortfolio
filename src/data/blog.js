/**
 * Engineering Essays & Blog Posts Dataset
 * ---------------------------------------
 * Publish new articles, update categories, or edit essay content here.
 */

import productDashboard from '../assets/product_dashboard.jpg';
import internbridgeImg from '../assets/internbridge.png';
import classroomImg from '../assets/classroom.png';
import portfolioImg from '../assets/Portfolio.jpg';

export const BLOG_POSTS = [
  {
    slug: 'talentlens-ai-ocr',
    title: 'Zero-Data-Entry: Building TalentLens OCR with Gemini 1.5 Flash',
    subheading:
      'Moving past basic prompt engineering to solve chaotic, multi-column CV parsing with deterministic Zod schema validation.',
    categories: ['AI', 'Engineering'],
    date: 'March 18, 2026',
    isoDate: '2026-03-18',
    thumbnail: productDashboard,
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
