// Blog Data Store for Cyndy's Editorial Journal
const BLOG_POSTS = [
  {
    id: "the-art-of-quiet-architecture",
    title: "The Art of Quiet Architecture: Space as a Sanctuary",
    category: "Design",
    date: "October 3, 2026",
    readTime: "6 min read",
    author: {
      name: "Cyndy Vance",
      role: "Editor-in-Chief",
      avatar: "Media/cyndy_avatar.svg"
    },
    image: "Media/post_architecture.svg",
    featured: true,
    excerpt: "Why modern living spaces demand more than cold minimalism. Exploring tactile warmth, raw limestone, and the quiet dignity of unhurried spaces.",
    content: `
      <p>There is a peculiar tension in modern architecture. For years, contemporary interiors were stripped of texture, reduced to stark sterile white drywall and cold aluminum angles. We were promised clarity, but what we inherited was sensory deprivation.</p>
      
      <blockquote>"A home should not be an exhibition of purity; it should be an acoustic and tactile cushion against a noisy world."</blockquote>

      <p>True quiet architecture does not ask you to admire its geometry in frozen reverence. Instead, it holds your gaze with the texture of weathered travertine, the soft acoustic dampening of unbleached linen curtains, and the gentle rhythm of morning light washing across a lime-plastered wall.</p>

      <h3>The Language of Raw Materials</h3>
      <p>When selecting materials for enduring spaces, we look for honesty. Oak that carries its natural knots, unlacquered brass that darkens where human hands touch it daily, and hand-thrown ceramic vessels that carry the fingerprints of their maker. These elements invite touch. They age gracefully alongside us rather than deteriorating with use.</p>

      <p>In our current digital condition—where our thumbs interact almost exclusively with frictionless glass—our living spaces must offer tactile compensation. It is not an indulgence to demand that a door handle feels heavy and cool in the palm; it is a grounding ritual.</p>

      <h3>Curating the Negative Space</h3>
      <p>To leave a corner empty in an era obsessed with maximization requires courage. Negative space in a room acts as silence does in music: it gives meaning to every intentional object that remains. When you clear the unnecessary, every remaining book on the low console table becomes a quiet invitation to pause.</p>
    `
  },
  {
    id: "analog-rituals-in-a-digital-tide",
    title: "Analog Rituals in a Digital Tide: Notes on Fountain Pens & Paper",
    category: "Slow Living",
    date: "September 28, 2026",
    readTime: "5 min read",
    author: {
      name: "Cyndy Vance",
      role: "Editor-in-Chief",
      avatar: "Media/cyndy_avatar.svg"
    },
    image: "Media/post_pen.svg",
    featured: false,
    excerpt: "Reclaiming the deliberate friction of handwriting, ink reservoirs, and fountain pens in an era dominated by frictionless speed.",
    content: `
      <p>Every morning at 7:15 AM, before opening a laptop or looking at notifications, I sit down with an 80gsm Smythson notebook and a vintage Pilot Custom 823 fountain pen. The ink is Iroshizuku Yama-guri, a subtle chestnut brown that mimics autumnal bark.</p>

      <p>Writing by hand forces a physiological slowdown. On a keyboard, we can type faster than our clarity of thought allows; on paper, our physical hand must catch up with our contemplation. The friction between iridium nib and cotton fibers creates an acoustic rhythm that settles the pulse.</p>

      <blockquote>"Friction is not always inefficiency; sometimes friction is where depth and memory reside."</blockquote>

      <p>Studies consistently reveal that physical handwriting triggers distinct neural pathways tied to conceptual synthesis and emotional regulation. When you cross out a sentence in ink, that error remains visible—a testament to the wandering trajectory of human thought.</p>

      <h3>Building Your Morning Log</h3>
      <p>Do not treat your morning pages as a performance for an imagined future biographer. Write without pretense. Record the temper of the morning breeze, the lingering aroma of ground cardamom in your coffee, or a solitary question that has been nudging your subconscious.</p>
    `
  },
  {
    id: "the-craft-of-thoughtful-software",
    title: "The Craft of Thoughtful Software: Beyond the AI Slop Horizon",
    category: "Tech & Craft",
    date: "September 20, 2026",
    readTime: "7 min read",
    author: {
      name: "Cyndy Vance",
      role: "Editor-in-Chief",
      avatar: "Media/cyndy_avatar.svg"
    },
    image: "Media/post_tech.svg",
    featured: true,
    excerpt: "As synthetic generation floods the web with homogenous templates, the value of hand-crafted typographic detail and bespoke interfaces rises exponentially.",
    content: `
      <p>We are currently living through a curious inflection point on the internet. As artificial intelligence makes the reproduction of average design instantaneous and virtually free, the web is suddenly inundated with a distinct brand of digital monotony: identical rounded card layouts, generic neon gradients, and copy that reads like an enthusiastic marketing intern without a soul.</p>

      <p>This is what many of us call the "AI Slop Horizon". But precisely because the mediocre has become trivial to produce, the value of intentional human craft has skyrocketed.</p>

      <h3>The Soul of Intentional Typography</h3>
      <p>When you pair a high-contrast editorial serif like <em>Instrument Serif</em> with a meticulously kerned sans-serif, you are asserting an editorial point of view. You are declaring that this space was composed by someone who cares about typographic hierarchy, proportional pacing, and the quiet dignity of a well-balanced grid.</p>

      <blockquote>"Speed of generation does not equal depth of resonance. Great tools are sculpted with taste, restraint, and an ear for human pacing."</blockquote>

      <h3>Lightweight, Sovereign, Dependency-Free</h3>
      <p>Modern software engineering often mistakes complexity for maturity. A simple blog or editorial magazine does not require a hundred megabytes of node_modules and five layers of virtual DOM reconciliation. Clean, semantic HTML and handcrafted CSS remain the most durable, resilient, and accessible medium ever conceived for human thought.</p>
    `
  },
  {
    id: "solitary-walks-and-unhurried-hours",
    title: "Solitary Walks and Unhurried Hours: The Flâneur's Guide to Paris",
    category: "Culture",
    date: "September 12, 2026",
    readTime: "8 min read",
    author: {
      name: "Cyndy Vance",
      role: "Editor-in-Chief",
      avatar: "Media/cyndy_avatar.svg"
    },
    image: "Media/post_paris.svg",
    featured: false,
    excerpt: "Ditching itineraries to wander through the 6th and 10th arrondissements. Finding small bookbinders, quiet gardens, and zinc countertop espressos.",
    content: `
      <p>The greatest disservice you can do to a historic city like Paris is to arrive with a rigid itinerary. The city yields its most intoxicating secrets only to the wanderer—the <em>flâneur</em>—who turns down narrow cobblestone passages simply because the light caught an ancient brass lantern just so.</p>

      <p>Last autumn, I spent two weeks with no schedule beyond a commitment to walk ten miles each day. I drifted past the zinc rooftops of the Marais, ducked into a subterranean printmaking workshop along Rue Saint-André-des-Arts, and sat for two uninterrupted hours watching elderly men play pétanque beneath the chestnut trees of the Jardin du Luxembourg.</p>

      <blockquote>"To walk without a destination is an act of defiance against a culture that demands constant productivity."</blockquote>

      <p>Travel at its best is not about collecting sights to broadcast to an audience; it is about allowing an unfamiliar cadence of life to dismantle your habitual anxieties.</p>
    `
  },
  {
    id: "tactile-gastronomy-and-natural-wine",
    title: "Tactile Gastronomy: Natural Wine, Bitter Greens, and Wooden Tables",
    category: "Culture",
    date: "August 29, 2026",
    readTime: "4 min read",
    author: {
      name: "Cyndy Vance",
      role: "Editor-in-Chief",
      avatar: "Media/cyndy_avatar.svg"
    },
    image: "Media/post_wine.svg",
    featured: false,
    excerpt: "Why the simplest dinners—crusty sourdough, salted butter, raw radishes, and low-intervention Gamay—remain the most memorable.",
    content: `
      <p>There is a profound luxury in stripping dining back to its elemental truths. Not white tablecloths and five-course tasting menus where servers whisper esoteric techniques, but rather an unadorned pine table, beeswax candles flickering in thrifted saucers, and food that tastes vibrantly of the soil it was pulled from.</p>

      <p>Consider the humble French breakfast: a baguette with cultured butter flaky with sea salt crystals, accompanied by a small bowl of wild strawberries. It requires no chef's ego, only pristine ingredients and reverent patience.</p>
    `
  },
  {
    id: "the-psychology-of-curated-bookshelves",
    title: "The Psychology of Curated Bookshelves: What We Keep Around Us",
    category: "Design",
    date: "August 15, 2026",
    readTime: "6 min read",
    author: {
      name: "Cyndy Vance",
      role: "Editor-in-Chief",
      avatar: "Media/cyndy_avatar.svg"
    },
    image: "Media/post_books.svg",
    featured: false,
    excerpt: "Our personal libraries are autobiographies written in spine typography. An examination of how physical books anchor our intellectual life.",
    content: `
      <p>A home without books possesses an uneasy, impermanent quality—like a hotel room where no one has truly settled. Books are not decorative props (despite the unfortunate trend of turning spines backwards for neutral color palettes); they are physical bookmarks in the timeline of who we were when we read them.</p>

      <p>I can look at my dog-eared copy of Joan Didion’s <em>Slouching Towards Bethlehem</em> and immediately recall the heat of that July afternoon in a small attic apartment in Brooklyn. Physical books preserve emotional resonance in a way no e-reader screen ever can.</p>
    `
  }
];

// About Me & Site Information
const SITE_INFO = {
  name: "Cyndy",
  author: "Cyndy Vance",
  tagline: "Personal Editorial & Creative Journal",
  bio: "Writer, creative director, and essayist exploring architecture, tactile slow living, contemporary culture, and the craft of thoughtful software. Based between Copenhagen and New York.",
  stats: [
    { label: "Published Essays", value: "140+" },
    { label: "Sunday Letter Readers", value: "18.5k" },
    { label: "Years of Writing", value: "8" },
    { label: "Coffee Cups Per Day", value: "2" }
  ],
  currentlyLoving: [
    { title: "Instrument Serif", meta: "Typography by Rodrigo Fuenzalida" },
    { title: "Midori MD Notebook", meta: "Cotton Paper, Tokyo" },
    { title: "Joan Didion's Blue Nights", meta: "Vintage International" },
    { title: "Etiopian Yirgacheffe", meta: "Light roast pour-over" }
  ]
};
