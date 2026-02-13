# Local Development Guide

## Live Server Setup für VS Code

Diese Anleitung erklärt, wie du deine Resume-Website lokal entwickeln und testen kannst.

### Voraussetzungen

1. **Ruby und Bundler installieren**
   ```bash
   # Auf macOS (mit Homebrew)
   brew install ruby
   
   # Auf Ubuntu/Debian
   sudo apt-get install ruby-full build-essential
   
   # Bundler installieren
   gem install bundler
   ```

2. **Jekyll Dependencies installieren**
   ```bash
   cd /pfad/zum/projekt
   bundle install
   ```

3. **VS Code Extensions installieren**
   - Öffne VS Code
   - Gehe zu Extensions (Ctrl+Shift+X)
   - Die empfohlenen Extensions werden automatisch vorgeschlagen
   - Installiere mindestens: **Live Server** von Ritwick Dey

### Option 1: Jekyll mit Live Reload (Empfohlen)

Jekyll hat einen integrierten Development Server mit automatischem Reload:

```bash
# Server starten
bundle exec jekyll serve --livereload

# Server mit Draft-Posts
bundle exec jekyll serve --livereload --drafts

# Server auf anderem Port
bundle exec jekyll serve --livereload --port 4001
```

Die Website ist dann verfügbar unter: `http://localhost:4000`

**Vorteile:**
- ✅ Automatisches Neuladen bei Änderungen
- ✅ Verarbeitet SCSS, Liquid Templates, etc.
- ✅ Funktioniert identisch wie auf GitHub Pages
- ✅ Zeigt Build-Fehler im Terminal

### Option 2: VS Code Task nutzen

In VS Code kannst du den Jekyll Server über Tasks starten:

1. Drücke `Ctrl+Shift+B` (oder `Cmd+Shift+B` auf Mac)
2. Wähle "Serve Jekyll Site"
3. Der Server startet im integrierten Terminal

### Option 3: Live Server Extension (für schnelle HTML-Vorschau)

Wenn du nur HTML-Änderungen testen möchtest:

1. Baue die Site einmal: `bundle exec jekyll build`
2. Öffne die `_site/index.html` Datei
3. Rechtsklick → "Open with Live Server"

**Hinweis:** Diese Option zeigt keine SCSS/Liquid-Änderungen, nur statisches HTML!

## Feature Branch Workflow

### Neues Feature entwickeln

```bash
# 1. Aktuellen Stand vom main branch holen
git checkout main
git pull origin main

# 2. Neuen Feature Branch erstellen
git checkout -b feature/dein-feature-name

# 3. Entwicklung starten
bundle exec jekyll serve --livereload

# 4. Änderungen committen
git add .
git commit -m "Beschreibung der Änderungen"

# 5. Branch pushen
git push -u origin feature/dein-feature-name

# 6. Pull Request auf GitHub erstellen
```

### Best Practices

#### Vor dem Push testen

```bash
# 1. Jekyll Build testen
bundle exec jekyll build

# 2. Auf Fehler prüfen
# Schaue ins Terminal nach Warnings/Errors

# 3. Site lokal testen
bundle exec jekyll serve
# Teste alle Seiten und Features

# 4. HTML validieren (optional)
# https://validator.w3.org/ nutzen
```

#### Feature Branch aktuell halten

```bash
# Main branch in deinen Feature Branch mergen
git checkout feature/dein-feature-name
git fetch origin
git merge origin/main

# Konflikte lösen falls nötig
# Dann testen und pushen
```

## Tipps für Live Development

### SCSS Änderungen

SCSS-Dateien werden automatisch kompiliert. Nach Änderungen in `_sass/`:
- Jekyll kompiliert automatisch zu CSS
- Browser lädt automatisch neu (mit --livereload)

### Liquid Template Änderungen

Änderungen in `_layouts/`, `_includes/` oder `_data/`:
- Speichern löst automatisch Rebuild aus
- Browser lädt automatisch neu

### Konfigurationsänderungen

Änderungen in `_config.yml` erfordern Server-Neustart:
```bash
# Server stoppen (Ctrl+C)
# Dann neu starten
bundle exec jekyll serve --livereload
```

## Häufige Probleme

### Port bereits belegt

```bash
# Anderen Port verwenden
bundle exec jekyll serve --livereload --port 4001
```

### Bundle Install Fehler

```bash
# Cache löschen und neu installieren
bundle clean --force
bundle install
```

### Jekyll kompiliert nicht

```bash
# Clean build
bundle exec jekyll clean
bundle exec jekyll build
```

## Mobile Testing

Für Tests auf mobilen Geräten im gleichen Netzwerk:

```bash
# Server mit Host-Option starten
bundle exec jekyll serve --livereload --host=0.0.0.0

# Dann auf Mobile Browser zugreifen mit:
# http://DEINE-IP-ADRESSE:4000
```

Deine IP-Adresse findest du mit:
```bash
# macOS/Linux
ifconfig | grep inet

# Windows
ipconfig
```

## Weitere Ressourcen

- [Jekyll Dokumentation](https://jekyllrb.com/docs/)
- [Liquid Template Guide](https://shopify.github.io/liquid/)
- [GitHub Pages Dokumentation](https://docs.github.com/en/pages)
- [Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
