<!-- ELUCENIA technical documentation · drogas-vasoativas · en · no clinical/professional/rights approval -->

# Vasoactive drug infusion

[conditions, sources and permissions](https://elucenia.org/en/tools/drogas-vasoativas)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### Drug

`droga`

- `nora` — Norepinephrine
- `adre` — Epinephrine
- `dopa` — Dopamine
- `dobuta` — Dobutamine
- `fenil` — Phenylephrine
- `milri` — Milrinone
- `outra` — Other drug

### Calculate

`modo`

- `dose` — Infusion rate from dose
- `vazao` — Dose from infusion rate

### Dose unit

`unidade`

- `kg` — mcg/kg/min
- `min` — mcg/min

### Active-ingredient mass as base, not salt

`massa`

mg · range: 0.1–2000

### Total solution volume

`volume`

mL · range: 10–1000

### Weight (for mcg/kg/min)

`peso`

kg · optional · range: 2–300

### Dose

`dose`

mcg/kg/min or mcg/min · optional · range: 0.001–100

### Pump infusion rate

`vazao`

mL/h · optional · range: 0.1–999

### Equivalent base mass, formulation product label, final volume, unit and prescribed dose checked?

`contexto`

- `0` — No
- `1` — Yes

## Method edition

Dimensional conversion of the active ingredient; no dose ranges

## Documented formula

Concentration in mcg/mL = active ingredient mass in mg × 1000/final volume. Infusion rate = dose × (weight if mcg/kg/min) × 60/concentration. Dose = infusion rate × concentration/\[60 × (weight if required)\].

## Limits and population

Does not automatically convert salt mass to active-base mass or select a usual dose. The formulation must be checked; the drug name does not fill in dose, concentration or proportion.

## References

- [DailyMed · norepinephrine · base/salt equivalence and final concentration](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=52e22892-4fc3-4f53-9f39-0b5c66da3040&version=3)

- [Overgaard CB, Dzavík V. Inotropes and vasopressors: review of physiology and clinical use in cardiovascular disease. Circulation, 2008.](https://doi.org/10.1161/CIRCULATIONAHA.107.728840)

- [Evans L et al. Surviving sepsis campaign: international guidelines for management of sepsis and septic shock 2021. Intensive Care Med, 2021.](https://doi.org/10.1007/s00134-021-06506-y)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
