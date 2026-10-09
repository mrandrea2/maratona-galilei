/* Maratona 42,195 – web app didattica · prof. Andrea Bertelli · Liceo Galilei Verona */
(function () {
"use strict";
const S = window.SECTIONS;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const app = $("#app");
const fmt = (n, d = 0) => Number(n).toLocaleString("it-IT", { minimumFractionDigits: d, maximumFractionDigits: d });
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const hms = (sec) => { sec = Math.round(sec); const h = Math.floor(sec / 3600), m = Math.floor(sec % 3600 / 60), s = sec % 60; return (h ? h + ":" + String(m).padStart(2, "0") : m) + ":" + String(s).padStart(2, "0"); };
const mmss = (sec) => { sec = Math.round(sec); return Math.floor(sec / 60) + ":" + String(sec % 60).padStart(2, "0"); };
const interp = (pts, x) => { if (x <= pts[0][0]) return pts[0][1]; for (let i = 1; i < pts.length; i++) { if (x <= pts[i][0]) { const [x0, y0] = pts[i - 1], [x1, y1] = pts[i]; return y0 + (y1 - y0) * (x - x0) / (x1 - x0); } } return pts[pts.length - 1][1]; };
const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

const ICONS = {
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  chart: '<path d="M4 20V4M4 20h16"/><path d="M7 15l4-4 3 3 5-6"/>',
  list: '<path d="M8 6h12M8 12h12M8 18h12"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/>',
  bolt: '<path d="M13 3L5 13h6l-1 8 8-10h-6z"/>',
  flame: '<path d="M12 3c1 4 5 5 5 10a5 5 0 01-10 0c0-3 2-4 2-7 2 1 3 2 3 4"/>',
  heart: '<path d="M12 20s-7-4.5-7-10a4 4 0 017-2.5A4 4 0 0119 10c0 5.5-7 10-7 10z"/>',
  drop: '<path d="M12 3s6 7 6 11a6 6 0 01-12 0c0-4 6-11 6-11z"/>',
  brain: '<path d="M9 4a3 3 0 00-3 3 3 3 0 00-2 5 3 3 0 002 5 3 3 0 006 0V4a3 3 0 00-3 0zM15 4a3 3 0 013 3 3 3 0 012 5 3 3 0 01-2 5 3 3 0 01-6 0"/>',
  wind: '<path d="M3 8h11a3 3 0 10-3-3M3 12h15a3 3 0 11-3 3M3 16h8"/>',
  run: '<circle cx="14" cy="4" r="2"/><path d="M6 21l4-6 3 2 1 4M10 15l1-5 4 2 3-1M11 10L8 8 5 10"/>',
  speak: '<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16 9a3 3 0 010 6M18.5 6.5a7 7 0 010 11"/>',
};
const ico = (n, s = 22) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n] || ICONS.bolt}</svg>`;

/* ================================================================= LABORATORI */
const LABS = {
/* ---------- STORIA ---------- */
"pace-sawe": { t: "Tieni il passo di Sawe?", s: "Converti un tempo di maratona in ritmo e scopri quanto è veloce un record", i: "run", render(el) {
  el.innerHTML = `<div class="ctrl">
    <label>Tempo in maratona (h:mm:ss)<input id="pt" value="1:59:30"></label>
    <label>Il tuo tempo sui 100 m (secondi)<input id="p100" type="number" step="0.1" value="15"></label>
    <label>Il tuo tempo sui 1000 m (min:sec)<input id="p1k" value="4:30"></label></div>
    <div class="kpis" id="po"></div><div class="out" style="margin-top:14px" id="pc"></div>
    <div class="row" style="margin-top:12px"><span class="small">Prova anche:</span>
    <button class="chip" data-t="2:01:39">Kipchoge 2018</button><button class="chip" data-t="2:04:26">Aouani 2026</button><button class="chip" data-t="2:09:56">Chepngetich 2024</button><button class="chip" data-t="2:55:18">Hayes 1908</button><button class="chip" data-t="4:30:00">Amatore</button></div>`;
  const parse = (t) => { const p = t.trim().split(":").map(Number); if (p.some(isNaN)) return NaN; return p.reduce((a, v) => a * 60 + v, 0); };
  const up = () => {
    const T = parse($("#pt", el).value); if (!(T > 0)) return;
    const pace = T / 42.195, kmh = 42195 / T * 3.6, s100 = T / 421.95;
    $("#po", el).innerHTML = `<div class="kpi"><b>${mmss(pace)}</b><span>ritmo al km</span></div><div class="kpi"><b>${fmt(kmh, 1)}</b><span>km/h di media</span></div><div class="kpi"><b>${fmt(s100, 1)} s</b><span>ogni 100 m, per 422 volte</span></div><div class="kpi"><b>${mmss(pace * 0.4)}</b><span>ogni giro di pista (400 m)</span></div>`;
    const my100 = parseFloat($("#p100", el).value), my1k = parse($("#p1k", el).value);
    let msg = "";
    if (my100 > 0) msg += my100 <= s100 ? `Sui 100 m saresti più veloce di questo ritmo… ma solo per 100 metri su 42.195! ` : `Sui 100 m a tutta saresti più lento di ${fmt(my100 - s100, 1)} s rispetto a questo ritmo di maratona. `;
    if (my1k > 0) { const ratio = pace / my1k; msg += ratio < 1 ? `Il tuo miglior 1000 m (${mmss(my1k)}) è più lento di questo ritmo di maratona: andrebbe tenuto per 42 km di fila.` : `Il tuo miglior 1000 m (${mmss(my1k)}) è più veloce di questo ritmo: ora prova a immaginarne 42 di fila!`; }
    $("#pc", el).innerHTML = msg;
  };
  el.addEventListener("input", up);
  $$(".chip", el).forEach((b) => b.onclick = () => { $("#pt", el).value = b.dataset.t; up(); });
  up();
} },

"order-history": { t: "Metti in ordine la storia", s: "Riordina le tappe dalla più antica alla più recente", i: "list", render(el) {
  const ev = [["490 a.C.", "Battaglia di Maratona"], ["1896", "Spyridon Louis vince la prima maratona olimpica"], ["1908", "Dorando Pietri a Londra: nascono i 42,195 km"], ["1967", "Kathrine Switzer corre Boston con il n. 261"], ["1984", "Prima maratona olimpica femminile"], ["2004", "Stefano Baldini oro olimpico ad Atene"], ["2019", "Kipchoge 1:59:40 a Vienna (non omologabile)"], ["2026", "Sabastian Sawe 1:59:30 a Londra"]];
  let cur = shuffle(ev.map((e, i) => i));
  const draw = (check) => {
    el.innerHTML = `<div class="sortlist">${cur.map((k, i) => `<div class="sortitem ${check ? (k === i ? "ok" : "ko") : ""}"><b style="width:22px">${i + 1}</b><span class="t">${ev[k][1]}${check ? ` <b>(${ev[k][0]})</b>` : ""}</span><button data-u="${i}" aria-label="Sposta su">↑</button><button data-d="${i}" aria-label="Sposta giù">↓</button></div>`).join("")}</div>
    <div class="row" style="margin-top:14px"><button class="btn c sm" id="ck">Controlla</button><button class="btn ghost sm" id="mx">Rimescola</button><span id="res" class="feedback"></span></div>`;
    $$("[data-u]", el).forEach((b) => b.onclick = () => { const i = +b.dataset.u; if (i > 0) [cur[i - 1], cur[i]] = [cur[i], cur[i - 1]]; draw(); });
    $$("[data-d]", el).forEach((b) => b.onclick = () => { const i = +b.dataset.d; if (i < cur.length - 1) [cur[i + 1], cur[i]] = [cur[i], cur[i + 1]]; draw(); });
    $("#ck", el).onclick = () => { draw(true); const ok = cur.filter((k, i) => k === i).length; const r = $("#res", el); r.textContent = ok === ev.length ? "Perfetto: tutte in ordine!" : `${ok} su ${ev.length} al posto giusto.`; r.className = "feedback " + (ok === ev.length ? "ok" : "ko"); };
    $("#mx", el).onclick = () => { cur = shuffle(cur); draw(); };
  };
  draw();
} },

"record-chart": { t: "118 anni di record", s: "Sposta il cursore per vedere come è cambiato il record del mondo maschile", i: "chart", render(el) {
  const R = [[1908, 175.3, "Johnny Hayes"], [1925, 149.6, "Albert Michelsen"], [1953, 138.7, "Jim Peters"], [1960, 135.3, "Abebe Bikila"], [1969, 128.6, "Derek Clayton"], [1988, 126.8, "Belayneh Dinsamo"], [1999, 125.9, "Khalid Khannouchi"], [2008, 124.0, "Haile Gebrselassie"], [2014, 123.0, "Dennis Kimetto"], [2018, 121.7, "Eliud Kipchoge"], [2022, 121.2, "Eliud Kipchoge"], [2023, 120.6, "Kelvin Kiptum"], [2026, 119.5, "Sabastian Sawe"]];
  const W = 700, H = 300, p = { l: 46, r: 16, t: 14, b: 30 };
  const x = (y) => p.l + (y - 1908) / (2026 - 1908) * (W - p.l - p.r), yv = (v) => p.t + (180 - v) / (180 - 115) * (H - p.t - p.b);
  const path = R.map((r, i) => (i ? "H" + x(r[0]).toFixed(1) + "V" : "M" + x(r[0]).toFixed(1) + ",") + yv(r[1]).toFixed(1)).join("") + "H" + x(2026);
  const ticks = [120, 135, 150, 165, 180];
  el.innerHTML = `<div class="chart"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Record del mondo maschile di maratona dal 1908 al 2026">
    ${ticks.map((t) => `<line x1="${p.l}" x2="${W - p.r}" y1="${yv(t)}" y2="${yv(t)}" stroke="#D5DAE5"/><text x="${p.l - 8}" y="${yv(t) + 4}" text-anchor="end" font-size="14" fill="#3D4862">${Math.floor(t / 60)}h${String(t % 60).padStart(2, "0")}</text>`).join("")}
    <line x1="${p.l}" x2="${W - p.r}" y1="${yv(120)}" y2="${yv(120)}" stroke="#B0202F" stroke-dasharray="5 4"/><text x="${W - p.r}" y="${yv(120) - 6}" text-anchor="end" fill="#B0202F" font-weight="700" font-size="14">muro delle 2 ore</text>
    ${[1920, 1950, 1980, 2010].map((y) => `<text x="${x(y)}" y="${H - 8}" text-anchor="middle" font-size="14" fill="#3D4862">${y}</text>`).join("")}
    <path d="${path}" fill="none" stroke="var(--c)" stroke-width="3"/>
    ${R.map((r) => `<circle cx="${x(r[0])}" cy="${yv(r[1])}" r="4" fill="var(--c)"/>`).join("")}
    <line id="cl" x1="0" x2="0" y1="${p.t}" y2="${H - p.b}" stroke="#0B1424" stroke-width="2"/><circle id="cd" r="8" fill="#0B1424"/></svg></div>
    <input type="range" min="1908" max="2026" value="2026" id="ry" aria-label="Anno">
    <div class="out" id="ro"></div>`;
  const up = () => {
    const yr = +$("#ry", el).value; let cur = R[0]; R.forEach((r) => { if (r[0] <= yr) cur = r; });
    $("#cl", el).setAttribute("x1", x(yr)); $("#cl", el).setAttribute("x2", x(yr));
    $("#cd", el).setAttribute("cx", x(yr)); $("#cd", el).setAttribute("cy", yv(cur[1]));
    const t = cur[1] * 60; $("#ro", el).innerHTML = `Nel <b>${yr}</b> il record del mondo era <span class="big" style="font-size:36px">${hms(t)}</span> di <b>${cur[2]}</b> (dal ${cur[0]}). Rispetto al 1908: <b>${fmt(175.3 - cur[1], 1)} minuti</b> in meno.`;
  };
  $("#ry", el).oninput = up; up();
  el.insertAdjacentHTML("beforeend", `<p class="note">Selezione delle principali tappe della progressione del record (World Athletics). Tempi arrotondati al decimo di minuto.</p>`);
} },

/* ---------- FISIOLOGIA ---------- */
"energy-mix": { t: "Il mixer energetico", s: "Quanto contribuisce ogni sistema in base alla durata dello sforzo", i: "bolt", render(el) {
  const T = [5, 10, 30, 60, 120, 240, 600, 1800, 3600, 7200, 10800];
  const AER = [[5, 4], [10, 6], [30, 20], [60, 40], [75, 50], [120, 63], [240, 79], [600, 94], [1800, 98], [7200, 99], [10800, 99]];
  const PCR = [[5, .7], [10, .55], [30, .3], [60, .2], [120, .15], [10800, .1]];
  const lab = (s) => s < 60 ? s + " s" : s < 3600 ? s / 60 + " min" : s / 3600 + " h";
  const ex = { 5: "partenza, 30 m", 10: "100 m", 30: "200 m", 60: "400 m", 120: "800 m", 240: "1500 m", 600: "3000 m", 1800: "10 km", 3600: "mezza maratona élite", 7200: "maratona élite", 10800: "maratona amatore" };
  el.innerHTML = `<label class="ctrl" style="display:block"><b>Durata dello sforzo: <span id="ed"></span></b><input type="range" min="0" max="${T.length - 1}" value="9" id="er"></label>
    <div class="bar" id="eb"></div><div class="legend"><span><i style="background:#F2B33D"></i>ATP-PCr</span><span><i style="background:#B0202F"></i>Glicolisi anaerobica</span><span><i style="background:#0B6B64"></i>Aerobico</span></div>
    <div class="out" style="margin-top:14px" id="eo"></div><p class="note">Stime didattiche arrotondate, basate sulla revisione di Gastin (2001) sul contributo dei sistemi energetici in sforzi massimali.</p>`;
  const up = () => {
    const s = T[+$("#er", el).value], a = interp(AER, s), an = 100 - a, pc = an * interp(PCR, s), gl = an - pc;
    $("#ed", el).textContent = lab(s) + " (" + ex[s] + ")";
    $("#eb", el).innerHTML = `<div style="flex-basis:${pc}%;background:#F2B33D;color:#0B1424">${pc >= 7 ? Math.round(pc) + "%" : ""}</div><div style="flex-basis:${gl}%;background:#B0202F">${gl >= 7 ? Math.round(gl) + "%" : ""}</div><div style="flex-basis:${a}%;background:#0B6B64">${a >= 7 ? Math.round(a) + "%" : ""}</div>`;
    $("#eo", el).innerHTML = a >= 50 ? `Domina il <b>sistema aerobico</b> (${Math.round(a)}%). ${a > 95 ? "È la situazione della maratona: conta l'ossigeno." : ""}` : `Dominano i <b>sistemi anaerobici</b> (${Math.round(an)}%): sforzo breve e intenso.`;
  };
  $("#er", el).oninput = up; up();
} },

"crossover": { t: "Grassi o carboidrati?", s: "Sposta l'intensità e guarda come cambia il carburante (crossover concept)", i: "flame", render(el) {
  const CHO = [[25, 20], [45, 45], [65, 70], [85, 90], [95, 97]];
  el.innerHTML = `<label class="ctrl" style="display:block"><b>Intensità: <span id="ci"></span>% del VO2max</b><input type="range" min="25" max="95" value="65" id="cr"></label>
    <div class="bar" id="cb"></div><div class="legend"><span><i style="background:#0B6B64"></i>Carboidrati</span><span><i style="background:#F2B33D"></i>Grassi</span></div>
    <div class="out" style="margin-top:14px" id="co"></div><p class="note">Schema didattico della tendenza descritta da Brooks e Mercier (1994); i valori individuali variano con allenamento e alimentazione.</p>`;
  const up = () => {
    const v = +$("#cr", el).value, c = interp(CHO, v), f = 100 - c;
    $("#ci", el).textContent = v;
    $("#cb", el).innerHTML = `<div style="flex-basis:${c}%;background:#0B6B64">${Math.round(c)}%</div><div style="flex-basis:${f}%;background:#F2B33D;color:#0B1424">${f >= 6 ? Math.round(f) + "%" : ""}</div>`;
    const z = v < 55 ? "camminata veloce o corsa lentissima: si usano molti grassi" : v < 70 ? "corsa facile o ritmo maratona amatore" : v < 85 ? "ritmo maratona élite / mezza maratona" : "ritmo 10 km o ripetute: quasi solo carboidrati";
    $("#co", el).innerHTML = `A questa intensità: <b>${z}</b>.`;
  };
  $("#cr", el).oninput = up; up();
} },

"wall-sim": { t: "Simulatore del muro", s: "Arrivi al traguardo o \"sbatti contro il muro\"? Modello semplificato", i: "flame", render(el) {
  el.innerHTML = `<div class="ctrl">
    <label>Peso (kg)<input type="number" id="wk" value="65" min="40" max="110"></label>
    <label>Tempo obiettivo<select id="wt"><option value="2.5">2h30</option><option value="3">3h00</option><option value="3.5" selected>3h30</option><option value="4">4h00</option><option value="4.5">4h30</option><option value="5">5h00</option></select></label>
    <label>Riserve di glicogeno<select id="wg"><option value="1600">Normali (circa 400 g)</option><option value="2200" selected>Dopo il carico (circa 550 g)</option></select></label>
    <label>Gel da 22 g all'ora<select id="wn"><option>0</option><option>1</option><option selected>2</option><option>3</option><option>4</option></select></label></div>
    <div class="out" id="wo"></div>
    <p class="note">Modello didattico: costo 1 kcal/kg/km, quota da carboidrati 75% (2h30-3h), 65% (3h30-4h), 55% (oltre), assorbimento massimo 90 g/h. Non è una previsione individuale.</p>`;
  const up = () => {
    const kg = +$("#wk", el).value || 65, h = +$("#wt", el).value, gly0 = +$("#wg", el).value, gels = +$("#wn", el).value;
    const frac = h <= 3 ? .75 : h <= 4 ? .65 : .55, hperkm = h / 42.195;
    const exo = Math.min(gels * 22, 90) * 4; // kcal/h
    let gly = gly0, km = 0, wall = null;
    for (km = 0; km < 42.195; km += 0.1) { gly -= kg * 0.1 * frac - exo * hperkm * 0.1; if (gly <= 0) { wall = km; break; } }
    const tot = kg * 42.195;
    $("#wo", el).innerHTML = wall === null
      ? `<div class="big" style="color:var(--ok)">Arrivi!</div><p>Ti restano circa <b>${Math.round(gly)} kcal</b> di glicogeno al traguardo. La maratona costa circa <b>${Math.round(tot)} kcal</b> per ${kg} kg.</p>`
      : `<div class="big">Muro al km ${fmt(wall, 1)}</div><p>Il glicogeno finisce prima del traguardo. Prova ad aggiungere il carico di carboidrati o qualche gel all'ora. La maratona costa circa <b>${Math.round(tot)} kcal</b> per ${kg} kg.</p>`;
  };
  el.addEventListener("input", up); up();
} },

