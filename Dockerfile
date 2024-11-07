# ベースイメージとしてNode.jsを使用
FROM node:16

# アプリケーションディレクトリを作成
WORKDIR /app

# package.jsonとpackage-lock.jsonをコピーして依存関係をインストール
COPY package*.json ./
RUN npm install

# nodemonをグローバルにインストール
RUN npm install -g nodemon
RUN npm install express

# アプリケーションコードをコンテナにコピー
COPY . .

# アプリをポート3000で起動する
EXPOSE 3000

# サーバーをホットリロードモードで起動
CMD ["nodemon", "src/server.js"]
