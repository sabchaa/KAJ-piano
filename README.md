# KAJ-piano

Webová aplikace, která umožňuje hru na piano. Uživatel si může zapnout metronom, který pomůže uživateli udžet správné tempo. Hru na piano si může uživatel nahrát a poté stáhnout.

Aplikace běží zde: https://sabchaa.github.io/KAJ-piano/

## Hra na piano
* pomocí kláves zobrazených na klávesách piana
* levým tlačítkem myši

## Metronom
#### Bpm (beats per minute)
* nastavitelné pomocí slideru nebo pomocí tlačítek po stranách slideru

#### Počet dob
* nastavitelné pomocí tlačítek

## Nahrávání
* pro spuštění nahrávání klikněte na tlačítko "Record" (tlačítko začne blikat)
* pro vypnutí nahrávání na tlačítko opět klikněte
* výsledná nahrávka je zobrazena vedle tlačítka record, nahrávka se automaticky přehraje
* pro stažení nahrávky klikněte na tři tečky a tlačítko "Download"

## Využití Web Audio API
* generování zvuku metronomu
* využití audioContext.currentTime pro přesnost metronomu
* nahrávání

## Nepovinné kategorie
|Položka         |Splněno?                       |
|----------------|-------------------------------|
|Validita |Funguje ve všech zmíněných prohlížečích, ale je nutno povolit přehrávání zvuků v nastavení prohlížeče |
|Grafika - SVG / Canvas |Ano |
|Média - Audio/Video |Ano |
|Formulářové prvky |Ne, pro ovládání aplikace jsou efektivnější tlačítka |
|Vendor prefixy |Ano |
|CSS3 transformace 2D/3D |Ano |
|Media queries |Ne |
|Použití JS frameworku či knihovny |Ne |
|Funkční historie |Ne, není potřeba, jelikož je to single page aplikace |
|Ovládání medií |Ano, Web Audio API |
|Offline aplikace |Ne, aplikace nepoužívá server |
|JS práce se SVG |Ano |
