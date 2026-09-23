# 前提条件

1. [Markdown言語](https://www.markdownguide.org/basic-syntax/)についての基本的な理解。

2. もしまだお持ちでなければ、無料の[Github](https://github.com/)アカウントを作成する必要があります。URLの一部となるため、RPGのタイトルをアカウント名にすることをお勧めします。

3. Gitの知識がなくても、ブラウザだけでこの全プロセスを行うことができます。ただし、Github Desktopを学ぶことで、変更を公開する前にローカルでテストできるようになります。

> 独自ドメインを登録済みであれば、このプロセスを使用して、私が作成した https://srd.7thextinctionrpg.com のようなSRDを作成できます。

# プロセス

## Githubでのリポジトリ作成

1. Githubにログインする

2. 公開テンプレート https://github.com/7thExtinctionrpg/RPG_SRD_Template に移動する

3. 「Use this template（このテンプレートを使用する）」をクリックする

![Step3](/_media/Step3.png)

4. 「Create a new repository（新しいリポジトリを作成する）」を選択する

5. リポジトリ名を入力する

![Step5](/_media/Step5.png)

6. 「Private（プライベート）」を選択する

7. 「Create repository（リポジトリを作成する）」を選択する

テンプレートのコピーには5～30秒かかります。完了すれば、あなた自身のコピーが完成します。

8. ".nojekyll"というファイルがあることを確認してください。これはGithub上でWebサイトをホストする際に必要な空のファイルで、これがないとSRDが正しく表示されません。（Github Pagesに対し、公開するファイルをJekyllで処理しないよう指示するものです。）


## コンテンツの追加

### *.mdファイル

.mdファイルはMarkdownファイルです。Markdownは軽量マークアップ言語であり、プレーンテキストドキュメントに書式設定要素を追加するために使用できます。コンテンツのサイズに応じて、ゲームの全情報を1つの*.mdファイルにまとめることも、[7thextinctionrpg.com](https://srd.7thextinctionrpg.com)のように各章を個別のファイルに分けることもできます。"sample.md"に書式の例がいくつか記載されています。

Markdown言語は非常に習得しやすく、構文の全リストについては前述の「前提条件」の項目2にあるリンクを参照してください。

### _Sidebar.md

これはWebサイトの左側にあるメニューおよびナビゲーションペインです。リポジトリにMarkdownファイルを追加したら、その内容が含まれるようにここにファイルを追加する必要があります。既存の書式に従ってください。


## Github Pagesを有効にしてリポジトリをWebサイト化する

1. リポジトリ内の「Settings（設定）」をクリックする

![Website-Step1](/_media/Website-Step1.png)

2. 左側のメニューで「Pages」を選択する

![Website-Step2](/_media/Website-Step2.png)

3. リポジトリを「public（公開）」にしていない場合、以下の2つの選択肢があります。
    a. リポジトリを公開に設定する。これにより、Github Pagesを使用してSRD Webサイトを無料でホストできるようになります。
    b. Githubアカウントをアップグレードする（執筆時点では月額4ドルまたは年額48ドルかかります）。

4. 「Branch（ブランチ）」で「main」を選択し、保存をクリックする

5. 10～20秒待ってからページを更新する

6. https://coweater.github.io/mysrd/ のようなURLが表示されます。

![Website-Step6](/_media/Website-Step6.png)


## フォントの変更

1. /_assets/スタイル.cssファイルを編集する

2. 「body section」の下にsiteFontとheadingFontがあります。

3. これらを好みのフォントに変更してください。


## FontawesomeやMaterial Iconsプラグインを使用してSRDで無料アイコンを表示する

### Fontawesome

Fontawesomeを使用して、無料のアイコンやアニメーションアイコンを取得できます。登録ユーザーはProアイコンを使用できます。

1. [Fontawesome](https://fontawesome.com/icons)でアイコンを探す
2. アイコンを選択する
3. ポップアップウィンドウのHTMLタブで、" "の間のすべてをコピーする

```EXAMPLE
<i クラス="fa-solid fa-dice-d20"></i>
```

4. コピーしたテキストを`:`の間に、スペースを入れずに配置する

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Material Iconsを使用して、さらに多くの無料アイコンを利用できます。

1. [Material Icons](https://fonts.google.com/icons)でアイコンを探す
2. Web spanリンクをコピーし、Markdownファイルに直接挿入する

```markup
<span クラス="material-icons">face</span>
```