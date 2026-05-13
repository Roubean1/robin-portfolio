export type Project = {
  slug: string;
  index: string;
  name: string;
  type: "thesis" | "internship" | "school" | "personal";
  typeLabel: string;
  short: string;
  description: string[];
  stack: string[];
  github?: string;
  featured?: boolean;
  highlights?: string[];
};

export type Experience = {
  period: string;
  role: string;
  company: string;
  location: string;
  bullets: string[];
};

export type Education = {
  period: string;
  degree: string;
  school: string;
  meta: string;
};

export const projects: Project[] = [
  {
    slug: "voice-rag-avatar",
    index: "01",
    name: "Voice RAG Avatar",
    type: "thesis",
    typeLabel: "Bachelor Thesis",
    featured: true,
    short:
      "Full-stack AI application: voice-enabled 3D avatar powered by RAG, LLM, TTS, lipsync, and emotion detection.",
    description: [
      "Bachelor thesis project combining a FastAPI backend with a static Three.js frontend. The app lets users interact with a voice-enabled 3D avatar backed by the full AI pipeline.",
      "Speech-to-text via OpenAI Whisper converts user voice to text. A retrieval-augmented generation (RAG) layer queries a local vector knowledge base to find relevant context, which is passed to an LLM (OpenAI / Together AI fallback) for response generation.",
      "ElevenLabs TTS converts the response to speech. A custom lipsync module maps phonemes to viseme weights in Three.js, synchronising the avatar's mouth in real time. Emotion classification from the LLM output drives avatar facial expressions and body animations.",
    ],
    stack: ["Python", "FastAPI", "Three.js", "RAG", "OpenAI", "ElevenLabs", "Docker", "WebSocket"],
    github: "https://github.com/Roubean1",
    highlights: [
      "End-to-end AI pipeline: STT → RAG → LLM → TTS → lipsync",
      "Real-time viseme-based lipsync in Three.js",
      "Emotion-driven avatar animations",
      "Docker deployment with ffmpeg for local Whisper STT",
      "API key authentication + CORS hardening for production",
    ],
  },
  {
    slug: "open-poll",
    index: "02",
    name: "Open Poll",
    type: "internship",
    typeLabel: "Internship @ PROFIQ",
    short: "Slack bot for creating and managing polls directly in channels — built during internship in a real team environment.",
    description: [
      "Developed during a 3-month internship at PROFIQ s.r.o. Open Poll is a full Slack application that allows teams to create, vote on, and manage polls without leaving their workspace.",
      "Built with React and TypeScript on the frontend, Firebase for real-time data persistence, and the Slack Bolt SDK for bot interactions. Followed an internal Git workflow with pull requests and code reviews by senior engineers.",
    ],
    stack: ["React", "TypeScript", "Firebase", "Slack API", "Slack Bolt", "GitHub"],
    github: "https://github.com/profiq/slack-open-poll",
    highlights: [
      "First professional team project with PR + code review workflow",
      "Real-time Firebase sync for live vote counts",
      "Published as open-source under PROFIQ organisation",
    ],
  },
  {
    slug: "zpg-opengl",
    index: "03",
    name: "ZPG – 3D OpenGL Engine",
    type: "school",
    typeLabel: "VSB-TUO · ZPG",
    short: "Semester project: multiple 3D scenes with camera, dynamic lighting, GLSL shaders, textures, and animations.",
    description: [
      "Semester project for the Fundamentals of Computer Graphics course at VSB–TUO. The application renders several 3D environments from scratch using OpenGL 4.5 and GLSL shaders.",
      "Implements Phong and Blinn-Phong lighting models, directional and point lights, texture mapping, normal mapping, skybox, procedural terrain with height maps, and simple keyframe animations.",
    ],
    stack: ["C++", "OpenGL 4.5", "GLSL", "GLFW", "GLEW", "GLM", "stb", "tinyobjloader"],
    github: "https://github.com/Roubean1",
    highlights: [
      "Custom GLSL shaders: Phong, Blinn-Phong, normal mapping",
      "Procedural terrain from height maps",
      "Camera system with first-person controls",
    ],
  },
  {
    slug: "breakout-sdl",
    index: "04",
    name: "Breakout SDL",
    type: "school",
    typeLabel: "VSB-TUO · UPR",
    short: "Arcade game clone in C using SDL2 — procedural map generation, multi-life block system, high score persistence.",
    description: [
      "Semester project for the Introduction to Programming course. A faithful Breakout clone written entirely in C using SDL2 for rendering, input and audio.",
      "Features an animated intro menu, configurable difficulty, procedural map layouts, per-block health (1–5 lives, colour-coded), and a persistent high-score file.",
    ],
    stack: ["C", "SDL2", "Shell"],
    github: "https://github.com/Roubean1",
    highlights: [
      "Per-block health system with colour-coded life states",
      "Procedural map generation",
      "Persistent high-score storage",
    ],
  },
  {
    slug: "sports-reservation",
    index: "05",
    name: "Sports Facility Reservation",
    type: "school",
    typeLabel: "Team · VSB VPSI",
    short: "Team project: full reservation system for sports facilities with API backend and HTML/CSS frontend.",
    description: [
      "Collaborative semester project (3 contributors) for the VPSI course at VSB. A complete reservation management system for sports facilities: users can browse available courts/halls, book slots, and manage their reservations.",
      "C# REST API backend with SQL database, plain HTML/CSS frontend. Used Git for team collaboration with branch-based workflow.",
    ],
    stack: ["C#", "HTML", "CSS", "SQL", "Git"],
    github: "https://github.com/Roubean1",
    highlights: [
      "3-person team project with branch-based Git workflow",
      "Full CRUD reservation management",
    ],
  },
  {
    slug: "mojezahrada",
    index: "06",
    name: "mojezahrada.cz",
    type: "personal",
    typeLabel: "Graduation Thesis",
    short: "E-shop with garden supplies — secondary school graduation thesis, full PHP/MySQL stack.",
    description: [
      "Secondary school graduation thesis project. A fully functional e-commerce website for garden supplies built from scratch with PHP, MySQL, HTML and CSS — no frameworks.",
      "Includes product catalogue, shopping cart, user accounts, and a simple admin panel for managing inventory and orders.",
    ],
    stack: ["PHP", "MySQL", "HTML", "CSS"],
    github: "https://github.com/Roubean1",
    highlights: [
      "First full-stack project — no frameworks, pure PHP",
      "Admin panel for product and order management",
      "User authentication with sessions",
    ],
  },
];

