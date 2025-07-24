# Next.js ポートフォリオサイト

<img width="1413" height="759" alt="スクリーンショット 2025-07-24 11 01 26" src="https://github.com/user-attachments/assets/f9e4a940-64ce-4455-92bd-db0d20332731" />

このプロジェクトは、[`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) でブートストラップされた [Next.js](https://nextjs.org) プロジェクトです。

## はじめに

まず、依存関係をインストールします。

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

次に、開発サーバーを起動します。

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開くと、結果が表示されます。

`app/page.tsx` を変更することでページを編集できます。ファイルを編集すると、ページは自動的に更新されます。

このプロジェクトでは、[Vercel](https://vercel.com/font) の新しいフォントファミリーである [Geist](https://vercel.com/font) を自動的に最適化してロードするために [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) を使用しています。

## 詳細情報

Next.js の詳細については、以下のリソースを参照してください。

-   [Next.js ドキュメント](https://nextjs.org/docs) - Next.js の機能と API について学びます。
-   [Next.js を学ぶ](https://nextjs.org/learn) - インタラクティブな Next.js チュートリアルです。

[Next.js GitHub リポジトリ](https://github.com/vercel/next.js) も確認できます。フィードバックや貢献を歓迎します！

# ポートフォリオサイト

## プロジェクト概要

このプロジェクトは、私の個人ポートフォリオサイトです。私のプロフェッショナルなスキル、これまでのプロジェクト、そして連絡先情報を包括的に紹介することを目的としています。訪問者が私の専門知識と経験を簡単に理解できるよう、直感的で魅力的なインターフェースを提供します。

## 使用技術

*   **フレームワーク**: Next.js
*   **言語**: TypeScript
*   **スタイリング**: Tailwind CSS
*   **デプロイ**: GitHub Pages (Next.jsの静的エクスポート機能を使用)

## サイトを見る

[https://dangornushi.github.io/portfolio/](https://dangornushi.github.io/portfolio/)

## プロジェクト構造

```
.
├── app/                  # Next.jsのルートディレクトリ (ページ、APIルートなど)
├── components/           # 再利用可能なUIコンポーネント
├── public/               # 静的アセット (画像など)
├── docs/                 # GitHub Pagesにデプロイされる静的サイトの出力
└── README.md             # このファイル
