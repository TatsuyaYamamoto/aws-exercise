# 課題

下記の要件を満たすEC2インスタンスをセットアップする．本リポジトリ
に含まれる[サンプルアプリのソースコードを利用](USAGE.md)しても良い．

## 必須要件
 - Webアプリケーションは3種類の画像をランダムに表示するHTMLをレンダリングすること．
 - Webアプリケーションは特権ユーザ以外の権限で動かすこと．
 - EC2インスタンス再起動後にWebアプリケーションが自動起動すること．
 - ELBの裏にEC2を配備すること．
 - EC2インスタンスはインターネットから非公開のセグメントに配置し，SSHログインは踏み台ホスト経由とする．
 - Elastic IPは使用しないこと．

## 期待要件
 - 画像をS3に配置
 - 画像の配信をアプリケーションサーバから分離
 - マルチAZにEC2インスタンスを配備
 - オートスケーリング対応
 - CloudFormationテンプレート化
 - Elastic BeansTalkでのデプロイ