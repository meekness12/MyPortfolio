/**
 * Design Archive Dataset — Multidisciplinary Showcase
 * ----------------------------------------------------
 * Centralizes all 8 design collections across Digital UI/UX
 * and Graphic & Print Media disciplines.
 *
 * 100% Authentic works by Meekness Bonheur — zero AI fillers.
 */

// Digital UI/UX Screenshots (Authentic Software Platforms)
import PortfolioImg from '../assets/Portfolio.jpg';
import PoliceImg from '../assets/Police.jpg';
import InternbridgeImg from '../assets/internbridge.png';
import EdgejournalImg from '../assets/edgejournal.png';
import ClassroomImg from '../assets/classroom.png';
import BannerImg from '../assets/banner.jpg';
import ZenoHeroImg from '../assets/zeno_blog_hero.webp';

// Graphic & Print Media Design Assets (Authentic Client & Event Works)
import RollupIotRoboticsImg from '../assets/designs/rollup_iot_robotics.webp';
import BadgeIotStaffImg from '../assets/designs/badge_iot_staff.webp';

// Social Media Campaigns (Authentic Multi-Slide Zeno Carousel & Events)
import ZenoSlide1 from '../assets/designs/zeno-carousel/slide_1.webp';
import ZenoSlide2 from '../assets/designs/zeno-carousel/slide_2.webp';
import ZenoSlide3 from '../assets/designs/zeno-carousel/slide_3.webp';
import ZenoSlide4 from '../assets/designs/zeno-carousel/slide_4.webp';
import ZenoSlide5 from '../assets/designs/zeno-carousel/slide_5.webp';
import ZenoSlide6 from '../assets/designs/zeno-carousel/slide_6.webp';

import SocialIotRegistrationImg from '../assets/designs/social_iot_registration.webp';
import SocialVarsityFixturesImg from '../assets/designs/social_varsity_fixtures.webp';

// Brand Identity & Logos (Authentic Works from D:\logo)
import BrandKozzaIdentityImg from '../assets/designs/brand_kozza_identity.webp';
import BrandKozzaLockupImg from '../assets/designs/brand_kozza_lockup.webp';
import BrandQuerymeSystemImg from '../assets/designs/brand_queryme_system.webp';
import BrandPostaMarkImg from '../assets/designs/brand_posta_mark.webp';
import BrandPostaMotionGif from '../assets/designs/brand_posta_motion.gif';

export const designDisciplines = [
  { id: 'all', label: 'All Works' },
  { id: 'ui-ux', label: 'UI/UX & Web' },
  { id: 'graphic-print', label: 'Graphic & Print' },
];

