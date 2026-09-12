# Prasyarat

1. Pemahaman dhasar babagan [basa markdown](https://www.markdownguide.org/basic-syntax/).

2. Sampeyan kudu nggawe akun [github](https://github.com/) gratis yen durung duwe. Disaranake supaya nggunakake jeneng RPG sampeyan amarga iki bakal dadi bagean saka URL sing bakal digunakake wong liya kanggo ngakses SRD sampeyan. 

3. Sampeyan bisa nindakake kabeh proses iki liwat browser tanpa kudu ngerti git. Nanging, sinau github desktop bakal ngidini sampeyan nyoba pangowahan apa wae kanthi lokal sadurunge ditayangake supaya bisa dideleng kabeh wong.

> Yen sampeyan wis ndaftar jeneng domain, sampeyan bisa nggunakake iki bebarengan karo proses iki kanggo nggawe SRD kaya sing daklakoni https://srd.7thextinctionrpg.com

# Prosèsé

## Nggawe Repositori ing Github

1. Login menyang Github

2. Navigasi menyang template umum https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Klik "Use this template"

![Step3](/_media/Step3.png)

4. Pilih "Create a new repository"

5. Ketik jeneng repositori

![Step5](/_media/Step5.png)

6. Pilih 'Private' 

7. Pilih 'Create repository'

Bakal mbutuhake wektu 5-30 detik kanggo nyalin template, banjur sampeyan bakal duwe salinan dhewe.

8. Priksa manawa sampeyan duwe file ".nojekyll", iki file kosong sing dibutuhake nalika hosting situs web ing Github, yen ora, SRD ora bakal katon kanthi bener. *(Menehi ngerti GitHub Pages supaya ora nglakokake file sing diterbitake liwat Jekyll).*


## Nambah Konten Sampeyan

### File *.md

File .md yaiku file markdown, Markdown minangka basa markup sing entheng sing bisa sampeyan gunakake kanggo nambah elemen format menyang dokumen teks biasa. Gumantung saka ukuran konten sampeyan, sampeyan bisa nyelehake kabeh informasi game sampeyan ing siji file *.md, utawa kaya sing daklakoni ing [7thextinctionrpg.com](https://srd.7thextinctionrpg.com) kanthi nggawe file sing kapisah kanggo saben bab. "sample.md" nyedhiyakake sawetara conto format. 

Basa markdown gampang banget disinaoni, gunakake link sing kasedhiya ing poin 2 ing Prasyarat ing ndhuwur kanggo dhaptar sintaks sing lengkap. 

### _Sidebar.md

Iki minangka menu utawa panel navigasi sampeyan ing sisih kiwa situs web. Sawise sampeyan nambah file markdown menyang repositori sampeyan, sampeyan kudu nambah file kasebut ing kene supaya isine bisa kalebu. Tindakake format sing wis ana.


## Aktifake Github Pages kanggo Ngowahi Repositori dadi Situs Web

1. Ing repositori sampeyan klik 'Settings'

![Website-Step1](/_media/Website-Step1.png)

2. Pilih 'Pages' ing menu sisih kiwa

![Website-Step2](/_media/Website-Step2.png)

3. Yen sampeyan durung nggawe repositori 'public', sampeyan duwe rong pilihan:
    a. Gawe repositori dadi publik supaya sampeyan bisa nggunakake Github pages kanggo hosting Situs Web SRD sampeyan kanthi gratis
    b. Nganyarke akun Github sampeyan (nalika nulis iki regane $4 saben wulan utawa ragad taunan $48)

4. Ing ngisor 'Branch' pilih 'main' lan klik save

5. Enteni 10-20 detik banjur refresh kaca kasebut

6. Sampeyan saiki bakal weruh URL sampeyan kayata https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Ngowahi Font

1. Sunting file /_assets/style.css 

2. Ing 'body section' sampeyan bakal nemokake siteFont & headingFont

3. Owahi iki dadi font sing pengin sampeyan gunakake


## Nggunakake Plugin Fontawesome lan/utawa Material Icons kanggo nampilake ikon gratis ing SRD sampeyan

### Fontawesome

Gunakake Fontawesome kanggo entuk ikon gratis lan ikon animasi. Pangguna sing langganan bisa nggunakake Pro Icons

1. Goleki ikon ing [Fontawesome](https://fontawesome.com/icons)
2. Pilih ikon kasebut
3. Ing jendela popup, ing tab HTML salin kabeh ing antarane " "

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Selehake teks sing disalin ing antarane `:` tanpa spasi

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Gunakake Material Icons kanggo luwih akeh ikon gratis

1. Goleki ikon ing [Material Icons](https://fonts.google.com/icons)
2. Salin & lebokake link span web langsung menyang file markdown sampeyan

```markup
<span class="material-icons">face</span>
```