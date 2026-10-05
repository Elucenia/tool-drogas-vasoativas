<!-- ELUCENIA technical documentation · drogas-vasoativas · de · no clinical/professional/rights approval -->

# Infusion vasoaktiver Medikamente

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/drogas-vasoativas)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### Arzneimittel

`droga`

- `nora` — Noradrenalin
- `adre` — Adrenalin
- `dopa` — Dopamin
- `dobuta` — Dobutamin
- `fenil` — Phenylephrin
- `milri` — Milrinon
- `outra` — Anderes Arzneimittel

### Berechnen

`modo`

- `dose` — Infusionsrate aus der Dosis
- `vazao` — Dosis aus der Infusionsrate

### Dosiseinheit

`unidade`

- `kg` — mcg/kg/min
- `min` — mcg/min

### Wirkstoffmasse als Base, nicht als Salz

`massa`

mg · Bereich: 0,1–2000

### Gesamtvolumen der Lösung

`volume`

mL · Bereich: 10–1000

### Gewicht (für mcg/kg/min)

`peso`

kg · optional · Bereich: 2–300

### Dosis

`dose`

mcg/kg/min oder mcg/min · optional · Bereich: 0,001–100

### Pumpenrate

`vazao`

mL/h · optional · Bereich: 0,1–999

### Äquivalente Basenmasse, Fachinformation der Formulierung, Endvolumen, Einheit und verordnete Dosis geprüft?

`contexto`

- `0` — Nein
- `1` — Ja

## Fassung der Methode

Dimensionale Umrechnung des Wirkstoffs; keine Dosierungsbereiche

## Dokumentierte Formel

Konzentration in mcg/mL = Wirkstoffmasse in mg × 1000/Endvolumen. Infusionsrate = Dosis × (Gewicht bei mcg/kg/min) × 60/Konzentration. Dosis = Infusionsrate × Konzentration/\[60 × (Gewicht falls nötig)\].

## Grenzen und Population

Rechnet Salzmasse nicht automatisch in Basenmasse um und wählt keine übliche Dosis. Die Formulierung muss geprüft werden; der Arzneimittelname trägt weder Dosis, Konzentration noch Verhältnis ein.

## Referenzen

- [DailyMed · Noradrenalin · Basen-Salz-Äquivalenz und Endkonzentration](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=52e22892-4fc3-4f53-9f39-0b5c66da3040&version=3)

- [Overgaard CB, Dzavík V. Inotropes and vasopressors: review of physiology and clinical use in cardiovascular disease. Circulation, 2008.](https://doi.org/10.1161/CIRCULATIONAHA.107.728840)

- [Evans L et al. Surviving sepsis campaign: international guidelines for management of sepsis and septic shock 2021. Intensive Care Med, 2021.](https://doi.org/10.1007/s00134-021-06506-y)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026