export const experience: Experience[] = [
  {
    period: "Jul – Sep 2025",
    role: "Full-stack Web Development Intern",
    company: "PROFIQ s.r.o.",
    location: "Ostrava",
    bullets: [
      "Built Open Poll — a production Slack bot for creating and managing polls in channels.",
      "Worked with React, TypeScript, and Firebase in a real multi-person team.",
      "Participated in regular meetings and code reviews with senior developers.",
      "Public repo: github.com/profiq/slack-open-poll",
    ],
  },
  {
    period: "Feb 2024",
    role: "Technician — PC Assembly",
    company: "ED SYSTEM a.s.",
    location: "Ostrava",
    bullets: [
      "Assembled and configured PCs for retail chains including Alza.",
      "Tested hardware components and configured BIOS settings.",
      "Prepared units for Alzabox distribution including final QA.",
    ],
  },
  {
    period: "May 2022",
    role: "Web Development Intern",
    company: "WEBDEVEL s.r.o.",
    location: "Ostrava",
    bullets: [
      "Custom WordPress templates and subpages; content editing in Magento.",
      "Practiced algorithmic thinking through Codewars challenges.",
      "Expanded PHP and CMS skills in a commercial web environment.",
    ],
  },
  {
    period: "May 2021",
    role: "Web Development Intern",
    company: "WEBDEVEL s.r.o.",
    location: "Ostrava",
    bullets: [
      "Developed custom WordPress plugins and modified themes.",
      "Worked with Laravel, Magento CMS platforms.",
      "Created new websites and edited existing web content.",
    ],
  },
];

export const education: Education[] = [
  {
    period: "2023 — present",
    degree: "BSc in Informatics",
    school: "VSB – Technical University of Ostrava",
    meta: "FEI · continuing to Master's",
  },
  {
    period: "Sep 2024 – Jan 2025",
    degree: "Erasmus Exchange",
    school: "Czech Technical University in Prague (CTU FIT)",
    meta: "Faculty of Information Technology",
  },
  {
    period: "2019 – 2023",
    degree: "High School Diploma — ICT & Programming",
    school: "SŠEI Ostrava",
    meta: "Graduation thesis: mojezahrada.cz e-shop",
  },
];

export const skills = {
  Languages: ["TypeScript", "JavaScript", "Python", "C", "C++", "PHP", "SQL"],
  Frontend: ["React", "Next.js", "HTML / CSS", "Three.js", "WordPress"],
  "Backend & APIs": ["FastAPI", "REST APIs", "Firebase", "PHP", "Laravel"],
  "Data & AI": ["RAG pipelines", "OpenAI API", "Vector search", "MySQL", "Oracle"],
  Tools: ["Git / GitHub", "Docker", "Linux", "VS Code"],
};

export const typeColors: Record<Project["type"], { border: string; text: string }> = {
  thesis: { border: "border-purple-500/40", text: "text-purple-400" },
  internship: { border: "border-blue-400/40", text: "text-blue-400" },
  school: { border: "border-emerald-500/40", text: "text-emerald-400" },
  personal: { border: "border-white/15", text: "text-gray-400" },
};
