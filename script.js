const i18nJson = `

{
  "de": {
    "nav.about": "Über mich",
    "nav.skills": "Skills",
    "nav.services": "Services",
    "nav.projects": "Projekte",
    "nav.sideprojects": "Side Projects",
    "nav.experience": "Erfahrung",
    "nav.contact": "Kontakt",
    "hero.eyebrow": "Portfolio",
    "hero.text": "Ich sorge dafür, dass Ihre Software stabil läuft – noch bevor Ihre Nutzer Probleme bemerken. Mit über 10 Jahren Erfahrung in QA, Live-Systemen und Release Management.",
    "hero.cta": "Projekte ansehen",
    "about.title": "Über mich",
    "about.text": "Ich bin QA-Profi mit Fokus auf Release-Stabilität, Exploratory Testing und enger Zusammenarbeit mit Entwicklungsteams.",
    "about.text2": "Mein Schwerpunkt liegt auf risiko-basierten Tests, API-Validierung, SQL-Checks und dem Aufbau nachhaltiger Qualitätsprozesse.",
    "about.text3": "Ich unterstütze Teams dabei, Qualität frühzeitig in Produkte zu integrieren.",
    "skills.title": "Skills",
    "services.title": "Services",
    "services.s1.title": "QA Strategy & Leadership",
    "services.s1.text": "Ich definiere QA-Strategien, Qualitätsziele und klare Quality Gates für Teams und Releases. Von Testplanung bis zur Go/No-Go-Entscheidungsgrundlage begleite ich den gesamten Delivery-Zyklus.",
    "services.s2.title": "Release Readiness & Live Ops QA",
    "services.s2.text": "Ich sichere Releases in produktiven Live-Umgebungen durch risiko-basierte Regression, priorisierte Testabdeckung und schnelle Issue-Analyse. Ziel sind stabile Launches, weniger Hotfix-Druck und verlässliche Release-Entscheidungen.",
    "services.s3.title": "Technical QA (API, SQL, Exploratory)",
    "services.s3.text": "Ich kombiniere Exploratory Testing mit API-Validierung und SQL-Checks, um kritische Risiken früh sichtbar zu machen. So erkennen Teams Fehler in komplexen Feature-Flows, bevor sie im Live-Betrieb eskalieren.",
    "projects.title": "Projekte",
    "projects.p1.title": "Seafight",
    "projects.p1.text": "Qualitätssicherung für ein Live-MMO mit 48M+ registrierten Nutzern. Fokus auf Exploratory Testing, Regression und schnelle Analyse von Live-Issues. Von Werkstudent (2010) über Software Tester und Lead QA bis Studio QA Director (2023).",
    "projects.p1.value": "Impact: 48M+ Nutzer, 13 Jahre Live-Betrieb. Werkstudent → Lead QA → Studio QA Director. Unity Release, Shop-Redesign, Steam Launch, unzählige Features & Content Expansions.",
    "projects.p1.live": "https://www.seafight.com/",
    "projects.p2.title": "DarkOrbit",
    "projects.p2.text": "Technische Validierung komplexer Features und Events in einer produktiven Live-Umgebung. Enge Zusammenarbeit mit Entwicklung zur Sicherstellung stabiler Releases.",
    "projects.p2.live": "https://www.darkorbit.com/",
    "projects.p3.title": "Farmerama",
    "projects.p3.text": "Absicherung von Content-Updates und Events mit Fokus auf Stabilität, Performance und User Experience.",
    "projects.p3.live": "https://www.farmerama.com/",
    "projects.p4.title": "Supremacy 1914 – Heroes Feature",
    "projects.p4.text": "QA Leadership und Testplanung für das GRÖSSTE UPDATE IN 15 JAHREN der Spielgeschichte. Koordination von Embedded- und externen Testteams, Release-Entscheidungen und Device-/Plattform-übergreifende Qualitätssicherung.",
    "projects.p4.live": "https://www.supremacy1914.com/",
    "projects.p4.value": "Impact: Heroes Feature Launch – größtes Update in 15 Jahren. Testplanung, Release-Entscheidungen, externe QA-Teams koordiniert, Multi-Platform Quality Gate.",
    "projects.p3.value": "Impact: Alpen-Expansion (umfangreiche Content-Erweiterung) zum Launch gebracht. Tester eingestellt, ongeboardet und in bestehende Prozesse integriert.",
    "projects.p2.value": "Impact: Astral Ascension Feature (45-Rift-Wellen, komplexes Progression-System) validiert und zum Launch gebracht – kritisch nach Offshore-Entwicklungs-Wechsel.",
    "projects.p5.title": "Drakensang Online – Dark Legacy",
    "projects.p5.text": "Testleitung und QA für Dark Legacy – das GRÖSSTE UPDATE IN DER DSO-GESCHICHTE mit Level-100-System, Skill-Rework, Equipment-Tier-Überholung, 18+ neuen Maps und umfangreicher Content-Expansion. Steam Launch und komplexe Feature-Validierung.",
    "projects.p5.live": "https://www.drakensang.com/",
    "projects.p5.value": "Impact: Dark Legacy Launch – größtes DSO Update ever. Testleitung, komplexe Skill/Talent/Equipment-System-Validierung, 18+ neue Maps getestet, Offshore-Koordination.",
    "case.drakensang.title": "Case Study: Drakensang Online Dark Legacy",
    "case.drakensang.intro": "Das größte Update in der DSO-Geschichte – massive System-Overhauls und neue Content-Dimension.",
    "case.drakensang.problem.title": "Ausgangslage",
    "case.drakensang.problem.text": "Dark Legacy war die größte Expansion überhaupt: Level bis 100, komplettes Skill-System-Rework, Equipment-Tier-System-Umbruch, 18+ neue Maps mit Labyrinthen und Secrets, neue Gems/Runes/Jewels-Sockets-Architektur.",
    "case.drakensang.approach.title": "Vorgehen",
    "case.drakensang.approach.text": "Intensive Feature-by-Feature Validierung neuer Systems. Skill/Talent-Balance Testing, Equipment-Craft-Flows, neue Map-Progressionen, komplexe Boss-Shield-Mechaniken. Close Offshore-Koordination für kontinuierliches Feedback.",
    "case.drakensang.impact.title": "Ergebnis",
    "case.drakensang.impact.text": "Erfolgreiches Launch mit hochkomplexem Feature-Set. Spieler-Zufriedenheit trotz massiver System-Changes. Bewährte Offshore-QA-Koordination als kritischer Erfolgsfaktor.",
    "case.drakensang.cta": "Mehr Details auf Anfrage",
    "case.supremacy.title": "Case Study: Supremacy 1914 Heroes Feature",
    "case.supremacy.intro": "Das größte Update in 15 Jahren – strategische Transformation durch ein einziges Feature.",
    "case.supremacy.problem.title": "Ausgangslage",
    "case.supremacy.problem.text": "Supremacy 1914 wünschte sich seit Jahren ein 'Heroes'-System. Das Feature war hochkomplex: 5 unterschiedliche Heroes mit unique Skills, 1-Hero-per-Army-Beschränkung, tagesabhängige Verfügbarkeit, Recovery-Timer, komplexe Balance-Anforderungen zwischen Fraktionen.",
    "case.supremacy.approach.title": "Vorgehen",
    "case.supremacy.approach.text": "Umfangreiche Testplanung für strategische und mechanische Balance. Koordination embedded (Bytro) und externer Tester. Multivariate Szenarien (verschiedene Hero-Kombinationen, Armeen-Setups). Device- und Plattform-übergreifend (Web, Mobile). Iterative Balance-Anpassungen basierend auf Feedback.",
    "case.supremacy.impact.title": "Ergebnis",
    "case.supremacy.impact.text": "Erfolgreiches Launch des größten Updates in 15 Jahren. Positive Community-Resonanz. Heroes als permanente Game-Mechanic etabliert. Bewährter External QA Coordination Prozess für zukünftige Major Features.",
    "case.supremacy.cta": "Mehr Details auf Anfrage",
    "sideprojects.title": "Side Projects",
    "sideprojects.text": "Persönliche Projekte mit Fokus auf Webentwicklung, Testing und produktnahe Problemlösung.",
    "sideprojects.github": "GitHub Repo",
    "sideprojects.live": "Live ansehen",
    "sideprojects.caseStudy": "Case Study",
    "sideprojects.empty": "Weitere Side Projects folgen bald.",
    "projects.live": "Live spielen",
    "case.seafight.title": "Case Study: Seafight",
    "case.seafight.intro": "13 Jahre Live-Betrieb mit 48M+ Nutzern – vom Werkstudenten zum QA Director.",
    "case.seafight.problem.title": "Ausgangslage",
    "case.seafight.problem.text": "Live-Betrieb über 13 Jahre mit hohem Qualitätsanspruch, häufiger Feature-Lieferung (enge Taktung), Migration von Flash zu Unity, Shop-Überholung, Steam-Launch, sowie unzählige Content Expansions unter Druck.",
    "case.seafight.approach.title": "Vorgehen",
    "case.seafight.approach.text": "Kombination aus Exploratory Testing, strukturierter Regression, klaren QA-Workflows, Skalierung von Teamprozessen (Outsourcing, externe Tester). Proaktive Kommunikation mit Entwicklung zur Sicherung von Release-Entscheidungen. Code-Mitgestaltung im Frontend und News-Seiten-Systems.",
    "case.seafight.impact.title": "Ergebnis",
    "case.seafight.impact.text": "Höhere Release-Sicherheit im Live-Betrieb über 13 Jahre hinweg. Erfolgreiches Management von kritischen Migrationen (Flash→Unity, Browser→Steam). Aufbau und Leitung eines QA-Teams von Grund auf. Schnellere Analyse von Produktionsissues mit etabliertem Eskalations-Framework.",
    "case.seafight.cta": "Mehr Details auf Anfrage",
    "experience.title": "Erfahrung",
    "exp.1.title": "QA Lead – Bytro Labs",
    "exp.1.meta": "2024 – 2025",
    "exp.1.text": "Verantwortung für Release-Qualität mehrerer Live-Strategiespiele. Einführung strukturierter QA-Prozesse und enge Zusammenarbeit mit Entwicklungsteams zur nachhaltigen Verbesserung der Stabilität.",
    "exp.1.stack": "QA Leadership · Test Strategy · Live Ops · Release Management",
    "exp.2.title": "IT Test Manager – Andreas Paulsen GmbH",
    "exp.2.meta": "2023",
    "exp.2.text": "Planung und Steuerung von Testaktivitäten für geschäftskritische Systeme. Fokus auf End-to-End Validierung und stabile Releases in komplexen Systemlandschaften.",
    "exp.2.stack": "Test Management · E2E Testing · Jira · Confluence · Stakeholder Communication",
    "exp.3.title": "QA Director – Bigpoint",
    "exp.3.meta": "2021 – 2023",
    "exp.3.text": "Aufbau und Steuerung von QA-Strategien für mehrere Live-Games. Definition von Qualitätsmetriken und enge Abstimmung mit Produktion und Plattform-Teams.",
    "exp.3.stack": "QA Strategy · KPIs · Cross-Team Leadership · Live Games",
    "exp.4.title": "Lead QA Tester – Bigpoint",
    "exp.4.meta": "2015 – 2021",
    "exp.4.text": "Hands-on Testing für Live-Features mit Fokus auf Exploratory Testing, Performance und technische Validierung von Backend- und API-Systemen.",
    "exp.4.stack": "Exploratory Testing · SQL · API Testing · Git",
    "contact.title": "Kontakt",
    "contact.text": "Lass uns über Qualität, Testing und stabile Releases sprechen.",
    "contact.cta": "Kontakt aufnehmen",
    "legal.home": "Zur Startseite",
    "footer.home": "Startseite",
    "footer.impressum": "Impressum",
    "footer.datenschutz": "Datenschutz",
    "footer.emailLabel": "E-Mail"
  },
  "en": {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.sideprojects": "Side Projects",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "hero.eyebrow": "Portfolio",
    "hero.text": "I make sure your software works — before your users notice issues. With 10+ years of experience in QA, live systems and release management.",
    "hero.cta": "View projects",
    "about.title": "About",
    "about.text": "I am a QA professional focused on release stability, exploratory testing, and close collaboration with development teams.",
    "about.text2": "My focus areas are risk-based testing, API validation, SQL checks, and building durable quality processes.",
    "about.text3": "I help teams integrate quality early into their products.",
    "skills.title": "Skills",
    "services.title": "Services",
    "services.s1.title": "QA Strategy & Leadership",
    "services.s1.text": "I define QA strategy, quality goals, and clear quality gates for teams and releases. From test planning to go/no-go decision support, I cover the full delivery lifecycle end to end.",
    "services.s2.title": "Release Readiness & Live Ops QA",
    "services.s2.text": "I secure releases in live production environments through risk-based regression, prioritized coverage, and fast issue analysis. The focus is stable launches, less hotfix pressure, and reliable release decisions.",
    "services.s3.title": "Technical QA (API, SQL, Exploratory)",
    "services.s3.text": "I combine exploratory testing with API validation and SQL checks to surface critical risks early. This helps teams catch defects in complex feature flows before they escalate in live operations.",
    "projects.title": "Projects",
    "projects.p1.title": "Seafight",
    "projects.p1.text": "Quality assurance for a live MMO with 48M+ registered users. Focus on exploratory testing, regression and fast live issue analysis. Progressed from student worker (2010) through Software Tester and Lead QA to Studio QA Director (2023).",
    "projects.p1.value": "Impact: 48M+ users, 13 years of live operations. Student → Lead QA → Studio QA Director. Flash-to-Unity migration, shop redesign, Steam launch, countless features & content expansions.",
    "projects.p1.live": "https://www.seafight.com/",
    "projects.p2.title": "DarkOrbit",
    "projects.p2.text": "Technical validation of complex features and events in a live production environment. Close collaboration with developers to ensure stable releases.",
    "projects.p2.live": "https://www.darkorbit.com/",
    "projects.p3.title": "Farmerama",
    "projects.p3.text": "Ensured quality of content updates and live events with focus on stability, performance and user experience.",
    "projects.p3.live": "https://www.farmerama.com/",
    "projects.p4.title": "Supremacy 1914 – Heroes Feature",
    "projects.p4.text": "QA leadership and test planning for the BIGGEST UPDATE IN 15 YEARS of the game's history. Coordinated embedded and external QA teams, managed release decisions and ensured multi-platform quality.",
    "projects.p4.live": "https://www.supremacy1914.com/",
    "projects.p4.value": "Impact: Heroes Feature Launch – biggest update in 15 years. Test planning, release decision-making, external QA team coordination, multi-platform quality gate.",
    "projects.p3.value": "Impact: Alps Expansion (comprehensive content update) shipped successfully. Recruited, trained and onboarded testers; integrated into existing QA workflows.",
    "projects.p2.value": "Impact: Astral Ascension feature (45-rift waves, complex progression system) validated and shipped – critical after shift to offshore development.",
    "projects.p5.title": "Drakensang Online – Dark Legacy",
    "projects.p5.text": "QA leadership for Dark Legacy – the BIGGEST UPDATE IN DSO HISTORY with level 100 system, skill rework, equipment tier overhaul, 18+ new maps and massive content expansion. Steam launch and complex feature validation.",
    "projects.p5.live": "https://www.drakensang.com/",
    "projects.p5.value": "Impact: Dark Legacy Launch – biggest DSO update ever. QA leadership, complex skill/talent/equipment system validation, 18+ new maps tested, offshore coordination.",
    "case.drakensang.title": "Case Study: Drakensang Online Dark Legacy",
    "case.drakensang.intro": "The largest update in DSO history – massive system overhauls and new content dimension.",
    "case.drakensang.problem.title": "Context",
    "case.drakensang.problem.text": "Dark Legacy was the biggest expansion ever: levels up to 100, complete skill system rework, equipment tier system overhaul, 18+ new maps with labyrinths and secrets, new gems/runes/jewels socket architecture.",
    "case.drakensang.approach.title": "Approach",
    "case.drakensang.approach.text": "Intensive feature-by-feature validation of new systems. Skill/talent balance testing, equipment crafting flows, new map progressions, complex boss shield mechanics. Close offshore coordination for continuous feedback.",
    "case.drakensang.impact.title": "Outcome",
    "case.drakensang.impact.text": "Successful launch with highly complex feature set. Player satisfaction despite massive system changes. Proven offshore QA coordination as critical success factor.",
    "case.supremacy.title": "Case Study: Supremacy 1914 Heroes Feature",
    "case.supremacy.intro": "The biggest update in 15 years – strategic transformation through a single feature.",
    "case.supremacy.problem.title": "Context",
    "case.supremacy.problem.text": "Supremacy 1914 had been requesting a 'Heroes' system for years. The feature was highly complex: 5 unique heroes with distinct skills, 1-hero-per-army restriction, day-dependent availability, recovery timers, complex balance requirements across factions.",
    "case.supremacy.approach.title": "Approach",
    "case.supremacy.approach.text": "Comprehensive test planning for strategic and mechanical balance. Coordinated embedded (Bytro) and external QA testers. Multivariate scenarios (different hero combinations, army setups). Cross-device and cross-platform (web, mobile). Iterative balance adjustments based on feedback.",
    "case.supremacy.impact.title": "Outcome",
    "case.supremacy.impact.text": "Successful launch of the biggest update in 15 years. Positive community response. Heroes established as permanent game mechanic. Proven external QA coordination process for future major features.",
    "case.supremacy.cta": "More details on request",
    "sideprojects.title": "Side Projects",
    "sideprojects.text": "Personal projects focused on web development, testing and practical product problem-solving.",
    "sideprojects.github": "GitHub Repo",
    "sideprojects.live": "View Live",
    "sideprojects.caseStudy": "Case Study",
    "sideprojects.empty": "More side projects will be added soon.",
    "projects.live": "Play Live",
    "case.seafight.title": "Case Study: Seafight",
    "case.seafight.intro": "13 years of live operations with 48M+ users – from intern to director.",
    "case.seafight.problem.title": "Context",
    "case.seafight.problem.text": "Live operations over 13 years with strict quality demands, frequent feature delivery (tight cadence), Flash-to-Unity migration, shop redesign, Steam launch, and countless content expansions under pressure.",
    "case.seafight.approach.title": "Approach",
    "case.seafight.approach.text": "Combination of exploratory testing, structured regression, clear QA workflows, scaled team processes (outsourcing, external testers). Proactive communication with development to secure release decisions. Code contribution to frontend and news systems.",
    "case.seafight.impact.title": "Outcome",
    "case.seafight.impact.text": "Higher release confidence in live operations over 13 years. Successful management of critical migrations (Flash→Unity, browser→Steam). Built and led a QA team from scratch. Faster production-issue analysis with established escalation framework.",
    "case.seafight.cta": "More details on request",
    "experience.title": "Experience",
    "exp.1.title": "QA Lead – Bytro Labs",
    "exp.1.meta": "2024 – 2025",
    "exp.1.text": "Responsible for release quality of multiple live strategy games. Introduced structured QA processes and closely collaborated with development teams to sustainably improve stability.",
    "exp.1.stack": "QA Leadership · Test Strategy · Live Ops · Release Management",
    "exp.2.title": "IT Test Manager – Andreas Paulsen GmbH",
    "exp.2.meta": "2023",
    "exp.2.text": "Planned and managed test activities for business-critical systems. Focused on end-to-end validation and stable releases in complex system landscapes.",
    "exp.2.stack": "Test Management · E2E Testing · Jira · Confluence · Stakeholder Communication",
    "exp.3.title": "QA Director – Bigpoint",
    "exp.3.meta": "2021 – 2023",
    "exp.3.text": "Established and managed QA strategies for multiple live games. Defined quality metrics and closely coordinated with production and platform teams.",
    "exp.3.stack": "QA Strategy · KPIs · Cross-Team Leadership · Live Games",
    "exp.4.title": "Lead QA Tester – Bigpoint",
    "exp.4.meta": "2015 – 2021",
    "exp.4.text": "Hands-on testing for live features with a focus on exploratory testing, performance, and technical validation of backend and API systems.",
    "exp.4.stack": "Exploratory Testing · SQL · API Testing · Git",
    "contact.title": "Contact",
    "contact.text": "Let's talk about quality, testing and stable releases.",
    "contact.cta": "Get in touch",
    "legal.home": "Back to Home",
    "footer.home": "Home",
    "footer.impressum": "Legal Notice",
    "footer.datenschutz": "Privacy",
    "footer.emailLabel": "Email"
  }
}
`;

