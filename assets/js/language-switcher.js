/**
 * Language Switcher
 * Handles bilingual support (German/English) with localStorage persistence
 */

(function() {
  'use strict';

  // Translation data embedded from Jekyll
  const translations = {
    de: {
      header: {
        contact_me: "Kontaktiere mich",
        not_looking: "Ich suche derzeit keine neue Position"
      },
      sections: {
        experience: "Berufserfahrung",
        education: "Ausbildung", 
        projects: "Arbeitsbeschreibung und Projekte",
        skills: "Fähigkeiten",
        recognition: "Auszeichnungen",
        interests: "Interessen",
        links: "Weitere Links",
        social_links: "Social Links"
      },
      ui: {
        toggle_language: "Sprache wechseln",
        language_de: "Deutsch",
        language_en: "English"
      },
      footer: {
        impressum: "Impressum"
      }
    },
    en: {
      header: {
        contact_me: "Contact me",
        not_looking: "I'm not looking for work right now"
      },
      sections: {
        experience: "Experience",
        education: "Education",
        projects: "Job Description and Projects",
        skills: "Skills",
        recognition: "Recognition",
        interests: "Outside Interests",
        links: "Additional Links",
        social_links: "Social Links"
      },
      ui: {
        toggle_language: "Toggle Language",
        language_de: "Deutsch",
        language_en: "English"
      },
      footer: {
        impressum: "Legal Notice"
      }
    }
  };

  // Get current language from localStorage or default to German
  let currentLang = localStorage.getItem('language') || 'de';

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    // Create and inject language toggle button
    createLanguageToggle();
    
    // Apply saved language
    applyLanguage(currentLang);
    
    // Update toggle button text
    updateToggleButton();
  }

  function createLanguageToggle() {
    const header = document.querySelector('.page-header');
    if (!header) return;

    const toggleContainer = document.createElement('div');
    toggleContainer.className = 'language-toggle-container no-print';
    toggleContainer.innerHTML = `
      <button id="language-toggle" class="language-toggle" aria-label="Toggle Language">
        <svg class="language-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
        <span class="language-label" id="language-label">DE / EN</span>
      </button>
    `;

    // Insert after avatar or at the beginning of header
    const avatar = header.querySelector('.avatar');
    if (avatar && avatar.nextSibling) {
      header.insertBefore(toggleContainer, avatar.nextSibling);
    } else {
      header.insertBefore(toggleContainer, header.firstChild);
    }

    // Add event listener
    const toggleButton = document.getElementById('language-toggle');
    if (toggleButton) {
      toggleButton.addEventListener('click', toggleLanguage);
    }
  }

  function toggleLanguage() {
    currentLang = currentLang === 'de' ? 'en' : 'de';
    localStorage.setItem('language', currentLang);
    applyLanguage(currentLang);
    updateToggleButton();
  }

  function applyLanguage(lang) {
    const t = translations[lang];
    if (!t) return;

    // Update section headers
    updateSectionHeaders(t);
    
    // Update contact button
    updateContactButton(t);
    
    // Update footer
    updateFooter(t);
    
    // Update project descriptions and roles
    updateProjectContent(lang);
    
    // Update job summaries and positions
    updateExperienceContent(lang);
    
    // Update HTML lang attribute for accessibility
    document.documentElement.lang = lang;
  }

  function updateSectionHeaders(t) {
    const sections = {
      'Experience': t.sections.experience,
      'Education': t.sections.education,
      'Job description and Projects': t.sections.projects,
      'Skills': t.sections.skills,
      'Recognition': t.sections.recognition,
      'Outside Interests': t.sections.interests,
      'Additional Links': t.sections.links,
      'Social Links': t.sections.social_links
    };

    document.querySelectorAll('.section-header h2').forEach(header => {
      const originalText = header.getAttribute('data-original-text') || header.textContent.trim();
      
      // Store original text if not already stored
      if (!header.getAttribute('data-original-text')) {
        header.setAttribute('data-original-text', originalText);
      }

      // Apply translation
      if (sections[originalText]) {
        header.textContent = sections[originalText];
      }
    });
  }

  function updateContactButton(t) {
    const contactButton = document.querySelector('.contact-button');
    if (!contactButton) return;

    const originalText = contactButton.getAttribute('data-original-text') || contactButton.textContent.trim();
    
    if (!contactButton.getAttribute('data-original-text')) {
      contactButton.setAttribute('data-original-text', originalText);
    }

    if (contactButton.classList.contains('not-looking')) {
      contactButton.textContent = t.header.not_looking;
    } else {
      contactButton.textContent = t.header.contact_me;
    }
  }

  function updateFooter(t) {
    const footerLink = document.querySelector('.footer-line a');
    if (footerLink && footerLink.textContent.includes('Impressum')) {
      footerLink.textContent = t.footer.impressum;
    }
  }

  function updateToggleButton() {
    const label = document.getElementById('language-label');
    if (label) {
      const activeText = currentLang.toUpperCase();
      const inactiveText = currentLang === 'de' ? 'EN' : 'DE';
      label.innerHTML = `<strong>${activeText}</strong> / ${inactiveText}`;
    }
  }

  function updateProjectContent(lang) {
    // Update project descriptions
    // Note: Using innerHTML here because descriptions may contain HTML tags like <br /> and <hr>
    document.querySelectorAll('.translatable-description').forEach(element => {
      const text = element.getAttribute(`data-${lang}`);
      if (text) {
        element.innerHTML = text;
      }
    });
    
    // Update project roles
    document.querySelectorAll('.translatable-role').forEach(element => {
      const text = element.getAttribute(`data-${lang}`);
      if (text) {
        element.textContent = text;
      }
    });
  }

  function updateExperienceContent(lang) {
    // Update job summaries
    document.querySelectorAll('.translatable-summary').forEach(element => {
      const text = element.getAttribute(`data-${lang}`);
      if (text) {
        element.textContent = text;
      }
    });
    
    // Update job positions
    document.querySelectorAll('.translatable-position').forEach(element => {
      const text = element.getAttribute(`data-${lang}`);
      if (text) {
        element.textContent = text;
      }
    });
  }

  // Expose API for external use if needed
  window.LanguageSwitcher = {
    getCurrentLanguage: () => currentLang,
    setLanguage: (lang) => {
      if (lang === 'de' || lang === 'en') {
        currentLang = lang;
        localStorage.setItem('language', currentLang);
        applyLanguage(currentLang);
        updateToggleButton();
      }
    },
    getTranslations: () => translations
  };
})();
