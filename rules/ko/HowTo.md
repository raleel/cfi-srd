# 필수 조건

1. [마크다운 언어](https://www.markdownguide.org/basic-syntax/)에 대한 기본적인 이해.

2. [GitHub](https://github.com/) 계정이 없다면 무료 계정을 생성해야 합니다. 사람들이 귀하의 SRD에 접속할 때 사용할 URL의 일부가 되므로, RPG의 이름을 사용하는 것을 권장합니다.

3. git을 몰라도 브라우저를 통해 이 전체 과정을 수행할 수 있습니다. 다만 GitHub Desktop을 배우면 변경 사항을 실시간으로 게시하기 전에 로컬에서 먼저 테스트할 수 있습니다.

> 도메인 이름을 등록했다면, 이 과정을 통해 제가 만든 것과 같은 SRD를 생성할 수 있습니다: https://srd.7thextinctionrpg.com

# 과정

## GitHub에서 저장소 생성하기

1. Github에 로그인합니다.

2. 공개 템플릿인 https://github.com/7thExtinctionrpg/RPG_SRD_Template 로 이동합니다.

3. "Use this template"(이 템플릿 사용)을 클릭합니다.

![Step3](/_media/Step3.png)

4. "Create a new repository"(새 저장소 생성)를 선택합니다.

5. 저장소 이름을 입력합니다.

![Step5](/_media/Step5.png)

6. 'Private'(비공개)를 선택합니다.

7. 'Create repository'(저장소 생성)를 선택합니다.

템플릿을 복사하는 데 5~30초가 소요되며, 완료되면 자신만의 사본을 갖게 됩니다.

8. ".nojekyll" 파일이 있는지 확인하십시오. 이는 Github에서 웹사이트를 호스팅할 때 필요한 빈 파일로, 이 파일이 없으면 SRD가 제대로 표시되지 않습니다. *(GitHub Pages에게 게시된 파일을 Jekyll을 통해 실행하지 말라고 지시하는 역할).*


## 콘텐츠 추가하기

### *.md 파일

.md 파일은 마크다운 파일입니다. 마크다운은 일반 텍스트 문서에 서식 요소를 추가하는 데 사용할 수 있는 경량 마크업 언어입니다. 콘텐츠의 크기에 따라 게임의 모든 정보를 단일 *.md 파일에 넣거나, 제가 [7thextinctionrpg.com](https://srd.7thextinctionrpg.com)에서 수행한 것처럼 각 챕터별로 별도의 파일을 만들 수 있습니다. "Sample.md" 파일이 몇 가지 서식 예시를 제공합니다.

마크다운 언어는 배우기 매우 쉽습니다. 전체 구문 목록은 위 필수 조건 2번에 제공된 링크를 사용하십시오.

### _sidebar.md

이것은 웹사이트 왼쪽에 있는 메뉴이자 탐색 창입니다. 저장소에 마크다운 파일을 추가한 후, 해당 콘텐츠가 포함되도록 여기에도 파일을 추가해야 합니다. 기존 서식을 따르십시오.


## 저장소를 웹사이트로 전환하도록 Github Pages 활성화하기

1. 저장소에서 'Settings'(설정)를 클릭합니다.

![Website-Step1](/_media/Website-Step1.png)

2. 왼쪽 메뉴에서 'Pages'를 선택합니다.

![Website-Step2](/_media/Website-Step2.png)

3. 저장소를 'public'(공개)으로 설정하지 않았다면 두 가지 선택지가 있습니다.
    a. 저장소를 공개로 전환하여 Github Pages를 사용하여 SRD 웹사이트를 무료로 호스팅합니다.
    b. Github 계정을 업그레이드합니다 (이 글을 쓰는 시점 기준 월 4달러 또는 연간 48달러 비용 발생).

4. 'Branch'(브랜치) 아래에서 'main'을 선택하고 'Save'(저장)를 클릭합니다.

5. 10~20초 기다린 후 페이지를 새로 고침합니다.

6. 이제 https://coweater.github.io/mysrd/ 와 같은 URL을 확인할 수 있습니다.

![Website-Step6](/_media/Website-Step6.png)


## 폰트 변경하기

1. /_assets/style.css 파일을 편집합니다.

2. 'body section'(본문 섹션) 아래에서 siteFont와 headingFont를 찾을 수 있습니다.

3. 사용하려는 폰트로 변경합니다.


## Fontawesome 및/또는 Material Icons 플러그인을 사용하여 SRD에 무료 아이콘 표시하기

### Fontawesome

Fontawesome을 사용하여 무료 아이콘 및 애니메이션 아이콘을 가져옵니다. 구독 사용자는 Pro 아이콘을 사용할 수 있습니다.

1. [Fontawesome](https://fontawesome.com/icons)에서 아이콘을 찾습니다.
2. 아이콘을 선택합니다.
3. 팝업 창의 HTML 탭에서 " " 사이의 모든 내용을 복사합니다.

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. 복사한 텍스트를 공백 없이 `:` 사이에 넣습니다.

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

더 많은 무료 아이콘을 보려면 Material Icons를 사용합니다.

1. [Material Icons](https://fonts.google.com/icons)에서 아이콘을 찾습니다.
2. 웹 span 링크를 복사하여 마크다운 파일에 직접 삽입합니다.

```markup
<span class="material-icons">face</span>
```