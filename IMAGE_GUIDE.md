# Bilder für Projekte - Best Practices

## Übersicht

Bilder im Projekte-Bereich machen deine Resume-Website visuell ansprechender und professioneller. Dieses Dokument erklärt, wie du Bilder optimal einbindest.

## Bildformate und Größen

### Empfohlene Formate

1. **WebP** (beste Wahl für moderne Browser)
   - Beste Kompression bei hoher Qualität
   - Ca. 30% kleinere Dateigröße als JPEG
   - Unterstützt Transparenz

2. **JPEG** (für beste Kompatibilität)
   - Gut für Fotos und komplexe Bilder
   - Breite Browser-Unterstützung
   - Progressive JPEGs für besseres Laden

3. **PNG** (für Logos und Grafiken mit Transparenz)
   - Verlustfreie Kompression
   - Unterstützt Transparenz
   - Größere Dateien als JPEG

4. **SVG** (für Logos und Icons)
   - Vektorgrafik, skaliert perfekt
   - Sehr kleine Dateigröße
   - Ideal für einfache Grafiken

### Optimale Bildgrößen

```
Desktop-Ansicht (rechts neben Text):
- Maximale Breite: 300px
- Empfohlene Auflösung: 600px Breite (für Retina-Displays)
- Seitenverhältnis: 16:9 oder 4:3

Mobile-Ansicht (über dem Text):
- Volle Breite bis 600px
- Responsive Anpassung durch CSS

Dateigrößen-Ziele:
- Unter 100 KB pro Bild (ideal: 50-80 KB)
- Gesamt aller Bilder: unter 500 KB
```

## Bilder einbinden

### 1. Bildverzeichnis

Speichere Projekt-Bilder unter:
```
assets/images/projects/
```

### 2. In projects.yml hinzufügen

```yaml
- project: Mein Projekt
  role: Projektleiter
  duration: 2023 &mdash; 2024
  url: https://example.com
  image: assets/images/projects/mein-projekt.jpg
  image_alt: Beschreibender Alt-Text für Barrierefreiheit
  description: Projektbeschreibung...
```

**Wichtig:**
- `image`: Pfad zum Bild (optional)
- `image_alt`: Alt-Text für Screenreader (erforderlich wenn image gesetzt ist)

### 3. Automatisches Rendering

Die Bilder werden automatisch im Layout angezeigt mit:
- Responsive Sizing
- Lazy Loading (native browser feature)
- Hover-Effekte
- Print-Optimierung

## Bilder optimieren

### Online-Tools

