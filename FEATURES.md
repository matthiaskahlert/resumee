# Resume Website - Neue Features Dokumentation

Diese Dokumentation beschreibt die vier implementierten Features für die Resume-Website.

## Übersicht

Alle Features wurden erfolgreich implementiert:

1. ✅ **Live Server Setup mit Feature Branch Workflow**
2. ✅ **Grafiken/Bilder im Projekte-Bereich**
3. ✅ **Zweisprachigkeit (Deutsch/Englisch)**
4. ✅ **Dark Mode für die gesamte Website**

Alle Lösungen nutzen Vanilla JavaScript (keine großen Frameworks) und sind mit dem bestehenden Jekyll + GitHub Pages Template kompatibel.

## Quick Start

### Lokale Entwicklung starten

```bash
# 1. Dependencies installieren
bundle install

# 2. Jekyll Development Server starten
bundle exec jekyll serve --livereload

# 3. Website öffnen
# Browser: http://localhost:4000
```

### VS Code Setup

1. Öffne das Projekt in VS Code
2. Installiere die empfohlenen Extensions (wird automatisch vorgeschlagen)
3. Drücke `Ctrl+Shift+B` → Wähle "Serve Jekyll Site"

Siehe [DEVELOPMENT.md](./DEVELOPMENT.md) für Details.

## Feature 1: Live Server Setup 🚀

**Dokumentation:** [DEVELOPMENT.md](./DEVELOPMENT.md)

### Was wurde implementiert:

- ✅ VS Code Konfiguration (`.vscode/settings.json`)
- ✅ Empfohlene Extensions (`.vscode/extensions.json`)
- ✅ Build Tasks (`.vscode/tasks.json`)
- ✅ Umfassende Entwickler-Dokumentation

### Verwendung:

**Option 1: Jekyll mit Live Reload (Empfohlen)**
```bash
bundle exec jekyll serve --livereload
```

**Option 2: VS Code Task**
- `Ctrl+Shift+B` → "Serve Jekyll Site"

**Option 3: Live Server Extension**
- Build: `bundle exec jekyll build`
- Öffne `_site/index.html` mit "Open with Live Server"

### Feature Branch Workflow:

```bash
# Neues Feature entwickeln
git checkout -b feature/mein-feature
# Entwickeln, testen, committen
git push -u origin feature/mein-feature
# Pull Request auf GitHub erstellen
```

## Feature 2: Projekt-Bilder 🖼️

**Dokumentation:** [IMAGE_GUIDE.md](./IMAGE_GUIDE.md)

### Was wurde implementiert:

- ✅ Assets-Verzeichnisstruktur (`assets/images/projects/`)
- ✅ Bild-Support in `_data/projects.yml`
- ✅ Automatisches Rendering in Layout
- ✅ Responsive Design mit CSS
- ✅ Native Lazy Loading
- ✅ Hover-Effekte und Schatten
- ✅ Print-optimiert
- ✅ Placeholder-Bilder (SVG)

### Verwendung:

**Bild zu Projekt hinzufügen:**

1. Bild optimieren und in `assets/images/projects/` speichern
2. In `_data/projects.yml` eintragen:

```yaml
- project: Mein Projekt
  role: Projektleiter
  duration: 2024
  url: https://example.com
  image: assets/images/projects/mein-projekt.jpg
  image_alt: Beschreibender Alt-Text
  description: Projektbeschreibung...
```

### Best Practices:

- **Format:** JPEG für Fotos, PNG für Grafiken mit Transparenz
- **Größe:** Max. 600px Breite, unter 100KB
- **Alt-Text:** Beschreibend und aussagekräftig (50-150 Zeichen)
- **Dateiname:** lowercase, ohne Leerzeichen (z.B. `mein-projekt.jpg`)

### Optimierung:

```bash
# Bild komprimieren mit ImageMagick
convert input.jpg -resize 600x -quality 85 output.jpg

# Oder online Tools nutzen:
# - https://tinypng.com/
# - https://squoosh.app/
```

