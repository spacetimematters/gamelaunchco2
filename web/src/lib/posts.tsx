import type { ReactNode } from "react";

export type Post = {
  slug: string;
  title: string;
  category: string;
  date: string;          // display
  isoDate: string;       // for <time> and sorting
  readTime: string;
  image: string;
  standfirst: string;
  excerpt: string;
  body: ReactNode;
};

/* Shared article primitives so every post types identically. */
const H = ({ children }: { children: ReactNode }) => (
  <h2 className="mb-3 mt-10 text-xl normal-case sm:text-2xl">{children}</h2>
);
const H3 = ({ children }: { children: ReactNode }) => (
  <h3 className="mb-2 mt-7 text-base normal-case sm:text-lg">{children}</h3>
);
const P = ({ children }: { children: ReactNode }) => (
  <p className="mb-4 leading-7 text-igj_darkgray dark:text-igj_dark_text_muted">{children}</p>
);
const UL = ({ children }: { children: ReactNode }) => (
  <ul className="mb-5 space-y-2">{children}</ul>
);
const LI = ({ children }: { children: ReactNode }) => (
  <li className="flex gap-3">
    <span className="mt-[9px] block h-[7px] w-[11px] shrink-0 -rotate-45 border-b-2 border-l-2 border-igj_pink" aria-hidden />
    <span className="leading-7 text-igj_darkgray dark:text-igj_dark_text_muted">{children}</span>
  </li>
);
const OL = ({ children }: { children: ReactNode }) => (
  <ol className="mb-5 space-y-3">{children}</ol>
);
const OLI = ({ n, children }: { n: number; children: ReactNode }) => (
  <li className="flex gap-3">
    <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded bg-igj_pink text-[11px] font-extrabold text-igj_white">
      {n}
    </span>
    <span className="leading-7 text-igj_darkgray dark:text-igj_dark_text_muted">{children}</span>
  </li>
);
const Quote = ({ children }: { children: ReactNode }) => (
  <blockquote className="my-6 rounded border border-igj_gray border-l-4 border-l-igj_blue bg-igj_lightgray p-4 text-base font-semibold leading-7 dark:border-igj_dark_border dark:border-l-igj_blue dark:bg-igj_dark_bg_alt sm:text-lg">
    {children}
  </blockquote>
);
const Kicker = ({ children }: { children: ReactNode }) => (
  <p className="mt-8 rounded bg-igj_pink p-5 text-base font-bold leading-7 text-igj_white sm:text-lg">
    {children}
  </p>
);
const B = ({ children }: { children: ReactNode }) => (
  <strong className="font-bold text-igj_black dark:text-igj_dark_text">{children}</strong>
);