const translations = JSON.parse(i18nJson);
const DEFAULT_LANG = 'de';
const SUPPORTED_LANGS = ['de', 'en'];

let nameEl;
let roleEl;
let themeToggle;
let langToggle;
let navToggle;
let navMenu;

const rolesByLang = {
  de: [
    'Senior QA Engineer',
    'QA Lead für Live-Systeme',
    'Testmanager für stabile Releases'
  ],
  en: [
    'Senior QA Engineer',
    'QA Lead for Live Systems',
    'Test Manager for Reliable Releases'
  ]
};

// Add new items here to expand side projects without touching HTML.
const sideProjectsByLang = {
  de: [
    {
      title: 'Weather App',
      text: 'Responsive Wetter-App mit zweistufiger Open-Meteo-Integration (Geocoding + Forecast API), asynchronen Requests via async/await, Enter-Shortcut und robuster Fehlerbehandlung bei ungültigen Städteingaben.',
      stack: 'HTML5 · CSS3 · JavaScript ES6+ · Fetch API · Open-Meteo API',
      image: 'images/side-project-weather-app.png',
      imageAlt: 'Screenshot der Weather App',
      githubUrl: 'https://github.com/matthiaskahlert/weather_app',
      liveUrl: 'https://matthiaskahlert.github.io/weather_app/'
    },
    {
      title: 'Task Tracker',
      text: 'Schlanker Task Tracker mit Aufgabenbeschreibung, Fälligkeitsdatum und Prioritätslogik (hoch, mittel, niedrig), inkl. Formularvalidierung, automatischer Sortierung und POST-Integration gegen JSONPlaceholder als Mock-Backend.',
      stack: 'HTML5 · CSS3 · JavaScript ES6+ · Fetch API · JSONPlaceholder API',
      image: 'images/side-project-task-tracker.png',
      imageAlt: 'Screenshot des Task Trackers',
      githubUrl: 'https://github.com/matthiaskahlert/tasktracker',
      liveUrl: 'https://matthiaskahlert.github.io/tasktracker/'
    }
  ],
  en: [
    {
      title: 'Weather App',
      text: 'Responsive weather app with a two-step Open-Meteo flow (Geocoding + Forecast API), async/await-based requests, Enter key support and robust error handling for invalid city input.',
      stack: 'HTML5 · CSS3 · JavaScript ES6+ · Fetch API · Open-Meteo API',
      image: 'images/side-project-weather-app.png',
      imageAlt: 'Screenshot of the Weather App',
      githubUrl: 'https://github.com/matthiaskahlert/weather_app',
      liveUrl: 'https://matthiaskahlert.github.io/weather_app/'
    },
    {
      title: 'Task Tracker',
      text: 'Lean task manager with description, due date and priority model (high, medium, low), including form validation, automatic priority sorting and a JSONPlaceholder POST integration as mock backend.',
      stack: 'HTML5 · CSS3 · JavaScript ES6+ · Fetch API · JSONPlaceholder API',
      image: 'images/side-project-task-tracker.png',
      imageAlt: 'Screenshot of the Task Tracker',
      githubUrl: 'https://github.com/matthiaskahlert/tasktracker',
      liveUrl: 'https://matthiaskahlert.github.io/tasktracker/'
    }
  ]
};

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const storedLang = localStorage.getItem('lang');
let currentLang = SUPPORTED_LANGS.includes(storedLang) ? storedLang : DEFAULT_LANG;
let currentRoles = rolesByLang[currentLang];
let typewriterTimeoutId;

