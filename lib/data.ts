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

const sharedStack = {
  voice: ["Python", "FastAPI", "Three.js", "RAG", "OpenAI", "ElevenLabs", "Docker", "WebSocket"],
  openPoll: ["React", "TypeScript", "Firebase", "Slack API", "Slack Bolt", "GitHub"],
  zpg: ["C++", "OpenGL 4.5", "GLSL", "GLFW", "GLEW", "GLM", "stb", "tinyobjloader"],
  breakout: ["C", "SDL2", "Shell"],
  reservation: ["C#", "HTML", "CSS", "SQL", "Git"],
  garden: ["PHP", "MySQL", "HTML", "CSS"],
};

export const projects: Record<"en" | "cz", Project[]> = {
  en: [
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
        "Speech-to-text via OpenAI Whisper converts user voice to text. A retrieval-augmented generation layer queries a local vector knowledge base to find relevant context, which is passed to an LLM for response generation.",
        "ElevenLabs TTS converts the response to speech. A custom lipsync module maps phonemes to viseme weights in Three.js, synchronising the avatar's mouth in real time. Emotion classification from the LLM output drives avatar facial expressions and body animations.",
      ],
      stack: sharedStack.voice,
      github: "https://github.com/Roubean1",
      highlights: [
        "End-to-end AI pipeline: STT -> RAG -> LLM -> TTS -> lipsync",
        "Real-time viseme-based lipsync in Three.js",
        "Emotion-driven avatar animations",
        "Docker deployment with ffmpeg for local Whisper STT",
        "API key authentication and CORS hardening for production",
      ],
    },
    {
      slug: "open-poll",
      index: "02",
      name: "Open Poll",
      type: "internship",
      typeLabel: "Internship @ PROFIQ",
      short:
        "Slack bot for creating and managing polls directly in channels, built during internship in a real team environment.",
      description: [
        "Developed during a 3-month internship at PROFIQ s.r.o. Open Poll is a full Slack application that allows teams to create, vote on, and manage polls without leaving their workspace.",
        "Built with React and TypeScript on the frontend, Firebase for real-time data persistence, and the Slack Bolt SDK for bot interactions. Followed an internal Git workflow with pull requests and code reviews by senior engineers.",
      ],
      stack: sharedStack.openPoll,
      github: "https://github.com/profiq/slack-open-poll",
      highlights: [
        "First professional team project with PR and code review workflow",
        "Real-time Firebase sync for live vote counts",
        "Published as open-source under PROFIQ organisation",
      ],
    },
    {
      slug: "zpg-opengl",
      index: "03",
      name: "ZPG - 3D OpenGL Engine",
      type: "school",
      typeLabel: "VSB-TUO - ZPG",
      short:
        "Semester project: multiple 3D scenes with camera, dynamic lighting, GLSL shaders, textures, and animations.",
      description: [
        "Semester project for the Fundamentals of Computer Graphics course at VSB-TUO. The application renders several 3D environments from scratch using OpenGL 4.5 and GLSL shaders.",
        "Implements Phong and Blinn-Phong lighting models, directional and point lights, texture mapping, normal mapping, skybox, procedural terrain with height maps, and simple keyframe animations.",
      ],
      stack: sharedStack.zpg,
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
      typeLabel: "VSB-TUO - UPR",
      short:
        "Arcade game clone in C using SDL2, with procedural map generation, multi-life blocks, and high score persistence.",
      description: [
        "Semester project for the Introduction to Programming course. A faithful Breakout clone written entirely in C using SDL2 for rendering, input, and audio.",
        "Features an animated intro menu, configurable difficulty, procedural map layouts, per-block health, colour-coded lives, and a persistent high-score file.",
      ],
      stack: sharedStack.breakout,
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
      typeLabel: "Team - VSB VPSI",
      short: "Team project: full reservation system for sports facilities with API backend and HTML/CSS frontend.",
      description: [
        "Collaborative semester project for the VPSI course at VSB. A complete reservation management system for sports facilities: users can browse available courts, book slots, and manage their reservations.",
        "C# REST API backend with SQL database, plain HTML/CSS frontend. Used Git for team collaboration with branch-based workflow.",
      ],
      stack: sharedStack.reservation,
      github: "https://github.com/Roubean1",
      highlights: ["3-person team project with branch-based Git workflow", "Full CRUD reservation management"],
    },
    {
      slug: "mojezahrada",
      index: "06",
      name: "mojezahrada.cz",
      type: "personal",
      typeLabel: "Graduation Thesis",
      short: "E-shop with garden supplies, secondary school graduation thesis, full PHP/MySQL stack.",
      description: [
        "Secondary school graduation thesis project. A fully functional e-commerce website for garden supplies built from scratch with PHP, MySQL, HTML, and CSS, without frameworks.",
        "Includes product catalogue, shopping cart, user accounts, and a simple admin panel for managing inventory and orders.",
      ],
      stack: sharedStack.garden,
      github: "https://github.com/Roubean1",
      highlights: [
        "First full-stack project without frameworks, pure PHP",
        "Admin panel for product and order management",
        "User authentication with sessions",
      ],
    },
  ],
  cz: [
    {
      slug: "voice-rag-avatar",
      index: "01",
      name: "Voice RAG Avatar",
      type: "thesis",
      typeLabel: "Bakalarska prace",
      featured: true,
      short:
        "Full-stack AI aplikace: hlasem ovladany 3D avatar postaveny na RAG, LLM, TTS, lipsyncu a detekci emoci.",
      description: [
        "Bakalarska prace kombinujici FastAPI backend se statickym Three.js frontendem. Aplikace umoznuje komunikaci s hlasem ovladanym 3D avatarem napojenym na celou AI pipeline.",
        "OpenAI Whisper prevadi hlas uzivatele na text. Retrieval augmented generation vrstva vyhledava relevantni kontext v lokalni vektorove znalostni bazi a predava ho jazykovemu modelu pro generovani odpovedi.",
        "ElevenLabs TTS prevadi odpoved na rec. Vlastni lipsync modul mapuje fonemy na visemy v Three.js a synchronizuje usta avatara v realnem case. Klasifikace emoci z vystupu LLM ovlada vyrazy obliceje a animace tela.",
      ],
      stack: sharedStack.voice,
      github: "https://github.com/Roubean1",
      highlights: [
        "Kompletni AI pipeline: STT -> RAG -> LLM -> TTS -> lipsync",
        "Real-time lipsync podle visemu v Three.js",
        "Animace avatara rizene emocemi",
        "Docker deployment s ffmpeg pro lokalni Whisper STT",
        "API key autentizace a CORS hardening pro produkci",
      ],
    },
    {
      slug: "open-poll",
      index: "02",
      name: "Open Poll",
      type: "internship",
      typeLabel: "Staz @ PROFIQ",
      short: "Slack bot pro vytvareni a spravu anket primo v kanalech, postaveny behem staze v realnem tymu.",
      description: [
        "Projekt vznikl behem trimesicni staze v PROFIQ s.r.o. Open Poll je Slack aplikace, ktera tymum umoznuje vytvaret ankety, hlasovat a spravovat vysledky bez opusteni workspace.",
        "Frontend je postaveny v Reactu a TypeScriptu, data se ukladaji ve Firebase v realnem case a bot interakce resi Slack Bolt SDK. Pracoval jsem v internim Git workflow s pull requesty a code review od seniornich vyvojaru.",
      ],
      stack: sharedStack.openPoll,
      github: "https://github.com/profiq/slack-open-poll",
      highlights: [
        "Prvni profesionalni tymovy projekt s PR a code review workflow",
        "Real-time Firebase synchronizace pro zive pocty hlasu",
        "Publikovano jako open-source pod organizaci PROFIQ",
      ],
    },
    {
      slug: "zpg-opengl",
      index: "03",
      name: "ZPG - 3D OpenGL Engine",
      type: "school",
      typeLabel: "VSB-TUO - ZPG",
      short: "Semestralni projekt: vice 3D scen s kamerou, dynamickym svetlem, GLSL shadery, texturami a animacemi.",
      description: [
        "Semestralni projekt do predmetu Zaklady pocitacove grafiky na VSB-TUO. Aplikace renderuje nekolik 3D prostredi od zakladu pomoci OpenGL 4.5 a GLSL shaderu.",
        "Obsahuje Phong a Blinn-Phong osvetleni, smerova a bodova svetla, textury, normal mapping, skybox, proceduralni teren z height map a jednoduche keyframe animace.",
      ],
      stack: sharedStack.zpg,
      github: "https://github.com/Roubean1",
      highlights: [
        "Vlastni GLSL shadery: Phong, Blinn-Phong, normal mapping",
        "Proceduralni teren z height map",
        "Kamerovy system s first-person ovladanim",
      ],
    },
    {
      slug: "breakout-sdl",
      index: "04",
      name: "Breakout SDL",
      type: "school",
      typeLabel: "VSB-TUO - UPR",
      short:
        "Arkádovy klon hry Breakout v C a SDL2 s proceduralnim generovanim map, bloky s vice zivoty a ukladaním high score.",
      description: [
        "Semestralni projekt do Uvodu do programovani. Verny klon Breakoutu napsany kompletne v C s vyuzitim SDL2 pro vykreslovani, vstup a zvuk.",
        "Obsahuje animovane uvodni menu, nastavitelnou obtiznost, proceduralni rozlozeni map, zdravi bloku, barevne odliseni zivotu a perzistentni soubor s high score.",
      ],
      stack: sharedStack.breakout,
      github: "https://github.com/Roubean1",
      highlights: [
        "System zdravi bloku s barevnym odliseni stavu",
        "Proceduralni generovani map",
        "Perzistentni ukladani high score",
      ],
    },
    {
      slug: "sports-reservation",
      index: "05",
      name: "Sports Facility Reservation",
      type: "school",
      typeLabel: "Tym - VSB VPSI",
      short: "Tymovy projekt: rezervacni system sportovist s API backendem a HTML/CSS frontendem.",
      description: [
        "Tymovy semestralni projekt do predmetu VPSI na VSB. Kompletní system pro spravu rezervaci sportovist: uzivatele si mohou prohlizet dostupne kurty a haly, rezervovat terminy a spravovat svoje rezervace.",
        "C# REST API backend s SQL databazi a jednoduchy HTML/CSS frontend. Pro tymovou spolupraci jsme pouzivali Git a praci ve vetvich.",
      ],
      stack: sharedStack.reservation,
      github: "https://github.com/Roubean1",
      highlights: ["Tymovy projekt ve trech lidech s branch-based Git workflow", "Kompletni CRUD sprava rezervaci"],
    },
    {
      slug: "mojezahrada",
      index: "06",
      name: "mojezahrada.cz",
      type: "personal",
      typeLabel: "Maturitni prace",
      short: "E-shop se zahradnimi potrebami, maturitni prace na stredni skole, cely PHP/MySQL stack.",
      description: [
        "Maturitni prace ze stredni skoly. Plne funkcni e-commerce web se zahradnimi potrebami postaveny od nuly v PHP, MySQL, HTML a CSS bez frameworku.",
        "Obsahuje katalog produktu, kosik, uzivatelske ucty a jednoduchou administraci pro spravu skladu a objednavek.",
      ],
      stack: sharedStack.garden,
      github: "https://github.com/Roubean1",
      highlights: [
        "Prvni full-stack projekt bez frameworku, ciste PHP",
        "Administrace produktu a objednavek",
        "Uzivatelska autentizace pres sessions",
      ],
    },
  ],
};