"cooper": { t: "Test di Cooper", s: "12 minuti di corsa: stima il VO2max dalla distanza percorsa", i: "heart", render(el) {
  el.innerHTML = `<div class="ctrl"><label>Metri percorsi in 12 minuti<input type="number" id="cm" value="2600" step="50"></label><label>Sesso<select id="cs"><option value="m">Maschio</option><option value="f">Femmina</option></select></label></div>
    <div class="kpis" id="cpo"></div><p class="note">Formula di Cooper (1968): VO2max = (metri − 504,9) ÷ 44,73. Fasce indicative per 15-19 anni.</p>`;
  const up = () => {
    const d = +$("#cm", el).value, v = (d - 504.9) / 44.73, f = $("#cs", el).value === "f";
    const b = f ? [[2100, "Da migliorare"], [2300, "Sufficiente"], [2500, "Buono"], [2700, "Ottimo"], [99999, "Eccellente"]] : [[2400, "Da migliorare"], [2600, "Sufficiente"], [2800, "Buono"], [3000, "Ottimo"], [99999, "Eccellente"]];
    const cat = b.find((x) => d < x[0])[1];
    $("#cpo", el).innerHTML = `<div class="kpi"><b>${d > 600 ? fmt(v, 1) : "—"}</b><span>VO2max stimato (mL/kg/min)</span></div><div class="kpi"><b>${cat}</b><span>fascia indicativa</span></div><div class="kpi"><b>${d > 0 ? mmss(720 / (d / 1000)) : "—"}</b><span>ritmo medio al km</span></div>`;
  };
  el.addEventListener("input", up); up();
} },

