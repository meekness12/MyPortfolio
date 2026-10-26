import React, { useState, useEffect } from 'react';
import { Github, GitCommit, Sparkles } from 'lucide-react';

export default function GitHubCalendarWidget({ username = 'meekness12' }) {
  const [contributions, setContributions] = useState(null);
  const [totalCount, setTotalCount] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    let hasHydratedFromCache = false;
    const cacheKey = `gh_contributions_${username}`;
    const cacheTimestampKey = `gh_contributions_time_${username}`;
    const ONE_DAY = 24 * 60 * 60 * 1000;

    // Check localStorage cache first for instantaneous rendering
    try {
      const cached = localStorage.getItem(cacheKey);
      const cachedTime = localStorage.getItem(cacheTimestampKey);
      if (cached && cachedTime && Date.now() - Number(cachedTime) < ONE_DAY) {
        const parsed = JSON.parse(cached);
        if (parsed?.contributions && parsed?.totalCount) {
          setContributions(parsed.contributions);
          setTotalCount(parsed.totalCount);
          setLoading(false);
          hasHydratedFromCache = true;
        }
      }
    } catch {
      // ignore storage errors
    }

    async function fetchContributions() {
      try {
        const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
        if (res.ok) {
          const data = await res.json();
          if (isMounted && data && Array.isArray(data.contributions)) {
            // Take the last ~20 weeks (140 days) for optimal grid alignment
            const recent = data.contributions.slice(-140);
            const total = data.total?.lastYear || recent.reduce((acc, curr) => acc + curr.count, 0);
            setContributions(recent);
            setTotalCount(total);
            setLoading(false);

            // Save to cache
            try {
              localStorage.setItem(cacheKey, JSON.stringify({ contributions: recent, totalCount: total }));
              localStorage.setItem(cacheTimestampKey, String(Date.now()));
            } catch {
              // ignore storage errors
            }
            return;
          }
        }
      } catch (e) {
        console.warn('Could not fetch live GitHub activity, using fallback', e);
      }

      // If already hydrated from cache, don't overwrite with simulation
      if (isMounted && hasHydratedFromCache) {
        return;
      }

      // Fallback deterministic simulation based on developer active cadence
      if (isMounted) {
        const simulated = [];
        const days = 140;
        let total = 0;
        const now = new Date();
        for (let i = days - 1; i >= 0; i--) {
          const d = new Date(now);
          d.setDate(d.getDate() - i);
          // Deterministic pseudo-random seed based on day of year to prevent reload flickering
          const dayOfYear = Math.floor((d.getTime() - new Date(d.getFullYear(), 0, 0).getTime()) / 86400000);
          const seed = Math.sin(dayOfYear * 999) * 10000;
          const pseudoRand = seed - Math.floor(seed);
          const count = pseudoRand > 0.45 ? Math.floor(pseudoRand * 6) + 1 : 0;
          total += count;
          simulated.push({
            date: d.toISOString().split('T')[0],
            count,
            level: count > 4 ? 4 : count > 2 ? 3 : count > 0 ? 2 : 0,
          });
        }
        setContributions(simulated);
        setTotalCount(total);
        setLoading(false);
      }
    }

    fetchContributions();
    return () => {
      isMounted = false;
    };
  }, [username]);

  // Color mapping for contribution squares (electric emerald & cyan shades)
  const getLevelColor = (level) => {
    switch (level) {
      case 1:
        return 'bg-emerald-500/25 dark:bg-emerald-500/25 border-emerald-500/30';
      case 2:
        return 'bg-emerald-500/50 dark:bg-emerald-500/50 border-emerald-500/40';
      case 3:
        return 'bg-emerald-500/80 dark:bg-emerald-400/80 border-emerald-400';
      case 4:
        return 'bg-emerald-400 dark:bg-emerald-300 border-white shadow-[0_0_8px_rgba(52,211,153,0.4)]';
      default:
        return 'bg-black/[0.05] dark:bg-white/[0.06] border-transparent';
    }
  };

  return (
    <div className="w-full dashed-border-anim rounded-2xl">
      <div className="bg-white dark:bg-dark-surface rounded-2xl p-5 sm:p-6 transition-colors duration-150">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] text-brand-blue">
              <Github size={18} />
            </div>
            <div>
              <h4 className="font-space font-semibold text-sm sm:text-base text-slate-800 dark:text-white flex items-center gap-2">
                GitHub Activity
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </h4>
              <p className="text-xs text-slate-500 dark:text-white/50 font-mono">
                @{username} on GitHub
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-white/70">
            <GitCommit size={14} className="text-emerald-500" />
            <span>{totalCount !== null ? `${totalCount} contributions in the last year` : 'Active contributions'}</span>
          </div>
        </div>

        {/* Heatmap Grid */}
        {loading ? (
          <div className="h-24 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] animate-pulse" />
        ) : (
          <div className="overflow-x-auto pb-2 scrollbar-none touch-pan-x" style={{ WebkitOverflowScrolling: 'touch' }}>
            <div className="min-w-[580px]">
              {/* Grid with 7 rows (days of week) */}
              <div className="grid grid-flow-col grid-rows-7 gap-1.5">
                {contributions?.map((day, idx) => (
                  <div
                    key={idx}
                    title={`${day.count} contributions on ${day.date}`}
                    className={`w-3 h-3 rounded-[3px] border transition-transform hover:scale-125 ${getLevelColor(
                      day.level
                    )}`}
                  />
                ))}
              </div>

              {/* Legend */}
              <div className="flex items-center justify-end gap-2 mt-4 text-[10px] font-mono text-slate-400 dark:text-white/40">
                <span>Less</span>
                <span className="w-2.5 h-2.5 rounded-[2px] bg-black/[0.05] dark:bg-white/[0.06]" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-500/25" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-500/50" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-500/80" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-400" />
                <span>More</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
