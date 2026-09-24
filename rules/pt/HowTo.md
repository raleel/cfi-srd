# Pré-requisitos

1. Uma compreensão básica da [linguagem markdown](https://www.markdownguide.org/basic-syntax/).

2. Você precisará criar uma conta gratuita no [GitHub](https://github.com/). Recomendamos que você use o nome do seu RPG, pois isso se tornará parte da URL que as pessoas usarão para acessar o seu SRD.

3. Você pode realizar todo esse processo através do navegador sem conhecer git. Embora aprender o GitHub Desktop permita que você teste quaisquer alterações localmente antes de publicá-las para o mundo ver.

> Se você tiver um nome de domínio registrado, pode usá-lo com este processo para criar um SRD como eu fiz em https://srd.7thextinctionrpg.com

# O Processo

## Criando o Repositório no Github

1. Acesse o Github

2. Navegue até o modelo público https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Clique em "Use this template"

![Step3](/_media/Step3.png)

4. Selecione "Create a new repository"

5. Digite um nome para o repositório

![Step5](/_media/Step5.png)

6. Selecione 'Private'

7. Selecione 'Create repository'

Levará de 5 a 30 segundos para copiar o modelo; em seguida, você terá sua própria cópia.

8. Certifique-se de ter o arquivo ".nojekyll". Este é um arquivo vazio que é necessário ao hospedar um site no Github, caso contrário, o SRD não será exibido corretamente. *(Informa ao GitHub Pages para não executar os arquivos publicados através do Jekyll).*


## Adicionando o Seu Conteúdo

### Arquivos *.md

Arquivos .md são arquivos markdown; Markdown é uma linguagem de marcação leve que você pode usar para adicionar elementos de formatação a documentos de texto simples. Dependendo do tamanho do seu conteúdo, você pode colocar todas as informações do seu jogo em um único arquivo *.md ou, como eu fiz em [7thextinctionrpg.com](https://srd.7thextinctionrpg.com), criar arquivos separados para cada capítulo. O "Sample.md" fornece alguns exemplos de formatação.

A linguagem Markdown é muito fácil de aprender; use o link fornecido no ponto 2 em Pré-requisitos acima para obter uma lista completa da sintaxe.

### _sidebar.md

Este é o seu menu, o painel de navegação no lado esquerdo do site. Depois de adicionar um arquivo markdown ao seu repositório, você precisa adicionar o arquivo aqui para que seu conteúdo seja incluído. Siga a formatação existente.


## Habilitar o Github Pages para transformar o Repositório em um Site

1. No seu repositório, clique em 'Settings'

![Website-Step1](/_media/Website-Step1.png)

2. Selecione 'Pages' no menu do lado esquerdo

![Website-Step2](/_media/Website-Step2.png)

3. Se você não tornou o repositório 'public', você tem duas opções:
    a. Tornar o repositório público, o que permitirá que você use o Github Pages para hospedar seu site SRD gratuitamente
    b. Atualizar sua conta do Github (no momento em que escrevo isso, custa US$ 4 por mês ou uma taxa anual de US$ 48)

4. Em 'Branch', selecione 'main' e clique em Save

5. Aguarde de 10 a 20 segundos e atualize a página

6. Agora você verá sua URL, como https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Alterando Fontes

1. Edite o arquivo /_assets/style.css

2. Sob a 'seção body', você encontrará siteFont e headingFont

3. Altere-as para as fontes que deseja usar


## Usando o plugin Fontawesome e/ou Material Icons para exibir ícones gratuitos no seu SRD

### Fontawesome

Use o Fontawesome para obter ícones gratuitos e ícones animados. Usuários assinantes podem usar Ícones Pro

1. Encontre o ícone no [Fontawesome](https://fontawesome.com/icons)
2. Selecione o ícone
3. Na janela pop-up, sob a aba HTML, copie tudo entre " "

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Coloque o texto copiado entre `:` sem espaços

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Use o Material Icons para mais ícones gratuitos

1. Encontre os ícones no [Material Icons](https://fonts.google.com/icons)
2. Copie e insira o link span da web diretamente nos seus arquivos markdown

```markup
<span class="material-icons">face</span>
```