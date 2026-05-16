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
        { number: "6+", label: "projects across AI, web, and graphics" },
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
        "BSc Informatics at VSB-TUO, one completed semester at CTU FIT, three internships, and a bachelor thesis connecting voice input, retrieval, 3D interaction, and realtime UX. Planned continuation: Master's studies at VSB-TUO.",
      profile: "Profile",
      contact: "Contact",
    },
    about: {
      label: "Profile",
      intro:
        "Full-stack developer from Ostrava, currently finishing Informatics at VSB-TUO. This portfolio summarizes my technical projects, internships, education, and tools I have used in practice.",
      paragraphs: [
        "My Bachelor thesis is a voice-enabled 3D avatar backed by a full AI pipeline: Whisper speech recognition, retrieval augmented generation, language model responses, ElevenLabs voice output, and Three.js lipsync with emotion-driven animation.",
        "I have worked through three internships, contributed to an open-source Slack polling app, and built projects across C, C++, PHP, React, TypeScript, Python, OpenGL, and Firebase.",
      ],
      stats: [
        { value: "3", label: "internships" },
        { value: "6+", label: "portfolio projects" },
        { value: "B2", label: "English level" },
      ],
      profilePhoto: "Profile photo",
      location: "Ostrava, CZ",
      openToWork: "Part-time / remote",
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
      techStack: "Tech stack",
      github: "View on GitHub",
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
      home: "Domu",
      projects: "Projekty",
      profile: "Profil",
      contact: "Kontakt",
      status: "part-time / remote",
      menuOpen: "Otevrit navigaci",
      menuClose: "Zavrit navigaci",
      brandLabel: "Robin Tokarsky domu",
      brandSub: "portfolio",
      languageLabel: "Prepnout jazyk",
    },
    footer: {
      subtitle: "Full-stack developer v Ostrave, CZ",
      built: "Postaveno na Next.js",
    },
    hero: {
      eyebrow: "Technicke portfolio",
      title: "Full-stack projekty, AI systemy a prakticka softwarova prace.",
      copy:
        "Portfolio a CV prehled mych projektu, stazi, vzdelani a technickeho stacku. Pracuji hlavne s Reactem, TypeScriptem, Pythonem, FastAPI, Three.js, databazemi a AI integracemi.",
      viewProjects: "Zobrazit projekty",
      contact: "Ozvat se",
      highlightsLabel: "Vybrane body portfolia",
      metrics: [
        { number: "6+", label: "projektu napric AI, webem a grafikou" },
        { number: "3", label: "staze v realnych produktovych tymech" },
        { number: "BSc", label: "informatika, VSB-TUO" },
      ],
      system: "portfolio system",
      thesisCopy:
        "Rec, vyhledavani kontextu, vystup jazykoveho modelu, generovany hlas, lipsync a animace emoci v jedne full-stack bakalarske praci.",
      stackTitle: "Stack",
      signalTitle: "Signal",
      focusTitle: "Otevreny spolupraci",
      focusCopy: "Part-time prace, remote staze a mensi technicke spoluprace.",
      codeLines: ["React / TypeScript", "Python / FastAPI", "AI integrace"],
    },
    home: {
      featuredLabel: "Vybrany projekt",
      featuredTitle: "Jeden projekt jako cely produktovy system.",
      featuredCopy:
        "Bakalarska prace, ktera kombinuje backend API, 3D frontend, zpracovani reci, retrieval, vystup jazykoveho modelu, generovany hlas a realtime lipsync.",
      viewCaseStudy: "Zobrazit case study",
      recentLabel: "Novejsi projekty",
      recentTitle: "Postaveno v tymech, skole i ve volnem case.",
      allProjects: "Vsechny projekty",
      profileLabel: "Profil",
      bioTitle: "Technicky profil zamereny na full-stack vyvoj a AI integrace.",
      bioCopy:
        "BSc Informatika na VSB-TUO, jeden dokonceny semestr na CVUT FIT, tri staze a bakalarska prace propojujici hlasovy vstup, retrieval, 3D interakci a realtime UX. Planovane pokracovani: magisterske studium na VSB-TUO.",
      profile: "Profil",
      contact: "Kontakt",
    },
    about: {
      label: "Profil",
      intro:
        "Full-stack developer z Ostravy, aktualne dokoncujici Informatiku na VSB-TUO. Toto portfolio shrnuje moje technicke projekty, staze, vzdelani a nastroje, se kterymi mam praktickou zkusenost.",
      paragraphs: [
        "Moje bakalarska prace je hlasem ovladany 3D avatar postaveny na cele AI pipeline: Whisper rozpoznavani reci, retrieval augmented generation, odpovedi jazykoveho modelu, ElevenLabs hlasovy vystup a Three.js lipsync s animaci podle emoci.",
        "Prosel jsem tremi stazemi, prispel do open-source Slack polling aplikace a postavil projekty v C, C++, PHP, Reactu, TypeScriptu, Pythonu, OpenGL a Firebase.",
      ],
      stats: [
        { value: "3", label: "staze" },
        { value: "6+", label: "portfolio projektu" },
        { value: "B2", label: "uroven anglictiny" },
      ],
      profilePhoto: "Profilova fotka",
      location: "Ostrava, CZ",
      openToWork: "Part-time / remote",
      skillsLabel: "Dovednosti",
      skillsTitle: "Stack, se kterym umim opravdu dodat vysledek.",
      experienceLabel: "Zkusenosti",
      experienceTitle: "Staze a produktova prace.",
      educationLabel: "Vzdelani",
      educationTitle: "Formalni vzdelani a planovane magisterske studium.",
    },
    projectsPage: {
      label: "Projekty",
      title: "Prace prehledne zpracovana do case studies.",
      copy:
        "Bakalarska prace, staze, skolni projekty i starsi osobni veci. Zamerne ukazuju sirku: AI systemy, tymove produkty, grafiku, backend API a klasicke webove zaklady.",
    },
    projectDetail: {
      allProjects: "Vsechny projekty",
      overview: "Prehled",
      highlights: "Highlights",
      techStack: "Tech stack",
      github: "Zobrazit na GitHubu",
    },
    contact: {
      label: "Kontakt",
      title: "Kontakt pro part-time, remote staze a technickou spolupraci.",
      copy:
        "Jsem otevreny hlavne part-time praci, remote stazim a mensim technickym spolupracim. Poslete kontext, roli, projekt nebo repo a ozvu se s praktickym dalsim krokem.",
      channels: [
        { label: "Email", note: "Nejrychlejsi odpoved" },
        { label: "GitHub", note: "Kod a projekty" },
        { label: "LinkedIn", note: "Profesni profil" },
      ],
      availableTitle: "Aktualne dostupny",
      availableCopy: "Otevreny hlavne part-time spolupraci, remote stazim a mensim kontraktum.",
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
