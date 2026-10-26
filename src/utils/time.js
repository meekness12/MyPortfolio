/**
 * Temporal Calculation Utilities for MeekThinker Portfolio
 * Automatically computes living dates, dynamic ages, and reading times.
 */

/**
 * Returns the current month and year in the Africa/Kigali timezone.
 * Example output: "Oct 2026"
 */
export function getKigaliMonthYear() {
  try {
    const formatter = new Intl.DateTimeFormat('en-US', {
      month: 'short',
      year: 'numeric',
      timeZone: 'Africa/Kigali',
    });
    return formatter.format(new Date());
  } catch {
    const now = new Date();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[now.getMonth()]} ${now.getFullYear()}`;
  }
}

/**
 * Calculates current age from a birth year or birth date string.
 * Automatically increments when the year advances.
 *
 * @param {number|string} birthYearOrDate e.g. 2005 or '2005-01-01'
 * @returns {number}
 */
export function calculateAge(birthYearOrDate = 2005) {
  const now = new Date();
  if (typeof birthYearOrDate === 'number') {
    return Math.max(18, now.getFullYear() - birthYearOrDate);
  }

  const birthDate = new Date(birthYearOrDate);
  if (isNaN(birthDate.getTime())) {
    return 21; // Safe fallback
  }

  let age = now.getFullYear() - birthDate.getFullYear();
  const m = now.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < birthDate.getDate())) {
    age--;
  }
  return Math.max(18, age);
}

/**
 * Calculates dynamic reading time for a blog article's content array.
 * Assumes average reading speed of 200 words per minute.
 *
 * @param {Array<{ type: string, text?: string, items?: string[] }>} content
 * @returns {string} e.g. "5 min read"
 */
export function calculateReadingTime(content) {
  if (!Array.isArray(content) || content.length === 0) {
    return '3 min read';
  }

  let totalWords = 0;
  for (const block of content) {
    if (block.text) {
      totalWords += block.text.trim().split(/\s+/).length;
    }
    if (Array.isArray(block.items)) {
      for (const item of block.items) {
        totalWords += item.trim().split(/\s+/).length;
      }
    }
  }

  const minutes = Math.max(1, Math.ceil(totalWords / 200));
  return `${minutes} min read`;
}

/**
 * Formats a date string (ISO or DD.MM.YY) into a clean display date.
 *
 * @param {string} dateStr e.g. '2026-09-26' or '26.09.26'
 * @returns {string}
 */
export function formatFieldNoteDate(dateStr) {
  if (!dateStr) return '';
  // If already in DD.MM.YY format, return as is
  if (/^\d{2}\.\d{2}\.\d{2}$/.test(dateStr)) {
    return dateStr;
  }
  try {
    const d = new Date(dateStr);
    if (!isNaN(d.getTime())) {
      const day = String(d.getDate()).padStart(2, '0');
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const year = String(d.getFullYear()).slice(-2);
      return `${day}.${month}.${year}`;
    }
  } catch {
    // fallback
  }
  return dateStr;
}
