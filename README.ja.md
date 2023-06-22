# Shifter Headless Next JS スターターテンプレート
[![en](https://img.shields.io/badge/lang-en-white.svg)](https://github.com/getshifter/shifter-headless-nextjs-typescript/blob/main/README.md)

![Shifter Headless Next JS スターターテンプレート](https://cdn.getshifter.co/6979d2c20e0f14c46f6b6eac8659c6136a0b4a67/uploads/2023/03/1-1024x626.png)

これは、Next.js と Shifter を使用してヘッドレス WordPress ウェブサイトを構築するためのスターターテンプレートです。フロントエンドとして分離された WordPress をヘッドレス CMS として使用し、高速でスケーラブル、SEO 対応のウェブサイトを作成するための堅固な基盤を提供します。

## 特徴

- Next.js で構築: モダンなウェブアプリケーションを構築するためのパワフルで柔軟な React フレームワーク。
- TypeScript: 型チェックと開発者体験の向上。
- ヘッドレス WordPress: コンテンツを管理するために WordPress をヘッドレス CMS として活用します。
- Shifter: サーバーレス WordPress ホスティングおよびデプロイメントプラットフォームである Shifter とのシームレスな統合。
- スケーラブルなアーキテクチャ: コンテンツの成長とトラフィックの増加に応じてウェブサイトを簡単にスケールアップできます。

## スタートガイド

Shifter Headless Next JS スターターテンプレートを使用するには、以下の手順に従ってください:

1. [GitHub リポジトリ](https://github.com/getshifter/shifter-headless-nextjs-typescript)からテンプレートをクローンするかダウンロードします。
2. `npm install` または `yarn install` を実行して依存関係をインストールします。
3. `.env.example` ファイルを `.env` に名前を変更し、`WORDPRESS_URL` 変数を WordPress サイトの API URL に更新します。
   ```plaintext
   WORDPRESS_URL=https://your-wordpress-site.com/wp-json
   ```
4. `npm run dev` または `yarn dev` を使用して開発サーバーを起動します。
5. ブラウザを開き、`http://localhost:3000` にアクセスしてウェブサイトを確認します。

## 設定

`.env` ファイルで以下の設定オプションを利用できます:

- `WORDPRESS_URL`: ヘッドレス WordPress サイトの API エンドポイントの URL。

## 使用方法

Shifter Headless Next JS スターターテンプレートは、Next.js のウェブサイトやアプリケーションの開発、ビルド、デプロイメントを行うための便利なコマンドを提供しています。以下に、使用可能なコマンドの詳細を示します。

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "npx serve@latest out"
}
```

- **dev**: このコマンドは、Next.js の開発サーバーを起動します。ウェブサイトやアプリケーションのコードを変更すると、ブラウザで自動的にモジュールのリロードが行われます。開発サーバーを実行するには、次のコマンドを実行します。

  ```shell
  npm run dev
  ```

- **build**: build コマンドは、Next.js のウェブサイトやアプリケーションを最適化された本番用のバンドルにコンパイルします。コードの最小化や静的ファイルの生成など、さまざまな最適化が行われます。ウェブサイトやアプリケーションをビルドするには、次のコマンドを実行します。

  ```shell
  npm run build
  ```

  build コマンドを実行すると、プロジェクトのルートに `out` ディレクトリが作成されます。このディレクトリには、ビルドされたウェブサイトやアプリケーションの出力が格納されます。

- **start**: start コマンドは、`serve` パッケージを使用してコンパイルされた Next.js のウェブサイトやアプリケーションを提供します。ビルドプロセス中に作成された `out` ディレクトリからコンテンツを提供します。このコマンドは、ローカルで本番用のウェブサイトやアプリケーションをプレビューする際に便利です。サーバーを起動するには、次のコマンドを実行します。

  ```shell
  npm start
  ```

  デフォルトでは、サーバーは `http://localhost:3000` でアクセス可能です。ポートの設定を変更しない限り、このアドレスでアクセスできます。

これらのコマンドは、Shifter Headless Next JS スターターテンプレートをベースにして、Next.js のウェブサイトやアプリケーションの開発とデプロイメントのライフサイクルを管理するための便利な方法

## Netlifyへのデプロイ

Shifter Headless Next JS スターターテンプレートをNetlifyにデプロイする手順は以下の通りです：

1. Netlifyサイトのビルド設定を構成します：
   - ビルドコマンド： `npm run build`
   - 公開ディレクトリ： `out`

2. 環境変数を設定します：
   - Netlifyサイトの設定の「Advanced build settings」セクションで、「New variable」をクリックして新しい環境変数を追加します。
   - 変数名： `NETLIFY_NEXT_PLUGIN_SKIP`
   - 変数値： `false`

   この環境変数は、ビルドプロセス中にNetlify Next.jsプラグインがスキップされないようにします。

   - 再度「New variable」をクリックして、別の環境変数を追加します。
   - 変数名： `WORDPRESS_URL`
   - 変数値： `<your-wordpress-site-api-url>`

     `<your-wordpress-site-api-url>`を、ヘッドレスWordPressサイトのAPIエンドポイントのURLに置き換えてください。この変数により、Next.jsアプリケーションが正しいWordPress APIに接続できます。

これらのビルド設定と環境変数を構成することで、Shifter Headless Next JS スターターテンプレートをNetlifyにデプロイし、WordPressバックエンドとの正しい統合を確保できます。

## 貢献する

貢献は歓迎します！問題に遭遇した場合や改善の提案がある場合は、GitHub リポジトリで問題をオープンしたり、プルリクエストを提出したりしてください。

## ライセンス

このプロジェクトは [MIT ライセンス](LICENSE)の下で提供されています。自由に使用し、必要に応じて変更してください。