/* ---------- ALLENAMENTO ---------- */
"zones": { t: "Calcola le tue zone (Karvonen)", s: "Frequenza cardiaca di riserva: le zone personali di allenamento", i: "heart", render(el) {
  el.innerHTML = `<div class="ctrl"><label>Età<input type="number" id="za" value="16"></label><label>FC massima misurata (vuoto = stima)<input type="number" id="zm" placeholder="es. 203"></label><label>FC a riposo (al mattino)<input type="number" id="zr" value="60"></label></div>
    <div id="zo"></div><p class="note">Stima della FCmax con la formula di Tanaka (208 − 0,7 × età), più precisa di 220 − età; l'errore resta di ±10 battiti. Meglio misurarla con un test.</p>`;
  const Z = [["Z1 Recupero", .5, .6, "Conversazione completa"], ["Z2 Facile / fondo", .6, .7, "Si parla a frasi intere"], ["Z3 Medio / ritmo maratona", .7, .8, "Frasi brevi"], ["Z4 Soglia", .8, .9, "Poche parole"], ["Z5 VO2max", .9, 1, "Impossibile parlare"]];
  const up = () => {
    const age = +$("#za", el).value, mm = +$("#zm", el).value, rest = +$("#zr", el).value;
    const max = mm > 120 ? mm : Math.round(208 - 0.7 * age), rr = max - rest;
    $("#zo", el).innerHTML = `<div class="kpis" style="margin-bottom:14px"><div class="kpi"><b>${max}</b><span>FC massima ${mm > 120 ? "misurata" : "stimata"}</span></div><div class="kpi"><b>${rr}</b><span>FC di riserva</span></div></div>
      <table class="mini"><tr><th>Zona</th><th>% riserva</th><th>Battiti/min</th><th>Talk test</th></tr>${Z.map((z) => `<tr><td><b>${z[0]}</b></td><td>${z[1] * 100}-${z[2] * 100}%</td><td><b>${Math.round(rest + z[1] * rr)}-${Math.round(rest + z[2] * rr)}</b></td><td>${z[3]}</td></tr>`).join("")}</table>`;
  };
  el.addEventListener("input", up); up();
} },