export const POSTS: Post[] = [
  {
    slug: "friend-slop",
    title: "The $10 Board Game: Why ‘Friend Slop’ Is The Highest ROI Niche In Gaming",
    category: "Game Design",
    date: "15 January 2026",
    isoDate: "2026-01-15",
    readTime: "12 min",
    image: "/posts/friend-slop.jpg",
    standfirst:
      "Stop building “Live Services” and start building digital board games. Discover why $10 “Friend Slop” is the highest ROI niche in gaming — and how to use the “Closet Framework” to make your players market for you.",
    excerpt:
      "Stop building “Live Services” and start building digital board games. Why $10 co-op is the highest ROI niche in gaming, and how the Closet Framework makes your players market for you.",
    body: (
      <>
        <P>Most developers look at a $10 co-op horror game on Steam and call it “Friend Slop.”</P>
        <P>They think it is a flash in the pan. A three hour joke. Janky physics that people laugh at once and delete.</P>
        <P>They are wrong. And their bank accounts show it.</P>
        <P>
          What we are actually seeing is the evolution of the Modern Board Game. These games are not
          “slop.” They are the digital version of the $60 box on your shelf that you only pull out
          when “the crew” comes over.
        </P>
        <P>Here is why this is the most profitable and misunderstood niche in gaming today.</P>

        <H>1. The “Closet” Cycle (The Arbitrage of Social Utility)</H>
        <P>Think about Catan.</P>
        <P>
          You buy it. You play it for a massive game night. Then, it goes in the closet. You do not
          “grind” Catan 40 hours a week. You are not “retained” by a Battle Pass. You wait for the
          next gathering.
        </P>
        <P>“Friend Slop” is the same product, but with better math:</P>
        <UL>
          <LI><B>The Board Game:</B> Costs $60. Requires a physical house. Physical people.</LI>
          <LI><B>The “Slop”:</B> Costs $10. Everyone hits “Purchase.” You are in the lobby in three minutes.</LI>
        </UL>
        <P>
          It is the exact same social utility at an 80% discount. From a “Value per Hour”
          perspective, games like Lethal Company are not just entertainment. They are the most
          efficient social engines ever built.
        </P>

        <H>2. The “New Guest” Rule (Zero-Cost Distribution)</H>
        <P>
          When a friend comes over who has not played Ticket to Ride, what do you do? You teach them.
          You want them to play so you can have fun.
        </P>
        <P>Digital co-op games have perfected this.</P>
        <P>You do not need a $20M marketing budget when your customers are your sales team.</P>
        <Quote>“Dude, you don’t have Phasmophobia? It is ten bucks. Download it right now so we can play.”</Quote>
        <P>
          That is organic distribution that AAA studios would kill for. Every update is just a
          “Board Game Expansion.” It is an excuse to pull the box out of the closet and invite the
          new guy over.
        </P>
        <P>The product sells the product.</P>

        <H>3. Survival of the Funnest (The Darwinism of the Closet)</H>
        <P>
          In the board game world, bad games gather dust. They get sold at garage sales for $2. The
          “Classics” stay at the front of the shelf.
        </P>
        <P>The same Darwinism applies here:</P>
        <UL>
          <LI><B>The Evergreens:</B> Lethal Company, Phasmo, REPO. These stay installed.</LI>
          <LI><B>The True Slop:</B> Clones with no soul. Played once. Deleted.</LI>
        </UL>
        <P>
          The market does not lie. If people are still playing it six months later, it is not a
          “meme.” It is a staple.
        </P>

        <H>The Reality</H>
        <P>Is “Friend Slop” a dumb over-generalization? Yes.</P>
        <P>Because “Friend Slop” you actually like is just called a good game.</P>
        <P>
          We have been brainwashed by “Live Service” giants to think a game has to demand 40 hours of
          our lives every week. We forgot that some of the best memories are made on a random
          Saturday night with a $10 box.
        </P>
        <Kicker>
          <B>The Bottom Line:</B> Do not build a game people have to play. Build a game people want
          to pull out of the closet when their friends come over. Build for the closet. Win the market.
        </Kicker>
      </>
    ),
  },

  {
    slug: "streamers",
    title: "How To Get 100+ Streamers To Play Your Game (For $0)",
    category: "Game Marketing",
    date: "15 January 2026",
    isoDate: "2026-01-15",
    readTime: "5 min",
    image: "/posts/streamers.jpg",
    standfirst:
      "All you need is 1% of 1 million views to wishlist or buy your game for you to make $10,000.",
    excerpt:
      "All you need is 1% of 1 million views to wishlist or buy your game for you to make $10,000. Here is the three-tier system that gets you there without a budget.",
    body: (
      <>
        <H>Tier 1: The Automated Floor (Volume)</H>
        <P>
          This is your safety net. You use these tools to ensure that if a potential player looks at
          your game on Twitch, it is not sitting at zero viewers.
        </P>
        <H3>The Tools</H3>
        <UL>
          <LI><B>Keymailer:</B> The industry standard for volume. Over 50,000 creators go here specifically to find new “inventory” for their channels.</LI>
          <LI><B>Lurkit:</B> Designed for “Missions.” You can tell a streamer, “If you play for 2 hours and capture a highlight, I will provide a reward.” It turns playing your game into a structured achievement for them.</LI>
        </UL>
        <H3>The Strategy</H3>
        <P>
          Do not manually approve everyone. Set your filters to “Verified Only” and “Minimum 50 CCV
          (Concurrent Viewers).” Let the software do the work while you focus on the game. You want
          100 micro-streamers building a base layer of social proof.
        </P>

        <H>Tier 2: The Professional Hub (Credibility)</H>
        <P>
          If a large creator sees your game on a distribution platform, they will check your “Press
          Kit.” If your press kit is just a Google Drive folder with three blurry screenshots, the
          opportunity is gone.
        </P>
        <H3>The Tool</H3>
        <UL>
          <LI><B>Terminals.io:</B> This is where the professionals live. It hosts your keys, high-res trailers, and branding assets in a format that streamers and journalists actually expect.</LI>
        </UL>
        <H3>The Strategy</H3>
        <P>
          Treat your Terminals page like a high-conversion landing page. You are not just describing a
          game; you are selling a viral experience. Use a headline that promises a specific result.
        </P>
        <UL>
          <LI><B>The Basic Title:</B> “A Co-op Horror Game.”</LI>
          <LI><B>The High-Impact Title:</B> “The 4-Player Chaos Engine Built For Viral Clips.”</LI>
        </UL>

        <H>Tier 3: The Sniper Rifle (Manual Growth)</H>
        <P>
          Direct outreach is not a waste of time. In fact, it is the only way to land the industry
          leaders. Once the volume from Tier 1 creates a baseline trend, you use Tier 3 to capture the
          top creators in your niche.
        </P>
        <H3>The Process</H3>
        <OL>
          <OLI n={1}><B>Find the Benchmark:</B> Look at who is playing games in your specific genre right now.</OLI>
          <OLI n={2}><B>The 3-Sentence Rule:</B> Do not send an essay.</OLI>
        </OL>
        <Quote>
          “Hey [Name], I saw your run of [Similar Game] and your chat went nuts during the chase. I
          built a ‘Scream Trigger’ in my game specifically for creators like you. Want a private key
          to test it on Friday?”
        </Quote>

        <H>The Next Steps (The 48-Hour Launch)</H>
        <P>If you want to execute this, here is your 48-hour checklist:</P>
        <OL>
          <OLI n={1}><B>Day 1 (Morning):</B> Set up your Terminals.io press kit. Make it look like a professional studio built it.</OLI>
          <OLI n={2}><B>Day 1 (Afternoon):</B> Upload keys to Keymailer and Lurkit. Set your filters and activate the campaign.</OLI>
          <OLI n={3}><B>Day 2:</B> Identify the Top 20 streamers who play your genre. Send the 3-sentence direct message.</OLI>
          <OLI n={4}><B>Day 3 and Beyond:</B> Watch the “Floor” rise from the automated platforms and wait for one high-tier target to engage.</OLI>
        </OL>

        <Kicker>
          <B>The Bottom Line:</B> Use automated machines to handle the volume so you have the energy
          to focus on the high-impact relationships.
        </Kicker>
      </>
    ),
  },

  {
    slug: "discord",
    title: "Why 1,000 Discord Members Are Worth More Than 100k Twitter Impressions",
    category: "Game Marketing",
    date: "14 January 2026",
    isoDate: "2026-01-14",
    readTime: "6 min",
    image: "/posts/discord.jpg",
    standfirst:
      "Stop “renting” attention on social media. Discover why Discord is the highest leverage asset in gaming — and how to use the “Campfire Framework” to turn your players into your sales team.",
    excerpt:
      "Stop renting attention on social media. Why Discord is the highest leverage asset in gaming, and how the Campfire Framework turns your players into your sales team.",
    body: (
      <>
        <P>
          Most developers look at Discord as a “community support” tool. They think it is a place to
          post patch notes. A place to answer bug reports. A noisy chat room that distracts them from
          development.
        </P>
        <P>They are wrong. And their wishlists show it.</P>
        <P>
          What we are actually seeing is the death of “Rent-a-Audience” marketing (Facebook Ads,
          Twitter/X) and the rise of The Digital Living Room.
        </P>
        <P>Here is why Discord is the most profitable and misunderstood weapon in your arsenal today.</P>

        <H>1. The “Campfire” Effect (The Arbitrage of Attention)</H>
        <P>
          Think about a Facebook Ad. You pay for it. A user sees it for 0.4 seconds. They scroll past.
          You lost money. You are renting their eyes, and the rent is going up every year.
        </P>
        <P>
          Discord is the opposite. It is a “Campfire.” Once a player joins your server, they have
          pulled up a chair. You do not pay to reach them again. You do not fight an algorithm to show
          them a ping.
        </P>
        <P>The “Campfire” allows you to convert a user once and monetize them forever.</P>
        <UL>
          <LI><B>The Ad:</B> Costs $5.00 per click. 1% conversion.</LI>
          <LI><B>The Discord Invite:</B> Costs $0.00. 100% retention until they leave.</LI>
        </UL>
        <P>
          From a “Cost Per Hype” perspective, a well-run Discord server isn’t just a chat room. It is a
          perpetually owned marketing channel with zero marginal cost.
        </P>

        <H>2. The “Robot Butler” Economy (Automating Delight)</H>
        <P>
          When you invite friends over to your house, you have to entertain them. In the Digital Living
          Room, you build robots to do it for you.
        </P>
        <P>
          You cannot be online 24/7. But your “Staff” can. To run a high-ROI server, you need to
          automate the “vibes” so the community entertains itself while you sleep.
        </P>
        <UL>
          <LI><B>The Bouncers:</B> MEE6 or Carl-bot. These aren’t just for banning trolls. Use them to build “Onboarding Funnels.” Force new users to agree to rules (micro-commitment) and select a “Class” or “Faction” (identity). This turns a passive observer into an active participant instantly.</LI>
          <LI><B>The Entertainers:</B> You need “Toys” on the floor. Bots like Mudae (collecting characters) or Gartic (drawing games) keep users in your server when they aren’t even playing your game.</LI>
        </UL>
        <P>If your server is silent when you aren’t typing, you have failed. The room must be alive without you.</P>

        <H>3. The “Kizuna” Engine (The Viral Loop)</H>
        <P>
          Having a room full of people is useless if they don’t tell anyone else to come over. You need
          a mechanism to turn “Sitters” into “Runners.”
        </P>
        <P>This is where tools like Kizuna.gg change the math.</P>
        <P>
          Most devs pray for virality. Smart devs engineer it. You need a system that tracks, rewards,
          and gamifies the act of bringing new blood into the room.
        </P>
        <UL>
          <LI><B>The Old Way:</B> “Please invite your friends!” (Result: 0 invites).</LI>
          <LI><B>The Kizuna Way:</B> Gamified referrals and engagement tracking.</LI>
        </UL>
        <P>
          When you use a dedicated growth engine like Kizuna.gg, you aren’t just asking for favors. You
          are turning marketing into a game loop. You reward players for recruitment. You track who is
          actually driving value. You treat your community members like high-performance affiliates,
          not just fans.
        </P>
        <P>The tool validates the effort. The leaderboard drives the competition. The competition drives the traffic.</P>

        <H>The Reality</H>
        <P>
          Is “Building a Cult” harder than buying a Facebook ad? Yes. Because buying an ad requires
          money, but building a Discord requires soul.
        </P>
        <P>
          We have been brainwashed by marketing agencies to think we need “Impressions” and “Reach.” We
          forgot that 1,000 true fans screaming in a Discord channel are worth more than 1,000,000
          passive views on a timeline.
        </P>
        <Kicker>
          <B>The Bottom Line:</B> Do not build an audience you have to rent. Build a Campfire they never
          want to leave. Deploy the bots. Ignite the engine. Own the room.
        </Kicker>
      </>
    ),
  },
];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}
