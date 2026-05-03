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
        tags: ["SaaS", "Growth", "B2C"],
        snippet:
          "A beauty and wellness e-learning platform project focused on improving the first touch and making online learning feel more like a guided, personal experience. We build an MVP mobile product around a few core ideas:",
        details: [
          "The best-performing flows were then adapted and scaled into full web‑to‑app funnels."
        ],
        highlights: [
          "Quiz entry point that drives engagement",
          "Lightweight onboarding that adapts to user interests from the first interaction",
          "System of touchpoints (notifications, paywalls, content previews) designed to boost conversion"
        ],
        meta: [
          { label: "Role", value: "Product Manager" },
          { label: "Ownership", value: "Activation & Growth" },
          { label: "Focus", value: "Funnel Optimization" }
        ],
      },
      {
        name: "EducateOnline",
        tags: ["SaaS", "Growth", "B2C"],
        snippet:
          "An e-learning platform project focused on turning marketing into a system. Instead of relying on assumptions, we approached growth as a process built around a few core ideas:",
        details: [
          "This shifted marketing from a set of campaigns into a structured, data-driven system where decisions are based on patterns."
        ],
        highlights: [
          "Identifying high-performing channels through CRM data",
          "Continuously reviewing landing pages and campaign results to refine messaging and user flow",
          "Aligning promotions with real user behavior"
        ],
        meta: [
          { label: "Role", value: "Project Manager" },
          { label: "Ownership", value: "Growth & Acquisition" },
          { label: "Focus", value: "Funnel Optimization" }
        ],
      },
      {
        name: "Everypixel",
        tags: ["AI", "Brand", "B2B"],
        snippet:
          "A project within an AI solutions development company focused on strengthening its presence in the AI field through content and partnerships. We approached outreach not as distribution, but as positioning. What we focused on:",
        details: [
          "Articles were picked up and shared by figures like Yann LeCun and Thomas Wolf, placing Everypixel directly into high-level AI discussions."
        ],
        highlights: [
          "Strategic placement in curated newsletters and expert channels",
          "Content designed for repostability and citation, not just publication",
          "Consistent editorial standards to build trust and authority over time"
        ],
        meta: [
          { label: "Role", value: "Project Manager" },
          { label: "Ownership", value: "Brand & Marketing" },
          { label: "Focus", value: "Content Strategy" }
        ],
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

