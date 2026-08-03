# 前提条件

1. [Markdown言語](https://www.markdownguide.org/basic-syntax/)の基本的な理解。

2. [GitHub](https://github.com/)のアカウントを持っていない場合は、無料アカウントを作成する必要があります。作成する際は、RPGのタイトルを使用することをお勧めします。これが、ユーザーがあなたのSRDにアクセスする際に使用するURLの一部となるためです。

3. Gitの知識がなくても、ブラウザだけで全プロセスを実行可能です。ただし、GitHub Desktopを学ぶと、変更を公開する前にローカルでテストできるようになります。

> 既にドメイン名を登録している場合は、このプロセスと組み合わせることで、私が行ったように https://srd.7thextinctionrpg.com のようなSRDを作成できます。

# 手順

## Githubでリポジトリを作成する

1. Githubにログインします。

2. 公開テンプレート https://github.com/7thExtinctionrpg/RPG_SRD_Template に移動します。

3. 「Use this template（このテンプレートを使用する）」をクリックします。

![Step3](/_media/Step3.png)

4. 「Create a new repository（新しいリポジトリを作成する）」を選択します。

5. リポジトリ名を入力します。

![Step5](/_media/Step5.png)

6. 「Private（プライベート）」を選択します。

7. 「Create repository（リポジトリを作成する）」を選択します。

テンプレートのコピーには5～30秒かかります。完了すると、自分専用のコピーが作成されます。

8. ".nojekyll" ファイルが存在することを確認してください。これはGithub上でWebサイトをホストする際に必要な空のファイルで、これがないとSRDが正しく表示されません。（*GitHub Pagesに対し、公開するファイルをJekyllで処理しないよう指示するものです*）。


## コンテンツを追加する

### *.md ファイル

.mdファイルはMarkdownファイルです。Markdownは軽量なマークアップ言語で、プレーンテキストのドキュメントに書式設定要素を追加するために使用します。コンテンツの規模に応じて、ゲームの全情報を1つの*.mdファイルにまとめることも、[7thextinctionrpg.com](https://srd.7thextinctionrpg.com)のように章ごとに別々のファイルを作成することも可能です。"sample.md"に書式設定の例がいくつか記載されています。

Markdown言語は非常に習得が容易です。構文の全リストについては、上記「前提条件」の項目2にあるリンク先を参照してください。

### _Sidebar.md

これはWebサイトの左側にあるメニューおよびナビゲーションペインです。Markdownファイルをリポジトリに追加したら、その内容が含まれるようにここにファイル名を追加する必要があります。既存の書式に従ってください。


## Github Pagesを有効にしてリポジトリをWebサイトにする

1. リポジトリ内で「Settings（設定）」をクリックします。

![Website-Step1](/_media/Website-Step1.png)

2. 左側のメニューで「Pages」を選択します。

![Website-Step2](/_media/Website-Step2.png)

3. リポジトリを「Public（パブリック）」にしていない場合、以下の2つの選択肢があります。
    a. リポジトリをパブリックに設定する。これにより、Github Pagesを使用してSRD Webサイトを無料でホストできるようになります。
    b. Githubアカウントをアップグレードする（執筆時点で月額4ドル、または年額48ドル）。

4. 「Branch（ブランチ）」の下で「main」を選択し、「save（保存）」をクリックします。

5. 10～20秒ほど待ってからページをリロードします。

6. https://coweater.github.io/mysrd/ のようなURLが表示されます。

![Website-Step6](/_media/Website-Step6.png)


## フォントを変更する

1. /_assets/style.css ファイルを編集します。

2. 「body section」の下に siteFont と headingFont があります。

3. これらを使用したいフォントに変更します。


## FontawesomeおよびMaterial Iconsプラグインを使用してSRDに無料アイコンを表示する

### Fontawesome

Fontawesomeを使用して、無料のアイコンやアニメーションアイコンを取得します。登録ユーザーはProアイコンも使用可能です。

1. [Fontawesome](https://fontawesome.com/icons) でアイコンを探します。
2. アイコンを選択します。
3. ポップアップウィンドウの HTML タブで、" " の間にあるすべてのテキストをコピーします。

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. コピーしたテキストを `:` の間にスペースなしで配置します。

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

より多くの無料アイコンには Material Icons を使用します。

1. [Material Icons](https://fonts.google.com/icons) でアイコンを探します。
2. Web span リンクをコピーして、Markdownファイルに直接挿入します。

```markup
<span class="material-icons">face</span>
```