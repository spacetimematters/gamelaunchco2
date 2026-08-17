import type { ReactNode } from "react";

/**
 * All page copy in one place so it can be swapped without touching layout.
 * Everything marked PLACEHOLDER is invented and must be replaced before launch.
 */

export const STATS = [
  { value: "200M+", label: "Views built" },
  { value: "180+", label: "Games campaigned" },
  { value: "15M+", label: "In one channel's first 90 days" },
];

/* PLACEHOLDER — fictional titles. Only name games you may name. */
export const GAMES = [
  "Hollowfen", "Ashvault", "Tin Compass", "Nightmarket", "Saltpetre", "Wrenlight",
];

const Bolt = (
  <svg viewBox="0 0 48 48" fill="currentColor" className="h-full w-full" aria-hidden>
    <path d="M27 4 L12 27h9l-3 17L36 21h-9Z" />
  </svg>
);
const Wings = (
  <svg viewBox="0 0 48 48" fill="currentColor" className="h-full w-full" aria-hidden>
    <path d="M24 6c-4 8-4 14 0 20 4-6 4-12 0-20Z" />
    <path d="M22 27c-8-5-14-3-18 3 7 3 13 2 18-2Z" />
    <path d="M26 27c8-5 14-3 18 3-7 3-13 2-18-2Z" />
    <path d="M24 29l3 13-3-3-3 3Z" />
  </svg>
);
const Flame = (
  <svg viewBox="0 0 48 48" fill="currentColor" className="h-full w-full" aria-hidden>
    <path d="M24 3c5 9 11 12 11 21 0 8-5 14-11 21-6-7-11-13-11-21 0-9 6-12 11-21Z" />
  </svg>
);

export const PLANS = [
  {
    rarity: "Epic",
    scope: "One game · one campaign",
    blurb: "One game, one campaign. The clearest way to find out what your game does in the wild.",
    color: "#1863DC",
    icon: Bolt as ReactNode,
    popular: false,
    note: "A few slots a month",
    features: [
      "I play it and find the hook",
      "Short-form cut for the drop",
      "Thumbnail built and tested",
      "Posted across the channels",
      "Numbers back, no spin",
    ],
  },
  {
    rarity: "Legendary",
    scope: "Ongoing · month to month",
    blurb: "A run of content around your beats — announce, demo, launch — instead of one shot in the dark.",
    color: "#E9368A",
    icon: Wings as ReactNode,
    popular: true,
    note: "Two games at a time, so it stays good",
    features: [
      "Everything in Epic, repeatedly",
      "Content mapped to your beats",
      "Thumbnail and hook iteration",
      "What worked, fed into the next cut",
      "Direct line to me, not a queue",
      "Launch week covered properly",
    ],
  },
  {
    rarity: "Mythical",
    scope: "Custom quote",
    blurb: "For publishers and brands with a slate. I take the whole cycle, not one title at a time.",
    color: "#C4A882",
    icon: Flame as ReactNode,
    popular: false,
    note: "One open slot",
    features: [
      "Everything in Legendary",
      "Sequencing across your whole slate",
      "Creator briefs your partners can follow",
      "Your team trained on the process",
      "First look at what's landing right now",
      "Long-term, not campaign by campaign",
    ],
  },
];

/* PLACEHOLDER — invented names, companies and numbers. */
export const TESTIMONIALS = [
  { stars: 5, quote: "He played the whole thing before he cut a frame. You can tell — the video sells the game we actually made.", name: "Mara Ostrowska", role: "Creative Director, Hollowfen" },
  { stars: 5, quote: "Two thumbnails. One did 40k, the other did 2.1M. Same video. That's the whole job, and he just knows.", name: "Devin Achebe", role: "Founder, Two Lantern Studio" },
  { stars: 5, quote: "I've paid agencies ten times this for content nobody watched. Joel's first cut outperformed all of it.", name: "Priya Raghunathan", role: "COO, Nightmarket Interactive" },
  { stars: 5, quote: "He told me my game didn't have a hook yet and to come back after the update. He was right, and it cost him the booking.", name: "Jonas Vikström", role: "Marketing Lead, Ashvault" },
  { stars: 5, quote: "Wishlists went from 300 a week to 9,000 in the four days after the video went up.", name: "Elena Marchetti", role: "CEO, Saltpetre Collective" },
  { stars: 4, quote: "Fast, blunt, occasionally hard to reach mid-edit. Worth it every time the numbers land.", name: "Tomás Reyes", role: "Solo dev, Verdigris" },
  { stars: 5, quote: "Twelve years in publishing and I still took notes on how he structures the first three seconds.", name: "Karin Boedeker", role: "Publishing Director, Grauwald" },
  { stars: 5, quote: "We'd been posting our own clips for a year. He explained in one call why none of them opened properly.", name: "Ade Ogunleye", role: "Studio Head, Bright Hollow" },
  { stars: 5, quote: "No account manager, no deck, no upsell. The person who cuts the video is the person on the call.", name: "Hana Little", role: "Producer, Ninefold" },
  { stars: 5, quote: "Second game outsold the first by 7× on a smaller budget. Same team, better content.", name: "Lukas Brenner", role: "Co-founder, Tin Compass" },
  { stars: 5, quote: "He sent the numbers that underperformed without me asking. That's when I knew I'd keep working with him.", name: "Siobhán Kelly", role: "Director, Wrenlight" },
  { stars: 5, quote: "I came for the views. I stayed because someone finally told me the truth about our trailer.", name: "Yuki Tanabe", role: "Art Director, Paper Lantern" },
];

/* PLACEHOLDER — invented result numbers. */
export const RESULTS = [
  { name: "Hollowfen", result: "One video, 4.2M views. Wishlists 4k → 61k in eight weeks." },
  { name: "Ashvault", result: "Thumbnail rebuilt and retested. Click-through 2.1% → 9.4%." },
  { name: "Saltpetre Collective", result: "Told them to cut the ad spend and ship a demo instead. Funnel tripled." },
  { name: "Tin Compass", result: "Second title outsold the first 7× on 40% of the budget." },
  { name: "Bright Hollow", result: "Reveal moved out of a crowded week. 3× the reach." },
  { name: "Nightmarket", result: "Four platforms cut to one. Cost per wishlist fell 68%." },
];

/* Joel's own posts. */
export const POSTS = [
  {
    slug: "friend-slop",
    category: "Game Design",
    date: "15 Jan 2026",
    readTime: "12 min",
    image: "/posts/friend-slop.jpg",
    title: "The $10 Board Game: Why ‘Friend Slop’ Is The Highest ROI Niche In Gaming",
    excerpt: "Stop building “Live Services” and start building digital board games. Why $10 co-op is the highest ROI niche in gaming, and how the Closet Framework makes your players market for you.",
  },
  {
    slug: "streamers",
    category: "Game Marketing",
    date: "15 Jan 2026",
    readTime: "5 min",
    image: "/posts/streamers.jpg",
    title: "How To Get 100+ Streamers To Play Your Game (For $0)",
    excerpt: "All you need is 1% of 1 million views to wishlist or buy your game for you to make $10,000. Here is the three-tier system that gets you there without a budget.",
  },
  {
    slug: "discord",
    category: "Game Marketing",
    date: "14 Jan 2026",
    readTime: "6 min",
    image: "/posts/discord.jpg",
    title: "Why 1,000 Discord Members Are Worth More Than 100k Twitter Impressions",
    excerpt: "Stop renting attention on social media. Why Discord is the highest leverage asset in gaming, and how the Campfire Framework turns your players into your sales team.",
  },
];
