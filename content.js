/* Contenuti della web app "Maratona 42,195" – prof. Andrea Bertelli, Liceo Galilei Verona */
window.SECTIONS = [
/* ===================================================== 1. STORIA */
{
  id: "storia", short: "Storia", n: 1, color: "#C2562E", soft: "#FBEDE6",
  title: "Storia della maratona",
  tag: "Dal mito al sub-2 ore",
  intro: "Dal messaggero Fidippide al 1:59:30 di Sabastian Sawe: 2500 anni di leggende, record, battaglie per i diritti e tecnologia.",
  big: { n: "42,195", l: "km: la distanza nata a Londra nel 1908" },
  lessons: [
    { h: "Il mito: tre fonti, tre storie", body: `
      <p>La battaglia di Maratona (490 a.C.) vide gli Ateniesi sconfiggere i Persiani. La famosa corsa del messaggero però è raccontata in modi diversi.</p>
      <table><tr><th>Fonte</th><th>Epoca</th><th>Cosa racconta</th></tr>
      <tr><td><b>Erodoto</b>, Storie VI</td><td>V sec. a.C.</td><td>Fidippide corre <b>da Atene a Sparta</b> (circa 240 km in 2 giorni) per chiedere aiuto <i>prima</i> della battaglia.</td></tr>
      <tr><td><b>Plutarco</b></td><td>I-II sec. d.C.</td><td>L'annuncio della vittoria lo porta Tersippo, o secondo altri Eucle.</td></tr>
      <tr><td><b>Luciano</b></td><td>II sec. d.C.</td><td>Filippide corre Maratona-Atene, grida "Abbiamo vinto!" e muore.</td></tr></table>
      <div class="box"><b>Critica delle fonti.</b> La fonte più vicina ai fatti (Erodoto) non parla di Maratona-Atene. La versione famosa arriva oltre 600 anni dopo. Lo <i>Spartathlon</i> (246 km, dal 1983) ricostruisce la corsa di Erodoto.</div>` },
    { h: "Atene 1896 e Londra 1908", body: `
      <p>Il filologo Michel Bréal propose a Pierre de Coubertin una gara commemorativa per i primi Giochi moderni. Il 10 aprile 1896 vinse il portatore d'acqua greco <b>Spyridon Louis</b> in circa 2h58'50", su circa 40 km.</p>
      <p>A <b>Londra 1908</b> la gara partì dal Castello di Windsor e arrivò davanti al palco reale: <b>42,195 km</b>. L'emiliano <b>Dorando Pietri</b> entrò per primo nello stadio, stremato; cadde più volte e i giudici lo aiutarono a rialzarsi. Fu <b>squalificato</b> e vinse l'americano Johnny Hayes. La regina gli donò una coppa e la sua sconfitta lo rese famoso nel mondo.</p>
      <p>La distanza di 42,195 km divenne ufficiale nel <b>1921</b>.</p>` },
    { h: "Il muro delle 2 ore", body: `
      <div class="stats"><div><b>1:59:30</b><span>Sabastian Sawe, Londra 26/4/2026: record del mondo ratificato</span></div><div><b>59:01</b><span>la sua seconda metà di gara: negative split</span></div><div><b>1:59:40</b><span>Kipchoge a Vienna 2019: prova non omologabile</span></div></div>
      <ul><li><b>2017, Breaking2 (Monza):</b> Kipchoge 2:00:25 in una prova sperimentale.</li>
      <li><b>2019, INEOS 1:59 (Vienna):</b> 1:59:40, ma con pacer a rotazione, auto che proiettava il ritmo e rifornimento in bici: non è un record.</li>
      <li><b>2026, Londra:</b> Sawe 1:59:30, Kejelcha 1:59:41 al debutto. Per la prima volta sotto le 2 ore in una gara regolare.</li></ul>` },
    { h: "Le donne conquistano la maratona", body: `
      <ul><li><b>1966:</b> Bobbi Gibb corre Boston senza pettorale.</li>
      <li><b>1967:</b> Kathrine Switzer corre Boston con il n. 261; il direttore di gara cerca di strapparle il pettorale.</li>
      <li><b>1972:</b> Boston ammette ufficialmente le donne.</li>
      <li><b>1984:</b> prima maratona olimpica femminile, vince Joan Benoit.</li>
      <li><b>2024:</b> Ruth Chepngetich corre 2:09:56 a Chicago.</li></ul>
      <div class="box warn"><b>Pensiero critico.</b> Nel 2025 Chepngetich è stata squalificata 3 anni per un diuretico vietato. Il record resta valido perché ottenuto prima del controllo positivo. È giusto? Nel 2026 Tigst Assefa ha corso 2:15:41 a Londra in una gara solo femminile.</div>` },
    { h: "L'Italia della maratona", body: `
      <div class="grid2">
      <div class="mini"><b>Dorando Pietri</b><span>Londra 1908: il mito della sconfitta gloriosa.</span></div>
      <div class="mini"><b>Gelindo Bordin</b><span>Oro olimpico a Seoul 1988, vince Boston nel 1990.</span></div>
      <div class="mini"><b>Pizzolato, Poli, Fiacconi</b><span>Vittorie a New York nel 1984, 1985, 1986 e 1998.</span></div>
      <div class="mini"><b>Stefano Baldini</b><span>Oro olimpico ad Atene 2004, sul percorso storico.</span></div>
      <div class="mini"><b>Iliass Aouani</b><span>Record italiano 2h04:26 (Tokyo, 1° marzo 2026).</span></div>
      <div class="mini"><b>Sofiia Yaremchuk</b><span>Record italiano femminile 2h23:14 (Londra 2025).</span></div></div>` },
    { h: "Super shoes: innovazione o doping tecnologico?", body: `
      <div class="stats"><div><b>−4%</b><span>energia spesa in media con Nike Vaporfly (Hoogkamer 2018)</span></div><div><b>40 mm</b><span>spessore massimo della suola su strada</span></div><div><b>29%</b><span>amatori che rendevano al meglio con quella scarpa in uno studio</span></div></div>
      <p>Schiuma leggera che restituisce energia e piastra in carbonio che fa da leva. Dal 2017 quasi tutti i record su strada sono stati corsi con queste scarpe. Per uno studente non sono una priorità: contano tecnica e forza del piede.</p>` },
  ],
  labs: ["pace-sawe", "order-history", "record-chart"],
  plan: [
    ["0-3'", "Il mito e la critica delle fonti", "Partite con la domanda: chi ha corso davvero da Maratona ad Atene?"],
    ["3-6'", "Atene 1896, Londra 1908, Dorando Pietri", "Perché 42,195 km?"],
    ["6-9'", "Record e muro delle 2 ore", "Usate il laboratorio \"Tieni il passo di Sawe\" con il pubblico."],
    ["9-12'", "Le donne e il caso Chepngetich", "Lanciate un mini-dibattito di 1 minuto."],
    ["12-15'", "Italia, super shoes e quiz", "Chiudete con 3 domande della sfida finale."],
  ],
  questions: ["Perché la maratona misura 42,195 km?", "Quale fonte antica è più affidabile e perché?", "Perché il 1:59:40 di Kipchoge non è un record?", "Quali due italiani hanno vinto l'oro olimpico in maratona?", "Le super shoes sono giuste o no?"],
  quiz: [
    { q: "Secondo Erodoto, dove corse Fidippide?", a: ["Da Maratona ad Atene", "Da Atene a Sparta", "Da Sparta a Olimpia", "Da Atene a Corinto"], c: 1, why: "Erodoto racconta una corsa Atene-Sparta per chiedere aiuto prima della battaglia." },
    { q: "In quale città la maratona misurò per la prima volta 42,195 km?", a: ["Atene 1896", "Parigi 1900", "Londra 1908", "Stoccolma 1912"], c: 2, why: "A Londra 1908 il percorso andava dal Castello di Windsor al palco reale." },
    { q: "Perché Dorando Pietri fu squalificato?", a: ["Partì prima del via", "Fu aiutato dai giudici a rialzarsi", "Tagliò il percorso", "Era positivo al doping"], c: 1, why: "Cadde più volte e fu sorretto dai giudici: un aiuto non consentito." },
    { q: "Chi ha corso il primo sub-2 ore ufficiale?", a: ["Eliud Kipchoge", "Kelvin Kiptum", "Sabastian Sawe", "Haile Gebrselassie"], c: 2, why: "Sawe ha corso 1:59:30 a Londra il 26 aprile 2026, record ratificato." },
    { q: "Perché il 1:59:40 di Kipchoge (2019) non è un record?", a: ["Il percorso era corto", "Condizioni non regolari: pacer a rotazione e auto guida", "Era positivo al controllo", "Il tempo fu preso a mano"], c: 1, why: "Era una prova sperimentale, non una gara omologabile." },
    { q: "Chi corse Boston 1967 con il pettorale 261?", a: ["Joan Benoit", "Kathrine Switzer", "Paula Radcliffe", "Bobbi Gibb"], c: 1, why: "Switzer si iscrisse come K. V. Switzer e diventò un simbolo." },
    { q: "In che anno ci fu la prima maratona olimpica femminile?", a: ["1960", "1972", "1984", "1996"], c: 2, why: "Los Angeles 1984, vinta da Joan Benoit." },
    { q: "Quale italiano vinse l'oro olimpico ad Atene 2004?", a: ["Gelindo Bordin", "Stefano Baldini", "Orlando Pizzolato", "Iliass Aouani"], c: 1, why: "Baldini vinse proprio sul percorso storico Maratona-Atene." },
    { q: "Qual è il record italiano maschile di maratona?", a: ["2h07:22", "2h05:24", "2h04:26", "2h06:00"], c: 2, why: "Iliass Aouani, Tokyo, 1° marzo 2026." },
    { q: "Di quanto riducono in media la spesa energetica le super shoes (Hoogkamer 2018)?", a: ["Circa 1%", "Circa 4%", "Circa 10%", "Circa 20%"], c: 1, why: "In media circa il 4%, con grandi differenze individuali." },
  ],
  glossary: [["Maratona", "Marathon", "Gara su strada di 42,195 km"], ["Fonte storica", "Historical source", "Documento sul passato"], ["Record del mondo", "World record", "Miglior prestazione ratificata"], ["Squalifica", "Disqualification / ban", "Esclusione da gara o competizioni"], ["Seconda metà più veloce", "Negative split", "Correre la seconda metà più forte della prima"], ["Lepre", "Pacer / pacemaker", "Atleta che detta il ritmo"], ["Piastra in carbonio", "Carbon plate", "Lamina rigida nella suola"], ["Traguardo", "Finish line", "Linea d'arrivo"]],
  sources: ["Erodoto, Storie VI 105-106; Plutarco, De gloria Atheniensium; Luciano, Pro lapsu", "World Athletics: progressione dei record e ratifica del 1:59:30 di S. Sawe (2026)", "FIDAL: record italiani di maratona", "Athletics Integrity Unit (2025): caso Chepngetich", "Hoogkamer W. et al. (2018), Sports Medicine", "Hébert-Losier K. et al. (2020): risposta individuale alle super shoes"],
},
/* ===================================================== 2. FISIOLOGIA */
{
  id: "fisiologia", short: "Fisiologia", n: 2, color: "#0E7C74", soft: "#E2F3F1",
  title: "Fisiologia e metabolismi",
  tag: "Come il corpo produce energia",
  intro: "ATP, sistemi energetici, VO2max, soglie, carburanti e il famoso \"muro\": cosa succede dentro il corpo durante 42 km.",
  big: { n: "98-99%", l: "dell'energia di una maratona arriva dal sistema aerobico" },
  lessons: [
    { h: "Un'unica moneta: l'ATP", body: `
      <p>Il muscolo usa una sola moneta energetica, l'<b>ATP</b>. Le riserve durano pochi secondi, quindi va ricostruito continuamente da tre sistemi.</p>
      <table><tr><th>Sistema</th><th>Carburante</th><th>Durata</th><th>In maratona</th></tr>
      <tr><td><b>ATP-PCr</b> (anaerobico alattacido)</td><td>Fosfocreatina</td><td>0-10 s</td><td>Partenza, sprint finale</td></tr>
      <tr><td><b>Glicolisi anaerobica</b></td><td>Glucosio → lattato</td><td>10 s - 2 min</td><td>Salite, cambi di ritmo</td></tr>
      <tr><td><b>Ossidativo</b> (aerobico)</td><td>Carboidrati e grassi + O₂</td><td>&gt; 2-3 min</td><td>Circa il 98-99% dell'energia</td></tr></table>
      <div class="box"><b>Il lattato non è il cattivo.</b> Secondo il modello del <i>lactate shuttle</i> (Brooks) è un combustibile: lo usano cuore e fibre lente, e il fegato lo trasforma di nuovo in glucosio. I dolori del giorno dopo non dipendono dal lattato.</div>` },
    { h: "I quattro determinanti della prestazione", body: `
      <p class="formula">Velocità ≈ VO2max × frazione sostenibile ÷ costo della corsa</p>
      <div class="grid2">
      <div class="mini"><b>VO2max</b><span>La "cilindrata": élite 70-85, liceale allenato 55-65, sedentario 35-45 mL/kg/min.</span></div>
      <div class="mini"><b>Soglia</b><span>Quanta parte del VO2max si tiene a lungo: gli élite corrono all'80-85%.</span></div>
      <div class="mini"><b>Economia di corsa</b><span>Ossigeno speso a una certa velocità: la "benzina per km".</span></div>
      <div class="mini"><b>Durabilità</b><span>Non peggiorare dopo ore di corsa: il "quarto determinante" (Maunder 2021, Jones 2023).</span></div></div>
      <p class="small">Modello di Joyner e Coyle (2008) e Bassett e Howley (2000).</p>` },
    { h: "Le soglie", body: `
      <ul><li><b>Prima soglia (LT1/VT1):</b> il lattato inizia a salire (circa 2 mmol/L). Sotto si parla con facilità.</li>
      <li><b>Seconda soglia (LT2/VT2):</b> circa 4 mmol/L; oltre, il lattato si accumula rapidamente.</li>
      <li><b>MLSS:</b> massima intensità con lattato stabile, circa 1 ora di gara.</li>
      <li><b>Velocità critica:</b> separa lo sforzo sostenibile a lungo da quello che porta presto all'esaurimento.</li></ul>
      <p>La maratona si corre tra le due soglie: gli élite vicino alla MLSS, gli amatori vicino alla prima soglia.</p>` },
    { h: "Grassi, carboidrati e il \"muro\"", body: `
      <p><b>Crossover concept</b> (Brooks e Mercier 1994): più si va forte, più si usano carboidrati. Oltre il 60-65% del VO2max prevalgono loro.</p>
      <div class="stats"><div><b>~2000</b><span>kcal nel glicogeno di muscoli e fegato</span></div><div><b>~2900</b><span>kcal per una maratona a 70 kg (1 kcal/kg/km)</span></div><div><b>30-35 km</b><span>dove arriva di solito il "muro"</span></div></div>
      <p>Quando il glicogeno finisce e la glicemia scende: gambe di piombo, calo improvviso del ritmo, confusione. Si previene con carico di carboidrati, rifornimento in gara, partenza regolare e allenamento della durabilità.</p>` },
    { h: "Cosa cambia nel corpo allenato", body: `
      <table><tr><th>Sistema</th><th>Adattamento</th><th>Effetto</th></tr>
      <tr><td><b>Cuore</b></td><td>Ventricolo più grande, più gittata sistolica</td><td>FC a riposo più bassa (anche 40-50)</td></tr>
      <tr><td><b>Sangue</b></td><td>Più plasma ed emoglobina</td><td>Più ossigeno trasportato</td></tr>
      <tr><td><b>Capillari</b></td><td>Più capillari intorno alle fibre</td><td>Più scambio di ossigeno</td></tr>
      <tr><td><b>Mitocondri</b></td><td>Più numerosi e grandi</td><td>Soglia più alta, più grassi usati</td></tr>
      <tr><td><b>Tendini e ossa</b></td><td>Più resistenti, ma lentamente</td><td>Causa di molti infortuni da sovraccarico</td></tr></table>` },
    { h: "Calore, fatica e danno muscolare", body: `
      <ul><li><b>Calore:</b> circa il 75-80% dell'energia diventa calore; si suda da 0,5 a oltre 2 L/h. Perdere più del 2% del peso in liquidi peggiora la prestazione.</li>
      <li><b>Fatica periferica:</b> nel muscolo (fosfato, ioni H+, glicogeno esaurito).</li>
      <li><b>Fatica centrale:</b> nel cervello (meno attivazione, serotonina, temperatura). Vedi la sezione Mente.</li>
      <li><b>Danno muscolare:</b> contrazioni eccentriche, DOMS dopo 24-72 h, recupero completo in 2-4 settimane.</li></ul>` },
  ],
  labs: ["energy-mix", "crossover", "wall-sim", "cooper"],
  plan: [
    ["0-3'", "ATP e tre sistemi energetici", "Usate il mixer energetico: 10 s, 2 min, 2 ore."],
    ["3-6'", "I quattro determinanti", "Spiegate la formula con l'esempio dell'auto."],
    ["6-9'", "Soglie e crossover", "Mostrate il cursore dell'intensità."],
    ["9-12'", "Il muro", "Simulatore del muro: fate scegliere al pubblico il ritmo."],
    ["12-15'", "Adattamenti e quiz", "Chiudete con il test di Cooper e 3 domande."],
  ],
  questions: ["Quale sistema energetico domina in maratona?", "Il lattato è un veleno o un combustibile?", "Quali sono i quattro determinanti della prestazione?", "Perché arriva il muro verso il 30°-35° km?", "Perché tendini e ossa si infortunano più dei muscoli?"],
  quiz: [
    { q: "Qual è l'unica \"moneta\" energetica usata dal muscolo?", a: ["Glucosio", "ATP", "Lattato", "Ossigeno"], c: 1, why: "Tutti i sistemi servono a ricostruire ATP." },
    { q: "Quanta energia della maratona arriva dal sistema aerobico?", a: ["Circa 50%", "Circa 75%", "Circa 98-99%", "Circa 30%"], c: 2, why: "Sforzo lungo e submassimale: domina il sistema ossidativo." },
    { q: "Secondo il modello moderno, il lattato è...", a: ["Un veleno che causa i DOMS", "Un combustibile riutilizzabile", "Un ormone", "Un tipo di grasso"], c: 1, why: "Lactate shuttle: cuore e fibre lente lo usano come carburante." },
    { q: "Quale NON è uno dei determinanti della prestazione?", a: ["VO2max", "Economia di corsa", "Altezza dell'atleta", "Durabilità"], c: 2, why: "I determinanti sono VO2max, soglia, economia e durabilità." },
    { q: "Sotto la prima soglia...", a: ["Non si riesce a parlare", "Si conversa facilmente", "Il lattato supera 8 mmol/L", "Si usa solo l'ATP-PCr"], c: 1, why: "È il principio del talk test." },
    { q: "Aumentando l'intensità, il corpo usa...", a: ["Più grassi", "Più carboidrati", "Solo proteine", "Sempre lo stesso mix"], c: 1, why: "È il crossover concept di Brooks." },
    { q: "Dove arriva di solito il \"muro\"?", a: ["5-10 km", "15-20 km", "30-35 km", "Dopo il traguardo"], c: 2, why: "Quando si esauriscono le riserve di glicogeno." },
    { q: "Quale tessuto si adatta più lentamente all'allenamento?", a: ["Cuore", "Mitocondri", "Tendini e ossa", "Sangue"], c: 2, why: "Per questo aumenti bruschi causano infortuni." },
    { q: "Oltre quale perdita di peso in liquidi la prestazione tende a calare?", a: ["0,5%", "2%", "10%", "20%"], c: 1, why: "Soprattutto al caldo." },
    { q: "I DOMS compaiono...", a: ["Subito durante la corsa", "24-72 ore dopo", "Dopo un mese", "Solo nei principianti"], c: 1, why: "Sono dovuti a microlesioni da contrazioni eccentriche." },
  ],
  glossary: [["Massimo consumo di ossigeno", "VO2max", "Massimo ossigeno usato"], ["Soglia del lattato", "Lactate threshold", "Intensità in cui il lattato si accumula"], ["Economia di corsa", "Running economy", "Ossigeno speso a una velocità"], ["Durabilità", "Durability", "Resistenza al peggioramento"], ["Glicogeno", "Glycogen", "Riserva di carboidrati"], ["Il muro", "Hitting the wall", "Crollo da glicogeno esaurito"], ["Gittata sistolica", "Stroke volume", "Sangue pompato a ogni battito"], ["Dolore muscolare ritardato", "DOMS", "Dolore 24-72 h dopo"]],
  sources: ["Joyner M.J., Coyle E.F. (2008), Journal of Physiology", "Bassett D.R., Howley E.T. (2000), Med Sci Sports Exerc", "Maunder E. et al. (2021), Sports Medicine; Jones A.M. (2023)", "Brooks G.A., Mercier J. (1994): crossover concept", "Cooper K.H. (1968), JAMA: test dei 12 minuti", "ACSM: termoregolazione e idratazione"],
},
/* ===================================================== 3. ALLENAMENTO */
{
  id: "allenamento", short: "Allenamento", n: 3, color: "#C42A3C", soft: "#FBE6E9",
  title: "Allenamento efficace",
  tag: "Principi, zone, sedute, gara",
  intro: "Come si costruisce un allenamento che funziona: principi, intensità, tipi di seduta, forza, prevenzione infortuni, tapering e gestione del ritmo. E cosa vale per chi ha 15 anni.",
  big: { n: "80%", l: "delle sedute deve essere davvero facile" },
  lessons: [
    { h: "Sei principi dell'allenamento", body: `
      <table><tr><th>Principio</th><th>Significato</th><th>Esempio</th></tr>
      <tr><td><b>Sovraccarico</b></td><td>Lo stimolo supera l'abitudine</td><td>Allungare piano il lungo</td></tr>
      <tr><td><b>Specificità</b></td><td>Ci si adatta a ciò che si fa</td><td>Sedute a ritmo gara</td></tr>
      <tr><td><b>Progressività</b></td><td>Aumenti graduali</td><td>+5-10% a settimana, scarico ogni 3-4</td></tr>
      <tr><td><b>Individualizzazione</b></td><td>Ognuno risponde diversamente</td><td>Zone da test personali</td></tr>
      <tr><td><b>Recupero</b></td><td>Ci si adatta riposando</td><td>Giorni facili, sonno</td></tr>
      <tr><td><b>Reversibilità</b></td><td>Si perde ciò che non si allena</td><td>2-4 settimane di stop</td></tr></table>` },
    { h: "Distribuzione dell'intensità", body: `
      <p>Con tre zone (Z1 sotto la prima soglia, Z2 tra le soglie, Z3 sopra la seconda):</p>
      <ul><li><b>Polarizzato</b> (circa 80/5/15): molto facile + molto duro.</li>
      <li><b>Piramidale</b> (circa 75/20/5): il più usato dai maratoneti élite.</li>
      <li><b>Soglia:</b> tanta Z2, l'errore tipico degli amatori.</li>
      <li><b>Norvegese a doppia soglia:</b> molte sedute a soglia controllate con il lattato; molto esigente.</li></ul>
      <div class="box"><b>Cosa dicono gli studi.</b> Negli amatori polarizzato e piramidale danno la stessa prestazione in maratona (3h45 contro 3h46, Esteve-Lanao 2026). Conta di più la costanza.</div>` },
    { h: "Le sedute del maratoneta", body: `
      <table><tr><th>Seduta</th><th>Esempio</th><th>Obiettivo</th></tr>
      <tr><td><b>Lungo</b></td><td>90 min - 3 h (adulti) in Z1-Z2</td><td>Resistenza, durabilità</td></tr>
      <tr><td><b>Tempo run</b></td><td>20-40 min a soglia</td><td>Alzare la soglia</td></tr>
      <tr><td><b>Ripetute lunghe</b></td><td>5 × 2000 m</td><td>Soglia</td></tr>
      <tr><td><b>Ripetute brevi</b></td><td>10 × 400 m</td><td>VO2max, economia</td></tr>
      <tr><td><b>Fartlek</b></td><td>Cambi di ritmo liberi</td><td>Variare, divertirsi</td></tr>
      <tr><td><b>Allunghi</b></td><td>6-10 × 80-100 m</td><td>Tecnica</td></tr></table>` },
    { h: "Forza e prevenzione degli infortuni", body: `
      <p><b>Forza pesante e pliometria</b> migliorano l'economia di corsa (Llanos-Lagos 2024): 2-3 sedute a settimana per 8-12 settimane. La forza non "appesantisce" il corridore e migliora la stiffness del tendine.</p>
      <div class="box"><b>Circuito per studenti:</b> squat 3×8, affondi 3×8, stacchi rumeni 3×8, calf raise 3×15, plank 3×30-45", skip e balzi 3×20 m. Più carico solo con tecnica perfetta.</div>
      <p><b>Infortuni:</b> tra il 19% e il 79% dei corridori si infortuna ogni anno. Evitate aumenti bruschi: il rapporto tra carico della settimana e media delle ultime 4 (ACWR) dovrebbe stare tra 0,8 e 1,3.</p>` },
    { h: "Tapering e pacing", body: `
      <div class="stats"><div><b>2 sett.</b><span>durata ottimale del taper</span></div><div><b>−41/60%</b><span>riduzione del volume</span></div><div><b>=</b><span>intensità e frequenza restano uguali</span></div></div>
      <p class="small">Meta-analisi di Bosquet et al. (2007).</p>
      <p><b>Pacing:</b> vince il ritmo regolare o il negative split. Gli amatori sbagliano partendo troppo forte. Regola pratica: primi 5 km 5-10 s/km più lenti dell'obiettivo.</p>` },
    { h: "Giovani e maratona: le regole", body: `
      <div class="steps">
      <div><b>14-15 anni</b><span>Cadetti: multisport, cross, 1000-3000 m</span></div>
      <div><b>16-17 anni</b><span>Allievi: gare fino a 10 km</span></div>
      <div><b>18-19 anni</b><span>Juniores: fino alla mezza maratona</span></div>
      <div><b>20+</b><span>Maratona consentita (FIDAL)</span></div></div>
      <p>I campioni arrivano alla maratona dopo anni di mezzofondo, cross e pista; il picco arriva tra i 25 e i 35 anni. I rischi veri per i giovani: sovraccarico in crescita, fratture da stress, poca energia, specializzazione precoce, burnout.</p>` },
  ],
  labs: ["zones", "pace-calc", "srpe"],
  plan: [
    ["0-3'", "Principi e supercompensazione", "Chiedete: quando si migliora, mentre ci si allena o mentre si riposa?"],
    ["3-6'", "Distribuzione dell'intensità", "Mostrate i tre modelli e la regola dell'80%."],
    ["6-9'", "Zone e Karvonen", "Calcolate le zone di un volontario del pubblico."],
    ["9-12'", "Forza, infortuni, tapering", "Mostrate il calcolatore del carico."],
    ["12-15'", "Pacing e giovani", "Calcolatore del ritmo: in quanto tempo correrebbe la maratona il pubblico?"],
  ],
  questions: ["Cos'è la supercompensazione?", "Che differenza c'è tra polarizzato e piramidale?", "Come si calcola la FC target con Karvonen?", "Cos'è il negative split?", "Fino a che distanza può gareggiare un Allievo FIDAL?"],
  quiz: [
    { q: "Quando avviene l'adattamento all'allenamento?", a: ["Durante la seduta", "Durante il recupero", "Solo in gara", "Mai"], c: 1, why: "È il principio della supercompensazione." },
    { q: "Quanto si può aumentare il volume a settimana, in modo prudente?", a: ["5-10%", "30%", "50%", "100%"], c: 0, why: "Progressività: aumenti graduali con settimane di scarico." },
    { q: "Qual è l'errore tipico degli amatori?", a: ["Correre troppo piano", "Correre sempre a ritmo medio-duro", "Fare troppa forza", "Dormire troppo"], c: 1, why: "Il modello \"soglia\" accumula fatica senza progressi." },
    { q: "Formula di Karvonen: FC target =", a: ["220 − età", "FC riposo + % × (FCmax − FC riposo)", "FCmax × 2", "FC riposo × %"], c: 1, why: "Usa la frequenza cardiaca di riserva." },
    { q: "Il taper ottimale dura circa...", a: ["2 giorni", "2 settimane", "2 mesi", "6 mesi"], c: 1, why: "Bosquet 2007: circa 2 settimane, volume −41/60%." },
    { q: "Durante il taper bisogna...", a: ["Ridurre volume e mantenere l'intensità", "Smettere di correre", "Aumentare il volume", "Correre solo piano"], c: 0, why: "Ridurre l'intensità fa perdere brillantezza." },
    { q: "Che cos'è il negative split?", a: ["Correre la seconda metà più veloce", "Partire fortissimo", "Fermarsi a metà", "Un tipo di scarpa"], c: 0, why: "È la strategia di quasi tutti i record." },
    { q: "Fino a che distanza può gareggiare un Allievo (16-17 anni) FIDAL?", a: ["5 km", "10 km", "Mezza maratona", "Maratona"], c: 1, why: "Norme FIDAL: Allievi fino a 10 km." },
    { q: "La forza pesante per il maratoneta...", a: ["Lo appesantisce", "Migliora l'economia di corsa", "È vietata ai giovani", "Serve solo ai velocisti"], c: 1, why: "Llanos-Lagos 2024: carichi elevati e pliometria." },
    { q: "Un ACWR di 1,8 indica...", a: ["Carico ben dosato", "Un picco di carico a rischio", "Riposo eccessivo", "Nulla"], c: 1, why: "Meglio restare tra 0,8 e 1,3." },
  ],
  glossary: [["Allenamento", "Training", "Sedute per migliorare"], ["Distribuzione dell'intensità", "Intensity distribution", "Tempo in ogni zona"], ["Corsa a soglia", "Tempo run", "Corsa continua a soglia"], ["Ripetute", "Intervals", "Tratti veloci con recupero"], ["Scarico pre-gara", "Taper", "Riduzione del volume prima della gara"], ["Gestione del ritmo", "Pacing", "Distribuire lo sforzo"], ["Allenamento di forza", "Strength training", "Esercizi con carichi"], ["Infortunio da sovraccarico", "Overuse injury", "Lesione da carico ripetuto"]],
  sources: ["Seiler S., Kjerland G.Ø. (2006)", "Silva Oliveira P. et al. (2024), Sports Medicine 54", "Esteve-Lanao J. et al. (2026): polarizzato vs piramidale in maratoneti amatori", "Bosquet L. et al. (2007), Med Sci Sports Exerc", "Llanos-Lagos C. et al. (2024), Sports Medicine 54", "Foster C. (2001): metodo sRPE", "FIDAL, Norme attività 2025; IMMDA, giovani e maratona"],
},
/* ===================================================== 4. ALIMENTAZIONE */
{
  id: "alimentazione", short: "Alimentazione", n: 4, color: "#C8661A", soft: "#FCEEDF",
  title: "Alimentazione specifica",
  tag: "Energia, carboidrati, idratazione",
  intro: "Mangiare abbastanza, carboidrati al momento giusto, rifornimento in gara, bere secondo la sete, recupero, RED-S e integratori: cosa dice la scienza.",
  big: { n: "90 g/h", l: "carboidrati massimi raccomandati in gara" },
  lessons: [
    { h: "Prima regola: mangiare abbastanza", body: `
      <div class="stats"><div><b>2500-3500</b><span>kcal/giorno per un giovane corridore che si allena 1 h al giorno</span></div><div><b>45</b><span>kcal per kg di massa magra: disponibilità ottimale</span></div><div><b>&lt; 30</b><span>soglia di rischio per la salute</span></div></div>
      <p><b>Disponibilità energetica</b> = (energia mangiata − energia spesa con lo sport) ÷ kg di massa magra. Per un adolescente l'energia serve anche a crescere.</p>` },
    { h: "Macronutrienti", body: `
      <table><tr><th>Carico di allenamento</th><th>Carboidrati g/kg/giorno</th></tr>
      <tr><td>Leggero (tecnica)</td><td>3-5</td></tr><tr><td>Moderato (circa 1 h/giorno)</td><td>5-7</td></tr>
      <tr><td>Alto (1-3 h/giorno)</td><td>6-10</td></tr><tr><td>Molto alto (4-5 h/giorno)</td><td>8-12</td></tr></table>
      <ul><li><b>Proteine:</b> 1,2-2,0 g/kg/giorno, circa 20-25 g per pasto.</li><li><b>Grassi:</b> 20-35% dell'energia, mai sotto il 20%.</li>
      <li><b>Fuel for the work required:</b> più carboidrati nei giorni duri, meno in quelli facili. Per i ragazzi niente allenamenti a digiuno.</li></ul>` },
    { h: "Prima della gara", body: `
      <p><b>Carico di carboidrati:</b> 10-12 g/kg/giorno nelle 36-48 ore prima. Esempio: atleta di 65 kg → 650-780 g al giorno. Meno fibre e grassi. È normale pesare 1-2 kg in più (il glicogeno trattiene acqua).</p>
      <p><b>Pasto pre-gara:</b> 1-4 g/kg di carboidrati 1-4 ore prima: fette biscottate e marmellata, banana, riso, pane e miele.</p>
      <div class="box warn"><b>Regola d'oro:</b> mai provare cibi nuovi il giorno della gara.</div>` },
    { h: "Rifornimento in gara", body: `
      <table><tr><th>Durata</th><th>Carboidrati</th></tr><tr><td>&lt; 45 min</td><td>Non necessari</td></tr><tr><td>45-75 min</td><td>Piccole quantità o sciacqui di bocca</td></tr><tr><td>1-2,5 h</td><td>30-60 g/h</td></tr><tr><td>&gt; 2,5-3 h</td><td>Fino a 90 g/h con glucosio + fruttosio</td></tr></table>
      <p>Glucosio e fruttosio entrano nell'intestino da "porte" diverse (SGLT1 e GLUT5): insieme si supera il limite di 60 g/h. L'intestino si allena: 2 settimane di <i>gut training</i> riducono i disturbi. 120 g/h è ancora sperimentale.</p>` },
    { h: "Bere: né troppo poco, né troppo", body: `
      <ul><li><b>Obiettivo:</b> non perdere più del 2% del peso e <b>non aumentare mai di peso</b> in gara.</li>
      <li><b>Iponatriemia:</b> sodio troppo basso, causato soprattutto dal bere troppa acqua. Forma senza sintomi nello 0-13% dei maratoneti; con sintomi circa l'1%, può essere mortale.</li>
      <li><b>Regola pratica:</b> bere secondo la sete.</li>
      <li><b>Dopo:</b> 1,25-1,5 L per ogni kg perso, con un po' di sodio.</li></ul>` },
    { h: "Recupero, micronutrienti e RED-S", body: `
      <p><b>Recupero:</b> carboidrati 1,0-1,2 g/kg/h nelle prime ore se serve ricaricare in fretta, proteine 20-25 g. Esempio: latte al cioccolato, yogurt con cereali e frutta.</p>
      <p><b>Ferro</b> (controllare con il medico, integrare solo dopo diagnosi), <b>calcio e vitamina D</b> (in adolescenza si costruisce circa il 90% della massa ossea), <b>B12</b> nelle diete vegetali.</p>
      <div class="box warn"><b>RED-S (IOC 2023):</b> se l'energia non basta si alterano ciclo, ormoni, ossa e difese. Segnali: ciclo assente da 3 mesi, fratture da stress, stanchezza continua, ossessione per il peso. Parlatene con docente, medico o nutrizionista.</div>` },
    { h: "Integratori", body: `
      <table><tr><th>Integratore</th><th>Effetto</th><th>Note</th></tr>
      <tr><td><b>Caffeina</b></td><td>Migliora l'endurance</td><td>Prudenza sotto i 18 anni</td></tr>
      <tr><td><b>Nitrati</b> (barbabietola)</td><td>Più resistenza</td><td>Meno efficace negli allenati</td></tr>
      <tr><td><b>Bicarbonato</b></td><td>Sforzi di circa 1 minuto</td><td>Poco utile in maratona</td></tr>
      <tr><td><b>Creatina</b></td><td>Forza e sprint</td><td>+1-2 kg: svantaggio in maratona</td></tr>
      <tr><td><b>Gel e bevande</b></td><td>Rifornimento</td><td>Alimenti, non miracoli</td></tr></table>
      <p><b>Da evitare:</b> brucia-grassi non certificati (rischio doping), energy drink, mega-dosi, diete restrittive.</p>` },
  ],
  labs: ["carbs", "fuel", "sweat", "food-sort"],
  plan: [
    ["0-3'", "Mangiare abbastanza", "Spiegate la disponibilità energetica con un esempio."],
    ["3-6'", "Carboidrati e carico pre-gara", "Calcolatore dei carboidrati su un volontario."],
    ["6-9'", "Rifornimento in gara", "Pianificatore dei gel: quanti per 3 ore e mezza?"],
    ["9-12'", "Idratazione e iponatriemia", "Mostrate il test del sudore."],
    ["12-15'", "RED-S e integratori", "Gioco \"Pre-gara sì o no\" con il pubblico."],
  ],
  questions: ["Cos'è la disponibilità energetica?", "Quanti carboidrati prima di una maratona?", "Perché glucosio e fruttosio insieme?", "Perché bere troppa acqua è pericoloso?", "Quali sono i segnali della RED-S?"],
  quiz: [
    { q: "Quanti carboidrati nelle 36-48 h prima di una maratona?", a: ["2-3 g/kg/giorno", "5 g/kg/giorno", "10-12 g/kg/giorno", "20 g/kg/giorno"], c: 2, why: "Protocollo moderno di carico (Thomas et al. 2016)." },
    { q: "Quanti carboidrati all'ora in una gara oltre 2,5-3 ore?", a: ["Nessuno", "Fino a 90 g/h", "Almeno 200 g/h", "10 g/h"], c: 1, why: "Con miscele glucosio + fruttosio." },
    { q: "Perché si usano insieme glucosio e fruttosio?", a: ["Hanno un sapore migliore", "Usano trasportatori intestinali diversi", "Costano meno", "Il fruttosio è una proteina"], c: 1, why: "SGLT1 e GLUT5: si assorbe di più." },
    { q: "La causa principale dell'iponatriemia in maratona è...", a: ["Bere troppo poco", "Bere troppa acqua", "Mangiare troppo sale", "Correre troppo forte"], c: 1, why: "Il sodio si \"diluisce\"." },
    { q: "Qual è la regola pratica per bere in gara?", a: ["1 litro ogni 5 km", "Bere secondo la sete", "Non bere mai", "Bere a ogni ristoro 500 ml"], c: 1, why: "Evita sia la disidratazione sia l'iponatriemia." },
    { q: "Il pasto pre-gara va fatto...", a: ["10 minuti prima", "1-4 ore prima", "Il giorno prima", "Durante il riscaldamento"], c: 1, why: "1-4 g/kg di carboidrati, pochi grassi e fibre." },
    { q: "Quale di questi è un segnale d'allarme della RED-S?", a: ["Fame dopo l'allenamento", "Fratture da stress", "Sudore abbondante", "Sete"], c: 1, why: "Insieme a ciclo assente, stanchezza continua, calo di prestazione." },
    { q: "Il ferro va integrato...", a: ["Sempre da tutti gli sportivi", "Solo dopo una diagnosi medica", "Mai", "Solo in gara"], c: 1, why: "Il ferro in eccesso è dannoso." },
    { q: "Quale integratore è poco utile in maratona?", a: ["Caffeina", "Gel di carboidrati", "Bicarbonato", "Bevanda sportiva"], c: 2, why: "Serve per sforzi di circa 1 minuto." },
    { q: "Il test del sudore: prima 60,0 kg, dopo 59,4 kg, bevuti 0,3 L. Sudore perso?", a: ["0,3 L", "0,6 L", "0,9 L", "1,5 L"], c: 2, why: "0,6 kg persi + 0,3 L bevuti = 0,9 L." },
  ],
  glossary: [["Carboidrati", "Carbohydrates (carbs)", "Zuccheri e amidi"], ["Carico di carboidrati", "Carb loading", "Riempire le riserve"], ["Rifornimento", "Fueling", "Mangiare e bere in gara"], ["Allenare l'intestino", "Gut training", "Abituarsi a mangiare correndo"], ["Iponatriemia", "Hyponatremia", "Sodio troppo basso"], ["Disponibilità energetica", "Energy availability", "Energia che resta al corpo"], ["Integratore", "Supplement", "Prodotto aggiunto alla dieta"], ["Recupero", "Recovery", "Tornare in forma dopo lo sforzo"]],
  sources: ["Thomas D.T., Erdman K.A., Burke L.M. (2016): ACSM/AND/DC Nutrition and Athletic Performance", "Mountjoy M. et al. (2023), BJSM: IOC Consensus on REDs", "Maughan R.J. et al. (2018), BJSM: IOC Consensus on supplements", "Hew-Butler T. et al. (2015): consenso sull'iponatriemia", "Costa R. et al. (2017); Miall A. et al. (2018): gut training", "Ravikanti et al. (2025), J Appl Physiol: 120 g/h"],
},
/* ===================================================== 5. MENTE */
{
  id: "mente", short: "Mente", n: 5, color: "#5E44A8", soft: "#EEEAF8",
  title: "Aspetti mentali",
  tag: "Fatica, sforzo, motivazione",
  intro: "La fatica nasce anche nel cervello. Percezione dello sforzo, self-talk, obiettivi, visualizzazione, ansia, motivazione e prevenzione del burnout.",
  big: { n: "+18%", l: "resistenza dopo 2 settimane di self-talk allenato" },
  lessons: [
    { h: "Due modelli della fatica", body: `
      <div class="grid2">
      <div class="mini"><b>Governatore centrale (Noakes)</b><span>Il cervello frena in anticipo i muscoli per proteggere il corpo. La fatica è un'"emozione" protettiva. Modello molto discusso.</span></div>
      <div class="mini"><b>Psicobiologico (Marcora)</b><span>Ci si ferma quando lo sforzo percepito raggiunge il massimo che si è disposti a tollerare. Due leve: ridurre lo sforzo percepito o aumentare la motivazione.</span></div></div>
      <div class="box"><b>Domanda per voi:</b> vi è mai capitato di sentirvi finiti e poi sprintare quando avete visto il traguardo? Cosa era cambiato: i muscoli o la testa?</div>` },
    { h: "Percezione dello sforzo (RPE)", body: `
      <ul><li><b>Scala di Borg 6-20:</b> moltiplicando per 10 si ottiene circa la frequenza cardiaca di un giovane.</li>
      <li><b>Scala CR-10:</b> da 0 (riposo) a 10 (massimo).</li>
      <li>Nasce soprattutto dal segnale che il cervello invia ai muscoli.</li>
      <li>È un'abilità che si impara, utile per allenarsi e per gestire il ritmo.</li></ul>
      <p><b>Dove mettere l'attenzione:</b> strategie <b>associative</b> (respiro, ritmo, tecnica) e <b>dissociative</b> (musica, paesaggio). L'atleta esperto le alterna in modo flessibile.</p>` },
    { h: "Self-talk", body: `
      <div class="stats"><div><b>0,48</b><span>effetto medio sulla prestazione (meta-analisi di 32 studi)</span></div><div><b>+18%</b><span>tempo all'esaurimento dopo 2 settimane di allenamento</span></div><div><b>7,3 → 6,4</b><span>sforzo percepito a metà prova</span></div></div>
      <p>Hatzigeorgiadis et al. (2011); Blanchfield et al. (2014). Funziona di più se viene allenato. Tre tipi di frase: <b>istruttiva</b> ("braccia rilassate"), <b>motivazionale</b> ("ce la faccio"), <b>per le crisi</b> ("un km alla volta").</p>` },
    { h: "Obiettivi e visualizzazione", body: `
      <ul><li><b>Di processo:</b> cosa faccio ("bere a ogni ristoro").</li><li><b>Di prestazione:</b> il mio risultato ("migliorare il personale").</li><li><b>Di risultato:</b> il confronto con gli altri ("vincere"): non dipende solo da me.</li></ul>
      <p>Obiettivi <b>SMART</b> e su più livelli (A, B, C). <b>Imagery</b> secondo il modello PETTLEP: immaginare con tutti i sensi percorso, ritmo, rifornimenti e la crisi del 30° km con la sua soluzione.</p>` },
    { h: "Ansia e mental toughness", body: `
      <p>Un po' di attivazione è utile: conta come la interpretiamo ("sono pronto" invece di "sono in pericolo").</p>
      <ul><li><b>Rivalutazione:</b> "il cuore batte perché mi sto preparando".</li><li><b>Respirazione lenta:</b> circa 6 respiri al minuto.</li><li><b>Routine pre-gara</b> sempre uguale.</li><li><b>Piani se... allora:</b> "se al 25° km sono in crisi, allora prendo un gel e seguo l'atleta davanti".</li></ul>
      <p><b>Mental toughness</b> si costruisce con sfide graduali e supporto. Non significa ignorare il dolore di un infortunio.</p>` },
    { h: "Motivazione, fatica mentale, burnout", body: `
      <p><b>Autodeterminazione</b> (Deci e Ryan): la motivazione di qualità nasce da <b>autonomia</b>, <b>competenza</b> e <b>relazione</b>.</p>
      <p><b>Fatica mentale</b> (Marcora 2009): 90 minuti di compito mentale riducono la resistenza di circa il 15%, senza cambiare cuore e metabolismo. Dopo una giornata di verifiche la seduta dura pesa di più.</p>
      <div class="box warn"><b>Overtraining e burnout:</b> stanchezza continua, sonno disturbato, irritabilità, infezioni, perdita di interesse. Prevenzione: varietà, pause, equilibrio scuola-sport, dialogo con allenatore e docente.</div>` },
  ],
  labs: ["borg", "breath", "selftalk", "attention-sort"],
  plan: [
    ["0-3'", "Domanda di partenza e due modelli", "Chiedete al pubblico dello sprint finale."],
    ["3-6'", "RPE e attenzione", "Scala di Borg interattiva su un volontario."],
    ["6-9'", "Self-talk", "Fate costruire una frase a tutto il pubblico."],
    ["9-12'", "Obiettivi, visualizzazione, ansia", "1 minuto di respirazione guidata con il pacer."],
    ["12-15'", "Motivazione e burnout", "Gioco \"Associativa o dissociativa\" e domande."],
  ],
  questions: ["Secondo Marcora perché un atleta si ferma?", "Differenza tra strategie associative e dissociative?", "Quali sono i tre tipi di obiettivo?", "Quali sono i tre bisogni dell'autodeterminazione?", "Perché dopo le verifiche l'allenamento sembra più duro?"],
  quiz: [
    { q: "Secondo Marcora, un atleta si ferma quando...", a: ["Il lattato arriva a 4 mmol/L", "Lo sforzo percepito supera ciò che è disposto a tollerare", "Finisce l'ATP", "Il cuore si ferma"], c: 1, why: "Modello psicobiologico: percezione dello sforzo e motivazione." },
    { q: "Sulla scala di Borg 6-20, un 15 corrisponde circa a...", a: ["60 bpm", "100 bpm", "150 bpm", "200 bpm"], c: 2, why: "Moltiplicando per 10 si ottiene circa la FC di un giovane." },
    { q: "Concentrarsi su respiro e tecnica è una strategia...", a: ["Dissociativa", "Associativa", "Proibita", "Inutile"], c: 1, why: "Associativa: l'attenzione va al corpo." },
    { q: "L'effetto medio del self-talk (meta-analisi 2011) è...", a: ["Nullo", "Moderato (0,48)", "Negativo", "Enorme (5,0)"], c: 1, why: "Hatzigeorgiadis et al., 32 studi." },
    { q: "\"Bere a ogni ristoro\" è un obiettivo di...", a: ["Risultato", "Processo", "Prestazione", "Nessun tipo"], c: 1, why: "Riguarda cosa faccio, dipende da me." },
    { q: "Quale NON è un bisogno dell'autodeterminazione?", a: ["Autonomia", "Competenza", "Relazione", "Vittoria"], c: 3, why: "I tre bisogni sono autonomia, competenza e relazione." },
    { q: "La fatica mentale riduce la resistenza perché...", a: ["Danneggia il cuore", "Aumenta lo sforzo percepito", "Consuma tutto il glicogeno", "Abbassa il VO2max"], c: 1, why: "Cuore e metabolismo non cambiano (Marcora 2009)." },
    { q: "Una tecnica valida contro l'ansia pre-gara è...", a: ["Respirazione lenta, circa 6 respiri/min", "Bere un energy drink", "Saltare il riscaldamento", "Pensare solo al risultato"], c: 0, why: "Insieme a rivalutazione, routine e piani se... allora." },
    { q: "Il modello PETTLEP riguarda...", a: ["L'alimentazione", "La visualizzazione", "Le scarpe", "Il doping"], c: 1, why: "Rende l'immaginazione simile alla realtà." },
    { q: "Un segnale di possibile overtraining è...", a: ["Dormire bene", "Stanchezza continua e irritabilità", "Migliorare i tempi", "Avere fame"], c: 1, why: "Insieme a infezioni frequenti e perdita di motivazione." },
  ],
  glossary: [["Percezione dello sforzo", "Rating of perceived exertion (RPE)", "Quanto sembra duro lo sforzo"], ["Dialogo interno", "Self-talk", "Frasi che diciamo a noi stessi"], ["Definizione degli obiettivi", "Goal setting", "Scegliere e scrivere obiettivi"], ["Visualizzazione", "Imagery", "Allenarsi immaginando"], ["Resilienza mentale", "Mental toughness", "Tenere duro nelle difficoltà"], ["Fatica mentale", "Mental fatigue", "Stanchezza da sforzo cognitivo"], ["Sovrallenamento", "Overtraining", "Troppo carico, poco recupero"], ["Esaurimento", "Burnout", "Perdita di energia e interesse"]],
  sources: ["Marcora S.M. (2008); Marcora, Staiano, Manning (2009), J Appl Physiol", "Noakes T.D. (2001): governatore centrale", "Hatzigeorgiadis A. et al. (2011), Perspectives on Psychological Science", "Blanchfield A.W. et al. (2014), Med Sci Sports Exerc", "Brick N. et al. (2014): strategie attentive", "Holmes P., Collins D. (2001): PETTLEP; Deci e Ryan: autodeterminazione", "Meeusen R. et al. (2013): overtraining"],
},
];
