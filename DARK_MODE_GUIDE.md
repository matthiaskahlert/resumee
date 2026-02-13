# Dark Mode - Dokumentation

## Übersicht

Die Website unterstützt einen vollständigen Dark Mode mit folgenden Features:
- Automatische Erkennung der System-Präferenz (prefers-color-scheme)
- Manueller Toggle zwischen Hell, Dunkel und Auto-Modus
- Persistente Speicherung in localStorage
- Smooth Transitions zwischen Themes
- FOUC-Prevention (Flash of Unstyled Content)
- Vollständige Theme-Unterstützung für alle UI-Elemente

## Architektur

### Komponenten

```
├── _sass/
│   ├── _variables.scss      # CSS Custom Properties für Themes
│   ├── _base.scss           # Basis-Styles mit Theme-Support
│   └── _resume.scss         # Theme-fähige Resume-Styles
├── assets/js/
│   └── theme-switcher.js    # JavaScript für Theme-Wechsel
└── _includes/
    └── head.html            # Inline-Script für FOUC-Prevention
```

### CSS Custom Properties

Die Themes basieren auf CSS Custom Properties (CSS Variables):

```scss
:root {
  // Light theme (default)
  --bg-color: #ffffff;
  --text-color: #333333;
  --border-color: #c7c7c7;
  // ... weitere Variablen
}

[data-theme="dark"] {
  // Dark theme
  --bg-color: #1a1a1a;
  --text-color: #e4e4e4;
  --border-color: #404040;
  // ... weitere Variablen
}
```

## Verwendung

### Theme manuell wechseln

Per JavaScript API:
```javascript
// Theme auf Dark setzen
window.ThemeSwitcher.setTheme('dark');

// Theme auf Light setzen
window.ThemeSwitcher.setTheme('light');

// Theme auf Auto setzen (folgt System-Präferenz)
window.ThemeSwitcher.setTheme('auto');

// Aktuelles Theme abfragen
const currentTheme = window.ThemeSwitcher.getCurrentTheme();
console.log(currentTheme); // 'light', 'dark', oder 'auto'

// System-Präferenz abfragen
const systemPref = window.ThemeSwitcher.getSystemPreference();
console.log(systemPref); // 'light' oder 'dark'
```

Per Browser Console (für Testing):
```javascript
localStorage.setItem('theme', 'dark');
location.reload();
```

### Toggle-Button

Der Toggle-Button wird automatisch im Header eingefügt:
- Wechselt zwischen: Light → Dark → Auto → Light
- Zeigt aktuellen Modus mit Icon und Label
- Icons: ☀️ (Light), 🌙 (Dark), ⚙️ (Auto)

## Theme-Modi

