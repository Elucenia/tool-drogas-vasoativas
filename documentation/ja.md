<!-- ELUCENIA technical documentation · drogas-vasoativas · ja · no clinical/professional/rights approval -->

# 血管作動薬の持続投与

[条件・出典・許諾](https://elucenia.org/ja/tools/drogas-vasoativas)

## 使い方

ポータルでツールを使用するか、ローカルHTTPサーバー経由でindex.htmlを開いてください。言語を選択し、項目を入力して計算してください。

## 入力項目と単位

### 薬剤

`droga`

- `nora` — ノルアドレナリン
- `adre` — アドレナリン
- `dopa` — ドパミン
- `dobuta` — ドブタミン
- `fenil` — フェニレフリン
- `milri` — ミルリノン
- `outra` — その他の薬剤

### 計算

`modo`

- `dose` — 用量から注入速度を算出
- `vazao` — 注入速度から用量を算出

### 投与量の単位

`unidade`

- `kg` — mcg/kg/min
- `min` — mcg/min

### 塩ではなく塩基としての有効成分質量

`massa`

mg · 範囲: 0.1–2000

### 溶液の総量

`volume`

mL · 範囲: 10–1000

### 体重（mcg/kg/min用）

`peso`

kg · 任意 · 範囲: 2–300

### 投与量

`dose`

mcg/kg/min または mcg/min · 任意 · 範囲: 0.001–100

### ポンプ流量

`vazao`

mL/h · 任意 · 範囲: 0.1–999

### 塩基換算質量、製剤添付文書、最終量、単位、処方用量を確認しましたか？

`contexto`

- `0` — いいえ
- `1` — はい

## 方法の版

有効成分の次元換算；用量範囲は示さない

## 記載された計算式

濃度，mcg/mL = 有効成分質量，mg ×1000/最終容量。注入速度 = 用量 ×（mcg/kg/minの場合は体重）×60/濃度。用量 = 注入速度 × 濃度/\[60 ×（必要な場合は体重）\]。

## 限界・対象集団

塩の質量を活性本体の質量に自動換算せず、通常用量を選択しません。製剤の確認が必須です。薬剤名によって用量、濃度、割合は入力されません。

## 参考文献

- [DailyMed · ノルアドレナリン · 遊離塩基と塩の等価換算および最終濃度](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=52e22892-4fc3-4f53-9f39-0b5c66da3040&version=3)

- [Overgaard CB, Dzavík V. Inotropes and vasopressors: review of physiology and clinical use in cardiovascular disease. Circulation, 2008.](https://doi.org/10.1161/CIRCULATIONAHA.107.728840)

- [Evans L et al. Surviving sepsis campaign: international guidelines for management of sepsis and septic shock 2021. Intensive Care Med, 2021.](https://doi.org/10.1007/s00134-021-06506-y)

## 技術テストの再現

このリポジトリのルートディレクトリでnode test.cjsを実行すると、記録された合成ケースを再実行できます。元の入力、期待結果、許容誤差は保持されています。技術テストは臨床的検証を意味しません。

```sh
node test.cjs
```

tool.jsonには出典、版、確認範囲が記録されています。examples.jsonには合成入力と期待結果が保持され、results.jsonには実際に得られた結果が記録されています。

[記録・参考文献](../tool.json) · [JavaScriptコード](../calculator.js) · [参照ケース](../examples.json) · [results.json](../results.json)

## 確認状況と使用条件

独立した臨床レビューは実施されていません。

このインターフェースは独自に作成した翻訳であり、公式版や認証済みの版ではありません。独立した臨床レビュー、専門家による言語レビュー、評価尺度等の権利許諾の確認は実施されていません。

式または分類の結果です。解釈、対応、適用可能性は専門家による評価と選択した出典に依存します。

## ライセンスと帰属表示

Apache-2.0はELUCENIAのコードにのみ適用されます。評価尺度等、出版物、翻訳、データの権利は、それぞれの権利者に帰属します。LICENSEとNOTICEを保持してください。

ELUCENIA · Felipe Guedes · Copyright © 2026
