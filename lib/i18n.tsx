"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { projects, experience, education, skills, type Education, type Experience, type Project } from "@/lib/data";

export type Language = "en" | "cz";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (typeof dictionary)[Language];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  skills: Record<string, string[]>;
};

const dictionary = {
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      profile: "Profile",
      contact: "Contact",
      status: "open to work",
      menuOpen: "Open navigation",
      menuClose: "Close navigation",
      brandLabel: "Robin Tokarsky home",
      brandSub: "portfolio",
      languageLabel: "Switch language",
    },
    footer: {
      subtitle: "Full-stack Developer in Ostrava, CZ",
      built: "Built with Next.js",
    },
    hero: {
      eyebrow: "Technical portfolio",
      title: "Full-stack projects, AI systems, and practical software work.",
      copy:
        "Portfolio and CV overview of my projects, internships, education, and technical stack. I work mainly with React, TypeScript, Python, FastAPI, Three.js, databases, and AI integrations.",
      viewProjects: "View projects",
      contact: "Get in touch",
      highlightsLabel: "Portfolio highlights",
      metrics: [
        { number: "8", label: "projects across AI, web, and graphics" },
        { number: "3", label: "internships in real product teams" },
        { number: "BSc", label: "informatics, VSB-TUO" },
      ],
      system: "portfolio system",
      thesisCopy:
        "Speech, retrieval, language model output, generated voice, lipsync, and emotion animation in one full-stack thesis.",
      stackTitle: "Stack",
      signalTitle: "Signal",
      focusTitle: "Available for cooperation",
      focusCopy: "Part-time work, remote internships, and smaller technical collaborations.",
      codeLines: ["React / TypeScript", "Python / FastAPI", "AI integrations"],
    },
    home: {
      featuredLabel: "Featured work",
      featuredTitle: "One project as a full product system.",
      featuredCopy:
        "A bachelor thesis project that combines backend APIs, a 3D frontend, speech processing, retrieval, language model output, generated voice, and realtime lipsync.",
      viewCaseStudy: "View case study",
      recentLabel: "Recent projects",
      recentTitle: "Built across teams, classes, and side projects.",
      allProjects: "All projects",
      profileLabel: "Profile",
      bioTitle: "Technical profile focused on full-stack development and AI integrations.",
      bioCopy:
        "BSc Informatics at VSB-TUO, three internships, and a bachelor thesis connecting voice input, STT, retrieval, 3D interaction, and realtime UX. Planned continuation: Master's studies at VSB-TUO.",
      profile: "Profile",
      contact: "Contact",
    },
    about: {
      label: "Profile",
      intro:
        "Full-stack developer from Ostrava, currently finishing Informatics at VSB-TUO. This portfolio summarizes my technical projects, internships, education, and tools I have used in practice.",
      paragraphs: [
        "My Bachelor thesis is a voice-enabled 3D avatar backed by a full AI pipeline: Whisper speech recognition, retrieval augmented generation, language model responses, ElevenLabs voice output, and Three.js lipsync with emotion-driven animation.",
        "I have worked through three internships and built projects across full-stack web development, AI integrations, databases, React, TypeScript, Python, PHP, and Firebase.",
      ],
      stats: [
        { value: "3", label: "internships" },
        { value: "6+", label: "portfolio projects" },
        { value: "B2", label: "English level" },
      ],
      profilePhoto: "Profile photo",
      location: "Ostrava, CZ",
      openToWork: "open to work",
      skillsLabel: "Skills",
      skillsTitle: "Stack I can actually ship with.",
      experienceLabel: "Experience",
      experienceTitle: "Internships and product work.",
      educationLabel: "Education",
      educationTitle: "Formal education and planned Master's studies.",
    },
    projectsPage: {
      label: "Projects",
      title: "Work shaped into case studies.",
      copy:
        "Thesis, internship work, school projects, and older personal builds. The range is intentionally visible: AI systems, team products, graphics, backend APIs, and classic web fundamentals.",
    },
    projectDetail: {
      allProjects: "All projects",
      overview: "Overview",
      highlights: "Highlights",
      gallery: "Gallery",
      techStack: "Tech stack",
      github: "View on GitHub",
      liveSite: "Open website",
      closeGallery: "Back to content",
    },
    contact: {
      label: "Contact",
      title: "Contact for part-time, remote internships, and technical cooperation.",
      copy:
        "I am open mainly to part-time work, remote internships, and smaller technical collaborations. Send the context, role, project, or repository and I will reply with a practical next step.",
      channels: [
        { label: "Email", note: "Fastest response" },
        { label: "GitHub", note: "Code and projects" },
        { label: "LinkedIn", note: "Professional profile" },
      ],
      availableTitle: "Currently available",
      availableCopy: "Open mainly to part-time cooperation, remote internships, and smaller contract work.",
    },
  },
  cz: {
    nav: {
      home: "Domů",
      projects: "Projekty",
      profile: "Profil",
      contact: "Kontakt",
      status: "otevřený spolupráci",
      menuOpen: "Otevřít navigaci",
      menuClose: "Zavřít navigaci",
      brandLabel: "Robin Tokarský domů",
      brandSub: "portfolio",
      languageLabel: "Přepnout jazyk",
    },
    footer: {
      subtitle: "Full-stack developer v Ostravě, CZ",
      built: "Postaveno na Next.js",
    },
    hero: {
      eyebrow: "Technické portfolio",
      title: "Full-stack projekty, AI systémy a praktická softwarová práce.",
      copy:
        "Portfolio a CV přehled mých projektů, stáží, vzdělání a technického stacku. Pracuji hlavně s Reactem, TypeScriptem, Pythonem, FastAPI, Three.js, databázemi a AI integracemi.",
      viewProjects: "Zobrazit projekty",
      contact: "Ozvat se",
      highlightsLabel: "Vybrané body portfolia",
      metrics: [
        { number: "8", label: "projektů napříč AI, webem a grafikou" },
        { number: "3", label: "stáže v reálných produktových týmech" },
        { number: "BSc", label: "informatika, VŠB-TUO" },
      ],
      system: "portfolio system",
      thesisCopy:
        "Řeč, STT, vyhledávání kontextu, výstup jazykového modelu, generovaný hlas, lipsync a animace emocí v jedné full-stack bakalářské práci.",
      stackTitle: "Stack",
      signalTitle: "Signal",
      focusTitle: "Otevřený spolupráci",
      focusCopy: "Part-time práce, remote stáže a menší technické spolupráce.",
      codeLines: ["React / TypeScript", "Python / FastAPI", "AI integrace"],
    },
    home: {
      featuredLabel: "Vybraný projekt",
      featuredTitle: "Jeden projekt jako celý produktový systém.",
      featuredCopy:
        "Bakalářská práce, která kombinuje backend API, 3D frontend, STT zpracování řeči, retrieval, výstup jazykového modelu, generovaný hlas a realtime lipsync.",
      viewCaseStudy: "Zobrazit detail projektu",
      recentLabel: "Novější projekty",
      recentTitle: "Postaveno v týmech, škole i ve volném čase.",
      allProjects: "Všechny projekty",
      profileLabel: "Profil",
      bioTitle: "Technický profil zaměřený na full-stack vývoj a AI integrace.",
      bioCopy:
        "BSc Informatika na VŠB-TUO, tři stáže a bakalářská práce propojující hlasový vstup, STT, retrieval, 3D interakci a realtime UX. Plánované pokračování: magisterské studium na VŠB-TUO.",
      profile: "Profil",
      contact: "Kontakt",
    },
    about: {
      label: "Profil",
      intro:
        "Full-stack developer z Ostravy, aktuálně dokončující Informatiku na VŠB-TUO. Toto portfolio shrnuje moje technické projekty, stáže, vzdělání a nástroje, se kterými mám praktickou zkušenost.",
      paragraphs: [
        "Moje bakalářská práce je hlasem ovládaný 3D avatar postavený na celé AI pipeline: STT přes Whisper, retrieval augmented generation, odpovědi jazykového modelu, ElevenLabs hlasový výstup a Three.js lipsync s animací podle emocí.",
        "Prošel jsem třemi stážemi a stavěl projekty ve full-stack webovém vývoji, AI integracích, databázích, Reactu, TypeScriptu, Pythonu, PHP a Firebase.",
      ],
      stats: [
        { value: "3", label: "stáže" },
        { value: "8", label: "portfolio projektů" },
        { value: "B2", label: "úroveň angličtiny" },
      ],
      profilePhoto: "Profilová fotka",
      location: "Ostrava, CZ",
      openToWork: "Otevřený spolupráci",
      skillsLabel: "Dovednosti",
      skillsTitle: "Stack, se kterým umím opravdu dodat výsledek.",
      experienceLabel: "Zkušenosti",
      experienceTitle: "Stáže a produktová práce.",
      educationLabel: "Vzdělání",
      educationTitle: "Formální vzdělání a plánované magisterské studium.",
    },
    projectsPage: {
      label: "Projekty",
      title: "Práce přehledně zpracovaná do projektů.",
      copy:
        "Bakalářská práce, stáže, školní projekty i starší osobní věci. Záměrně ukazuju šířku: AI systémy, týmové produkty, grafiku, backend API a klasické webové základy.",
    },
    projectDetail: {
      allProjects: "Všechny projekty",
      overview: "Přehled",
      highlights: "Highlights",
      gallery: "Galerie",
      techStack: "Tech stack",
      github: "Zobrazit na GitHubu",
      liveSite: "Otevřít web",
      closeGallery: "Zpět k obsahu",
    },
    contact: {
      label: "Kontakt",
      title: "Kontakt pro part-time, remote stáže a technickou spolupráci.",
      copy:
        "Jsem otevřený hlavně part-time práci, remote stážím a menším technickým spolupracím. Pošlete kontext, roli, projekt nebo repo a ozvu se s praktickým dalším krokem.",
      channels: [
        { label: "Email", note: "Nejrychlejší odpověď" },
        { label: "GitHub", note: "Kód a projekty" },
        { label: "LinkedIn", note: "Profesní profil" },
      ],
      availableTitle: "Aktuálně dostupný",
      availableCopy: "Otevřený hlavně part-time spolupráci, remote stážím a menším kontraktům.",
    },
  },
} as const;

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-language");
    if (saved === "en" || saved === "cz") setLanguageState(saved);
  }, []);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem("portfolio-language", nextLanguage);
    document.documentElement.lang = nextLanguage === "cz" ? "cs" : "en";
  };

  useEffect(() => {
    document.documentElement.lang = language === "cz" ? "cs" : "en";
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: dictionary[language],
      projects: projects[language],
      experience: experience[language],
      education: education[language],
      skills: skills[language],
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
