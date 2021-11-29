# relay-next.js example

この relay example では github graphql API を使って、github のログイン名からログイン名に付随する情報を取得します。

この example は主に以下のパッケージから構成されています。

- typescript
- next.js
- relay

## 実行方法

この example を実行する手順は以下の通りです。

1. .env ファイルを作成して環境変数に github のアクセストークンを設定する

以下の例のように設定して下さい。

```
GITHUB_AUTH_TOKEN=*********************************
```

2. relay コンパイラを実行する

```
npm run relay
```

3. 実行する

```
npm run dev
```
