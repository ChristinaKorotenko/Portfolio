import takeClassImageUrl from "../images/TakeClass.jpg?url";
import educateOnlineImageUrl from "../images/Educate Online.jpg?url";
import everypixelAlinaImageUrl from "../images/Everypixel - Alina.jpg?url";
import everypixelDmitryImageUrl from "../images/Everypixel - Dmitry.jpg?url";

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
    title: "I own the full product lifecycle",
    subtitle:
      "I connect research, planning, and execution into a loop of product decisions and measurable outcomes.",
    cards: [
      {
        title: "Research",
        tags: ["UX research", "Prototyping", "User interviews", "Usability testing"],
        text:
          "I believe everything should be measured and monitored regularly — not for control, but for clarity. Analytics and research help me stay close to what’s actually happening.",
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
        tags: ["Roadmapping", "Prioritization", "Workflow design"],
        text:
          "I love working with visualization to collect and organize ideas, make task structures easier to understand, and present the logic of a workflow.",
        tools: ["Figma", "Miro"]
      },
      {
        title: "Execute",
        tags: ["Documentation", "Vibe coding"],
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
    title: "What colleagues say about me:",
    subtitle: "Click a card to read the full feedback",
    items: [
      {
        quote:
          "Kristina demonstrated a remarkable ability to lead and execute complex projects, maintaining a keen eye on product analytics.",
        highlight: "remarkable ability to lead and execute",
        modalImageSrc: takeClassImageUrl,
        name: "Ihar Koshaleu",
        role: "CPO at TakeClass",
        details: [
          "Kristina quickly decomposes complex problems into a clear structure, communicates trade-offs, and keeps progress transparent.",
          "She consistently connects work to measurable outcomes and makes the team feel aligned and confident about the next step."
        ]
      },
      {
        quote:
          "Her calmness, composure, and analytical mindset enable her to solve even the most complex cases.",
        highlight: "calmness, composure, and analytical mindset",
        modalImageSrc: educateOnlineImageUrl,
        name: "Kseniya Maltseva",
        role: "Team Lead at Educate Online",
        details: [
          "Requirements are crisp, priorities are stable, and changes are communicated early.",
          "She protects the team’s focus and keeps the feedback loop tight with stakeholders."
        ]
      },
      {
        quote:
          "Kristina's strategic vision and organizational skills were key in organizing our marketing initiatives.",
        highlight: "strategic vision and organizational skills",
        modalImageSrc: everypixelAlinaImageUrl,
        name: "Alina Valyaeva",
        role: "PR&Content Lead at Everypixel",
        details: [
          "She comes prepared: multiple solution options, risk analysis, and clear measurement plans.",
          "Her discovery work is fast but grounded — it reduces uncertainty rather than producing slides."
        ]
      },
      {
        quote:
          "Her collaborative approach in working with other project teams, developers, and market experts significantly enhanced the eﬀectiveness of the project.",
        highlight: "collaborative approach",
        modalImageSrc: everypixelDmitryImageUrl,
        name: "Dmitry Shironosov",
        role: "CEO at Everypixel",
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
      { label: "LinkedIn", href: "https://www.linkedin.com/in/kristina-korotenko-b26779337/" },
      { label: "Instagram", href: "https://www.instagram.com/chriissttyyna?igsh=MTVudG1pc2Zzdzcw" }
    ]
  }
};