function typeRole() {
  if (!roleEl || !currentRoles?.length) {
    return;
  }

  const role = currentRoles[roleIndex];
  if (isDeleting) {
    charIndex -= 1;
  } else {
    charIndex += 1;
  }
  const next = role.slice(0, charIndex);
  roleEl.textContent = next;

  if (!isDeleting && charIndex === role.length) {
    isDeleting = true;
    typewriterTimeoutId = setTimeout(typeRole, 1200);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % currentRoles.length;
  }

  typewriterTimeoutId = setTimeout(typeRole, isDeleting ? 55 : 95);
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  if (themeToggle) {
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
}

function t(key) {
  return translations[currentLang]?.[key] || key;
}

function applyLanguage() {
  currentRoles = rolesByLang[currentLang] || rolesByLang[DEFAULT_LANG];
  document.documentElement.lang = currentLang;
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  renderSideProjects();
  document.querySelectorAll('[data-lang-block]').forEach((node) => {
    node.hidden = node.getAttribute('data-lang-block') !== currentLang;
  });
  localStorage.setItem('lang', currentLang);
  if (langToggle) {
    langToggle.textContent = currentLang === 'de' ? 'EN' : 'DE';
    langToggle.setAttribute(
      'aria-label',
      currentLang === 'de' ? 'Zu Englisch wechseln' : 'Switch to German'
    );
  }
}

function renderSideProjects() {
  const listEl = document.getElementById('sideProjectsList');
  if (!listEl) {
    return;
  }

  const projects = sideProjectsByLang[currentLang] || sideProjectsByLang[DEFAULT_LANG] || [];
  listEl.innerHTML = '';

  if (!projects.length) {
    const empty = document.createElement('p');
    empty.textContent = t('sideprojects.empty');
    listEl.appendChild(empty);
    return;
  }

  projects.forEach((project) => {
    const card = document.createElement('article');
    card.className = 'project-card side-project-card';
    card.setAttribute('role', 'listitem');

    const image = document.createElement('img');
    image.src = project.image;
    image.alt = project.imageAlt;
    image.loading = 'lazy';
    image.addEventListener('error', () => {
      image.src = 'images/side-project-placeholder.svg';
    });

    const body = document.createElement('div');
    body.className = 'project-body';

    const title = document.createElement('h3');
    title.textContent = project.title;

    const text = document.createElement('p');
    text.textContent = project.text;

    const stack = document.createElement('p');
    stack.className = 'stack';
    stack.textContent = project.stack;

    const linkRow = document.createElement('div');
    linkRow.className = 'project-links';

    const github = document.createElement('a');
    github.className = 'project-link';
    github.href = project.githubUrl;
    github.target = '_blank';
    github.rel = 'noopener noreferrer';
    github.textContent = t('sideprojects.github');

    const live = document.createElement('a');
    live.className = 'project-link';
    live.href = project.liveUrl;
    live.target = '_blank';
    live.rel = 'noopener noreferrer';
    live.textContent = t('sideprojects.live');

    linkRow.append(github, live);

    if (project.caseStudyUrl) {
      const caseStudy = document.createElement('a');
      caseStudy.className = 'project-link';
      caseStudy.href = project.caseStudyUrl;
      caseStudy.target = '_blank';
      caseStudy.rel = 'noopener noreferrer';
      caseStudy.textContent = t('sideprojects.caseStudy');
      linkRow.append(caseStudy);
    }

    body.append(title, text, stack, linkRow);
    card.append(image, body);
    listEl.append(card);
  });
}

function resetTypewriter() {
  clearTimeout(typewriterTimeoutId);
  roleIndex = 0;
  charIndex = 0;
  isDeleting = false;
  if (roleEl) {
    roleEl.textContent = '';
  }
}

function startTypewriter() {
  resetTypewriter();
  typeRole();
}

function setupReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.reveal').forEach((section) => observer.observe(section));
}

