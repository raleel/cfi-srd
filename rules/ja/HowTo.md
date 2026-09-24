# 前提条件

1. [Markdown言語](https://www.markdownguide.org/basic-syntax/)についての基本的な理解。

2. もしまだ持っていない場合は、無料の[GitHub](https://github.com/)アカウントを作成する必要があります。RPGの名前をリポジトリ名に使用することをお勧めします。これが、人々がSRDにアクセスするために使用するURLの一部となるためです。

3. gitを知らなくても、ブラウザを通じてこの全プロセスを実行できます。ただし、GitHub Desktopを学習すれば、変更を世界に公開する前にローカルでテストできるようになります。

> ドメイン名を登録済みであれば、このプロセスで作成したサイトを自分のドメインに適用して、私が行ったようなSRDを作成できます https://srd.7thextinctionrpg.com

# プロセス

## GitHubでリポジトリを作成する

1. GitHubにログインします

2. 公開テンプレート https://github.com/7thExtinctionrpg/RPG_SRD_Template に移動します

3. 「Use this template（このテンプレートを使用する）」をクリックします

![Step3](/_media/Step3.png)

4. 「Create a new repository（新しいリポジトリを作成する）」を選択します

5. リポジトリ名を入力します

![Step5](/_media/Step5.png)

6. 「Private（プライベート）」を選択します

7. 「Create repository（リポジトリを作成）」を選択します

テンプレートのコピーに5〜30秒かかり、その後自分専用のコピーが完成します。

8. 「.nojekyll」ファイルがあることを確認してください。これはGitHubでウェブサイトをホストする際に必要な空のファイルであり、これがないとSRDが正しく表示されません。（*GitHub Pagesに対し、公開するファイルをJekyllで処理しないよう指示するものです*）。


## コンテンツを追加する

### *.mdファイル

.mdファイルはMarkdownファイルです。Markdownは軽量なマークアップ言語で、プレーンテキストの文書に書式設定要素を追加するために使用できます。コンテンツのサイズに応じて、ゲームの全情報を1つの*.mdファイルにまとめるか、[7thextinctionrpg.com](https://srd.7thextinctionrpg.com)のように章ごとにファイルを分けることができます。「Sample.md」にいくつかの書式設定例があります。

Markdown言語は非常に習得が容易です。構文の全リストについては、上記「前提条件」の項目2で提供されたリンクを使用してください。

### _sidebar.md

これはウェブサイト左側のメニューおよびナビゲーションペインです。リポジトリにMarkdownファイルを追加したら、その内容が含まれるようにここでファイルを追加する必要があります。既存の書式に従ってください。


## GitHub Pagesを有効にしてリポジトリをウェブサイトに変換する

1. リポジトリの「Settings（設定）」をクリックします

![Website-Step1](/_media/Website-Step1.png)

2. 左側のサイドバーメニューから「Pages」を選択します

![Website-Step2](/_media/Website-Step2.png)

3. リポジトリを「public（公開）」にしていない場合、2つの選択肢があります
    a. リポジトリを公開設定にする。これにより、GitHub Pagesを使用してSRDウェブサイトを無料でホストできるようになります
    b. GitHubアカウントをアップグレードする（執筆時点で月額4ドルまたは年額48ドル）

4. 「Branch（ブランチ）」の下で「main」を選択し、「Save（保存）」をクリックします

5. 10〜20秒待ってからページを更新します

6. https://coweater.github.io/mysrd/ のようなURLが表示されます

![Website-Step6](/_media/Website-Step6.png)


## フォントを変更する

1. /_assets/スタイル.css ファイルを編集します

2. 「body section」の下に siteFont と headingFont があります

3. これらを使用したいフォントに変更します


## FontawesomeやMaterial Iconsプラグインを使用してSRDに無料のアイコンを表示する

### Fontawesome

Fontawesomeを使用して無料のアイコンやアニメーションアイコンを取得します。サブスクライブ済みのユーザーはProアイコンを使用できます

1. [Fontawesome](https://fontawesome.com/icons)でアイコンを探します
2. アイコンを選択します
3. ポップアップウィンドウのHTMLタブで、" "の間のすべてをコピーします

```EXAMPLE
<i クラス="fa-solid fa-dice-d20"></i>
```

4. コピーしたテキストを `:` の間に貼り付けます（スペースは不要）

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

より多くの無料アイコンにはMaterial Iconsを使用してください

1. [Material Icons](https://fonts.google.com/icons)でアイコンを探します
2. ウェブ用のspanリンクをコピーして、Markdownファイルに直接挿入します

```markup
<span クラス="material-icons">face</span>
```