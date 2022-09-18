# 静的サイト環境テンプレート（SCSS環境）

## 推奨環境

- [Node v16+ (16.17.0)](https://nodejs.org/en/)

## 依存環境

- [Yarn](https://yarnpkg.com/)
- [Sass](https://sass-lang.com/)
- [PostCSS](https://postcss.org/)
- [Stylelint](https://stylelint.io/)
- [Prettier](https://prettier.io/)
- [destyle.css](https://nicolas-cusan.github.io/destyle.css/)

## 導入方法

```bash
yarn install
```

## コマンド一覧

開発モードでブラウザ立ち上げ（assets配下の変更時 ホットリロード対応）

```bash
yarn start:sass
```
▶︎ sassのコンパイルを監視モードで起動

開発モードでビルド

```bash
yarn build:sass
```
▶︎ sassのコンパイルを開発モードで実行

本番モードでビルド

```bash
yarn release:sass
```
▶︎ sassのコンパイルを本番モードで実行
※納品時に使用


## リンター
stylelintを使用

* [stylelint-config-standard-scss](https://github.com/stylelint-scss/stylelint-config-standard-scss)
* [stylelint-config-recess-order](https://github.com/stormwarning/stylelint-config-recess-order)
* [stylelint-prettier/recommended](https://github.com/prettier/stylelint-prettier)

▶︎ 上記3つをベースとしたルール　＋ 追加のルールを適用。

## フォーマッター
* [Prettier](https://prettier.io/)を使用する
* ベースのルールとして[stylelint-prettier/recommended](https://github.com/prettier/stylelint-prettier)を使用する
* プロパティの並び順は[stylelint-config-recess-order](https://github.com/stormwarning/stylelint-config-recess-order)に準拠する

## 使い方
* リセットCSSは [destyle.css](https://nicolas-cusan.github.io/destyle.css/) を使用。
* scss環境のみを構築したい場合に使ってください。