function setupMouseReactiveBg() {
  window.addEventListener('mousemove', (event) => {
    const x = (event.clientX / window.innerWidth) * 100;
    const y = (event.clientY / window.innerHeight) * 100;
    document.documentElement.style.setProperty('--mouse-x', `${x}%`);
    document.documentElement.style.setProperty('--mouse-y', `${y}%`);
  });
}

function setLetterDelays() {
  const heroNameEl = document.querySelector('.hero-name');
  if (!heroNameEl) return;

  const text = heroNameEl.textContent;
  heroNameEl.innerHTML = '';
  text.split('').forEach((char) => {
    const span = document.createElement('span');
    span.innerHTML = char === ' ' ? '&nbsp;' : char;
    heroNameEl.appendChild(span);
  });

  heroNameEl.querySelectorAll('span').forEach((span, idx) => {
    span.style.animationDelay = `${idx * 0.04}s`;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  nameEl = document.getElementById('heroName');
  roleEl = document.getElementById('roleTypewriter');
  themeToggle = document.getElementById('themeToggle');
  langToggle = document.getElementById('langToggle');
  navToggle = document.querySelector('.nav-toggle');
  navMenu = document.getElementById('nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const open = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
  }

  themeToggle?.addEventListener('click', () => {
    const nextTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
  });

  langToggle?.addEventListener('click', () => {
    currentLang = currentLang === 'de' ? 'en' : 'de';
    applyLanguage();
    if (roleEl) {
      startTypewriter();
    }
  });

  const preferredTheme = localStorage.getItem('theme') || 'light';
  applyTheme(preferredTheme);
  applyLanguage();
  setupReveal();
  setupMouseReactiveBg();
  setLetterDelays();
  if (roleEl) {
    startTypewriter();
  }
});

const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