export const designCollections = [
  // =========================================================================
  // 1. DIGITAL UI/UX COLLECTIONS (Authentic Software Systems)
  // =========================================================================
  {
    id: 'heros',
    name: 'Heros',
    collectionLabel: 'Digital Collection',
    discipline: 'ui-ux',
    aspectRatio: 'landscape',
    description: 'Hero sections, high-focus application headers, and dashboard overview screens.',
    previews: [ZenoHeroImg, InternbridgeImg, EdgejournalImg],
    items: [
      {
        id: 'hero-1',
        title: 'Zeno — Personal Finance & Wealth Management Hero',
        category: 'Flagship Platform Hero',
        discipline: 'ui-ux',
        aspectRatio: 'landscape',
        description: 'Clean personal finance dashboard hero featuring net worth tracking in Rwandan Francs (RWF), envelope budgeting categories, and on-device receipt scanning.',
        image: ZenoHeroImg,
        tools: ['Figma', 'React', 'Tailwind CSS', 'TypeScript'],
        specs: 'Responsive 1920×1080 • High-Contrast Dark Mode',
      },
      {
        id: 'hero-2',
        title: 'InternBridge — Academic Internship Placement Hero',
        category: 'Enterprise Platform Hero',
        discipline: 'ui-ux',
        aspectRatio: 'landscape',
        description: 'Multi-tenant internship coordination portal connecting university administrators, academic supervisors, and students across Rwanda Polytechnic.',
        image: InternbridgeImg,
        tools: ['Java 21', 'Spring Boot', 'Tailwind CSS', 'React'],
        specs: 'RBAC Multi-Tenant UI • Clean Architecture',
      },
      {
        id: 'hero-3',
        title: 'TalentLens AI — Candidate Screening & OCR Hero',
        category: 'AI Platform Hero',
        discipline: 'ui-ux',
        aspectRatio: 'landscape',
        description: 'Automated candidate evaluation portal with multimodal Gemini 1.5 Flash resume parsing and transparent criteria match scoring.',
        image: PortfolioImg,
        tools: ['Gemini 1.5 Flash', 'TypeScript', 'Tailwind CSS', 'React'],
        specs: '1440px Grid • Multimodal OCR Preview',
      },
      {
        id: 'hero-4',
        title: 'EdgeJournal — Professional Trading & Risk Hero',
        category: 'Trading Platform Hero',
        discipline: 'ui-ux',
        aspectRatio: 'landscape',
        description: 'Distraction-free trading dashboard featuring real-time position sizing, risk-to-reward metrics, and execution discipline tracking.',
        image: EdgejournalImg,
        tools: ['React', 'CSS3', 'Typography Tokens'],
        specs: 'Fluid Typographic Scale • High-Performance Workspace',
      },
      {
        id: 'hero-5',
        title: 'Police Administration — Driving License Service Hero',
        category: 'Public Enterprise Hero',
        discipline: 'ui-ux',
        aspectRatio: 'landscape',
        description: 'High-contrast administrative portal for Rwanda National Police handling driver license applications, exam allocation, and biometric status checks.',
        image: PoliceImg,
        tools: ['React', 'JavaScript', 'Tailwind CSS', 'Figma'],
        specs: 'Institutional Portal • High-Contrast Ergonomics',
      },
      {
        id: 'hero-6',
        title: 'Classroom LAN — Local Resource Distribution Hero',
        category: 'Offline Network Utility',
        discipline: 'ui-ux',
        aspectRatio: 'landscape',
        description: 'Local-area network file distribution console synchronizing educational materials across classroom computers without an internet connection.',
        image: ClassroomImg,
        tools: ['Java 21', 'Spring Boot', 'Socket Protocol'],
        specs: 'Socket Status Monitor • Offline Classroom Console',
      },
      {
        id: 'hero-7',
        title: 'Twilight Developer Architecture Hub',
        category: 'Personal Brand Hero',
        discipline: 'ui-ux',
        aspectRatio: 'landscape',
        description: 'Panoramic twilight city skyline cover celebrating nocturnal engineering, systems architecture, and clean craftsmanship.',
        image: BannerImg,
        tools: ['Figma', 'Digital Art', 'Responsive CSS'],
        specs: '3840×1080 Ultra-Wide • Cinematic Grade',
      },
    ],
  },
  {
    id: 'product-pages',
    name: 'Product Pages',
    collectionLabel: 'Digital Collection',
    discipline: 'ui-ux',
    aspectRatio: 'landscape',
    description: 'Complex SaaS workflows, multi-tenant portals, risk analytics, and institutional management consoles.',
    previews: [InternbridgeImg, ZenoHeroImg, EdgejournalImg],
    items: [
      {
        id: 'prod-1',
        title: 'Zeno — Proactive Envelope Allocation & Net Worth Engine',
        category: 'Product Page',
        discipline: 'ui-ux',
        aspectRatio: 'landscape',
        description: 'Complete 50/25/15/10 Wealth Framework allocation console with automated avalanche/snowball debt calculations and multi-asset balance sheet tracking.',
        image: ZenoHeroImg,
        tools: ['React', 'TypeScript', 'Tailwind CSS', 'Local-First'],
        specs: 'Zero-Based Allocation Engine • Real-Time Spending Progress',
      },
      {
        id: 'prod-2',
        title: 'InternBridge — Supervisor Lifecycle & Logbook Portal',
        category: 'Enterprise App',
        discipline: 'ui-ux',
        aspectRatio: 'landscape',
        description: 'Role-Based Access Control portal managing company placements, student weekly digital logbooks, and academic accreditation score rubrics.',
        image: InternbridgeImg,
        tools: ['Spring Boot', 'PostgreSQL', 'React', 'Docker'],
        specs: 'RBAC Authorization • Digital Logbook Verification Flow',
      },
      {
        id: 'prod-3',
        title: 'TalentLens — Match Scoring & Resume Extraction Workspace',
        category: 'Product Workflow',
        discipline: 'ui-ux',
        aspectRatio: 'landscape',
        description: 'Recruiter evaluation workspace breaking down candidate resumes into explicit requirement matches and skill gaps using Gemini 1.5 Flash.',
        image: PortfolioImg,
        tools: ['Gemini 1.5 Flash', 'TypeScript', 'MongoDB', 'React'],
        specs: 'Two-Pane Split Inspection • Explainable MatchScore',
      },
      {
        id: 'prod-4',
        title: 'EdgeJournal — Position Sizing & Risk Management Workspace',
        category: 'Trading Platform',
        discipline: 'ui-ux',
        aspectRatio: 'landscape',
        description: 'Execution logging workspace calculating dynamic lot sizing, stop loss expectancy, and trade psychology mistake tagging for Forex and crypto.',
        image: EdgejournalImg,
        tools: ['React', 'TypeScript', 'Tailwind CSS', 'Analytics'],
        specs: 'Dynamic Risk Sizer • Risk-to-Reward Performance Curves',
      },
      {
        id: 'prod-5',
        title: 'Police Driver Examination & License Management',
        category: 'Administrative System',
        discipline: 'ui-ux',
        aspectRatio: 'landscape',
        description: 'Public service administrative registry with applicant status audits, exam schedule allocation, and biometric verification workflows.',
        image: PoliceImg,
        tools: ['React', 'REST APIs', 'Figma'],
        specs: 'Public Sector Audit Trail • Biometric Verification',
      },
      {
        id: 'prod-6',
        title: 'Classroom LAN Auto-Distribution Console',
        category: 'Desktop Protocol',
        discipline: 'ui-ux',
        aspectRatio: 'landscape',
        description: 'Teacher dispatching and workstation grading interface functioning completely offline over local classroom networks.',
        image: ClassroomImg,
        tools: ['Java 21', 'Sockets', 'Network Architecture'],
        specs: 'Zero-Internet Broadcast • LAN Checksum File Distribution',
      },
    ],
  },
  {
    id: 'landing-pages',
    name: 'Landing Pages',
    collectionLabel: 'Digital Collection',
    discipline: 'ui-ux',
    aspectRatio: 'landscape',
    description: 'High-converting platform showcases, institutional portals, and product architectures.',
    previews: [ZenoHeroImg, InternbridgeImg, EdgejournalImg],
    items: [
      {
        id: 'land-1',
        title: 'Zeno — Personal Finance & Budgeting Platform',
        category: 'Landing Page',
        discipline: 'ui-ux',
        aspectRatio: 'landscape',
        description: 'Conversion landing page highlighting privacy-first zero-based budgeting, 0% bank scraping, and automated debt freedom math.',
        image: ZenoHeroImg,
        tools: ['React', 'Tailwind CSS', 'Framer Motion'],
        specs: 'Personal Finance Showcase • Interactive Feature Grids',
      },
      {
        id: 'land-2',
        title: 'InternBridge — Institutional Placement Portal',
        category: 'Landing Page',
        discipline: 'ui-ux',
        aspectRatio: 'landscape',
        description: 'Modern university portal landing page guiding students through application cycles and corporate host partnerships.',
        image: InternbridgeImg,
        tools: ['React', 'Spring Boot', 'Tailwind CSS'],
        specs: 'Institutional Onboarding • Student CTAs',
      },
      {
        id: 'land-3',
        title: 'EdgeJournal — Distraction-Free Professional Trading',
        category: 'Landing Page',
        discipline: 'ui-ux',
        aspectRatio: 'landscape',
        description: 'Product landing page emphasizing simplicity, speed, offline-first persistence, and fluid risk management.',
        image: EdgejournalImg,
        tools: ['React', 'Tailwind CSS', 'Framer Motion'],
        specs: 'Minimalist Conversion Hero • Feature Grids',
      },
      {
        id: 'land-4',
        title: 'Meekness Bonheur — Engineering Portfolio Architecture',
        category: 'Personal Portfolio',
        discipline: 'ui-ux',
        aspectRatio: 'landscape',
        description: 'High-performance portfolio architecture with 5-view navigation, live GitHub graph, and tactile skeuomorphic archives.',
        image: BannerImg,
        tools: ['React', 'Framer Motion', 'Tailwind CSS'],
        specs: 'Custom Skeuomorphic Folders • Zero-Layout-Shift',
      },
    ],
  },
  {
    id: 'cards',
    name: 'Cards',
    collectionLabel: 'Digital Collection',
    discipline: 'ui-ux',
    aspectRatio: 'landscape',
    description: 'Biometric credentials, summary widgets, qualification scorecards, and network status components.',
    previews: [PoliceImg, PortfolioImg, EdgejournalImg],
    items: [
      {
        id: 'card-1',
        title: 'National Driver’s License Biometric ID Card',
        category: 'Component & Credential',
        discipline: 'ui-ux',
        aspectRatio: 'landscape',
        description: 'Official digital ID verification card mockup with holographic seal, QR validation, and applicant status indicators.',
        image: PoliceImg,
        tools: ['Figma', 'CSS Grid', 'SVG'],
        specs: 'CR80 Vector Layout • QR Validation Mockup',
      },
      {
        id: 'card-2',
        title: 'TalentLens MatchScore Breakdown Card',
        category: 'AI Metric Card',
        discipline: 'ui-ux',
        aspectRatio: 'landscape',
        description: 'Interactive score meter displaying AI candidate fit percentages, key strengths, and missing prerequisites.',
        image: PortfolioImg,
        tools: ['Gemini 1.5 Flash', 'TypeScript', 'Tailwind CSS'],
        specs: 'Semantic Radial Progress • Score Weighting',
      },
      {
        id: 'card-3',
        title: 'Classroom LAN Peer Sync Node Card',
        category: 'Network Status Card',
        discipline: 'ui-ux',
        aspectRatio: 'landscape',
        description: 'Card displaying connected student workstations, latency indicators, and local file distribution progress.',
        image: ClassroomImg,
        tools: ['Java Socket', 'React', 'CSS'],
        specs: 'Socket Status Badge • P2P Latency Meter',
      },
      {
        id: 'card-4',
        title: 'EdgeJournal Risk-to-Reward Expectancy Card',
        category: 'Trading Metric Card',
        discipline: 'ui-ux',
        aspectRatio: 'landscape',
        description: 'Compact performance card summarizing win rate, profit factor, drawdown curves, and setup expectancy.',
        image: EdgejournalImg,
        tools: ['React', 'Tailwind CSS', 'Analytics'],
        specs: 'Risk Metrics • Dynamic R-Multiple Ratio',
      },
    ],
  },

  // =========================================================================
  // 2. GRAPHIC & PRINT MEDIA COLLECTIONS (100% Authentic Works)
  // =========================================================================
  {
    id: 'rollup-banners',
    name: 'Roll-up Banners',
    collectionLabel: 'Print & Standees',
    discipline: 'graphic-print',
    aspectRatio: 'tall',
    description: 'Full-height retractable exhibition standees, keynote pull-up banners, and high-impact conference backdrops.',
    previews: [RollupIotRoboticsImg],
    items: [
      {
        id: 'rollup-1',
        title: "Building Rwanda's Future Through IoT & Robotics — Keynote Roll-up",
        category: 'Exhibition Standee',
        discipline: 'graphic-print',
        aspectRatio: 'tall',
        description: 'Full-height keynote exhibition standee created for IoT & Robotics Rwanda and Tajyire. Features high-precision robotics hardware photography, circuit traces, call-to-action community portal, and verified website QR access.',
        image: RollupIotRoboticsImg,
        tools: ['Adobe Illustrator', 'Photoshop', 'Large Format Print'],
        specs: '850 × 2000 mm • CMYK 300 DPI • Retractable Aluminum Cassette',
        colors: ['#0066FF', '#00A859', '#FFA114', '#0D1B2A'],
      },
    ],
  },
  {
    id: 'badges',
    name: 'Badges & ID Cards',
    collectionLabel: 'Credentials & Passes',
    discipline: 'graphic-print',
    aspectRatio: 'portrait',
    description: 'Official conference staff credential passes, lanyard slots, and attendee verification cards.',
    previews: [BadgeIotStaffImg],
    items: [
      {
        id: 'badge-1',
        title: 'Emerging Technology Day 2026 — Official Staff Credential Pass',
        category: 'Event Credential',
        discipline: 'graphic-print',
        aspectRatio: 'portrait',
        description: 'Official conference staff credential pass designed for IoT & Robotics Rwanda and Tajyire. Features attendee photo verification, bold role classification pill (STAFF), institutional palette bar, and dual-domain validation.',
        image: BadgeIotStaffImg,
        tools: ['Adobe Illustrator', 'Photoshop', 'Lanyard Cutout'],
        specs: '70 × 120 mm • CMYK 300 DPI • Woven Webbing Lanyard Slot',
        colors: ['#0D1B2A', '#FFA114', '#00A859', '#0066FF'],
      },
    ],
  },
  {
    id: 'social-media',
    name: 'Social Media Campaigns',
    collectionLabel: 'Campaigns & Social',
    discipline: 'graphic-print',
    aspectRatio: 'square',
    description: 'High-impact multi-slide educational carousels, event registration campaigns, and community tournament fixture schedules.',
    previews: [ZenoSlide1, SocialIotRegistrationImg, SocialVarsityFixturesImg],
    items: [
      {
        id: 'social-1',
        title: 'Zeno by Kozza — Personal Finance Platform 6-Slide Social Campaign',
        category: 'Instagram Carousel',
        discipline: 'graphic-print',
        aspectRatio: 'square',
        description: 'Comprehensive 6-slide educational Instagram carousel introducing zero-based envelope budgeting, debt freedom milestones, and privacy-first wealth management with authentic Rwandan Franc (RWF) product interfaces.',
        image: ZenoSlide1,
        slides: [ZenoSlide1, ZenoSlide2, ZenoSlide3, ZenoSlide4, ZenoSlide5, ZenoSlide6],
        tools: ['Figma', 'Adobe Illustrator', 'Brand Guidelines'],
        specs: '1080 × 1080 px • Digital RGB • 6-Slide Multi-Asset Carousel',
        colors: ['#072B20', '#FFA114', '#F9F9F6', '#10B981'],
      },
      {
        id: 'social-2',
        title: 'IoT & Robotics Rwanda — Emerging Tech Day Registration Campaign',
        category: 'Event Launch Campaign',
        discipline: 'graphic-print',
        aspectRatio: 'portrait',
        description: 'High-conversion registration campaign visual featuring industrial robotics cutouts, Luma registration portal, QR application gateway, and core innovation pillars (Connect / Create / Collaborate).',
        image: SocialIotRegistrationImg,
        tools: ['Adobe Illustrator', 'Photoshop', 'Digital Social'],
        specs: '1024 × 1536 px • Digital RGB 300 DPI • Multi-Platform Post',
        colors: ['#0070F3', '#FFB800', '#0A192F', '#FFFFFF'],
      },
      {
        id: 'social-3',
        title: 'RP Karongi College — Varsity League Fixtures Board',
        category: 'Tournament Fixture Board',
        discipline: 'graphic-print',
        aspectRatio: 'portrait',
        description: 'Varsity sports fixture schedule board for RP Karongi College football championship with official institutional seals, hexagon matchup nodes, and tournament hashtag campaign.',
        image: SocialVarsityFixturesImg,
        tools: ['Adobe Illustrator', 'Typography Tokens'],
        specs: '1587 × 2245 px • Digital & Print Tournament Board',
        colors: ['#007791', '#F5A623', '#002B49', '#FFFFFF'],
      },
    ],
  },
  {
    id: 'branding',
    name: 'Brand Identity',
    collectionLabel: 'Identity & Logos',
    discipline: 'graphic-print',
    aspectRatio: 'landscape',
    description: 'Comprehensive brand standards, kinetic logomarks, typography tokens, and visual identity systems.',
    previews: [BrandKozzaLockupImg, BrandQuerymeSystemImg, BrandPostaMotionGif],
    items: [
      {
        id: 'brand-1',
        title: 'Kozza — Comprehensive Brand Identity & Visual Guidelines',
        category: 'Brand Identity System',
        discipline: 'graphic-print',
        aspectRatio: 'tall',
        description: 'Complete brand guidelines presentation board for Kozza (creator of Zeno). Features geometric monogram geometry, chromatic token hierarchies, typographic scale rules, and multi-format application guides.',
        image: BrandKozzaIdentityImg,
        slides: [BrandKozzaIdentityImg, BrandKozzaLockupImg],
        tools: ['Adobe Illustrator', 'Figma', 'Brand Systems'],
        specs: '1600 × 2915 px • Comprehensive Brand Guidelines Presentation',
        colors: ['#0038A8', '#0045A2', '#FFFFFF', '#0B132B'],
      },
      {
        id: 'brand-2',
        title: 'QueryMe — Information Architecture & Identity System',
        category: 'Digital Brand System',
        discipline: 'graphic-print',
        aspectRatio: 'landscape',
        description: 'Cohesive brand identity and lockup system for QueryMe. Explores horizontal wordmarks, vertical lockups, and negative space iconography in high-contrast azure blue and pure white.',
        image: BrandQuerymeSystemImg,
        tools: ['Adobe Illustrator', 'Brand Guidelines'],
        specs: '2000 × 690 px • Vector Master • Digital RGB Standards',
        colors: ['#2563EB', '#3B82F6', '#FFFFFF', '#0F172A'],
      },
      {
        id: 'brand-3',
        title: 'Posta — Dynamic Postal Identity & Kinetic Mark',
        category: 'Motion & Brand Identity',
        discipline: 'graphic-print',
        aspectRatio: 'square',
        description: 'Minimalist kinetic brand mark for Posta logistics and postal routing. Features continuous kinetic loop animation, clean geometric envelope geometry, and bold tangerine orange identity tokens.',
        image: BrandPostaMotionGif,
        slides: [BrandPostaMotionGif, BrandPostaMarkImg],
        tools: ['Adobe After Effects', 'Illustrator', 'Motion Graphics'],
        specs: '1000 × 1000 px • 60fps Kinetic Loop & Vector Mark',
        colors: ['#FFAA71', '#FF6B35', '#FFFFFF', '#1A1A1A'],
      },
    ],
  },
];
