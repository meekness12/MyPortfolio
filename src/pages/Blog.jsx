import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { scrollToTop } from '../utils/scroll';
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, Check, ExternalLink } from 'lucide-react';

import avatarDark from '../assets/anime_avatar.jpg';
import { BLOG_POSTS } from '../data/blog';
import { calculateReadingTime } from '../utils/time';

function renderFormattedText(text) {
  if (typeof text !== 'string') return text;
  const parts = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    const [, linkText, linkUrl] = match;
    const isExternal = linkUrl.startsWith('http://') || linkUrl.startsWith('https://');
    parts.push(
      <a
        key={`${match.index}-${linkUrl}`}
        href={linkUrl}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className="text-brand-blue dark:text-brand-cyan font-medium underline underline-offset-4 decoration-brand-blue/30 dark:decoration-brand-cyan/30 hover:decoration-brand-blue dark:hover:decoration-brand-cyan transition-colors"
      >
        {linkText}
      </a>
    );
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

export default function Blog() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [selectedTag, setSelectedTag] = useState('All');
  const [selectedPost, setSelectedPost] = useState(() => {
    if (slug) return BLOG_POSTS.find((p) => p.slug === slug) || null;
    return null;
  });
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (slug) {
      const post = BLOG_POSTS.find((p) => p.slug === slug);
      if (post) {
        setSelectedPost(post);
      }
    } else {
      setSelectedPost(null);
    }
  }, [slug]);

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

  const openPost = (post) => {
    setSelectedPost(post);
    navigate(`/blog/${post.slug}`);
    scrollToTop({ immediate: true });
  };

  const closePost = () => {
    setSelectedPost(null);
    navigate('/blog');
    scrollToTop({ immediate: true });
  };

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      const shareUrl = selectedPost
        ? `https://meekthinker.me/blog/${selectedPost.slug}`
        : 'https://meekthinker.me/blog';
      navigator.clipboard?.writeText(shareUrl);
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
            className="w-full max-w-[880px] mx-auto px-4 sm:px-6 md:px-12 pt-28 md:pt-32 pb-24"
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
              className="flex items-center gap-2 sm:gap-2.5 mb-10 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-none touch-pan-x"
              style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
            >
              {categoriesList.map((category) => {
                const count = getTagCount(category);
                const isActive = selectedTag === category;

                return (
                  <motion.button
                    key={category}
                    onClick={() => setSelectedTag(category)}
                    whileTap={{ scale: 0.96 }}
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
                  </motion.button>
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
                  onClick={() => openPost(post)}
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
                        <span className="text-gray-300 dark:text-white/20">·</span>
                        <span className="flex items-center gap-1 text-xs text-gray-400 dark:text-white/40">
                          <Clock size={12} />
                          {calculateReadingTime(post.content)}
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
            className="w-full max-w-[720px] mx-auto px-4 sm:px-6 md:px-12 pt-28 md:pt-32 pb-24"
          >
            {/* Top Navigation Row */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={closePost}
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
                {calculateReadingTime(selectedPost.content)}
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
                  return <p key={idx}>{renderFormattedText(block.text)}</p>;
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
                        <li key={itemIdx}>{renderFormattedText(item)}</li>
                      ))}
                    </ul>
                  );
                }

                if (block.type === 'cta') {
                  return (
                    <div
                      key={idx}
                      className="my-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-transparent dark:from-blue-600/15 dark:via-cyan-600/10 dark:to-transparent border border-brand-blue/20 dark:border-brand-cyan/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-soft transition-all"
                    >
                      <div className="flex-1">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-brand-blue dark:text-brand-cyan font-semibold block mb-1.5">
                          {block.badge || 'Recommended Free Tool'}
                        </span>
                        <h4 className="font-space font-bold text-lg sm:text-xl text-slate-900 dark:text-white mb-2">
                          {block.title}
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-white/70 max-w-lg leading-relaxed">
                          {block.description}
                        </p>
                      </div>
                      <a
                        href={block.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glare-button px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-brand-blue text-white hover:bg-blue-600 dark:bg-brand-cyan dark:text-slate-950 dark:hover:bg-cyan-300 transition-all shadow-soft shrink-0 flex items-center gap-2 cursor-pointer active:scale-95"
                      >
                        <span>{block.buttonText || 'Explore Zeno for Free'}</span>
                        <ExternalLink size={15} />
                      </a>
                    </div>
                  );
                }

                return null;
              })}
            </div>

            {/* Bottom Footer Attribution & Return Navigation */}
            <div className="mt-16 pt-8 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={closePost}
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