"pace-calc": { t: "Calcolatore del ritmo e dei passaggi", s: "Scegli distanza e tempo: ritmo al km e passaggi intermedi, anche in negative split", i: "clock", render(el) {
  el.innerHTML = `<div class="ctrl"><label>Distanza<select id="cd"><option value="5">5 km</option><option value="10" selected>10 km</option><option value="21.0975">Mezza maratona</option><option value="42.195">Maratona</option></select></label>
    <label>Tempo obiettivo (h:mm:ss)<input id="ct" value="0:55:00"></label>
    <label>Strategia<select id="cs"><option value="0">Ritmo costante</option><option value="0.02">Negative split (2ª metà −2%)</option></select></label></div>
    <div class="kpis" id="ck"></div><div id="cp" style="margin-top:14px"></div>`;
  const up = () => {
    const D = +$("#cd", el).value, p = $("#ct", el).value.split(":").map(Number), T = p.reduce((a, v) => a * 60 + v, 0), neg = +$("#cs", el).value;
    if (!(T > 0)) return;
    const half = D / 2, t1 = T / 2 * (1 + neg), t2 = T - t1, p1 = t1 / half, p2 = t2 / half;
    const marks = [1, 2, 5, 10, 15, 21.0975, 25, 30, 35, 40].filter((k) => k < D).concat([D]);
    const at = (k) => k <= half ? k * p1 : t1 + (k - half) * p2;
    $("#ck", el).innerHTML = `<div class="kpi"><b>${mmss(T / D)}</b><span>ritmo medio al km</span></div><div class="kpi"><b>${fmt(D / T * 3600, 1)}</b><span>km/h</span></div>${neg ? `<div class="kpi"><b>${mmss(p1)} → ${mmss(p2)}</b><span>prima e seconda metà</span></div>` : ""}`;
    $("#cp", el).innerHTML = `<table class="mini"><tr><th>Passaggio</th><th>Tempo</th></tr>${marks.map((k) => `<tr><td>${k === 21.0975 ? "Mezza (21,1 km)" : k === 42.195 ? "Traguardo (42,195 km)" : fmt(k, k % 1 ? 1 : 0) + " km"}</td><td><b>${hms(at(k))}</b></td></tr>`).join("")}</table>`;
  };
  $("#cd", el).onchange = () => { const d = +$("#cd", el).value; $("#ct", el).value = d === 5 ? "0:25:00" : d === 10 ? "0:55:00" : d < 30 ? "1:55:00" : "3:59:00"; up(); };
  el.addEventListener("input", up); up();
} },

"srpe": { t: "Il diario del carico (sRPE)", s: "Minuti × sforzo percepito: calcola il carico della settimana e il rischio", i: "chart", render(el) {
  const days = ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"];
  const def = [[45, 4], [0, 0], [50, 7], [30, 3], [0, 0], [60, 5], [0, 0]];
  el.innerHTML = `<table class="mini"><tr><th>Giorno</th><th>Minuti</th><th>RPE (0-10)</th><th>Carico</th></tr>${days.map((d, i) => `<tr><td><b>${d}</b></td><td><input type="number" min="0" data-m="${i}" value="${def[i][0]}" class="field" style="width:90px"></td><td><input type="number" min="0" max="10" data-r="${i}" value="${def[i][1]}" class="field" style="width:80px"></td><td data-l="${i}"></td></tr>`).join("")}</table>
    <div class="ctrl"><label>Carico medio delle 3 settimane precedenti (UA)<input type="number" id="sp" value="900"></label></div>
    <div class="kpis" id="so"></div><p class="note">Metodo sRPE di Foster (2001). ACWR = carico di questa settimana ÷ media delle ultime 4 settimane. Zona prudente indicativa: 0,8-1,3.</p>`;
  const up = () => {
    let tot = 0; const L = [];
    days.forEach((d, i) => { const l = (+$(`[data-m="${i}"]`, el).value || 0) * (+$(`[data-r="${i}"]`, el).value || 0); L.push(l); tot += l; $(`[data-l="${i}"]`, el).innerHTML = `<b>${l}</b>`; });
    const prev = +$("#sp", el).value || 0, acwr = tot / ((tot + 3 * prev) / 4);
    const mean = tot / 7, sd = Math.sqrt(L.reduce((a, v) => a + (v - mean) ** 2, 0) / 7), mono = sd ? mean / sd : 0;
    const col = acwr > 1.5 ? "var(--bad)" : acwr > 1.3 ? "#C8661A" : acwr < 0.8 ? "#C8661A" : "var(--ok)";
    $("#so", el).innerHTML = `<div class="kpi"><b>${tot}</b><span>carico della settimana (UA)</span></div><div class="kpi"><b style="color:${col}">${prev ? fmt(acwr, 2) : "—"}</b><span>ACWR: ${acwr > 1.5 ? "picco a rischio" : acwr > 1.3 ? "attenzione" : acwr < 0.8 ? "carico in calo" : "zona prudente"}</span></div><div class="kpi"><b>${fmt(mono, 1)}</b><span>monotonia (sopra 2 = settimana troppo uguale)</span></div>`;
  };
  el.addEventListener("input", up); up();
} },

/* ---------- ALIMENTAZIONE ---------- */
"carbs": { t: "Quanti carboidrati mi servono?", s: "Fabbisogno giornaliero, carico pre-gara e pasto pre-gara", i: "flame", render(el) {
  el.innerHTML = `<div class="ctrl"><label>Peso (kg)<input type="number" id="nk" value="60"></label><label>Carico di allenamento<select id="nl"><option value="3,5">Leggero (tecnica)</option><option value="5,7" selected>Moderato (circa 1 h/giorno)</option><option value="6,10">Alto (1-3 h/giorno)</option><option value="8,12">Molto alto (4-5 h/giorno)</option></select></label></div>
    <div class="kpis" id="no"></div><div class="out" style="margin-top:14px" id="np"></div>
    <p class="note">Linee guida ACSM/AND/DC (Thomas et al. 2016). 100 g di pasta secca contengono circa 70 g di carboidrati. Il carico pre-gara vale per gare oltre i 90 minuti, per atleti adulti.</p>`;
  const up = () => {
    const kg = +$("#nk", el).value || 60, [a, b] = $("#nl", el).value.split(",").map(Number);
    $("#no", el).innerHTML = `<div class="kpi"><b>${a * kg}-${b * kg} g</b><span>carboidrati al giorno</span></div><div class="kpi"><b>${10 * kg}-${12 * kg} g</b><span>al giorno nelle 36-48 h prima di una maratona</span></div><div class="kpi"><b>${kg}-${4 * kg} g</b><span>nel pasto 1-4 h prima della gara</span></div><div class="kpi"><b>${Math.round(1.2 * kg)}-${Math.round(2 * kg)} g</b><span>proteine al giorno</span></div>`;
    $("#np", el).innerHTML = `Per capire le quantità: ${a * kg} g di carboidrati corrispondono a circa <b>${Math.round(a * kg / 70 * 100)} g di pasta secca</b>, oppure a <b>${Math.round(a * kg / 25)} banane</b>.`;
  };
  el.addEventListener("input", up); up();
} },

