/**
 * Daily Status & Field Notes Control File
 * ---------------------------------------
 * Update this file whenever you start a new project, learn a new framework,
 * or want to record a new engineering field note!
 */

export const liveStatus = {
  city: 'Kigali',
  country: 'Rwanda',
  coordinates: "01°57'S 30°03'E · Rwanda",

  // What you're actively developing right now
  activeProject: {
    title: 'Building Zeno',
    description: 'Fast offline-first developer canvas with instant local sync.',
    statusBadge: 'active', // 'active' | 'learning' | 'shipping'
  },

  // Current focal learning areas
  learning: 'Spring Boot Concurrency & PostgreSQL',
  exploring: 'Local-First Architecture & Multimodal AI',

  // Signature Aphorisms / Field Notes
  fieldNotes: [
    {
      id: '#014',
      quote: 'Good software shouldn’t make people think about the software.',
      date: '26.09.26',
      author: 'Meekness',
    },
    {
      id: '#015',
      quote: 'Performance isn’t an optimization pass. On metered 3G data, it’s the difference between accessibility and exclusion.',
      date: '14.08.25',
      author: 'Meekness',
    },
    {
      id: '#016',
      quote: 'A product can be technically impressive and still feel completely lifeless. Craft is what gives it a pulse.',
      date: '20.05.25',
      author: 'Meekness',
    },
  ],
};