export const experience: Record<"en" | "cz", Experience[]> = {
  en: [
    {
      period: "Jul - Sep 2025",
      role: "Full-stack Web Development Intern",
      company: "PROFIQ s.r.o.",
      location: "Ostrava",
      bullets: [
        "Built Open Poll, a production Slack bot for creating and managing polls in channels.",
        "Worked with React, TypeScript, and Firebase in a real multi-person team.",
        "Participated in regular meetings and code reviews with senior developers.",
        "Public repo: github.com/profiq/slack-open-poll",
      ],
    },
    {
      period: "Feb 2024",
      role: "Technician - PC Assembly",
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
        "Worked with Laravel and Magento CMS platforms.",
        "Created new websites and edited existing web content.",
      ],
    },
  ],
  cz: [
    {
      period: "Cvc - zari 2025",
      role: "Full-stack Web Development Intern",
      company: "PROFIQ s.r.o.",
      location: "Ostrava",
      bullets: [
        "Stavel jsem Open Poll, produkcniho Slack bota pro vytvareni a spravu anket v kanalech.",
        "Pracoval jsem s Reactem, TypeScriptem a Firebase v realnem viceclennem tymu.",
        "Ucastnil jsem se pravidelnych meetingu a code review se seniornimi vyvojari.",
        "Verejne repo: github.com/profiq/slack-open-poll",
      ],
    },
    {
      period: "Unor 2024",
      role: "Technik - montaz PC",
      company: "ED SYSTEM a.s.",
      location: "Ostrava",
      bullets: [
        "Skladal a konfiguroval jsem PC pro retailove retezce vcetne Alzy.",
        "Testoval jsem hardwarove komponenty a nastavoval BIOS.",
        "Pripravoval jsem jednotky pro distribuci do Alzaboxu vcetne finalni QA.",
      ],
    },
    {
      period: "Kveten 2022",
      role: "Web Development Intern",
      company: "WEBDEVEL s.r.o.",
      location: "Ostrava",
      bullets: [
        "Vlastni WordPress sablony a podstranky; editace obsahu v Magentu.",
        "Trenink algoritmickeho mysleni pres Codewars vyzvy.",
        "Rozsireni PHP a CMS dovednosti v komercnim webovem prostredi.",
      ],
    },
    {
      period: "Kveten 2021",
      role: "Web Development Intern",
      company: "WEBDEVEL s.r.o.",
      location: "Ostrava",
      bullets: [
        "Vyvoj vlastnich WordPress pluginu a upravy thematu.",
        "Prace s Laravel a Magento CMS platformami.",
        "Tvorba novych webu a upravy existujiciho weboveho obsahu.",
      ],
    },
  ],
};