### 1. Light Mode (Standard)
- Heller Hintergrund (#ffffff)
- Dunkler Text (#333333)
- Standard-Webfarben

### 2. Dark Mode
- Dunkler Hintergrund (#1a1a1a)
- Heller Text (#e4e4e4)
- Reduzierte Helligkeit für Schatten
- Angepasste Link-Farben

### 3. Auto Mode
- Folgt System-Präferenz automatisch
- Reagiert auf Änderungen in Echtzeit
- Nutzt `prefers-color-scheme` Media Query

## Neue Theme-Eigenschaften hinzufügen

### 1. CSS Variable definieren

In `_sass/_variables.scss`:

```scss
:root {
  --new-property: #value-for-light;
}

[data-theme="dark"] {
  --new-property: #value-for-dark;
}
```

### 2. Variable verwenden

In SCSS-Dateien:

```scss
.my-element {
  color: var(--new-property, #fallback-value);
}
```

## FOUC Prevention

Um ein Flackern beim Seitenladen zu vermeiden, wird das Theme inline im `<head>` gesetzt:

```html
<script>
  (function() {
    const savedTheme = localStorage.getItem('theme') || 'auto';
    let effectiveTheme = savedTheme;
    
    if (savedTheme === 'auto') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      effectiveTheme = prefersDark ? 'dark' : 'light';
    }
    
    if (effectiveTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  })();
</script>
```

Dies wird **vor** dem Laden der CSS-Dateien ausgeführt.

## Theme für einzelne Komponenten anpassen

### Beispiel: Custom Button mit Theme-Support

```scss
.custom-button {
  background: var(--button-bg, transparent);
  color: var(--text-color, #333);
  border: 2px solid var(--border-color, #c7c7c7);
  
  &:hover {
    background: var(--button-hover-bg, rgba(0, 0, 0, 0.05));
  }
}
```

### Beispiel: Komponente mit Theme-spezifischen Styles

```scss
.special-component {
  background: var(--bg-color);
}

// Nur im Dark Mode
[data-theme="dark"] .special-component {
  box-shadow: 0 0 20px rgba(88, 166, 255, 0.3);
}

// Nur im Light Mode
:root:not([data-theme="dark"]) .special-component {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
```

## Smooth Transitions

Transitions sind für Theme-Wechsel optimiert:

```scss
body {
  background: var(--bg-color);
  color: var(--text-color);
  transition: color 0.3s ease, background-color 0.3s ease;
}
```

**Tipp:** Nicht alle Properties sollten transitioned werden (z.B. border-width), nur Farben.

## Best Practices

### 1. Immer Fallback-Werte angeben

✅ **Gut:**
```scss
color: var(--text-color, #333);
```

❌ **Schlecht:**
```scss
color: var(--text-color);
```

### 2. Kontrast beachten

Teste beide Modi auf ausreichenden Kontrast:
- Minimum: 4.5:1 für normalen Text (WCAG AA)
- Empfohlen: 7:1 für beste Lesbarkeit (WCAG AAA)

Tools: [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

### 3. Bilder im Dark Mode

Bilder können im Dark Mode zu hell wirken:

```scss
[data-theme="dark"] img {
  opacity: 0.9;
  transition: opacity 0.3s ease;
}

[data-theme="dark"] img:hover {
  opacity: 1;
}
```

Oder mit Filter:
```scss
[data-theme="dark"] .project-image {
  filter: brightness(0.8) contrast(1.1);
}
```

### 4. System-Präferenz respektieren

Der Auto-Modus sollte der Default sein, um User-Präferenz zu respektieren.

## Testing

### Manuelle Tests

**1. Toggle-Funktion:**
```
- Button klicken: Light → Dark → Auto
- Jeder Modus funktioniert korrekt
- Seite neu laden: Theme bleibt erhalten
```

**2. System-Präferenz:**
```
- Auto-Modus aktivieren
- System-Theme ändern (OS-Settings)
- Website sollte automatisch wechseln
```

**3. Alle UI-Elemente:**
```
- Header
- Section Headers
- Text-Content
- Buttons
- Links
- Images
- Footer
```

**4. Transitions:**
```
- Theme wechseln
- Keine harten Sprünge
- Smooth fade zwischen Farben
```

### Browser DevTools Testing

**Chrome/Edge:**
```
1. F12 → Console
2. Cmd/Ctrl + Shift + P
3. "Render" tippen → "Show Rendering"
4. "Emulate CSS media feature prefers-color-scheme"
5. Dark/Light wählen
```

**Firefox:**
```
1. F12 → Console
2. ☰ Menu → Settings
3. "Emulate prefers-color-scheme"
```

### Accessibility Testing

**Kontrast prüfen:**
```javascript
// Console
const bg = getComputedStyle(document.body).backgroundColor;
const text = getComputedStyle(document.body).color;
console.log('Background:', bg);
console.log('Text:', text);
// Dann mit Contrast Checker Tool vergleichen
```

## Troubleshooting

### Toggle-Button erscheint nicht

1. JavaScript-Fehler in Console prüfen
2. `theme-switcher.js` wird geladen?
3. HTML-Struktur enthält `.page-header`?

### Theme wechselt nicht

1. CSS Custom Properties unterstützt? (IE11 nicht)
2. `[data-theme="dark"]` Attribut wird gesetzt?
   ```javascript
   console.log(document.documentElement.getAttribute('data-theme'));
   ```
3. CSS enthält Theme-Variablen?

### Theme bleibt nicht gespeichert

1. LocalStorage verfügbar? (Private Mode blockiert)
   ```javascript
   console.log(localStorage.getItem('theme'));
   ```
2. JavaScript lädt korrekt?

### Flackern beim Laden (FOUC)

1. Inline-Script im `<head>` vorhanden?
2. Script läuft **vor** CSS-Laden?
3. Keine Fehler im Inline-Script?

### System-Präferenz wird nicht erkannt

1. Browser unterstützt `prefers-color-scheme`?
2. OS hat Dark Mode aktiviert?
3. Browser respektiert OS-Setting? (Privacy-Settings prüfen)

## Performance

Die Dark Mode Implementierung ist sehr performant:
- **CSS:** Alle Styles in einer Datei
- **JavaScript:** ~7KB unkomprimiert
- **FOUC Prevention:** Inline-Script < 0.5KB
- **No Dependencies:** Vanilla JavaScript
- **Instant Updates:** Kein Neurendering nötig

## Browser-Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 76+ | ✅ Vollständig |
| Firefox | 67+ | ✅ Vollständig |
| Safari | 12.1+ | ✅ Vollständig |
| Edge | 79+ | ✅ Vollständig |
| IE 11 | - | ⚠️ Fallback zu Light Mode |

**Fallback für alte Browser:**
CSS Custom Properties werden nicht unterstützt → Light Mode wird angezeigt.

## Erweiterte Features

### 1. Mehr Theme-Modi hinzufügen

```javascript
const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
  SEPIA: 'sepia',  // Neu
  HIGH_CONTRAST: 'high-contrast'  // Neu
};
```

Dann in CSS:
```scss
[data-theme="sepia"] {
  --bg-color: #f4ecd8;
  --text-color: #5b4636;
}
```

### 2. Time-based Auto-Theme

```javascript
function getTimeBasedTheme() {
  const hour = new Date().getHours();
  return (hour >= 18 || hour < 6) ? 'dark' : 'light';
}
```

### 3. Per-Component Theme Override

```html
<div data-theme="light">
  <!-- Dieser Bereich bleibt immer hell -->
</div>
```

### 4. Theme-Transitions deaktivieren

Für User mit `prefers-reduced-motion`:

```scss
@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
  }
}
```

### 5. Custom Theme Colors

User kann eigene Farben wählen:

```javascript
function setCustomTheme(primaryColor, backgroundColor) {
  document.documentElement.style.setProperty('--bg-color', backgroundColor);
  document.documentElement.style.setProperty('--link-color', primaryColor);
}
```

## Integration mit anderen Features

### Mit Language Switcher

Beide Toggle-Buttons werden nebeneinander angezeigt:
```
[🌐 DE / EN] [☀️ Light]
```

Styling kann kombiniert werden:
```scss
.language-toggle-container,
.theme-toggle-container {
  display: inline-block;
  margin: 0.5rem;
}
```

### Mit Bildergalerie

Bilder automatisch im Dark Mode dimmen:
```scss
[data-theme="dark"] .project-image {
  filter: brightness(0.85);
}
```

## Debugging-Tools

### Theme Inspector

```javascript
// In Console ausführen
const inspector = {
  current: window.ThemeSwitcher.getCurrentTheme(),
  system: window.ThemeSwitcher.getSystemPreference(),
  stored: localStorage.getItem('theme'),
  applied: document.documentElement.getAttribute('data-theme') || 'light',
  variables: {
    bg: getComputedStyle(document.body).getPropertyValue('--bg-color'),
    text: getComputedStyle(document.body).getPropertyValue('--text-color')
  }
};
console.table(inspector);
```

### Theme Change Logger

```javascript
// Theme-Änderungen loggen
const originalSetTheme = window.ThemeSwitcher.setTheme;
window.ThemeSwitcher.setTheme = function(theme) {
  console.log('Theme changing to:', theme);
  originalSetTheme.call(this, theme);
  console.log('Theme changed to:', theme);
};
```

## Weitere Ressourcen

- [MDN: prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
- [CSS Custom Properties Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [Dark Mode Best Practices](https://web.dev/prefers-color-scheme/)
- [WCAG Contrast Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