1. **[TinyPNG](https://tinypng.com/)** - JPEG/PNG Kompression
2. **[Squoosh](https://squoosh.app/)** - Moderne Bildkompression (WebP, AVIF)
3. **[SVGOMG](https://jakearchibald.github.io/svgomg/)** - SVG Optimierung

### Command-Line Tools

```bash
# ImageMagick - Bild auf 600px Breite skalieren
convert input.jpg -resize 600x output.jpg

# ImageMagick - JPEG Qualität optimieren
convert input.jpg -quality 85 output.jpg

# WebP konvertieren (hohe Qualität)
cwebp -q 85 input.jpg -o output.webp

# Batch-Konvertierung aller JPGs im Ordner
for img in *.jpg; do
  convert "$img" -resize 600x -quality 85 "optimized-$img"
done
```

### Automatisierung mit npm scripts (optional)

Falls du viele Bilder hast, kannst du ein `package.json` Script erstellen:

```json
{
  "scripts": {
    "optimize-images": "imagemin assets/images/projects/* --out-dir=assets/images/projects/optimized"
  },
  "devDependencies": {
    "imagemin-cli": "^7.0.0"
  }
}
```

## Responsive Bilder

Die aktuelle Implementierung nutzt CSS für responsive Bilder. Für erweiterte Performance kannst du später `srcset` hinzufügen:

```html
<img src="assets/images/projects/projekt.jpg"
     srcset="assets/images/projects/projekt-300w.jpg 300w,
             assets/images/projects/projekt-600w.jpg 600w,
             assets/images/projects/projekt-900w.jpg 900w"
     sizes="(max-width: 600px) 100vw,
            (max-width: 900px) 50vw,
            300px"
     alt="Projekt Screenshot"
     loading="lazy">
```

## Lazy Loading

Native Lazy Loading ist bereits implementiert mit `loading="lazy"`. Das bedeutet:
- Bilder laden erst, wenn sie in den Viewport kommen
- Bessere Performance, besonders auf mobilen Geräten
- Keine JavaScript-Bibliothek nötig

Für erweiterte Features kannst du später eine Lazy-Loading-Bibliothek wie **lazysizes** hinzufügen.

## Barrierefreiheit (Accessibility)

### Alt-Text Best Practices

✅ **Gut:**
```yaml
image_alt: Seafight Game Screenshot showing naval battle gameplay
```

❌ **Schlecht:**
```yaml
image_alt: image
image_alt: seafight.jpg
```

### Richtlinien für Alt-Text

1. **Beschreibend und präzise** - Was zeigt das Bild?
2. **Kontext-relevant** - Wie bezieht es sich auf das Projekt?
3. **Kurz aber aussagekräftig** - 50-150 Zeichen
4. **Keine redundanten Phrasen** - "Bild von..." ist unnötig

## Performance-Checkliste

Vor dem Commit, prüfe:

- [ ] Bilder sind unter 100 KB
- [ ] Bilder haben korrekte Dimensionen (max 600px Breite)
- [ ] Alt-Texte sind aussagekräftig
- [ ] Dateinamen sind lowercase und ohne Leerzeichen (z.B. `mein-projekt.jpg`)
- [ ] Bilder sind im richtigen Ordner (`assets/images/projects/`)
- [ ] Bildformat ist für den Inhalt optimiert (JPEG für Fotos, PNG für Grafiken)

## Workflow-Beispiel

### Neues Projekt-Bild hinzufügen

```bash
# 1. Bild in Ordner kopieren
cp ~/Downloads/projekt-screenshot.jpg assets/images/projects/

# 2. Bild optimieren
cd assets/images/projects
convert projekt-screenshot.jpg -resize 600x -quality 85 projekt-screenshot.jpg

# 3. In projects.yml eintragen
# (siehe oben)

# 4. Lokal testen
bundle exec jekyll serve --livereload

# 5. Commit und Push
git add assets/images/projects/projekt-screenshot.jpg
git add _data/projects.yml
git commit -m "Add project screenshot for XYZ"
git push
```

## Screenshots erstellen

### Browser Screenshots (für Web-Projekte)

**Chrome DevTools:**
1. F12 öffnen
2. Cmd/Ctrl + Shift + P
3. "Screenshot" tippen
4. "Capture screenshot" wählen

**Firefox:**
1. Rechtsklick auf Seite
2. "Take Screenshot" wählen
3. Bereich auswählen

### Externe Tools

- **[Shottr](https://shottr.cc/)** (Mac) - Annotierte Screenshots
- **[Greenshot](https://getgreenshot.org/)** (Windows) - Flexibles Screenshot-Tool
- **[Flameshot](https://flameshot.org/)** (Linux/Mac/Windows) - Open-Source Screenshot-Tool

## Häufige Probleme

### Bild wird nicht angezeigt

1. **Pfad prüfen:** Ist `image: assets/images/projects/datei.jpg` korrekt?
2. **Datei existiert:** Liegt die Datei wirklich im Ordner?
3. **Jekyll neu starten:** `Ctrl+C` und `bundle exec jekyll serve` neu ausführen
4. **Cache leeren:** Browser-Cache löschen (Cmd/Ctrl + Shift + R)

### Bild ist zu groß / lädt langsam

```bash
# Dateigröße prüfen
ls -lh assets/images/projects/

# Bild komprimieren
convert image.jpg -quality 80 -resize 600x image.jpg
```

### Bild sieht auf Mobile schlecht aus

- Prüfe, ob Bild mindestens 600px breit ist (für Retina-Displays)
- Teste auf echtem Gerät oder Browser DevTools (F12 → Device Toolbar)

## Weitere Ressourcen

- [Google Web Fundamentals - Image Optimization](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization)
- [MDN - Responsive Images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- [WebP Image Format Guide](https://developers.google.com/speed/webp)