export const education: Record<"en" | "cz", Education[]> = {
  en: [
    {
      period: "2023 - present",
      degree: "BSc in Informatics",
      school: "VSB - Technical University of Ostrava",
      meta: "FEI - planned continuation to Master's studies at VSB-TUO",
    },
    {
      period: "Sep 2024 - Jan 2025",
      degree: "BSc in Informatics",
      school: "Czech Technical University in Prague (CTU FIT)",
      meta: "Faculty of Information Technology - completed 1 semester",
    },
    {
      period: "2019 - 2023",
      degree: "High School Diploma - ICT & Programming",
      school: "SSEI Ostrava",
      meta: "Graduation thesis: mojezahrada.cz e-shop",
    },
  ],
  cz: [
    {
      period: "2023 - soucasnost",
      degree: "BSc v Informatice",
      school: "VSB - Technicka univerzita Ostrava",
      meta: "FEI - planovane pokracovani na magisterske studium na VSB-TUO",
    },
    {
      period: "Zari 2024 - leden 2025",
      degree: "BSc v Informatice",
      school: "Ceske vysoke uceni technicke v Praze (CVUT FIT)",
      meta: "Fakulta informacnich technologii - dokoncen 1 semestr",
    },
    {
      period: "2019 - 2023",
      degree: "Maturita - ICT a programovani",
      school: "SSEI Ostrava",
      meta: "Maturitni prace: mojezahrada.cz e-shop",
    },
  ],
};