## Feature 3: Zweisprachigkeit 🌐

**Dokumentation:** [LANGUAGE_GUIDE.md](./LANGUAGE_GUIDE.md)

### Was wurde implementiert:

- ✅ Sprachdaten-Struktur (`_data/translations/de.yml`, `en.yml`)
- ✅ Sprach-Toggle-Button im Header
- ✅ JavaScript für Sprachwechsel (`assets/js/language-switcher.js`)
- ✅ LocalStorage-Persistenz
- ✅ Dynamisches UI-Update ohne Neuladung
- ✅ Barrierefreier Button mit ARIA-Labels

### Verwendung:

**Sprache wechseln:**
- Klicke auf "DE / EN" Button im Header
- Sprache wird automatisch gespeichert

**Programmtisch:**
```javascript
// Sprache auf Englisch setzen
window.LanguageSwitcher.setLanguage('en');

// Aktuelle Sprache abfragen
const lang = window.LanguageSwitcher.getCurrentLanguage();
```

### Unterstützte Sprachen:

- 🇩🇪 **Deutsch** (Standard)
- 🇬🇧 **Englisch**

### Neue Übersetzungen hinzufügen:

1. Bearbeite `_data/translations/de.yml` und `en.yml`
2. Erweitere `translations`-Objekt in `assets/js/language-switcher.js`
3. Falls nötig, Update-Funktion anpassen

Beispiel siehe [LANGUAGE_GUIDE.md](./LANGUAGE_GUIDE.md).

## Feature 4: Dark Mode 🌙

**Dokumentation:** [DARK_MODE_GUIDE.md](./DARK_MODE_GUIDE.md)

### Was wurde implementiert:

- ✅ CSS Custom Properties für Theming (`_sass/_variables.scss`)
- ✅ Vollständige Dark Mode Farbpalette
- ✅ System-Präferenz-Erkennung (`prefers-color-scheme`)
- ✅ Theme-Toggle-Button im Header
- ✅ JavaScript für Theme-Wechsel (`assets/js/theme-switcher.js`)
- ✅ LocalStorage-Persistenz
- ✅ FOUC-Prevention (kein Flackern beim Laden)
- ✅ Smooth Transitions zwischen Themes
- ✅ Alle Sektionen unterstützen beide Modi

### Theme-Modi:

1. **☀️ Light Mode** - Heller Hintergrund, dunkler Text
2. **🌙 Dark Mode** - Dunkler Hintergrund, heller Text
3. **⚙️ Auto Mode** - Folgt System-Präferenz automatisch

### Verwendung:

**Theme wechseln:**
- Klicke auf Theme-Button im Header
- Wechselt zwischen: Light → Dark → Auto → Light

**Programmtisch:**
```javascript
// Theme setzen
window.ThemeSwitcher.setTheme('dark');  // 'light', 'dark', oder 'auto'

// Aktuelles Theme abfragen
const theme = window.ThemeSwitcher.getCurrentTheme();

// System-Präferenz abfragen
const sysPref = window.ThemeSwitcher.getSystemPreference();
```

### System-Präferenz testen:

**Chrome/Edge DevTools:**
1. F12 → Console
2. `Cmd/Ctrl + Shift + P`
3. "Render" → "Emulate CSS media feature prefers-color-scheme"

**Firefox DevTools:**
1. F12 → Console
2. Settings → "Emulate prefers-color-scheme"

### Farb-Schema:

```scss
// Light Mode
--bg-color: #ffffff;
--text-color: #333333;
--link-color: #0366d6;

// Dark Mode
--bg-color: #1a1a1a;
--text-color: #e4e4e4;
--link-color: #58a6ff;
```

## Technische Details

### Technologie-Stack

- **Jekyll** - Static Site Generator
- **SCSS** - CSS mit Variablen und Nesting
- **Vanilla JavaScript** - Kein Framework, keine Dependencies
- **GitHub Pages** - Hosting
- **CSS Custom Properties** - Theme-Unterstützung
- **LocalStorage API** - Persistente Einstellungen

