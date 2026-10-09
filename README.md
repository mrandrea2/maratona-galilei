# Maratona 42,195

Web app didattica sulla maratona per il Liceo Scientifico a indirizzo sportivo del Liceo Statale "Galileo Galilei" di Verona (classe 2E, a.s. 2026/27).

A cura del prof. Andrea Bertelli, Scienze motorie e sportive.

## Contenuti

Cinque sezioni, una per gruppo di lavoro:

1. **Storia della maratona** – dal mito di Fidippide al 1:59:30 di Sawe
2. **Fisiologia e metabolismi** – sistemi energetici, determinanti della prestazione, il "muro"
3. **Allenamento efficace** – principi, zone, sedute, forza, tapering, pacing, regole FIDAL per i giovani
4. **Alimentazione specifica** – carboidrati, rifornimento, idratazione, RED-S, integratori
5. **Aspetti mentali** – modelli della fatica, RPE, self-talk, obiettivi, ansia, motivazione

Ogni sezione ha: schede "Impara", laboratori interattivi, quiz di 10 domande, scaletta per l'esposizione di 15 minuti, glossario italiano-inglese con pronuncia e fonti scientifiche.

In più: **Sfida a squadre** (fino a 50 domande da proiettare in classe).

## Laboratori

Tieni il passo di Sawe · Metti in ordine la storia · 118 anni di record · Mixer energetico · Grassi o carboidrati · Simulatore del muro · Test di Cooper · Zone di Karvonen · Calcolatore del ritmo · Diario del carico sRPE · Calcolatore dei carboidrati · Pianificatore dei gel · Test del sudore · Pre-gara sì o no · Scala di Borg · Respirazione lenta · Costruisci il tuo self-talk · Associativa o dissociativa

## Struttura

```
index.html             pagina
styles.css             stile
content.js             contenuti delle 5 sezioni
app.js                 interfaccia, laboratori, quiz, sfida
manifest.webmanifest   installazione su smartphone
icons/                 icone
vercel.json            configurazione Vercel
```

Sito statico: nessuna dipendenza, nessun passaggio di build, nessun dato salvato.

## Provarla sul computer

```
python3 -m http.server 8000
```

poi aprire http://localhost:8000