export const skills = {
  en: {
    Languages: ["TypeScript", "JavaScript", "Python", "C", "C++", "PHP", "SQL"],
    Frontend: ["React", "Next.js", "HTML / CSS", "Three.js", "WordPress"],
    "Backend & APIs": ["FastAPI", "REST APIs", "Firebase", "PHP", "Laravel"],
    "Data & AI": ["RAG pipelines", "OpenAI API", "Vector search", "MySQL", "Oracle"],
    Tools: ["Git / GitHub", "Docker", "Linux", "VS Code"],
  },
  cz: {
    Jazyky: ["TypeScript", "JavaScript", "Python", "C", "C++", "PHP", "SQL"],
    Frontend: ["React", "Next.js", "HTML / CSS", "Three.js", "WordPress"],
    "Backend a API": ["FastAPI", "REST API", "Firebase", "PHP", "Laravel"],
    "Data a AI": ["RAG pipeline", "OpenAI API", "Vektorove vyhledavani", "MySQL", "Oracle"],
    Nastroje: ["Git / GitHub", "Docker", "Linux", "VS Code"],
  },
};

export const typeColors: Record<Project["type"], { border: string; text: string }> = {
  thesis: { border: "border-purple-500/40", text: "text-purple-400" },
  internship: { border: "border-blue-400/40", text: "text-blue-400" },
  school: { border: "border-emerald-500/40", text: "text-emerald-400" },
  personal: { border: "border-white/15", text: "text-gray-400" },
};
