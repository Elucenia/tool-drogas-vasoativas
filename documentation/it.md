<!-- ELUCENIA technical documentation · drogas-vasoativas · it · no clinical/professional/rights approval -->

# Infusione di farmaci vasoattivi

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/drogas-vasoativas)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### Farmaco

`droga`

- `nora` — Noradrenalina
- `adre` — Adrenalina
- `dopa` — Dopamina
- `dobuta` — Dobutamina
- `fenil` — Fenilefrina
- `milri` — Milrinone
- `outra` — Altro farmaco

### Calcola

`modo`

- `dose` — Velocità di infusione dalla dose
- `vazao` — Dose dalla velocità di infusione

### Unità di dose

`unidade`

- `kg` — mcg/kg/min
- `min` — mcg/min

### Massa del principio attivo come base, non come sale

`massa`

mg · intervallo: 0,1–2000

### Volume totale della soluzione

`volume`

mL · intervallo: 10–1000

### Peso (per mcg/kg/min)

`peso`

kg · facoltativo · intervallo: 2–300

### Dose

`dose`

mcg/kg/min o mcg/min · facoltativo · intervallo: 0,001–100

### Velocità di infusione della pompa

`vazao`

mL/h · facoltativo · intervallo: 0,1–999

### Massa equivalente come base, scheda tecnica della formulazione, volume finale, unità e dose prescritta verificati?

`contexto`

- `0` — No
- `1` — Sì

## Edizione del metodo

Conversione dimensionale del principio attivo; nessun intervallo di dose

## Formula documentata

Concentrazione in mcg/mL = massa del principio attivo in mg × 1000/volume finale. Velocità = dose × (peso se mcg/kg/min) × 60/concentrazione. Dose = velocità × concentrazione/\[60 × (peso se necessario)\].

## Limiti e popolazione

Non converte automaticamente la massa del sale in base né sceglie una dose usuale. La formulazione deve essere verificata; il nome del farmaco non inserisce dose, concentrazione o proporzione.

## Riferimenti

- [DailyMed · noradrenalina · equivalenza base/sale e concentrazione finale](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=52e22892-4fc3-4f53-9f39-0b5c66da3040&version=3)

- [Overgaard CB, Dzavík V. Inotropes and vasopressors: review of physiology and clinical use in cardiovascular disease. Circulation, 2008.](https://doi.org/10.1161/CIRCULATIONAHA.107.728840)

- [Evans L et al. Surviving sepsis campaign: international guidelines for management of sepsis and septic shock 2021. Intensive Care Med, 2021.](https://doi.org/10.1007/s00134-021-06506-y)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
