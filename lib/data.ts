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
  liveUrl?: string;
  featured?: boolean;
  highlights?: string[];
  gallery?: { src: string; alt: string }[];
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
  voice: ["Python", "FastAPI", "Three.js", "STT", "RAG", "LLM", "TTS", "Lipsync", "Docker", "WebSocket"],
  openPoll: ["React", "TypeScript", "Firebase", "Slack API", "Slack Bolt", "GitHub"],
  zpg: ["C++", "OpenGL 4.5", "GLSL", "GLFW", "GLEW", "GLM", "stb", "tinyobjloader"],
  breakout: ["C", "SDL2", "Shell"],
  reservation: ["SQL", "Database design", "ER model", "Git"],
  garden: ["PHP", "MySQL", "HTML", "CSS"],
  fitPrep: ["JavaScript", "HTML", "CSS", "Practice tests", "Git"],
  portfolio: ["Next.js", "React", "TypeScript", "CSS", "Responsive UI"],
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
      github: "https://github.com/Roubean1/Voice-RAG-Avatar",
      highlights: [
        "End-to-end AI pipeline: STT -> RAG -> LLM -> TTS -> lipsync",
        "Real-time viseme-based lipsync in Three.js",
        "Emotion-driven avatar animations",
        "Docker deployment with ffmpeg for local Whisper STT",
        "API key authentication and CORS hardening for production",
      ],
      gallery: [
        { src: "/rag_avatar/avatar_idle.png", alt: "Idle 3D avatar state" },
        { src: "/rag_avatar/avatar_kdyz_mluvi.png", alt: "Speaking 3D avatar state" },
        { src: "/rag_avatar/avatar_a_debug_panel.png", alt: "Avatar interface with debug panel" },
      ],
    },
    {
      slug: "open-poll",
      index: "02",
      name: "Open Poll",
      type: "internship",
      typeLabel: "Internship @ PROFIQ",
      short:
        "Internal PROFIQ Slack polling application; I worked on the web interface and contributed to extensions and product fixes.",
      description: [
        "Developed during a 3-month internship at PROFIQ s.r.o. Open Poll was an internal Slack polling application, and my work focused mainly on the web interface for poll management.",
        "I contributed to development, extensions, and product adjustments. The frontend used React and TypeScript, data was stored in Firebase in real time, and Slack interactions were handled through the Slack Bolt SDK.",
      ],
      stack: sharedStack.openPoll,
      github: "https://github.com/profiq/slack-open-poll",
      highlights: [
        "First professional team project with PR and code review workflow",
        "Real-time Firebase sync for live vote counts",
        "Web interface for managing Slack polls",
        "Product extensions and fixes in an internal PROFIQ app",
      ],
      gallery: [
        { src: "/open_poll/open_poll_1.png", alt: "Open Poll Slack app screen" },
        { src: "/open_poll/open_poll_2.png", alt: "Open Poll creation flow" },
        { src: "/open_poll/open_poll_3.png", alt: "Open Poll vote management" },
        { src: "/open_poll/open_poll_4.png", alt: "Open Poll poll settings" },
        { src: "/open_poll/open_poll_5.png", alt: "Open Poll results view" },
        { src: "/open_poll/open_poll_6.png", alt: "Open Poll Slack integration" },
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
      github: "https://github.com/Roubean1/ZPG-PROJECT",
      highlights: [
        "Custom GLSL shaders: Phong, Blinn-Phong, normal mapping",
        "Procedural terrain from height maps",
        "Camera system with first-person controls",
      ],
      gallery: [
        { src: "/zpg_project/zpg_1.png", alt: "OpenGL scene render" },
        { src: "/zpg_project/zpg_2.png", alt: "OpenGL lighting scene" },
        { src: "/zpg_project/zpg_3.png", alt: "OpenGL textured environment" },
        { src: "/zpg_project/zpg_4.png", alt: "OpenGL terrain scene" },
        { src: "/zpg_project/zpg_5.png", alt: "OpenGL model render" },
        { src: "/zpg_project/zpg_6.png", alt: "OpenGL shader scene" },
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
      github: "https://github.com/Roubean1/SDL-BREAKOUT",
      highlights: [
        "Per-block health system with colour-coded life states",
        "Procedural map generation",
        "Persistent high-score storage",
      ],
      gallery: [
        { src: "/sdl_breakout/breakout_1.png", alt: "Breakout SDL gameplay" },
        { src: "/sdl_breakout/breakout_2.png", alt: "Breakout SDL level" },
        { src: "/sdl_breakout/breakout_3.png", alt: "Breakout SDL menu or score screen" },
      ],
    },
    {
      slug: "sports-reservation",
      index: "05",
      name: "Sports Facility Reservation",
      type: "school",
      typeLabel: "Team - VSB VPSI",
      short: "Team project for sports facility reservations; my responsibility was the SQL database design and implementation.",
      description: [
        "Collaborative semester project for the VPSI course at VSB. The team built a reservation management system for sports facilities where users could browse available courts, book slots, and manage reservations.",
        "My part of the project focused on the database: schema design, relations, constraints, and SQL scripts for the reservation domain. The application layer belonged to other team members.",
      ],
      stack: sharedStack.reservation,
      github: "https://github.com/Roubean1/reservation-system-for-sports-facilities",
      highlights: [
        "Database ownership in a 5-person team project",
        "Reservation-focused relational model",
        "SQL schema prepared for CRUD reservation flows",
      ],
      gallery: [{ src: "/sport_facility/VPSI_Database.png", alt: "Sports facility reservation database schema" }],
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
      github: "https://github.com/Roubean1/mojezahrada.cz",
      highlights: [
        "First full-stack project without frameworks, pure PHP",
        "Admin panel for product and order management",
        "User authentication with sessions",
      ],
      gallery: [
        { src: "/mojezahrada.cz/eshop_zahrada_1.png", alt: "mojezahrada.cz homepage" },
        { src: "/mojezahrada.cz/eshop_zahrada_2.png", alt: "mojezahrada.cz product catalogue" },
        { src: "/mojezahrada.cz/eshop_zahrada_3.png", alt: "mojezahrada.cz product detail" },
        { src: "/mojezahrada.cz/eshop_zahrada_4.png", alt: "mojezahrada.cz cart" },
        { src: "/mojezahrada.cz/eshop_zahrada_5.png", alt: "mojezahrada.cz checkout" },
        { src: "/mojezahrada.cz/eshop_zahrada_6.png", alt: "mojezahrada.cz user account" },
        { src: "/mojezahrada.cz/eshop_zahrada_7.png", alt: "mojezahrada.cz admin view" },
        { src: "/mojezahrada.cz/eshop_zahrada_8.png", alt: "mojezahrada.cz inventory management" },
        { src: "/mojezahrada.cz/eshop_zahrada_9.png", alt: "mojezahrada.cz order management" },
        { src: "/mojezahrada.cz/eshop_zahrada_10.png", alt: "mojezahrada.cz form screen" },
        { src: "/mojezahrada.cz/eshop_zahrada_11.png", alt: "mojezahrada.cz admin table" },
        { src: "/mojezahrada.cz/eshop_zahrada_12.png", alt: "mojezahrada.cz final screen" },
      ],
    },
    {
      slug: "fit-cvut-prijimacky",
      index: "07",
      name: "FIT CVUT Entrance Prep",
      type: "personal",
      typeLabel: "Study Tool",
      short: "Small practice project for FIT CTU entrance exam preparation, built around test-style tasks and quick repetition.",
      description: [
        "Personal study tool created while preparing for FIT CTU entrance exams. The project focuses on quick practice, repetition, and a simple interface for solving exam-style examples.",
        "It is intentionally lightweight: a practical helper rather than a large product, built to make preparation more structured and easier to revisit.",
      ],
      stack: sharedStack.fitPrep,
      github: "https://github.com/Roubean1/roubean1.github.io",
      liveUrl: "https://roubean1.github.io/",
      highlights: [
        "Practice-oriented interface for entrance exam preparation",
        "Small focused project with screenshots preserved in the portfolio",
        "Built around quick repetition and review",
      ],
      gallery: [
        { src: "/fit_cvut_prijimacky/fit_prijimacky_1.png", alt: "FIT CTU entrance prep screen" },
        { src: "/fit_cvut_prijimacky/fit_prijimacky_2.png", alt: "FIT CTU entrance prep task view" },
        { src: "/fit_cvut_prijimacky/fit_prijimacky_3.png", alt: "FIT CTU entrance prep results view" },
      ],
    },
    {
      slug: "robin-portfolio",
      index: "08",
      name: "Robin Portfolio",
      type: "personal",
      typeLabel: "Portfolio Website",
      short: "Personal portfolio website presenting projects, experience, education, and contact information in a polished responsive UI.",
      description: [
        "Personal portfolio project built as a public overview of my technical work, internships, school projects, and contact information.",
        "The site focuses on clear project presentation, bilingual content, responsive layouts, and a visual style that feels more like a product than a plain CV page.",
      ],
      stack: sharedStack.portfolio,
      github: "https://github.com/Roubean1/robin-portfolio",
      highlights: [
        "Responsive project case-study structure",
        "Bilingual portfolio content",
        "Custom visual system for a personal technical brand",
      ],
      gallery: [
        { src: "/robin_portfolio/robin_portfolio_1.png", alt: "Robin portfolio homepage" },
        { src: "/robin_portfolio/robin_portfolio_2.png", alt: "Robin portfolio project list" },
        { src: "/robin_portfolio/robin_portfolio_3.png", alt: "Robin portfolio detail page" },
        { src: "/robin_portfolio/robin_portfolio_4.png", alt: "Robin portfolio profile page" },
        { src: "/robin_portfolio/robin_portfolio_5.png", alt: "Robin portfolio responsive layout" },
      ],
    },
  ],
  cz: [
    {
      slug: "voice-rag-avatar",
      index: "01",
      name: "Voice RAG Avatar",
      type: "thesis",
      typeLabel: "Bakalářská práce",
      featured: true,
      short:
        "Full-stack AI aplikace: hlasem ovládaný 3D avatar postavený na STT, RAG, LLM, TTS, lipsyncu a detekci emocí.",
      description: [
        "Bakalářská práce kombinující FastAPI backend se statickým Three.js frontendem. Aplikace umožňuje komunikaci s hlasem ovládaným 3D avatarem napojeným na celou AI pipeline.",
        "STT přes OpenAI Whisper převádí hlas uživatele na text. Retrieval augmented generation vrstva vyhledává relevantní kontext v lokální vektorové znalostní bázi a předává ho jazykovému modelu pro generování odpovědi.",
        "ElevenLabs TTS převádí odpověď na řeč. Vlastní lipsync modul mapuje fonémy na visémy v Three.js a synchronizuje ústa avatara v reálném čase. Klasifikace emocí z výstupu LLM ovládá výrazy obličeje a animace těla.",
      ],
      stack: sharedStack.voice,
      github: "https://github.com/Roubean1/Voice-RAG-Avatar",
      highlights: [
        "Kompletní AI pipeline: STT -> RAG -> LLM -> TTS -> lipsync",
        "Real-time lipsync podle visémů v Three.js",
        "Animace avatara řízené emocemi",
        "Docker deployment s ffmpeg pro lokální Whisper STT",
        "API key autentizace a CORS hardening pro produkci",
      ],
      gallery: [
        { src: "/rag_avatar/avatar_idle.png", alt: "Klidovy stav 3D avatara" },
        { src: "/rag_avatar/avatar_kdyz_mluvi.png", alt: "Mluvici stav 3D avatara" },
        { src: "/rag_avatar/avatar_a_debug_panel.png", alt: "Avatar rozhrani s debug panelem" },
      ],
    },
    {
      slug: "open-poll",
      index: "02",
      name: "Open Poll",
      type: "internship",
      typeLabel: "Stáž @ PROFIQ",
      short: "Interní aplikace PROFIQ pro Slack ankety; podílel jsem se na webové části, rozšíření a úpravách produktu.",
      description: [
        "Během tříměsíční stáže v PROFIQ s.r.o. jsem pracoval na interní aplikaci Open Poll pro Slack. Řešil jsem hlavně webovou část pro správu anket a podílel jsem se na vývoji, rozšíření a úpravách aplikace.",
        "Frontend byl postavený v Reactu a TypeScriptu, data se ukládala ve Firebase v reálném čase a bot interakce řešil Slack Bolt SDK. Pracoval jsem v interním Git workflow s pull requesty a code review od seniorních vývojářů.",
      ],
      stack: sharedStack.openPoll,
      github: "https://github.com/profiq/slack-open-poll",
      highlights: [
        "První profesionální týmový projekt s PR a code review workflow",
        "Webové rozhraní pro správu Slack anket",
        "Rozšíření a úpravy interní aplikace PROFIQ",
      ],
      gallery: [
        { src: "/open_poll/open_poll_1.png", alt: "Obrazovka Slack aplikace Open Poll" },
        { src: "/open_poll/open_poll_2.png", alt: "Tvorba ankety v Open Poll" },
        { src: "/open_poll/open_poll_3.png", alt: "Správa hlasování v Open Poll" },
        { src: "/open_poll/open_poll_4.png", alt: "Nastaveni ankety v Open Poll" },
        { src: "/open_poll/open_poll_5.png", alt: "Výsledky ankety v Open Poll" },
        { src: "/open_poll/open_poll_6.png", alt: "Slack integrace Open Poll" },
      ],
    },
    {
      slug: "zpg-opengl",
      index: "03",
      name: "ZPG - 3D OpenGL Engine",
      type: "school",
      typeLabel: "VŠB-TUO - ZPG",
      short: "Semestrální projekt: více 3D scén s kamerou, dynamickým světlem, GLSL shadery, texturami a animacemi.",
      description: [
        "Semestrální projekt do předmětu Základy počítačové grafiky na VŠB-TUO. Aplikace renderuje několik 3D prostředí od základu pomocí OpenGL 4.5 a GLSL shaderů.",
        "Obsahuje Phong a Blinn-Phong osvetleni, smerova a bodova svetla, textury, normal mapping, skybox, proceduralni teren z height map a jednoduche keyframe animace.",
      ],
      stack: sharedStack.zpg,
      github: "https://github.com/Roubean1/ZPG-PROJECT",
      highlights: [
        "Vlastni GLSL shadery: Phong, Blinn-Phong, normal mapping",
        "Proceduralni teren z height map",
        "Kamerovy system s first-person ovladanim",
      ],
      gallery: [
        { src: "/zpg_project/zpg_1.png", alt: "Render sceny v OpenGL" },
        { src: "/zpg_project/zpg_2.png", alt: "Svetelna scena v OpenGL" },
        { src: "/zpg_project/zpg_3.png", alt: "Texturované prostředí v OpenGL" },
        { src: "/zpg_project/zpg_4.png", alt: "Teren v OpenGL" },
        { src: "/zpg_project/zpg_5.png", alt: "Render modelu v OpenGL" },
        { src: "/zpg_project/zpg_6.png", alt: "Shaderova scena v OpenGL" },
      ],
    },
    {
      slug: "breakout-sdl",
      index: "04",
      name: "Breakout SDL",
      type: "school",
      typeLabel: "VŠB-TUO - UPR",
      short:
        "Arkádový klon hry Breakout v C a SDL2 s procedurálním generováním map, bloky s více životy a ukládáním high score.",
      description: [
        "Semestrální projekt do Úvodu do programování. Věrný klon Breakoutu napsaný kompletně v C s využitím SDL2 pro vykreslování, vstup a zvuk.",
        "Obsahuje animované úvodní menu, nastavitelnou obtížnost, procedurální rozložení map, zdraví bloků, barevné odlišení životů a perzistentní soubor s high score.",
      ],
      stack: sharedStack.breakout,
      github: "https://github.com/Roubean1/SDL-BREAKOUT",
      highlights: [
        "Systém zdraví bloků s barevným odlišením stavu",
        "Proceduralni generovani map",
        "Perzistentní ukládání high score",
      ],
      gallery: [
        { src: "/sdl_breakout/breakout_1.png", alt: "Gameplay Breakout SDL" },
        { src: "/sdl_breakout/breakout_2.png", alt: "Level v Breakout SDL" },
        { src: "/sdl_breakout/breakout_3.png", alt: "Menu nebo score obrazovka Breakout SDL" },
      ],
    },
    {
      slug: "sports-reservation",
      index: "05",
      name: "Sports Facility Reservation",
      type: "school",
      typeLabel: "Tým - VŠB VPSI",
      short: "Týmový projekt pro rezervace sportovišť; moje část byla návrh a implementace SQL databáze.",
      description: [
        "Týmový semestrální projekt do předmětu VPSI na VŠB. Kompletní systém pro správu rezervací sportovišť: uživatelé si mohli prohlížet dostupné kurty a haly, rezervovat termíny a spravovat svoje rezervace.",
        "Moje část projektu byla databáze: návrh schématu, vztahů, omezení a SQL skriptů pro rezervační doménu. Aplikační vrstvu řešili ostatní členové týmu.",
      ],
      stack: sharedStack.reservation,
      github: "https://github.com/Roubean1/reservation-system-for-sports-facilities",
      highlights: [
        "Zodpovědnost za databázi v týmu pěti lidí",
        "Relační model zaměřený na rezervace",
        "SQL schéma připravené pro CRUD rezervační flow",
      ],
      gallery: [{ src: "/sport_facility/VPSI_Database.png", alt: "Databázové schéma rezervací sportovišť" }],
    },
    {
      slug: "mojezahrada",
      index: "06",
      name: "mojezahrada.cz",
      type: "personal",
      typeLabel: "Maturitní práce",
      short: "E-shop se zahradními potřebami, maturitní práce na střední škole, celý PHP/MySQL stack.",
      description: [
        "Maturitní práce ze střední školy. Plně funkční e-commerce web se zahradními potřebami postavený od nuly v PHP, MySQL, HTML a CSS bez frameworků.",
        "Obsahuje katalog produktů, košík, uživatelské účty a jednoduchou administraci pro správu skladu a objednávek.",
      ],
      stack: sharedStack.garden,
      github: "https://github.com/Roubean1/mojezahrada.cz",
      highlights: [
        "První full-stack projekt bez frameworků, čisté PHP",
        "Administrace produktů a objednávek",
        "Uživatelská autentizace přes sessions",
      ],
      gallery: [
        { src: "/mojezahrada.cz/eshop_zahrada_1.png", alt: "Úvodní stránka mojezahrada.cz" },
        { src: "/mojezahrada.cz/eshop_zahrada_2.png", alt: "Katalog produktu mojezahrada.cz" },
        { src: "/mojezahrada.cz/eshop_zahrada_3.png", alt: "Detail produktu mojezahrada.cz" },
        { src: "/mojezahrada.cz/eshop_zahrada_4.png", alt: "Košík mojezahrada.cz" },
        { src: "/mojezahrada.cz/eshop_zahrada_5.png", alt: "Objednávka mojezahrada.cz" },
        { src: "/mojezahrada.cz/eshop_zahrada_6.png", alt: "Uživatelský účet mojezahrada.cz" },
        { src: "/mojezahrada.cz/eshop_zahrada_7.png", alt: "Administrace mojezahrada.cz" },
        { src: "/mojezahrada.cz/eshop_zahrada_8.png", alt: "Správa skladu mojezahrada.cz" },
        { src: "/mojezahrada.cz/eshop_zahrada_9.png", alt: "Správa objednávek mojezahrada.cz" },
        { src: "/mojezahrada.cz/eshop_zahrada_10.png", alt: "Formulář mojezahrada.cz" },
        { src: "/mojezahrada.cz/eshop_zahrada_11.png", alt: "Administrační tabulka mojezahrada.cz" },
        { src: "/mojezahrada.cz/eshop_zahrada_12.png", alt: "Finální obrazovka mojezahrada.cz" },
      ],
    },
    {
      slug: "fit-cvut-prijimacky",
      index: "07",
      name: "FIT ČVUT Přijímačky",
      type: "personal",
      typeLabel: "Studijní pomůcka",
      short: "Menší projekt pro přípravu na přijímačky FIT ČVUT, zaměřený na příklady, rychlé procvičování a opakování.",
      description: [
        "Osobní studijní pomůcka vytvořená během přípravy na přijímací zkoušky na FIT ČVUT. Projekt je zaměřený na rychlé procvičování, opakování a jednoduché rozhraní pro řešení typových příkladů.",
        "Záměrně jde o lehký praktický nástroj, ne velký produkt: hlavní cíl byl udělat přípravu strukturovanější a jednoduše se k příkladům vracet.",
      ],
      stack: sharedStack.fitPrep,
      github: "https://github.com/Roubean1/roubean1.github.io",
      liveUrl: "https://roubean1.github.io/",
      highlights: [
        "Rozhraní zaměřené na přípravu k přijímačkám",
        "Malý soustředěný projekt zachycený screenshoty v portfoliu",
        "Postavené kolem rychlého opakování a kontroly",
      ],
      gallery: [
        { src: "/fit_cvut_prijimacky/fit_prijimacky_1.png", alt: "Obrazovka přípravy na FIT ČVUT" },
        { src: "/fit_cvut_prijimacky/fit_prijimacky_2.png", alt: "Úloha v přípravě na FIT ČVUT" },
        { src: "/fit_cvut_prijimacky/fit_prijimacky_3.png", alt: "Výsledky přípravy na FIT ČVUT" },
      ],
    },
    {
      slug: "robin-portfolio",
      index: "08",
      name: "Robin Portfolio",
      type: "personal",
      typeLabel: "Portfolio web",
      short: "Osobní portfolio web prezentující projekty, zkušenosti, vzdělání a kontakt v responzivním vizuálním rozhraní.",
      description: [
        "Osobní portfolio projekt postavený jako veřejný přehled mojí technické práce, stáží, školních projektů a kontaktu.",
        "Web se soustředí na přehlednou prezentaci projektů, dvojjazyčný obsah, responzivní layouty a vizuální styl, který působí víc jako produkt než obyčejné CV.",
      ],
      stack: sharedStack.portfolio,
      github: "https://github.com/Roubean1/robin-portfolio",
      highlights: [
        "Responzivní struktura detailů projektů",
        "Dvojjazyčný obsah portfolia",
        "Vlastní vizuální systém pro osobní technickou značku",
      ],
      gallery: [
        { src: "/robin_portfolio/robin_portfolio_1.png", alt: "Úvodní stránka Robin portfolio" },
        { src: "/robin_portfolio/robin_portfolio_2.png", alt: "Seznam projektu Robin portfolio" },
        { src: "/robin_portfolio/robin_portfolio_3.png", alt: "Detail projektu Robin portfolio" },
        { src: "/robin_portfolio/robin_portfolio_4.png", alt: "Profilová stránka Robin portfolio" },
        { src: "/robin_portfolio/robin_portfolio_5.png", alt: "Responzivní layout Robin portfolio" },
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
        "Worked on PROFIQ's internal Open Poll application for Slack polls.",
        "Built and adjusted the web interface and contributed to product extensions and fixes.",
        "Worked with React, TypeScript, and Firebase in a real multi-person team.",
        "Participated in regular meetings and code reviews with senior developers.",
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
      period: "Čvc - září 2025",
      role: "Full-stack Web Development Intern",
      company: "PROFIQ s.r.o.",
      location: "Ostrava",
      bullets: [
        "Pracoval jsem na interní aplikaci PROFIQ Open Poll pro Slack ankety.",
        "Dělal jsem webovou část aplikace a podílel jsem se na jejím vývoji, rozšíření a úpravách.",
        "Pracoval jsem s Reactem, TypeScriptem a Firebase v reálném vícečlenném týmu.",
        "Účastnil jsem se pravidelných meetingů a code review se seniorními vývojáři.",
      ],
    },
    {
      period: "Únor 2024",
      role: "Technik - montáž PC",
      company: "ED SYSTEM a.s.",
      location: "Ostrava",
      bullets: [
        "Skládal a konfiguroval jsem PC pro retailové řetězce včetně Alzy.",
        "Testoval jsem hardwarove komponenty a nastavoval BIOS.",
        "Připravoval jsem jednotky pro distribuci do Alzaboxu včetně finální QA.",
      ],
    },
    {
      period: "Květen 2022",
      role: "Web Development Intern",
      company: "WEBDEVEL s.r.o.",
      location: "Ostrava",
      bullets: [
        "Vlastní WordPress šablony a podstránky; editace obsahu v Magentu.",
        "Trénink algoritmického myšlení přes Codewars výzvy.",
        "Rozšíření PHP a CMS dovedností v komerčním webovém prostředí.",
      ],
    },
    {
      period: "Květen 2021",
      role: "Web Development Intern",
      company: "WEBDEVEL s.r.o.",
      location: "Ostrava",
      bullets: [
        "Vývoj vlastních WordPress pluginů a úpravy témat.",
        "Práce s Laravel a Magento CMS platformami.",
        "Tvorba nových webů a úpravy existujícího webového obsahu.",
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
      meta: "Faculty of Information Technology - short-term study before continuing at VSB-TUO",
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
      period: "2023 - současnost",
      degree: "BSc v Informatice",
      school: "VŠB - Technická univerzita Ostrava",
      meta: "FEI - plánované pokračování na magisterské studium na VŠB-TUO",
    },
    {
      period: "Září 2024 - leden 2025",
      degree: "BSc v Informatice",
      school: "České vysoké učení technické v Praze (ČVUT FIT)",
      meta: "Fakulta informačních technologií - krátkodobé studium před pokračováním na VŠB-TUO",
    },
    {
      period: "2019 - 2023",
      degree: "Maturita - ICT a programování",
      school: "SSEI Ostrava",
      meta: "Maturitní práce: mojezahrada.cz e-shop",
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
    "Data a AI": ["RAG pipeline", "OpenAI API", "Vektorové vyhledávání", "MySQL", "Oracle"],
    Nástroje: ["Git / GitHub", "Docker", "Linux", "VS Code"],
  },
};

export const typeColors: Record<Project["type"], { border: string; text: string }> = {
  thesis: { border: "border-purple-500/40", text: "text-purple-400" },
  internship: { border: "border-blue-400/40", text: "text-blue-400" },
  school: { border: "border-emerald-500/40", text: "text-emerald-400" },
  personal: { border: "border-white/15", text: "text-gray-400" },
};