"fuel": { t: "Pianifica il rifornimento in gara", s: "Quanti gel servono e quando prenderli", i: "drop", render(el) {
  el.innerHTML = `<div class="ctrl"><label>Durata prevista (h:mm)<input id="ft" value="3:30"></label><label>Carboidrati all'ora<select id="fg"><option value="30">30 g/h</option><option value="60" selected>60 g/h</option><option value="90">90 g/h (intestino allenato)</option></select></label><label>Grammi per gel<input type="number" id="fs" value="22"></label></div>
    <div class="kpis" id="fo"></div><div id="fp" style="margin-top:14px"></div><p class="note">Raccomandazioni: 30-60 g/h tra 1 e 2,5 h, fino a 90 g/h oltre 2,5-3 h con glucosio + fruttosio. Provate sempre la strategia in allenamento.</p>`;
  const up = () => {
    const p = $("#ft", el).value.split(":").map(Number), h = (p[0] || 0) + (p[1] || 0) / 60, gh = +$("#fg", el).value, gs = +$("#fs", el).value || 22;
    if (!(h > 0)) return;
    const tot = gh * Math.max(0, h - 0.25), n = Math.ceil(tot / gs), every = n ? (h * 60 - 20) / n : 0;
    $("#fo", el).innerHTML = `<div class="kpi"><b>${Math.round(tot)} g</b><span>carboidrati totali in gara</span></div><div class="kpi"><b>${n}</b><span>gel da ${gs} g</span></div><div class="kpi"><b>${n ? Math.round(every) + " min" : "—"}</b><span>un gel ogni</span></div>`;
    $("#fp", el).innerHTML = n ? `<div class="chips">${Array.from({ length: n }, (_, i) => `<span class="chip">gel ${i + 1}: ${hms((20 + every * i) * 60).replace(/:00$/, "")}</span>`).join("")}</div>` : "";
  };
  el.addEventListener("input", up); up();
} },

"sweat": { t: "Il test del sudore", s: "Pesatevi prima e dopo l'allenamento: quanto sudate?", i: "drop", render(el) {
  el.innerHTML = `<div class="ctrl"><label>Peso prima (kg)<input type="number" step="0.1" id="sa" value="60.0"></label><label>Peso dopo (kg)<input type="number" step="0.1" id="sb" value="59.4"></label><label>Liquidi bevuti (litri)<input type="number" step="0.1" id="sd" value="0.3"></label><label>Durata (minuti)<input type="number" id="sm" value="60"></label></div>
    <div class="kpis" id="so2"></div><div class="out" style="margin-top:14px" id="sx"></div>`;
  const up = () => {
    const a = +$("#sa", el).value, b = +$("#sb", el).value, d = +$("#sd", el).value || 0, m = +$("#sm", el).value || 60;
    const lost = a - b, sweat = lost + d, rate = sweat / (m / 60), pct = lost / a * 100;
    $("#so2", el).innerHTML = `<div class="kpi"><b>${fmt(sweat, 2)} L</b><span>sudore perso</span></div><div class="kpi"><b>${fmt(rate, 2)} L/h</b><span>tasso di sudorazione</span></div><div class="kpi"><b>${fmt(pct, 1)}%</b><span>peso perso</span></div><div class="kpi"><b>${fmt(Math.max(0, lost) * 1.25, 1)}-${fmt(Math.max(0, lost) * 1.5, 1)} L</b><span>da bere per recuperare</span></div>`;
    $("#sx", el).innerHTML = lost < 0 ? `<b style="color:var(--bad)">Hai preso peso: hai bevuto più di quanto hai sudato.</b> In gara è il rischio dell'iponatriemia. Meglio bere secondo la sete.` : pct > 2 ? `<b style="color:#C8661A">Oltre il 2%:</b> la prestazione tende a calare, soprattutto al caldo.` : `<b style="color:var(--ok)">Sotto il 2%:</b> idratazione adeguata per questo allenamento.`;
  };
  el.addEventListener("input", up); up();
} },

"food-sort": { t: "Pre-gara: sì o meglio di no?", s: "Tocca ogni alimento e scegli dove metterlo", i: "list", render(el) {
  const F = [["Fette biscottate e marmellata", 1], ["Banana", 1], ["Riso bianco", 1], ["Pane e miele", 1], ["Frittura di pesce", 0], ["Insalata di legumi", 0], ["Energy drink", 0], ["Succo di frutta", 1], ["Hamburger con patatine", 0], ["Cibo mai provato prima", 0]];
  let left = shuffle(F.map((f, i) => i)), yes = [], no = [], sel = null, checked = false;
  const draw = () => {
    const item = (i, where) => `<button class="chip ${checked ? (F[i][1] === (where === "y" ? 1 : 0) ? "on" : "") : sel === i ? "on" : ""}" data-i="${i}" style="${checked && F[i][1] !== (where === "y" ? 1 : 0) ? "border-color:var(--bad);color:var(--bad)" : ""}">${F[i][0]}</button>`;
    el.innerHTML = `<div class="chips" style="min-height:44px;margin-bottom:12px">${left.map((i) => item(i, "")).join("") || '<span class="small">Tutti gli alimenti sono stati sistemati.</span>'}</div>
      <div class="bins"><div class="bin" data-b="y"><h4>Sì, nel pasto pre-gara</h4><div class="chips">${yes.map((i) => item(i, "y")).join("")}</div></div><div class="bin" data-b="n"><h4>Meglio di no</h4><div class="chips">${no.map((i) => item(i, "n")).join("")}</div></div></div>
      <div class="row" style="margin-top:12px"><button class="btn c sm" id="fk">Controlla</button><button class="btn ghost sm" id="fr">Ricomincia</button><span id="fres" class="feedback"></span></div>
      <p class="note">Tocca un alimento e poi il riquadro dove vuoi metterlo.</p>`;
    $$("[data-i]", el).forEach((b) => b.onclick = (e) => { e.stopPropagation(); if (checked) return; const i = +b.dataset.i; yes = yes.filter((x) => x !== i); no = no.filter((x) => x !== i); if (!left.includes(i)) left.push(i); sel = i; draw(); });
    $$("[data-b]", el).forEach((b) => b.onclick = () => { if (sel === null || checked) return; left = left.filter((x) => x !== sel); (b.dataset.b === "y" ? yes : no).push(sel); sel = null; draw(); });
    $("#fk", el).onclick = () => { checked = true; draw(); const ok = yes.filter((i) => F[i][1]).length + no.filter((i) => !F[i][1]).length; const r = $("#fres", el); r.textContent = `${ok} su ${F.length} corretti.`; r.className = "feedback " + (ok === F.length ? "ok" : "ko"); };
    $("#fr", el).onclick = () => { left = shuffle(F.map((f, i) => i)); yes = []; no = []; sel = null; checked = false; draw(); };
  };
  draw();
} },

/* ---------- MENTE ---------- */
"borg": { t: "La scala di Borg", s: "Tocca un valore: descrizione e frequenza cardiaca indicativa", i: "heart", render(el) {
  const B = { 6: "Nessuno sforzo", 7: "Estremamente leggero", 9: "Molto leggero", 11: "Leggero", 13: "Un po' duro", 15: "Duro", 17: "Molto duro", 19: "Estremamente duro", 20: "Sforzo massimo" };
  const desc = (v) => { let d = ""; Object.keys(B).forEach((k) => { if (v >= +k) d = B[k]; }); return d; };
  el.innerHTML = `<div class="chips" id="bc">${Array.from({ length: 15 }, (_, i) => `<button class="chip" data-v="${i + 6}" style="min-width:46px">${i + 6}</button>`).join("")}</div><div class="out" style="margin-top:14px" id="bo"></div>
    <p class="note">Scala RPE 6-20 di Borg. Il valore × 10 si avvicina alla frequenza cardiaca di un giovane adulto sano; è un'indicazione, non una misura.</p>`;
  const set = (v) => { $$("#bc .chip", el).forEach((b) => b.classList.toggle("on", +b.dataset.v === v)); $("#bo", el).innerHTML = `<div class="big">${v} · ${desc(v)}</div><p>Circa <b>${v * 10} battiti al minuto</b>. ${v <= 11 ? "Zona di recupero e corsa facile." : v <= 14 ? "Ritmo medio, vicino al ritmo maratona." : v <= 17 ? "Soglia e ripetute." : "Sforzo massimale: si tiene pochi minuti."}</p>`; };
  $$("#bc .chip", el).forEach((b) => b.onclick = () => set(+b.dataset.v)); set(13);
} },

