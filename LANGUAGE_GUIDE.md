# Zweisprachigkeit (Deutsch/Englisch) - Dokumentation

## Übersicht

Die Website unterstützt vollständige Zweisprachigkeit mit Deutsch und Englisch. Die Implementierung nutzt:
- Vanilla JavaScript (kein Framework benötigt)
- LocalStorage für persistente Sprachpräferenz
- Dynamisches Umschalten ohne Seitenneuladung
- Barrierefreier Toggle-Button

## Architektur

### Komponenten

```
├── _data/translations/
│   ├── de.yml              # Deutsche Übersetzungen
│   └── en.yml              # Englische Übersetzungen
├── assets/js/
│   └── language-switcher.js # JavaScript für Sprachwechsel
└── _sass/_resume.scss      # Styling für Toggle-Button
```

### Funktionsweise

1. **Initialisierung**
   - Script lädt beim Seitenaufbau
   - Liest gespeicherte Sprachpräferenz aus localStorage
   - Erstellt Toggle-Button im Header
   - Wendet gespeicherte Sprache an

2. **Sprachwechsel**
   - User klickt auf Toggle-Button
   - Sprache wechselt zwischen DE ↔ EN
   - Neue Sprache wird in localStorage gespeichert
   - UI-Elemente werden dynamisch aktualisiert

3. **Persistenz**
   - Sprachpräferenz bleibt über Sitzungen erhalten
   - Wird in `localStorage.getItem('language')` gespeichert
   - Default: Deutsch ('de')

## Verwendung

### Spracheinstellung manuell ändern

Per JavaScript API:
```javascript
// Sprache auf Englisch setzen
window.LanguageSwitcher.setLanguage('en');

// Aktuelle Sprache abfragen
const currentLang = window.LanguageSwitcher.getCurrentLanguage();
console.log(currentLang); // 'de' oder 'en'
```

Per Browser Console (für Testing):
```javascript
localStorage.setItem('language', 'en');
location.reload();
```

### Toggle-Button

Der Toggle-Button wird automatisch im Header nach dem Avatar eingefügt:
- Zeigt aktuelle Sprache fett an
- Icon für Internationalität (Globus)
- Tooltip: "Toggle Language" / "Sprache wechseln"

## Neue Übersetzungen hinzufügen

### 1. Translation Files bearbeiten

**de.yml** und **en.yml** in `_data/translations/`:

```yaml
# Neue Sektion hinzufügen
sections:
  new_section: "Neue Sektion"  # de.yml
  new_section: "New Section"   # en.yml
```

### 2. JavaScript aktualisieren

In `assets/js/language-switcher.js`, translations-Objekt erweitern:

```javascript
const translations = {
  de: {
    sections: {
      new_section: "Neue Sektion"
    }
  },
  en: {
    sections: {
      new_section: "New Section"
    }
  }
};
```

### 3. Update-Funktion anpassen

Falls neue UI-Elemente übersetzt werden sollen:

```javascript
function applyLanguage(lang) {
  const t = translations[lang];
  
  // Neue Update-Funktion hinzufügen
  updateNewSection(t);
}

function updateNewSection(t) {
  const element = document.querySelector('.new-section-header');
  if (element) {
    element.textContent = t.sections.new_section;
  }
}
```

## Erweiterte Features

### Inhalts-Übersetzungen (nicht nur UI)

Für vollständige Inhalts-Übersetzungen (z.B. Projektbeschreibungen):

**Option 1: Separate YAML-Dateien**

```yaml
# _data/projects_de.yml
- project: "Mein Projekt"
  description: "Deutsche Beschreibung..."

# _data/projects_en.yml
- project: "My Project"
  description: "English description..."
```

Dann im JavaScript:
```javascript
// Lade entsprechende Daten basierend auf Sprache
fetch(`/_data/projects_${currentLang}.yml`)
  .then(response => response.text())
  .then(data => {
    // Parse und render YAML
  });
```

**Option 2: Multi-language Fields in YAML**

```yaml
# _data/projects.yml
- project:
    de: "Mein Projekt"
    en: "My Project"
  description:
    de: "Deutsche Beschreibung..."
    en: "English description..."
```

Dann in Liquid Templates:
```liquid
{% if site.language == 'de' %}
  {{ project.description.de }}
{% else %}
  {{ project.description.en }}
{% endif %}
```

### Browser-Sprache automatisch erkennen

In `language-switcher.js` erweitern:

```javascript
// Sprache aus Browser-Einstellung
function detectBrowserLanguage() {
  const browserLang = navigator.language || navigator.userLanguage;
  return browserLang.startsWith('de') ? 'de' : 'en';
}

// Beim Initialisieren
let currentLang = localStorage.getItem('language') || detectBrowserLanguage();
```

### Sprachauswahl-Dropdown (statt Toggle)

Falls mehr als 2 Sprachen:

```html
<select id="language-select" class="language-select">
  <option value="de">🇩🇪 Deutsch</option>
  <option value="en">🇬🇧 English</option>
  <option value="fr">🇫🇷 Français</option>
</select>
```

