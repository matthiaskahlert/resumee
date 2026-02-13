/**
 * Theme Switcher (Dark Mode)
 * Handles light/dark theme switching with localStorage persistence and system preference detection
 */

(function() {
  'use strict';

  // Theme configuration
  const THEMES = {
    LIGHT: 'light',
    DARK: 'dark',
    AUTO: 'auto'
  };

  // Get saved theme preference or default to auto
  let currentTheme = localStorage.getItem('theme') || THEMES.AUTO;
  let systemPrefersDark = false;

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    // Check system preference
    detectSystemPreference();
    
    // Create and inject theme toggle button
    createThemeToggle();
    
    // Apply saved or detected theme
    applyTheme(currentTheme);
    
    // Update toggle button
    updateToggleButton();
    
    // Listen for system theme changes
    watchSystemPreference();
  }

  function detectSystemPreference() {
    if (window.matchMedia) {
      systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
  }

  function watchSystemPreference() {
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      // Modern browsers
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', (e) => {
          systemPrefersDark = e.matches;
          if (currentTheme === THEMES.AUTO) {
            applyTheme(THEMES.AUTO);
          }
        });
      } 
      // Older browsers
      else if (mediaQuery.addListener) {
        mediaQuery.addListener((e) => {
          systemPrefersDark = e.matches;
          if (currentTheme === THEMES.AUTO) {
            applyTheme(THEMES.AUTO);
          }
        });
      }
    }
  }

  function createThemeToggle() {
    const header = document.querySelector('.page-header');
    if (!header) return;

    const toggleContainer = document.createElement('div');
    toggleContainer.className = 'theme-toggle-container no-print';
    toggleContainer.innerHTML = `
      <button id="theme-toggle" class="theme-toggle" aria-label="Toggle Theme">
        <svg class="theme-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </svg>
        <span class="theme-label" id="theme-label">Toggle Theme</span>
      </button>
    `;

    // Insert after language toggle if it exists, otherwise after avatar
    const languageToggle = header.querySelector('.language-toggle-container');
    const avatar = header.querySelector('.avatar');
    
    if (languageToggle && languageToggle.nextSibling) {
      header.insertBefore(toggleContainer, languageToggle.nextSibling);
    } else if (avatar && avatar.nextSibling) {
      header.insertBefore(toggleContainer, avatar.nextSibling);
    } else {
      header.insertBefore(toggleContainer, header.firstChild);
    }

    // Add event listener
    const toggleButton = document.getElementById('theme-toggle');
    if (toggleButton) {
      toggleButton.addEventListener('click', cycleTheme);
    }
  }

  function cycleTheme() {
    // Cycle through: light -> dark -> auto -> light
    if (currentTheme === THEMES.LIGHT) {
      currentTheme = THEMES.DARK;
    } else if (currentTheme === THEMES.DARK) {
      currentTheme = THEMES.AUTO;
    } else {
      currentTheme = THEMES.LIGHT;
    }
    
    localStorage.setItem('theme', currentTheme);
    applyTheme(currentTheme);
    updateToggleButton();
  }

  function applyTheme(theme) {
    let effectiveTheme = theme;
    
    // Resolve 'auto' to actual theme based on system preference
    if (theme === THEMES.AUTO) {
      effectiveTheme = systemPrefersDark ? THEMES.DARK : THEMES.LIGHT;
    }
    
    // Apply theme to document
    if (effectiveTheme === THEMES.DARK) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    
    // Update meta theme-color for mobile browsers
    updateMetaThemeColor(effectiveTheme);
  }

  function updateMetaThemeColor(theme) {
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    
    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta');
      metaThemeColor.name = 'theme-color';
      document.head.appendChild(metaThemeColor);
    }
    
    // Set appropriate color based on theme
    metaThemeColor.content = theme === THEMES.DARK ? '#1a1a1a' : '#ffffff';
  }

  function updateToggleButton() {
    const label = document.getElementById('theme-label');
    if (!label) return;
    
    const labels = {
      [THEMES.LIGHT]: '☀️ Light',
      [THEMES.DARK]: '🌙 Dark',
      [THEMES.AUTO]: '⚙️ Auto'
    };
    
    label.textContent = labels[currentTheme] || 'Toggle Theme';
    
    // Update icon as well
    updateThemeIcon();
  }

  // Update SVG icon based on theme
  function updateThemeIcon() {
    const icon = document.querySelector('.theme-icon');
    if (!icon) return;
    
    // Sun icon for light mode
    const sunPath = 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z';
    
    // Moon icon for dark mode
    const moonPath = 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z';
    
    const effectiveTheme = currentTheme === THEMES.AUTO 
      ? (systemPrefersDark ? THEMES.DARK : THEMES.LIGHT)
      : currentTheme;
    
    const path = icon.querySelector('path');
    if (path) {
      path.setAttribute('d', effectiveTheme === THEMES.DARK ? moonPath : sunPath);
    }
  }

  // Expose API for external use if needed
  window.ThemeSwitcher = {
    getCurrentTheme: () => currentTheme,
    setTheme: (theme) => {
      if (Object.values(THEMES).includes(theme)) {
        currentTheme = theme;
        localStorage.setItem('theme', currentTheme);
        applyTheme(currentTheme);
        updateToggleButton();
      }
    },
    getSystemPreference: () => systemPrefersDark ? THEMES.DARK : THEMES.LIGHT,
    themes: THEMES
  };

  // Optional: Prevent flash of unstyled content (FOUC)
  // This could be added inline in the HTML head for instant theme application
  window.ThemeSwitcher.preventFOUC = function() {
    const savedTheme = localStorage.getItem('theme') || 'auto';
    let effectiveTheme = savedTheme;
    
    if (savedTheme === 'auto') {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      effectiveTheme = prefersDark ? 'dark' : 'light';
    }
    
    if (effectiveTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  };
})();
