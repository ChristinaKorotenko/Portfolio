import educateOnlineReviewPdfUrl from "../../reviews/Educate Online.pdf?url";

export const siteContent = {
  hero: {
    eyebrow: "Product & Project Manager • Berlin",
    title: "Hi, I’m Kristina — a Product and Project Manager based in Berlin.",
    subtitle:
      "For the past five years, I’ve been working across product, growth, and marketing teams, focusing on building and scaling digital products.",
    ctaPrimary: "Selected projects",
    ctaSecondary: "How I work",
    metrics: [
      { label: "Focus", value: "Structure" },
      { label: "Approach", value: "Data-driven" },
      { label: "Strength", value: "Systems" }
    ],
    aboutTitle: "About me",
    aboutText:
      "I enjoy structure and a data-driven approach in everything I do. Whether it’s shaping ideas, running experiments, or analyzing results — turning messy concepts into clear systems is where I thrive the most."
  },
  howIWork: {
    title: "How I work",
    subtitle:
      "A simple workflow that keeps me close to reality: research, planning, and execution.",
    cards: [
      {
        title: "Research",
        text:
          "I believe everything should be measured and monitored regularly — not for control, but for clarity. Analytics helps me stay close to what’s actually happening.",
        tools: [
          "Amplitude",
          "Google Analytics",
          "UXcam",
          "OneSignal",
          "AmoCRM",
          "Adapty",
          "AppsFlyer",
          "Qonversion",
          "AppStoreConnect",
          "PlayConsole",
          "Claude",
          "Typeform",
          "Web2Wave",
          "WordPress"
        ]
      },
      {
        title: "Plan",
        text:
          "I love working with visualization to collect and organize ideas, make task structures easier to understand, and present the logic of a workflow.",
        tools: ["Figma", "Miro"]
      },
      {
        title: "Execute",
        text:
          "I work with modern flexible or classic waterfall and hybrid project management methodologies. This way I build communication with a team and increase its efficiency.",
        tools: ["Agile", "Scrum", "Kanban", "OKR", "KPI", "Jira", "Asana", "Notion", "Trello"]
      }
    ]
  },
  projects: {
    title: "Selected projects",
    subtitle: "Click on a card to view details",
    items: [
      {
        name: "TakeClass",
        tags: ["SaaS", "Product"],
        snippet:
          "A beauty and wellness e-learning platform focused on improving the first touch and making online learning feel more like a guided, personal experience.",
        details: [
          "The best-performing flows were then adapted and scaled into full web‑to‑app funnels."
        ],
        highlights: [
          "Quiz entry point that drives engagement",
          "Lightweight onboarding adapting to user interests",
          "Touchpoints system designed to boost conversion"
        ],
        meta: [
          { label: "Role", value: "Product Manager" },
          { label: "MVP", value: "Mobile" },
          { label: "Focus", value: "First touch" }
        ],
        hoverText:
          "Quiz entry → adaptive onboarding → touchpoints (notifications, paywalls, previews) → scaled to web-to-app funnels."
      },
      {
        name: "EducateOnline",
        tags: ["Growth / Marketing", "B2C"],
        snippet:
          "An e-learning platform project focused on turning marketing into a system built on CRM data, continuous landing iteration, and behavior-based promotions.",
        details: [
          "Instead of relying on assumptions, we built a repeatable growth loop: identify patterns in CRM data → validate hypotheses → iterate landing pages and campaigns → codify what works.",
          "This shifted marketing from a set of campaigns into a structured system where decisions are based on observed behavior and measurable signals."
        ],
        highlights: [
          "Channel selection based on CRM patterns",
          "Continuous landing/page flow review",
          "Promotions aligned with real behavior"
        ],
        meta: [
          { label: "Role", value: "Project Manager" },
          { label: "Scope", value: "Marketing ops" },
          { label: "Outcome", value: "Repeatable growth" }
        ],
        hoverText: "From campaigns → patterns → a structured, data-driven system."
      },
      {
        name: "Everypixel",
        tags: ["Brand / Marketing", "AI"],
        snippet:
          "Strengthened presence in the AI field through content and partnerships — outreach as positioning, not just distribution.",
        details: [
          "We focused on authority building: strategic placement in curated newsletters and expert channels, consistent editorial standards, and content designed for citation and repostability.",
          "The outcome was high-quality distribution and real industry reach (shares by notable AI figures) that reinforced positioning."
        ],
        highlights: [
          "Curated channel partnerships",
          "Editorial standards for trust",
          "Content engineered for citations"
        ],
        meta: [
          { label: "Role", value: "Project Manager" },
          { label: "Focus", value: "Editorial" },
          { label: "Signal", value: "High-level shares" }
        ],
        hoverText: "Articles were shared by Yann LeCun and Thomas Wolf."
      }
    ]
  },
  testimonials: {
    title: "Testimonials",
    subtitle:
      "Placeholders for now — swap with real quotes from managers when you’re ready.",
    items: [
      {
        quote:
          "She’s exceptional at turning ambiguity into a clear plan — and keeping the team aligned without extra meetings.",
        name: "Name Surname",
        role: "Head of Product",
        details: [
          "Kristina quickly decomposes complex problems into a clear structure, communicates trade-offs, and keeps progress transparent.",
          "She consistently connects work to measurable outcomes and makes the team feel aligned and confident about the next step."
        ]
      },
      {
        quote:
          "Kristina Korotenko made a significant contribution to establishing processes in the marketing department. Kristina demonstrated herself as an employee who is willing to take initiative in work-related matters and eager to learn and grow professionally…",
        name: "Maltseva Kseniya",
        role: "Team Lead Marketing",
        modalPdfSrc: educateOnlineReviewPdfUrl,
        details: [
          "She comes prepared: multiple solution options, risk analysis, and clear measurement plans.",
          "Her discovery work is fast but grounded — it reduces uncertainty rather than producing slides."
        ]
      },
      {
        quote:
          "A reliable partner for engineering: crisp requirements, thoughtful trade-offs, and consistent delivery.",
        name: "Name Surname",
        role: "Engineering Manager",
        details: [
          "Requirements are crisp, priorities are stable, and changes are communicated early.",
          "She protects the team’s focus and keeps the feedback loop tight with stakeholders."
        ]
      },
      {
        quote:
          "Brings clarity and momentum: strong research, crisp communication, and a consistent bias toward measurable outcomes.",
        name: "Name Surname",
        role: "Growth Lead",
        details: [
          "She frames the problem, sets the success metrics, and keeps everyone aligned on the next best action.",
          "Delivery is steady, and decisions are always grounded in evidence rather than opinions."
        ]
      }
    ]
  },
  footer: {
    title: "Get in touch",
    subtitle:
      "I value projects that encourage curiosity, a systematic approach, and a bit of creativity.",
    email: "christina.korotenko@gmail.com",
    links: [
      { label: "LinkedIn", href: "#" },
      { label: "Instagram", href: "#" }
    ]
  }
};