```javascript
document.getElementById('language-select').addEventListener('change', (e) => {
  setLanguage(e.target.value);
});
```

## Best Practices

### 1. Konsistente Keys verwenden

✅ **Gut:**
```yaml
sections:
  experience: "Berufserfahrung"
  skills: "Fähigkeiten"
```

❌ **Schlecht:**
```yaml
experience_header: "Berufserfahrung"
skill_section_title: "Fähigkeiten"
```

### 2. Kontext in Keys

✅ **Gut:**
```yaml
buttons:
  submit: "Absenden"
  cancel: "Abbrechen"
```

❌ **Schlecht:**
```yaml
submit: "Absenden"
cancel: "Abbrechen"
```

### 3. Original-Text Speichern

Das Script speichert Original-Texte in `data-original-text` Attributen, um bei Sprachwechseln zuverlässig zu funktionieren.

### 4. Accessibility

- HTML `lang` Attribut wird automatisch gesetzt
- ARIA-Labels für Toggle-Button
- Keyboard-Navigation unterstützt

## Styling anpassen

### Toggle-Button Position ändern

In `_sass/_resume.scss`:

```scss
.language-toggle-container {
  // Rechts oben positionieren
  position: absolute;
  top: 1rem;
  right: 1rem;
}
```

### Button-Style ändern

```scss
.language-toggle {
  // Eigene Farben
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  color: white;
  
  &:hover {
    transform: scale(1.05);
  }
}
```

### Flag-Icons hinzufügen

```html
<span class="flag">🇩🇪</span> DE / <span class="flag">🇬🇧</span> EN
```

## Testing

### Manuelle Tests

1. **Toggle-Funktion:**
   - Button klicken → Sprache wechselt
   - Seite neu laden → Sprache bleibt erhalten

2. **UI-Elemente:**
   - Alle Section-Headers übersetzen
   - Contact-Button übersetzt
   - Footer übersetzt

3. **LocalStorage:**
   ```javascript
   // Console
   localStorage.getItem('language'); // 'de' oder 'en'
   ```

4. **Accessibility:**
   - Tab-Navigation zum Button
   - Enter/Space triggert Sprachwechsel
   - Screen-Reader liest Label

### Automatisierte Tests (optional)

```javascript
// Test mit Jest oder ähnlichem
describe('LanguageSwitcher', () => {
  test('should toggle between languages', () => {
    const switcher = window.LanguageSwitcher;
    switcher.setLanguage('de');
    expect(switcher.getCurrentLanguage()).toBe('de');
    
    switcher.setLanguage('en');
    expect(switcher.getCurrentLanguage()).toBe('en');
  });
  
  test('should persist language in localStorage', () => {
    window.LanguageSwitcher.setLanguage('en');
    expect(localStorage.getItem('language')).toBe('en');
  });
});
```

## Troubleshooting

### Toggle-Button erscheint nicht

1. JavaScript-Fehler in Console prüfen
2. Pfad zu `language-switcher.js` korrekt?
3. Script lädt mit `defer` Attribut?

```html
<script src="assets/js/language-switcher.js" defer></script>
```

### Übersetzungen funktionieren nicht

1. Translations-Objekt im JavaScript korrekt?
2. Selector stimmt? (z.B. `.section-header h2`)
3. Original-Text matcht Translation-Key?

### LocalStorage funktioniert nicht

1. Browser-Privacy-Mode deaktiviert LocalStorage
2. In Incognito/Private Mode testen
3. Console-Fehler prüfen

### Sprache bleibt nicht gespeichert

```javascript
// Debug in Console
console.log(localStorage.getItem('language'));
// Falls null → LocalStorage Problem
```

## Performance

Die Implementierung ist sehr performant:
- **JavaScript:** ~6KB unkomprimiert
- **Keine externen Dependencies**
- **Kein Network-Request** beim Sprachwechsel
- **Instant UI-Update** ohne Neuladung

## Erweiterungen

### Weitere Sprachen hinzufügen

1. Neue Translation-File: `_data/translations/fr.yml`
2. Im JavaScript translations erweitern:
   ```javascript
   const translations = {
     de: { /* ... */ },
     en: { /* ... */ },
     fr: { /* ... */ }
   };
   ```
3. Toggle zu Dropdown umbauen (siehe oben)

### URL-Parameter für Sprache

```javascript
// ?lang=en in URL erkennen
const urlParams = new URLSearchParams(window.location.search);
const urlLang = urlParams.get('lang');
if (urlLang && (urlLang === 'de' || urlLang === 'en')) {
  currentLang = urlLang;
  localStorage.setItem('language', urlLang);
}
```

### SEO für mehrsprachige Seiten

Für separate URLs pro Sprache (SEO-optimiert):
- `/de/` und `/en/` Ordner erstellen
- Duplicate Content mit `hreflang` tags vermeiden:

```html
<link rel="alternate" hreflang="de" href="https://example.com/de/" />
<link rel="alternate" hreflang="en" href="https://example.com/en/" />
```

## Weitere Ressourcen

- [MDN: Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
- [W3C: Language Tags](https://www.w3.org/International/questions/qa-html-language-declarations)
- [WCAG: Language of Page](https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html)