"breath": { t: "Respirazione lenta pre-gara", s: "Circa 6 respiri al minuto: 4 secondi dentro, 6 fuori", i: "wind", render(el) {
  el.innerHTML = `<div class="breath"><div class="circle"><i id="bi"></i><span id="bt">Pronti?</span></div></div>
    <div class="row" style="justify-content:center"><button class="btn c sm" id="bs">Inizia (1 minuto)</button><span class="small" id="bn"></span></div>
    <p class="note" style="text-align:center">Usatela con il pubblico durante l'esposizione: tutti in piedi, un minuto insieme.</p>`;
  let timers = [];
  const stop = () => { timers.forEach(clearTimeout); timers = []; $("#bi", el).style.transform = "scale(.45)"; $("#bt", el).textContent = "Pronti?"; $("#bs", el).textContent = "Inizia (1 minuto)"; $("#bn", el).textContent = ""; };
  $("#bs", el).onclick = () => {
    if (timers.length) return stop();
    $("#bs", el).textContent = "Ferma";
    for (let c = 0; c < 6; c++) {
      timers.push(setTimeout(() => { $("#bi", el).style.transitionDuration = "4s"; $("#bi", el).style.transform = "scale(1)"; $("#bt", el).textContent = "Inspira"; $("#bn", el).textContent = `Respiro ${c + 1} di 6`; }, c * 10000));
      timers.push(setTimeout(() => { $("#bi", el).style.transitionDuration = "6s"; $("#bi", el).style.transform = "scale(.45)"; $("#bt", el).textContent = "Espira"; }, c * 10000 + 4000));
    }
    timers.push(setTimeout(() => { stop(); $("#bt", el).textContent = "Fatto"; }, 60000));
  };
  el._cleanup = stop;
} },

"selftalk": { t: "Costruisci il tuo self-talk", s: "Tre frasi personali da allenare nelle sedute dure", i: "speak", render(el) {
  const sug = { i: ["Braccia rilassate", "Passo corto in salita", "Respira lungo", "Spingi dal piede"], m: ["Ce la faccio", "Sono pronto", "Mi sono allenato per questo", "Sto andando bene"], c: ["Un chilometro alla volta", "Solo fino al prossimo ristoro", "La fatica passa, il risultato resta", "Segui chi hai davanti"] };
  const row = (k, lab) => `<label style="display:block;margin-bottom:14px"><b>${lab}</b><input id="st${k}" class="field" style="margin:6px 0 8px" placeholder="Scrivi o scegli qui sotto"><div class="chips">${sug[k].map((s) => `<button class="chip" data-k="${k}">${s}</button>`).join("")}</div></label>`;
  el.innerHTML = row("i", "1. Istruttiva: cosa fare") + row("m", "2. Motivazionale: darti energia") + row("c", "3. Per le crisi: superare il momento duro") + `<input id="stn" class="field" placeholder="Il tuo nome (facoltativo)"><div class="st-card" id="stc"></div><p class="note">Fate uno screenshot della scheda: niente viene salvato. Frasi brevi, positive, in prima persona.</p>`;
  const up = () => { const v = (k) => esc($("#st" + k, el).value || "…"); $("#stc", el).innerHTML = `<h4>Il self-talk di ${esc($("#stn", el).value || "…")}</h4><p><b>Istruttiva:</b> ${v("i")}</p><p><b>Motivazionale:</b> ${v("m")}</p><p><b>Per le crisi:</b> ${v("c")}</p><small>Maratona 42,195 · Liceo Galilei Verona</small>`; };
  $$("[data-k]", el).forEach((b) => b.onclick = (e) => { e.preventDefault(); $("#st" + b.dataset.k, el).value = b.textContent; up(); });
  el.addEventListener("input", up); up();
} },

"attention-sort": { t: "Associativa o dissociativa?", s: "Dove sta andando l'attenzione del corridore?", i: "brain", render(el) {
  const A = [["Conto i passi e controllo il respiro", "a"], ["Ascolto la mia playlist preferita", "d"], ["Sento come appoggio il piede", "a"], ["Guardo il paesaggio e le persone", "d"], ["Controllo il ritmo sull'orologio", "a"], ["Penso alla cena di stasera", "d"], ["Rilasso spalle e braccia", "a"], ["Ripasso a mente una canzone", "d"]];
  let order = shuffle(A.map((a, i) => i)), k = 0, score = 0;
  const draw = () => {
    if (k >= order.length) { el.innerHTML = `<div class="result"><div class="big">${score}/${A.length}</div><p>Ricorda: l'atleta esperto alterna le due strategie. Ad alta intensità l'attenzione torna per forza al corpo.</p><button class="btn c sm" id="ar">Rigioca</button></div>`; $("#ar", el).onclick = () => { order = shuffle(order); k = 0; score = 0; draw(); }; return; }
    const it = A[order[k]];
    el.innerHTML = `<div class="small" style="margin-bottom:8px">${k + 1} di ${A.length} · punti ${score}</div><div class="card-q">"${it[0]}"</div><div class="row" style="justify-content:center"><button class="btn c" data-a="a">Associativa (corpo)</button><button class="btn ghost" data-a="d">Dissociativa (distrazione)</button></div><div id="af" class="feedback" style="text-align:center"></div>`;
    $$("[data-a]", el).forEach((b) => b.onclick = () => { const ok = b.dataset.a === it[1]; if (ok) score++; const f = $("#af", el); f.textContent = ok ? "Giusto!" : "No: " + (it[1] === "a" ? "è associativa." : "è dissociativa."); f.className = "feedback " + (ok ? "ok" : "ko"); $$("[data-a]", el).forEach((x) => x.disabled = true); setTimeout(() => { k++; draw(); }, 1100); });
  };
  draw();
} },
};

/* ================================================================= NAV */
function nav(active) {
  $("#nav").innerHTML = S.map((s) => `<a href="#/s/${s.id}" class="${active === s.id ? "on" : ""}"><span class="dot" style="background:${s.color}"></span>${s.short}</a>`).join("") + `<a href="#/sfida" class="${active === "sfida" ? "on" : ""}">Sfida</a>`;
}

/* ================================================================= HOME */
function lanesSVG() {
  let l = ""; for (let i = 0; i < 9; i++) l += `<path d="M-50 ${120 + i * 46} C 400 ${40 + i * 46}, 900 ${260 + i * 46}, 1700 ${110 + i * 46}" stroke="#fff" stroke-width="2" fill="none"/>`;
  return `<svg class="lanes" viewBox="0 0 1600 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${l}</svg>`;
}
function home() {
  nav("");
  app.innerHTML = `<section class="hero">${lanesSVG()}<div class="wrap">
    <div class="kicker">Liceo Galilei Verona · Scienze motorie · 2E</div>
    <h1>Maratona <span>42,195</span></h1>
    <p class="lead">La gara più famosa del mondo spiegata con la scienza: storia, fisiologia, allenamento, alimentazione e mente. Con laboratori interattivi, quiz e una sfida finale a squadre.</p>
    <div class="row"><a class="btn" href="#/s/storia">Inizia dalla storia</a><a class="btn ghost" href="#/sfida">Sfida a squadre</a></div>
    <p class="km" style="margin-top:28px">Hai corso con gli occhi <b id="kmc">0,000</b> km</p></div></section>
    <section class="sec"><div class="wrap"><div class="kicker" style="color:var(--track)">5 gruppi, 5 sezioni</div><h2>Scegli il tuo argomento</h2>
    <div class="cards">${S.map((s) => `<a class="card" href="#/s/${s.id}" style="--c:${s.color};--soft:${s.soft}"><div class="num">0${s.n}</div><div class="tag">Gruppo ${s.n} · ${s.tag}</div><h3>${s.title}</h3><p>${s.intro}</p><span class="go">Apri la sezione →</span></a>`).join("")}
    <a class="card" href="#/sfida" style="--c:#0B1424;--soft:#E3E7EF"><div class="num">50</div><div class="tag">Per tutta la classe</div><h3>Sfida a squadre</h3><p>Domande su tutti e cinque gli argomenti, da proiettare in classe con il punteggio per squadra.</p><span class="go">Gioca →</span></a></div></div></section>
    <section class="sec" style="background:var(--mist)"><div class="wrap"><h2>Come si usa</h2><div class="how">
      <div><b>1 · Impara</b>Ogni sezione ha 6-7 schede brevi con dati e fonti scientifiche.</div>
      <div><b>2 · Laboratorio</b>Calcolatori, simulatori e giochi da usare anche durante l'esposizione.</div>
      <div><b>3 · Quiz</b>10 domande con spiegazione per verificare di aver capito.</div>
      <div><b>4 · Esponi</b>Scaletta per 15 minuti, domande per il pubblico e glossario inglese con pronuncia.</div></div></div></section>`;
  let k = 0; const el = $("#kmc"); const t = setInterval(() => { if (!document.body.contains(el)) return clearInterval(t); k = Math.min(42.195, k + 0.7); el.textContent = fmt(k, 3); if (k >= 42.195) clearInterval(t); }, 30);
}

