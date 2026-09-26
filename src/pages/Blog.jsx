import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, Check } from 'lucide-react';

import productDashboard from '../assets/product_dashboard.jpg';
import internbridgeImg from '../assets/internbridge.png';
import classroomImg from '../assets/classroom.png';
import portfolioImg from '../assets/Portfolio.jpg';
import avatarDark from '../assets/avatar_dark.jpg';

// 100% Authentic stories authored in Meekness Bonheur's real voice & project background
const BLOG_POSTS = [
  {
    slug: 'talentlens-ai-ocr',
    title: 'Zero-Data-Entry: Building TalentLens OCR with Gemini 1.5 Flash',
    subheading:
      'Moving past basic prompt engineering to solve chaotic, multi-column CV parsing with deterministic Zod schema validation.',
    categories: ['AI', 'Engineering'],
    date: 'March 18, 2026',
    readTime: '5 min read',
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
    readTime: '6 min read',
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
    readTime: '4 min read',
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
    readTime: '4 min read',
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

export default function Blog() {
  const [selectedTag, setSelectedTag] = useState('All');
  const [selectedPost, setSelectedPost] = useState(null);
  const [copied, setCopied] = useState(false);

  // Automatically scroll to top when opening an article
  useEffect(() => {
    if (selectedPost) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedPost]);

  // Dynamic Category Tags with real counts
  const categoriesList = ['All', 'AI', 'Engineering', 'Personal'];

  const getTagCount = (category) => {
    if (category === 'All') return BLOG_POSTS.length;
    return BLOG_POSTS.filter((post) => post.categories.includes(category)).length;
  };

  const filteredPosts = useMemo(() => {
    if (selectedTag === 'All') return BLOG_POSTS;
    return BLOG_POSTS.filter((post) => post.categories.includes(selectedTag));
  }, [selectedTag]);

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard?.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="w-full min-h-screen relative z-20 transition-colors duration-150">
      <AnimatePresence mode="wait">
        {!selectedPost ? (
          /* ========================================================================= */
          /* BLOG ARCHIVE LIST VIEW (Exact Palakonweb Architecture)                   */
          /* ========================================================================= */
          <motion.div
            key="blog-list"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="w-full max-w-[880px] mx-auto px-6 md:px-12 pt-28 md:pt-32 pb-24"
          >
            {/* Header */}
            <div className="mb-10">
              <h1 className="font-instrument font-semibold text-4xl md:text-5xl text-gray-800 dark:text-white tracking-tight mb-3">
                Blogs
              </h1>
              <p className="font-sans text-gray-500 dark:text-white/50 text-sm md:text-base">
                Because I like to write.
              </p>
            </div>

            {/* Category Filter Pills Row (Exact Palakonweb pill design) */}
            <div
              className="flex items-center gap-2.5 mb-10 overflow-x-auto pb-2 -mx-1 px-1"
              style={{ scrollbarWidth: 'none' }}
            >
              {categoriesList.map((category) => {
                const count = getTagCount(category);
                const isActive = selectedTag === category;

                return (
                  <button
                    key={category}
                    onClick={() => setSelectedTag(category)}
                    className={`glare-button shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-150 cursor-pointer ${
                      isActive
                        ? 'bg-black dark:bg-white text-white dark:text-black'
                        : 'bg-white dark:bg-dark-surface2 border border-black/10 dark:border-white/10 text-gray-700 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/10'
                    }`}
                  >
                    <span>{category}</span>
                    <span
                      className={`text-xs px-1.5 py-0.5 rounded-full ${
                        isActive
                          ? 'bg-white/20 dark:bg-black/10'
                          : 'bg-black/5 dark:bg-white/10'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Blog Post Cards Grid (Exact Palakonweb Dashed Border Split Cards) */}
            <div className="grid grid-cols-1 gap-6">
              {filteredPosts.length === 0 && (
                <p className="text-gray-500 dark:text-white/40 text-sm py-10 text-center col-span-full">
                  No posts in this category yet.
                </p>
              )}

              {filteredPosts.map((post, index) => (
                <motion.button
                  key={post.slug}
                  onClick={() => setSelectedPost(post)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
                  className="rounded-2xl w-full text-left p-[2px] border-2 border-dashed border-black/[0.16] hover:border-black/35 dark:border-white/[0.18] dark:hover:border-white/35 transition-colors duration-200 cursor-pointer group"
                >
                  <div className="flex flex-col sm:flex-row bg-white dark:bg-dark-surface rounded-[14px] overflow-hidden transition-colors duration-150">
                    {/* Left Thumbnail (sm:w-64 md:w-80 aspect-video) */}
                    <div className="w-full sm:w-64 md:w-80 aspect-video shrink-0 bg-slate-900 overflow-hidden relative">
                      <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>

                    {/* Right Content Column */}
                    <div className="flex flex-col flex-1 p-5 md:p-6 justify-center">
                      <h3 className="font-instrument font-semibold text-xl md:text-2xl text-gray-800 dark:text-white mb-1.5 group-hover:text-brand-blue dark:group-hover:text-brand-cyan transition-colors">
                        {post.title}
                      </h3>

                      <p className="font-sans text-sm text-gray-600 dark:text-white/50 leading-relaxed mb-3 line-clamp-2">
                        {post.subheading}
                      </p>

                      {/* Category Badges & Date */}
                      <div className="flex items-center flex-wrap gap-2 mb-4">
                        {post.categories.map((cat) => (
                          <span
                            key={cat}
                            className="text-xs font-medium text-gray-700 dark:text-white/70 bg-black/5 dark:bg-white/10 rounded-full px-2.5 py-0.5"
                          >
                            {cat}
                          </span>
                        ))}
                        <span className="flex items-center gap-1 text-xs text-gray-400 dark:text-white/40 ml-1">
                          <Calendar size={12} />
                          {post.date}
                        </span>
                      </div>

                      {/* Read Now Action */}
                      <div className="flex items-center justify-start">
                        <span className="glare-button relative flex items-center gap-1.5 text-xs font-medium text-gray-800 dark:text-white rounded-full px-4 py-2 bg-white dark:bg-dark-surface3 border border-black/5 dark:border-white/10 shadow-[0_2px_6px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.9)] dark:shadow-none group-hover:border-black/20 dark:group-hover:border-white/20 transition-all">
                          <span>Read Now</span>
                          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        ) : (
          /* ========================================================================= */
          /* SINGLE POST READER VIEW (Exact Palakonweb 720px Reader Measure)          */
          /* ========================================================================= */
          <motion.div
            key="blog-article"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="w-full max-w-[720px] mx-auto px-6 md:px-12 pt-28 md:pt-32 pb-24"
          >
            {/* Top Navigation Row */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => setSelectedPost(null)}
                className="group flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors duration-150 cursor-pointer"
              >
                <ArrowLeft
                  size={16}
                  className="transition-transform duration-150 group-hover:-translate-x-1"
                />
                <span>Back to Blog</span>
              </button>

              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check size={13} className="text-emerald-500" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Share2 size={13} />
                    <span>Share</span>
                  </>
                )}
              </button>
            </div>

            {/* Panoramic Hero Banner (aspect-video) */}
            <div className="w-full aspect-video rounded-2xl mb-8 overflow-hidden bg-slate-950 border border-black/10 dark:border-white/10 shadow-sm">
              <img
                src={selectedPost.thumbnail}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Metadata Badges & Date */}
            <div className="flex items-center flex-wrap gap-2 mb-4">
              {selectedPost.categories.map((cat) => (
                <span
                  key={cat}
                  className="text-xs font-medium text-gray-700 dark:text-white/70 bg-black/5 dark:bg-white/10 rounded-full px-2.5 py-0.5"
                >
                  {cat}
                </span>
              ))}
              <span className="flex items-center gap-1 text-xs text-gray-400 dark:text-white/40 ml-1">
                <Calendar size={12} />
                {selectedPost.date}
              </span>
              <span className="text-gray-300 dark:text-white/20">·</span>
              <span className="flex items-center gap-1 text-xs text-gray-400 dark:text-white/40">
                <Clock size={12} />
                {selectedPost.readTime}
              </span>
            </div>

            {/* Article Title (Exact Palakonweb Scale: 3xl md:4xl in Instrument Serif) */}
            <h1 className="font-instrument font-semibold text-3xl md:text-4xl text-gray-800 dark:text-white tracking-tight mb-3">
              {selectedPost.title}
            </h1>

            {/* Subheading / Lead (Exact Palakonweb text-base) */}
            <p className="font-sans text-base text-gray-500 dark:text-white/50 mb-10 leading-relaxed">
              {selectedPost.subheading}
            </p>

            {/* Article Content (Exact Palakonweb prose-blog text-[15px] scale) */}
            <div className="prose-blog font-sans text-[15px] leading-relaxed text-gray-700 dark:text-white/80 space-y-4">
              {selectedPost.content.map((block, idx) => {
                if (block.type === 'paragraph') {
                  return <p key={idx}>{block.text}</p>;
                }

                if (block.type === 'heading') {
                  return (
                    <h2
                      key={idx}
                      className="font-instrument font-semibold text-[1.4rem] text-gray-800 dark:text-white mt-8 mb-3"
                    >
                      {block.text}
                    </h2>
                  );
                }

                if (block.type === 'subheading') {
                  return (
                    <h3
                      key={idx}
                      className="font-sans font-semibold text-[1.15rem] text-gray-800 dark:text-white mt-6 mb-2"
                    >
                      {block.text}
                    </h3>
                  );
                }

                if (block.type === 'quote') {
                  return (
                    <blockquote
                      key={idx}
                      className="my-6 pl-4 border-l-2 border-black/20 dark:border-white/20 italic font-instrument text-lg md:text-xl text-gray-800 dark:text-white/90"
                    >
                      “{block.text}”
                    </blockquote>
                  );
                }

                if (block.type === 'list') {
                  return (
                    <ul key={idx} className="list-disc pl-5 space-y-1.5 my-3">
                      {block.items.map((item, itemIdx) => (
                        <li key={itemIdx}>{item}</li>
                      ))}
                    </ul>
                  );
                }

                return null;
              })}
            </div>

            {/* Bottom Footer Attribution & Return Navigation */}
            <div className="mt-16 pt-8 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => setSelectedPost(null)}
                className="group flex items-center gap-2 text-sm font-semibold text-gray-800 dark:text-white hover:text-brand-blue dark:hover:text-brand-cyan transition-colors cursor-pointer"
              >
                <ArrowLeft
                  size={16}
                  className="transition-transform duration-150 group-hover:-translate-x-1"
                />
                <span>Back to all posts</span>
              </button>

              <div className="flex items-center gap-3">
                <img
                  src={avatarDark}
                  alt="Meekness Bonheur"
                  className="w-9 h-9 rounded-full object-cover border border-black/10 dark:border-white/20"
                />
                <div>
                  <div className="text-xs font-semibold text-gray-900 dark:text-white">
                    Meekness Bonheur
                  </div>
                  <div className="text-[11px] font-mono text-gray-400 dark:text-white/50">
                    Full-Stack & AI Systems
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
