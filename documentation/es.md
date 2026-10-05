<!-- ELUCENIA technical documentation · drogas-vasoativas · es · no clinical/professional/rights approval -->

# Infusión de fármacos vasoactivos

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/drogas-vasoativas)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### Fármaco

`droga`

- `nora` — Noradrenalina
- `adre` — Adrenalina
- `dopa` — Dopamina
- `dobuta` — Dobutamina
- `fenil` — Fenilefrina
- `milri` — Milrinona
- `outra` — Otro fármaco

### Calcular

`modo`

- `dose` — Velocidad de infusión a partir de la dosis
- `vazao` — Dosis a partir de la velocidad de infusión

### Unidad de dosis

`unidade`

- `kg` — mcg/kg/min
- `min` — mcg/min

### Masa del principio activo como base, no como sal

`massa`

mg · intervalo: 0,1–2000

### Volumen total de la solución

`volume`

mL · intervalo: 10–1000

### Peso (para mcg/kg/min)

`peso`

kg · opcional · intervalo: 2–300

### Dosis

`dose`

mcg/kg/min o mcg/min · opcional · intervalo: 0,001–100

### Velocidad de infusión de la bomba

`vazao`

mL/h · opcional · intervalo: 0,1–999

### ¿Masa equivalente como base, ficha técnica de la formulación, volumen final, unidad y dosis prescrita comprobados?

`contexto`

- `0` — No
- `1` — Sí

## Edición del método

Conversión dimensional del principio activo; sin intervalos de dosis

## Fórmula documentada

Concentración en mcg/mL = masa del principio activo en mg × 1000/volumen final. Velocidad = dosis × (peso si mcg/kg/min) × 60/concentración. Dosis = velocidad × concentración/\[60 × (peso si es necesario)\].

## Límites y población

No convierte automáticamente la masa de la sal en base ni elige una dosis habitual. Es obligatorio verificar la formulación; el nombre del fármaco no introduce dosis, concentración ni proporción.

## Referencias

- [DailyMed · norepinefrina · equivalencia base/sal y concentración final](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=52e22892-4fc3-4f53-9f39-0b5c66da3040&version=3)

- [Overgaard CB, Dzavík V. Inotropes and vasopressors: review of physiology and clinical use in cardiovascular disease. Circulation, 2008.](https://doi.org/10.1161/CIRCULATIONAHA.107.728840)

- [Evans L et al. Surviving sepsis campaign: international guidelines for management of sepsis and septic shock 2021. Intensive Care Med, 2021.](https://doi.org/10.1007/s00134-021-06506-y)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
