<!-- ELUCENIA technical documentation · drogas-vasoativas · fr · no clinical/professional/rights approval -->

# Perfusion de médicaments vasoactifs

[conditions, sources et autorisations](https://elucenia.org/fr/outils/drogas-vasoativas)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### Médicament

`droga`

- `nora` — Noradrénaline
- `adre` — Adrénaline
- `dopa` — Dopamine
- `dobuta` — Dobutamine
- `fenil` — Phényléphrine
- `milri` — Milrinone
- `outra` — Autre médicament

### Calculer

`modo`

- `dose` — Débit à partir de la dose
- `vazao` — Dose à partir du débit

### Unité de dose

`unidade`

- `kg` — mcg/kg/min
- `min` — mcg/min

### Masse du principe actif sous forme de base, et non de sel

`massa`

mg · intervalle: 0,1–2000

### Volume total de la solution

`volume`

mL · intervalle: 10–1000

### Poids (pour mcg/kg/min)

`peso`

kg · facultatif · intervalle: 2–300

### Dose

`dose`

mcg/kg/min ou mcg/min · facultatif · intervalle: 0,001–100

### Débit de la pompe

`vazao`

mL/h · facultatif · intervalle: 0,1–999

### Masse équivalente de base, notice de la formulation, volume final, unité et dose prescrite vérifiés ?

`contexto`

- `0` — Non
- `1` — Oui

## Édition de la méthode

Conversion dimensionnelle du principe actif ; aucun intervalle posologique

## Formule documentée

Concentration en mcg/mL = masse du principe actif en mg × 1000/volume final. Débit = dose × (poids si mcg/kg/min) × 60/concentration. Dose = débit × concentration/\[60 × (poids si nécessaire)\].

## Limites et population

Ne convertit pas automatiquement la masse du sel en base et ne choisit pas de dose habituelle. La formulation doit être vérifiée ; le nom du médicament ne renseigne ni dose, ni concentration, ni proportion.

## Références

- [DailyMed · noradrénaline · équivalence base/sel et concentration finale](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=52e22892-4fc3-4f53-9f39-0b5c66da3040&version=3)

- [Overgaard CB, Dzavík V. Inotropes and vasopressors: review of physiology and clinical use in cardiovascular disease. Circulation, 2008.](https://doi.org/10.1161/CIRCULATIONAHA.107.728840)

- [Evans L et al. Surviving sepsis campaign: international guidelines for management of sepsis and septic shock 2021. Intensive Care Med, 2021.](https://doi.org/10.1007/s00134-021-06506-y)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
