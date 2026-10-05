<!-- ELUCENIA technical documentation · drogas-vasoativas · pt-BR · no clinical/professional/rights approval -->

# Infusão de drogas vasoativas

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/drogas-vasoativas)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### Droga

`droga`

- `nora` — Noradrenalina
- `adre` — Adrenalina
- `dopa` — Dopamina
- `dobuta` — Dobutamina
- `fenil` — Fenilefrina
- `milri` — Milrinona
- `outra` — Outra droga

### Calcular

`modo`

- `dose` — Vazão a partir da dose
- `vazao` — Dose a partir da vazão

### Unidade da dose

`unidade`

- `kg` — mcg/kg/min
- `min` — mcg/min

### Massa do princípio ativo em base, não do sal

`massa`

mg · intervalo: 0,1–2000

### Volume total da solução

`volume`

mL · intervalo: 10–1000

### Peso (para mcg/kg/min)

`peso`

kg · opcional · intervalo: 2–300

### Dose

`dose`

mcg/kg/min ou mcg/min · opcional · intervalo: 0,001–100

### Vazão da bomba

`vazao`

mL/h · opcional · intervalo: 0,1–999

### Massa equivalente em base, bula da formulação, volume final, unidade e dose prescrita conferidos?

`contexto`

- `0` — Não
- `1` — Sim

## Edição do método

Conversão dimensional de princípio ativo; sem faixas de dose

## Fórmula documentada

Concentração em mcg/mL = massa do princípio ativo em mg × 1000/volume final. Vazão = dose × (peso se mcg/kg/min) × 60/concentração. Dose = vazão × concentração/\[60 × (peso se necessário)\].

## Limites e população

Não converte automaticamente massa do sal em base nem escolhe dose usual. É obrigatório conferir formulação; nome da droga não preenche dose, concentração ou proporção.

## Referências

- [DailyMed · norepinefrina · equivalência base/sal e concentração final](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=52e22892-4fc3-4f53-9f39-0b5c66da3040&version=3)

- [Overgaard CB, Dzavík V. Inotropes and vasopressors: review of physiology and clinical use in cardiovascular disease. Circulation, 2008.](https://doi.org/10.1161/CIRCULATIONAHA.107.728840)

- [Evans L et al. Surviving sepsis campaign: international guidelines for management of sepsis and septic shock 2021. Intensive Care Med, 2021.](https://doi.org/10.1007/s00134-021-06506-y)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