/* ================================================================= SECTION */
function section(id, tab) {
  const s = S.find((x) => x.id === id); if (!s) return home();
  nav(id);
  document.documentElement.style.setProperty("--c", s.color);
  document.documentElement.style.setProperty("--soft", s.soft);
  const tabs = [["impara", "Impara"], ["lab", "Laboratorio"], ["quiz", "Quiz"], ["esponi", "Esposizione"], ["glossario", "Glossario EN"], ["fonti", "Fonti"]];
  tab = tabs.some((t) => t[0] === tab) ? tab : "impara";
  app.innerHTML = `<section class="shead"><div class="wrap"><div class="kicker">Gruppo ${s.n} · ${s.tag}</div><h1>${s.title}</h1><p class="intro">${s.intro}</p>
    <div class="bigstat"><b>${s.big.n}</b><span>${s.big.l}</span></div>
    <div class="tabs" role="tablist">${tabs.map((t) => `<button role="tab" data-t="${t[0]}" class="${t[0] === tab ? "on" : ""}">${t[1]}</button>`).join("")}</div></div></section>
    <section class="pane"><div class="wrap" id="pane"></div></section>`;
  $$(".tabs button").forEach((b) => b.onclick = () => { location.hash = `#/s/${id}/${b.dataset.t}`; });
  const P = $("#pane");
  ({ impara: () => lessons(P, s), lab: () => labs(P, s), quiz: () => quiz(P, s.quiz, s), esponi: () => esponi(P, s), glossario: () => glossary(P, s), fonti: () => fonti(P, s) })[tab]();
}

function lessons(P, s) {
  let i = 0;
  const draw = () => {
    P.innerHTML = `<div class="lessons"><div class="lnav">${s.lessons.map((l, k) => `<button class="${k === i ? "on" : ""}" data-k="${k}"><span>${k + 1}</span><span class="lt">${l.h}</span></button>`).join("")}</div>
      <article class="lesson"><h2>${s.lessons[i].h}</h2>${s.lessons[i].body}
      <div class="pager"><button class="btn ghost sm" id="lp" ${i ? "" : "disabled style='visibility:hidden'"}>← Indietro</button>${i < s.lessons.length - 1 ? `<button class="btn c sm" id="ln">Avanti →</button>` : `<a class="btn c sm" href="#/s/${s.id}/lab">Vai al laboratorio →</a>`}</div></article></div>`;
    $$(".lesson table", P).forEach((t) => { const w = document.createElement("div"); w.className = "tblwrap"; t.parentNode.insertBefore(w, t); w.appendChild(t); });
    $$(".lnav button", P).forEach((b) => b.onclick = () => { i = +b.dataset.k; draw(); });
    if ($("#lp", P)) $("#lp", P).onclick = () => { i--; draw(); };
    if ($("#ln", P)) $("#ln", P).onclick = () => { i++; draw(); $(".lesson", P).scrollIntoView({ behavior: "smooth", block: "start" }); };
  };
  draw();
}

function labs(P, s) {
  P.innerHTML = `<div class="labs">${s.labs.map((k) => `<div class="lab"><div class="lh"><div class="ic">${ico(LABS[k].i)}</div><div><h3>${LABS[k].t}</h3><p>${LABS[k].s}</p></div></div><div class="lb" data-lab="${k}"></div></div>`).join("")}</div>`;
  $$("[data-lab]", P).forEach((el) => LABS[el.dataset.lab].render(el));
}

function quiz(P, Q, s) {
  let qs = shuffle(Q).map((q) => { const o = shuffle(q.a.map((a, i) => i)); return { ...q, o }; }), k = 0, score = 0;
  const draw = () => {
    if (k >= qs.length) {
      const pct = score / qs.length;
      P.innerHTML = `<div class="quiz"><div class="result"><div class="big">${score}/${qs.length}</div><h2 style="font-size:40px;margin:6px 0">${pct >= .9 ? "Da maratoneta d'élite!" : pct >= .7 ? "Ottimo ritmo" : pct >= .5 ? "Buona base, ripassa qualche scheda" : "Riparti dalle schede Impara"}</h2><div class="row" style="justify-content:center;margin-top:18px"><button class="btn c" id="qr">Rifai il quiz</button><a class="btn ghost" href="#/s/${s.id}/impara">Ripassa</a></div></div></div>`;
      $("#qr", P).onclick = () => quiz(P, Q, s); return;
    }
    const q = qs[k];
    P.innerHTML = `<div class="quiz"><div class="qhead"><span>Domanda ${k + 1} di ${qs.length}</span><span>Punti: ${score}</span></div><div class="progress"><i style="width:${k / qs.length * 100}%"></i></div>
      <p class="qtext">${q.q}</p><div class="answers">${q.o.map((ai, j) => `<button data-a="${ai}"><b>${"ABCD"[j]}</b>${q.a[ai]}</button>`).join("")}</div><div id="qw"></div></div>`;
    $$(".answers button", P).forEach((b) => b.onclick = () => {
      const a = +b.dataset.a, ok = a === q.c; if (ok) score++;
      $$(".answers button", P).forEach((x) => { x.disabled = true; if (+x.dataset.a === q.c) x.classList.add("ok"); });
      if (!ok) b.classList.add("ko");
      $("#qw", P).innerHTML = `<div class="why"><b>${ok ? "Giusto!" : "Non proprio."}</b> ${q.why}</div><div class="row" style="justify-content:flex-end;margin-top:14px"><button class="btn c" id="qn">${k < qs.length - 1 ? "Prossima →" : "Vedi il risultato"}</button></div>`;
      $("#qn", P).onclick = () => { k++; draw(); }; $("#qn", P).focus();
    });
  };
  draw();
}

function esponi(P, s) {
  P.innerHTML = `<div class="two"><div><h2 style="font-size:44px;margin:0 0 6px">Scaletta per 15 minuti</h2><p class="small" style="margin:0 0 16px">Un blocco di circa 3 minuti per ogni componente del gruppo. Usate i laboratori come esempi dal vivo.</p>
    <div class="plan">${s.plan.map((p) => `<div><b>${p[0]}</b><div><h4>${p[1]}</h4><p>${p[2]}</p></div></div>`).join("")}</div></div>
    <div><div class="panel" style="margin-bottom:18px"><h3>Il compito del gruppo</h3><ol><li><b>Studiate</b> tutte le schede della sezione e fate il quiz.</li><li><b>Scegliete</b> i messaggi chiave: in 15 minuti non si dice tutto.</li><li><b>Preparate</b> la vostra presentazione <b>in inglese</b> per gli studenti stranieri, usando il glossario.</li><li><b>Esponete</b> usando almeno un laboratorio dal vivo.</li><li><b>Chiudete</b> con le domande per il pubblico.</li></ol></div>
    <div class="panel"><h3>Domande per il pubblico</h3><ol>${s.questions.map((q) => `<li>${q}</li>`).join("")}</ol></div></div></div>`;
}

