<!-- ELUCENIA technical documentation · drogas-vasoativas · zh · no clinical/professional/rights approval -->

# 血管活性药物输注

[条件、来源与许可](https://elucenia.org/zh/tools/drogas-vasoativas)

## 使用方法

在门户中使用工具，或通过本地 HTTP 服务器打开 index.html。选择语言，填写各字段，然后计算。

## 输入与单位

### 药物

`droga`

- `nora` — 去甲肾上腺素
- `adre` — 肾上腺素
- `dopa` — 多巴胺
- `dobuta` — 多巴酚丁胺
- `fenil` — 去氧肾上腺素
- `milri` — 米力农
- `outra` — 其他药物

### 计算

`modo`

- `dose` — 根据剂量计算输注速率
- `vazao` — 根据输注速率计算剂量

### 剂量单位

`unidade`

- `kg` — mcg/kg/min
- `min` — mcg/min

### 活性成分的游离碱质量，非盐质量

`massa`

mg · 范围: 0.1–2000

### 溶液总体积

`volume`

mL · 范围: 10–1000

### 体重（用于 mcg/kg/min）

`peso`

kg · 选填 · 范围: 2–300

### 剂量

`dose`

mcg/kg/min 或 mcg/min · 选填 · 范围: 0.001–100

### 泵流速

`vazao`

mL/h · 选填 · 范围: 0.1–999

### 已核对游离碱等效质量、制剂说明书、最终体积、单位及处方剂量？

`contexto`

- `0` — 否
- `1` — 是

## 方法版本

活性成分的量纲换算；不提供剂量范围

## 已记录的公式

浓度，mcg/mL = 活性成分质量，mg × 1000/最终容量。输注速度 = 剂量 ×（mcg/kg/min时体重）×60/浓度。剂量 = 速度 × 浓度/\[60 ×（需要时体重）\]。

## 限制与适用人群

不自动将盐的质量换算为活性碱基质量，也不选择常用剂量。必须核对制剂；药名不会自动填写剂量、浓度或比例。

## 参考文献

- [DailyMed · 去甲肾上腺素 · 游离碱与盐的等效换算及最终浓度](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=52e22892-4fc3-4f53-9f39-0b5c66da3040&version=3)

- [Overgaard CB, Dzavík V. Inotropes and vasopressors: review of physiology and clinical use in cardiovascular disease. Circulation, 2008.](https://doi.org/10.1161/CIRCULATIONAHA.107.728840)

- [Evans L et al. Surviving sepsis campaign: international guidelines for management of sepsis and septic shock 2021. Intensive Care Med, 2021.](https://doi.org/10.1007/s00134-021-06506-y)

## 复现技术测试

在此仓库的根目录中运行 node test.cjs，以重复已记录的合成案例。原始输入、预期结果和容差保持不变。技术测试不构成临床验证。

```sh
node test.cjs
```

tool.json 包含来源、版本和审查范围。examples.json 保留合成输入与预期结果；results.json 记录实际得到的结果。

[记录与参考文献](../tool.json) · [JavaScript代码](../calculator.js) · [参考案例](../examples.json) · [results.json](../results.json)

## 审查与使用条件

尚未开展独立临床审查。

此界面为自主编写的翻译，并非官方或认证版本。尚未完成独立临床审查、专业语言审查或工具权利授权。

公式或分类结果。解释、处理及适用性须结合专业评估和所选来源。

## 许可与署名

Apache-2.0 仅适用于 ELUCENIA 代码。工具、出版物、翻译和数据的权利仍归各自权利人所有。请保留 LICENSE 和 NOTICE。

ELUCENIA · Felipe Guedes · Copyright © 2026