### Browser-Kompatibilität

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Bilder | ✅ | ✅ | ✅ | ✅ |
| Sprachwechsel | ✅ | ✅ | ✅ | ✅ |
| Dark Mode | 76+ | 67+ | 12.1+ | 79+ |
| Lazy Loading | 77+ | 75+ | 15.4+ | 79+ |

**IE 11:** Fallback zu Light Mode, keine Dark Mode Unterstützung.

### Performance

- **JavaScript:** ~13KB total (unkomprimiert)
- **Kein externes CDN** - Alles lokal gehostet
- **No Dependencies** - Keine jQuery, React, etc.
- **Lazy Loading** - Bilder laden bei Bedarf
- **FOUC Prevention** - Kein Theme-Flackern

### Dateistruktur

```
resumee/
├── .vscode/                    # VS Code Konfiguration
│   ├── settings.json
│   ├── extensions.json
│   └── tasks.json
├── _data/
│   ├── translations/           # Sprachdateien
│   │   ├── de.yml
│   │   └── en.yml
│   └── projects.yml            # Mit Bild-Support
├── _sass/
│   ├── _variables.scss         # Theme CSS Variables
│   ├── _base.scss              # Theme-aware Base Styles
│   └── _resume.scss            # Theme-aware Resume Styles
├── assets/
│   ├── images/
│   │   └── projects/           # Projekt-Bilder
│   └── js/
│       ├── language-switcher.js
│       └── theme-switcher.js
├── DEVELOPMENT.md              # Entwickler-Dokumentation
├── IMAGE_GUIDE.md              # Bilder-Dokumentation
├── LANGUAGE_GUIDE.md           # Sprach-Dokumentation
└── DARK_MODE_GUIDE.md          # Dark Mode Dokumentation
```

## Testing

### Lokales Testing

1. **Jekyll Build testen:**
   ```bash
   bundle exec jekyll build
   ```

2. **Development Server starten:**
   ```bash
   bundle exec jekyll serve --livereload
   ```

3. **Alle Features testen:**
   - ✅ Bilder werden angezeigt
   - ✅ Sprachwechsel funktioniert
   - ✅ Dark Mode funktioniert
   - ✅ Einstellungen bleiben nach Neuladung

4. **Browser-Testing:**
   - Desktop: Chrome, Firefox, Safari, Edge
   - Mobile: iOS Safari, Chrome Android
   - Responsive: 320px - 1920px

5. **Accessibility-Testing:**
   - Screen Reader (NVDA/VoiceOver)
   - Keyboard Navigation (Tab, Enter)
   - Kontrast-Checker

### Production Testing

Nach dem Deployment auf GitHub Pages:

1. **Live-URL testen:** `https://matthiaskahlert.github.io/resumee/`
2. **Mobile Performance:** [PageSpeed Insights](https://pagespeed.web.dev/)
3. **SEO Check:** [Google Search Console](https://search.google.com/search-console)
4. **Accessibility:** [WAVE](https://wave.webaim.org/)

## Troubleshooting

### Häufige Probleme

**1. Jekyll baut nicht**
```bash
# Cache löschen
bundle exec jekyll clean
rm -rf .sass-cache _site

# Neu bauen
bundle exec jekyll build
```

**2. JavaScript lädt nicht**
- Pfade prüfen: `assets/js/...`
- Browser Console auf Fehler prüfen
- Cache leeren (Cmd/Ctrl + Shift + R)

**3. Theme/Sprache bleibt nicht gespeichert**
- LocalStorage verfügbar? (Private Mode blockiert)
- JavaScript-Fehler in Console?

**4. Bilder werden nicht angezeigt**
- Pfad korrekt? `assets/images/projects/...`
- Datei existiert?
- Jekyll neu starten

### Debug-Tools

**JavaScript Console:**
```javascript
// Sprache debuggen
console.log(window.LanguageSwitcher.getCurrentLanguage());
console.log(localStorage.getItem('language'));

// Theme debuggen
console.log(window.ThemeSwitcher.getCurrentTheme());
console.log(localStorage.getItem('theme'));
console.log(document.documentElement.getAttribute('data-theme'));
```

## Deployment

### GitHub Pages

1. **Push zu GitHub:**
   ```bash
   git add .
   git commit -m "Beschreibung"
   git push origin main
   ```

2. **GitHub Actions:**
   - Automatischer Build durch GitHub Pages
   - Deployment auf `https://USERNAME.github.io/REPO/`

3. **Settings prüfen:**
   - Repository Settings → Pages
   - Source: Deploy from branch
   - Branch: main / root

### Custom Domain (optional)

1. Datei `CNAME` erstellen:
   ```
   your-domain.com
   ```

2. DNS-Einträge setzen:
   ```
   A Record: 185.199.108.153
   A Record: 185.199.109.153
   A Record: 185.199.110.153
   A Record: 185.199.111.153
   ```

## Wartung

### Regelmäßige Updates

**Dependencies aktualisieren:**
```bash
bundle update
```

**Neue Features hinzufügen:**
1. Feature Branch erstellen
2. Entwickeln und testen
3. Pull Request erstellen
4. Review und merge

### Content-Updates

**Neues Projekt hinzufügen:**
1. Bild optimieren → `assets/images/projects/`
2. `_data/projects.yml` bearbeiten
3. Commit und push

**Übersetzungen aktualisieren:**
1. `_data/translations/de.yml` bearbeiten
2. `_data/translations/en.yml` bearbeiten
3. Falls nötig, JavaScript anpassen

## Best Practices

### Code-Qualität

- ✅ Vanilla JavaScript ohne Dependencies
- ✅ Semantic HTML
- ✅ BEM-ähnliche CSS-Klassen
- ✅ Barrierefreie UI-Elemente
- ✅ Mobile-First Responsive Design

### Performance

- ✅ Optimierte Bilder (< 100KB)
- ✅ Native Lazy Loading
- ✅ Minimale JavaScript-Größe
- ✅ CSS Custom Properties statt JavaScript-Styles

### Accessibility

- ✅ Alt-Texte für alle Bilder
- ✅ ARIA-Labels für Buttons
- ✅ Keyboard-Navigation
- ✅ Ausreichender Kontrast (WCAG AA)
- ✅ Screen-Reader-freundlich

## Weitere Schritte

### Empfohlene Erweiterungen

1. **Content-Übersetzungen**
   - Projekt-Beschreibungen mehrsprachig
   - Separate `projects_de.yml` / `projects_en.yml`

2. **Mehr Bilder**
   - Team-Fotos
   - Skill-Icons
   - Achievement-Badges

3. **Weitere Themes**
   - High Contrast Mode
   - Sepia Mode
   - Custom Color Picker

4. **Analytics**
   - Google Analytics
   - Privacy-freundlich: Matomo/Plausible

5. **SEO-Optimierung**
   - Meta-Tags
   - Structured Data (Schema.org)
   - Sitemap.xml

## Support und Ressourcen

### Dokumentation

- [DEVELOPMENT.md](./DEVELOPMENT.md) - Entwicklungs-Workflow
- [IMAGE_GUIDE.md](./IMAGE_GUIDE.md) - Bilder-Best-Practices
- [LANGUAGE_GUIDE.md](./LANGUAGE_GUIDE.md) - Zweisprachigkeit
- [DARK_MODE_GUIDE.md](./DARK_MODE_GUIDE.md) - Dark Mode Details

### Externe Ressourcen

- [Jekyll Docs](https://jekyllrb.com/docs/)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [MDN Web Docs](https://developer.mozilla.org/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

### Tools

- [TinyPNG](https://tinypng.com/) - Bild-Kompression
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [WAVE Accessibility Tool](https://wave.webaim.org/)

---

**Version:** 1.0.0  
**Datum:** Februar 2026  
**Autor:** GitHub Copilot Agent