function glossary(P, s) {
  const can = "speechSynthesis" in window;
  P.innerHTML = `<h2 style="font-size:44px;margin:0 0 6px">Glossario italiano · English</h2><p class="small" style="margin:0 0 16px">${can ? "Toccate il pulsante per ascoltare la pronuncia inglese." : "Il vostro browser non supporta la sintesi vocale."}</p>
    <table class="gl"><tr><th>Italiano</th><th>English</th><th>Significato</th>${can ? "<th></th>" : ""}</tr>${s.glossary.map((g) => `<tr><td><b>${g[0]}</b></td><td>${g[1]}</td><td>${g[2]}</td>${can ? `<td><button data-say="${esc(g[1])}" aria-label="Ascolta ${esc(g[1])}">${ico("speak", 18)}</button></td>` : ""}</tr>`).join("")}</table>`;
  $$("[data-say]", P).forEach((b) => b.onclick = () => { speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(b.dataset.say.replace(/\(.*?\)/g, "")); u.lang = "en-GB"; u.rate = .9; speechSynthesis.speak(u); });
}

function fonti(P, s) {
  P.innerHTML = `<div class="two"><div class="panel"><h3>Fonti scientifiche</h3><ul>${s.sources.map((x) => `<li>${x}</li>`).join("")}</ul></div>
    <div class="panel"><h3>Come usarle</h3><p>Nella vostra presentazione citate almeno 3 fonti. I dati recenti (record 2026) vanno verificati su <b>World Athletics</b> e <b>FIDAL</b>. I valori dei laboratori sono stime didattiche: per gli allenamenti reali serve il parere del docente o del medico sportivo.</p></div></div>`;
}

/* ================================================================= SFIDA */
function sfida() {
  nav("sfida");
  document.documentElement.style.setProperty("--c", "#C8401A"); document.documentElement.style.setProperty("--soft", "#FBEAE3");
  let on = new Set(S.map((s) => s.id)), teams = [["Squadra A", 0], ["Squadra B", 0]], pool = [], k = 0, N = 15, revealed = false;
  const build = () => { pool = shuffle(S.filter((s) => on.has(s.id)).flatMap((s) => s.quiz.map((q) => ({ ...q, s, o: shuffle(q.a.map((a, i) => i)) })))).slice(0, N); k = 0; revealed = false; };
  const setup = () => {
    app.innerHTML = `<section class="sfida"><div class="wrap"><div class="kicker">Da proiettare in classe</div><h1>Sfida a squadre</h1><p style="max-width:660px;font-size:20px">Il conduttore legge la domanda, le squadre rispondono a turno o per alzata di mano, poi si mostra la risposta e si assegna il punto.</p>
      <h3 style="font-size:28px;margin:22px 0 10px">Argomenti</h3><div class="chips" id="ss">${S.map((s) => `<button class="chip ${on.has(s.id) ? "on" : ""}" data-s="${s.id}">${s.title}</button>`).join("")}</div>
      <h3 style="font-size:28px;margin:22px 0 10px">Squadre</h3><div class="teams">${teams.map((t, i) => `<div class="team"><input value="${esc(t[0])}" data-tn="${i}" aria-label="Nome squadra"></div>`).join("")}</div>
      <div class="row"><button class="btn ghost sm" id="ta" style="color:#fff">+ Squadra</button>${teams.length > 2 ? `<button class="btn ghost sm" id="tr" style="color:#fff">− Squadra</button>` : ""}
      <label style="color:#fff;font-weight:700">Domande: <select id="sn">${[10, 15, 20, 30, 50].map((n) => `<option ${n === N ? "selected" : ""}>${n}</option>`).join("")}</select></label></div>
      <div class="row" style="margin-top:26px"><button class="btn" id="go">Inizia la sfida</button></div></div></section>`;
    $$("[data-s]").forEach((b) => b.onclick = () => { on.has(b.dataset.s) ? on.size > 1 && on.delete(b.dataset.s) : on.add(b.dataset.s); setup(); });
    $$("[data-tn]").forEach((i) => i.oninput = () => teams[+i.dataset.tn][0] = i.value || "Squadra");
    $("#ta").onclick = () => { if (teams.length < 6) teams.push(["Squadra " + "ABCDEF"[teams.length], 0]); setup(); };
    if ($("#tr")) $("#tr").onclick = () => { teams.pop(); setup(); };
    $("#sn").onchange = (e) => N = +e.target.value;
    $("#go").onclick = () => { teams.forEach((t) => t[1] = 0); build(); play(); };
  };
  const play = () => {
    if (k >= pool.length) {
      const best = Math.max(...teams.map((t) => t[1])), win = teams.filter((t) => t[1] === best).map((t) => esc(t[0]));
      app.innerHTML = `<section class="sfida"><div class="wrap" style="text-align:center"><div class="kicker">Traguardo!</div><h1>${win.length > 1 ? "Pareggio" : "Vince " + win[0]}</h1><div class="teams">${teams.map((t) => `<div class="team"><b>${esc(t[0])}</b><div class="pts">${t[1]}</div></div>`).join("")}</div><button class="btn" id="again">Nuova sfida</button></div></section>`;
      $("#again").onclick = setup; return;
    }
    const q = pool[k];
    app.innerHTML = `<section class="sfida"><div class="wrap"><div class="row" style="justify-content:space-between"><span class="kicker">Domanda ${k + 1} di ${pool.length}</span><button class="btn ghost sm" id="end" style="color:#fff">Termina</button></div>
      <div class="bigq" style="--c:${q.s.color};margin-top:14px"><div class="from" style="color:${q.s.color}">${q.s.title}</div><p class="qtext" style="margin-top:8px">${q.q}</p>
      <div class="answers">${q.o.map((ai, j) => `<button data-a="${ai}" class="${revealed && ai === q.c ? "ok" : ""}" disabled><b>${"ABCD"[j]}</b>${q.a[ai]}</button>`).join("")}</div>${revealed ? `<div class="why"><b>Perché:</b> ${q.why}</div>` : ""}</div>
      <div class="teams">${teams.map((t, i) => `<div class="team"><b>${esc(t[0])}</b><div class="pts">${t[1]}</div><button data-p="${i}">+1 punto</button></div>`).join("")}</div>
      <div class="row" style="justify-content:center">${revealed ? `<button class="btn" id="nx">Prossima domanda →</button>` : `<button class="btn" id="rv">Mostra la risposta</button>`}</div></div></section>`;
    $$("[data-p]").forEach((b) => b.onclick = () => { teams[+b.dataset.p][1]++; play(); });
    if ($("#rv")) $("#rv").onclick = () => { revealed = true; play(); };
    if ($("#nx")) $("#nx").onclick = () => { k++; revealed = false; play(); };
    $("#end").onclick = () => { k = pool.length; play(); };
  };
  setup();
}

/* ================================================================= ROUTER */
function route() {
  $$("[data-lab]").forEach((el) => el._cleanup && el._cleanup());
  if ("speechSynthesis" in window) speechSynthesis.cancel();
  const h = location.hash.replace(/^#\/?/, "").split("/");
  document.documentElement.style.setProperty("--c", "#C8401A"); document.documentElement.style.setProperty("--soft", "#FBEAE3");
  if (h[0] === "s") section(h[1], h[2]);
  else if (h[0] === "sfida") sfida();
  else home();
  window.scrollTo(0, 0);
}
window.addEventListener("hashchange", route);
route();
})();
