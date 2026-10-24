
/* =====================================================================
   EDIT YOUR DETAILS HERE. Everything on the page is filled from this.
   Times use Indian Standard Time (+05:30).
   Photos: set photo to an image URL or a data: URI.
   Personalise a link per guest: add #Sharma-Family to the end of the link
   (hyphens become spaces), or ?to=Sharma%20Family when self-hosting.
   ===================================================================== */
const INVITE = {
  host:'The Chavda Family',
  hostLine:'The Chavda Family invites you',
  coverLabel:'The Chavda Family invites you to the wedding of',
  groom: { first:'Kaushik', full:'Kaushik Chavda', initial:'K',
    parents:'', /* e.g. 'Son of Mrs. ____ & Mr. ____ Chavda' */
    about:'', photo:'share/photo-g.jpg' },
  bride: { first:'Janvi', full:'Janvi', initial:'J',
    parents:'', /* e.g. 'Daughter of Mrs. ____ & Mr. ____' */
    about:'', photo:'share/photo-r.jpg' },
  elders:'', /* e.g. names of grandparents whose blessings you want to mention */
  families:'With love from the Chavda Family',
  hashtag:'#KaushikWedsJanvi',
  album:[
    { src:'share/photo-b.jpg', cls:'b', ar:'522/1062', caption:'Forever starts with one smile', sub:'The engagement', alt:'Kaushik and Janvi standing together in a garden' },
    { src:'share/photo-a.jpg', cls:'a', ar:'900/835', caption:'Under the lanterns', sub:'The engagement', alt:'Kaushik and Janvi embracing beneath hanging lanterns' },
    { src:'share/photo-c.jpg', cls:'c', ar:'900/1280', caption:'Two hearts, one rhythm', sub:'The engagement', alt:'Close portrait of Janvi smiling beside Kaushik' }
  ],
  heroPhoto:'share/photo-a.jpg',
  city:'Rajkot, Gujarat', cityShort:'Rajkot',
  dateLong:'Thursday, 10 December 2026', dateDots:'10 · 12 · 2026', dateShort:'10 · 12 · 2026',
  footerDate:'8 – 10 · 12 · 2026 · Rajkot',
  countdownTo:'2026-12-10T11:30:00+05:30',
  countdownLabel:'Thursday · 10 December 2026 · Lagan Muhurat 11:30 AM',
  saveTheDate:{ date:'2026-12-10' },
  venue:{ when:'All celebrations · 8 – 10 December', name:'Shri Nandkishore Hall', address:'Junction Plot Main Road, opposite Junction Railway Station, near the Railway Guard quarters, Gayakwadi, Shastri Nagar, Rajkot, Gujarat 360001',
    mapsQuery:'Shri Nandkishore Hall, Junction Plot Main Road, opposite Junction Railway Station, Gayakwadi, Shastri Nagar, Rajkot, Gujarat 360001' },
  ui:{ directions:'Get directions', copyAddress:'Copy address', mapNote:'Illustrative map', mapFont:'Cinzel, Georgia, serif', playMusic:'Play music', pauseMusic:'Pause music', toTop:'Back to top' },
  map2:{ station:'Rajkot Junction', rail:'RAILWAY', road:'JUNCTION PLOT MAIN ROAD', quarters:'Railway quarters', area:'Shastri Nagar', area2:'Gayakwadi', pin:'NANDKISHORE HALL', north:'N' },
  events:[
    { id:'sangeet', name:'Sanji na Geet', icon:'sangeet', color:'#B0386A', dayKey:'2026-12-08', dayLabel:'Tuesday, 8 December',
      start:'2026-12-08T17:00:00+05:30', end:'2026-12-08T20:00:00+05:30',
      day:'Tuesday · 8 December 2026', when:'5:00 PM', where:'Shri Nandkishore Hall, Rajkot', dress:'Traditional & festive',
      blurb:'The celebrations begin with an evening of traditional wedding songs, sung together by both families.' },
    { id:'mandva', name:'Mandva Muharat', icon:'mandva', color:'#C0702A', dayKey:'2026-12-09', dayLabel:'Wednesday, 9 December',
      start:'2026-12-09T08:00:00+05:30', end:'2026-12-09T10:00:00+05:30',
      day:'Wednesday · 9 December 2026', when:'8:00 AM', where:'Shri Nandkishore Hall, Rajkot', dress:'Traditional',
      blurb:'The auspicious start of the wedding rituals, as the mandap is raised with prayers and blessings from the elders.' },
    { id:'haldi', name:'Haldi', icon:'haldi', color:'#D9A520', dayKey:'2026-12-09', dayLabel:'Wednesday, 9 December',
      start:'2026-12-09T16:00:00+05:30', end:'2026-12-09T18:00:00+05:30',
      day:'Wednesday · 9 December 2026', when:'4:00 PM', where:'Shri Nandkishore Hall, Rajkot', dress:'Shades of yellow',
      blurb:"Turmeric, blessings and plenty of laughter. Wear something you won't mind getting a little yellow." },
    { id:'dandiya', name:'Dandiya Raas', icon:'dandiya', color:'#7A3E9D', dayKey:'2026-12-09', dayLabel:'Wednesday, 9 December',
      start:'2026-12-09T19:00:00+05:30', end:'2026-12-09T23:00:00+05:30',
      day:'Wednesday · 9 December 2026', when:'7:00 PM', where:'Shri Nandkishore Hall, Rajkot', dress:'Chaniya choli & kediyu',
      blurb:'A night of garba and dandiya under the lights. Bring your best steps and your brightest colours.' },
    { id:'jaan', name:'Janprastav (Procession)', icon:'route', color:'#8A672A', dayKey:'2026-12-10', dayLabel:'Thursday, 10 December',
      start:'2026-12-10T05:00:00+05:30', end:'2026-12-10T06:00:00+05:30',
      day:'Thursday · 10 December 2026', when:'5:00 AM', where:'Shri Nandkishore Hall, Rajkot', dress:'',
      blurb:"The groom's procession sets off at dawn on the wedding day. Join us early to be part of the jaan." },
    { id:'wedding', name:'The Wedding', icon:'agni', color:'#B1272F', main:true, dayKey:'2026-12-10', dayLabel:'Thursday, 10 December',
      start:'2026-12-10T11:30:00+05:30', end:'2026-12-10T14:00:00+05:30',
      day:'Thursday · 10 December 2026', muhurat:'Lagan Muhurat · 11:30 AM', when:'11:30 AM', where:'Shri Nandkishore Hall, Rajkot', dress:'Traditional Indian',
      blurb:'Join us as we take our seven pheras and begin our new journey, surrounded by the people we love.' }
  ],
  tips:[
    { icon:'pin', title:'Getting there', text:'Directly opposite Rajkot Junction railway station on Junction Plot Main Road, near the Railway Guard quarters in Gayakwadi.', copy:'Shri Nandkishore Hall, Junction Plot Main Road, opposite Junction Railway Station, near the Railway Guard quarters, Gayakwadi, Shastri Nagar, Rajkot, Gujarat 360001' }
  ],
  music:'share/song.mp3' /* the song file; starts softly when the seal is tapped */
};


(() => {
'use strict';
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const root = document.documentElement;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduce) root.classList.add('anim');
document.body.classList.add('locked');

/* ---------------- helpers ---------------- */
const get = (o, p) => p.split('.').reduce((a, k) => (a == null ? a : a[k]), o);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const f = n => n.toFixed(2);
let toastT;
function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), 2200); }
async function copy(text, fallbackEl) {
  try { await navigator.clipboard.writeText(text); toast('Copied'); }
  catch (e) {
    if (fallbackEl) { const r = document.createRange(); r.selectNodeContents(fallbackEl); const s = getSelection(); s.removeAllRanges(); s.addRange(r); }
    toast('Press and hold to copy');
  }
}
const gcal = (title, start, end, details, loc, allDay) => {
  const fmt = d => new Date(d).toISOString().replace(/[-:]|\.\d{3}/g, '');
  if (allDay) { const d0 = new Date(allDay + 'T00:00:00Z'), d1 = new Date(d0.getTime() + 864e5); const ymd = d => d.toISOString().slice(0, 10).replace(/-/g, ''); start = end = null; return 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=' + encodeURIComponent(title) + '&dates=' + ymd(d0) + '/' + ymd(d1) + '&details=' + encodeURIComponent(details) + '&location=' + encodeURIComponent(loc) + '&ctz=Asia/Kolkata'; }
  return 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=' + encodeURIComponent(title) +
    '&dates=' + fmt(start) + '/' + fmt(end) + '&details=' + encodeURIComponent(details) + '&location=' + encodeURIComponent(loc) + '&ctz=Asia/Kolkata';
};
const mapsUrl = q => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q);

/* ---------------- ornaments ---------------- */
function petalPath(r0, len, w) {
  const a = -r0, b = -(r0 + len * .28), c = -(r0 + len * .78), e = -(r0 + len);
  return `M0 ${f(a)}C${f(w)} ${f(b)} ${f(w * .62)} ${f(c)} 0 ${f(e)}C${f(-w * .62)} ${f(c)} ${f(-w)} ${f(b)} 0 ${f(a)}Z`;
}
function ring(d, n, off = 0) { let s = ''; for (let i = 0; i < n; i++) s += `<path d="${d}" transform="rotate(${f(off + i * 360 / n)})"/>`; return s; }
function dots(r, n, size, off = 0) {
  let s = '';
  for (let i = 0; i < n; i++) { const a = (off + i * 360 / n) * Math.PI / 180; s += `<circle cx="${f(Math.sin(a) * r)}" cy="${f(-Math.cos(a) * r)}" r="${size}"/>`; }
  return s;
}
function scallops(r, n) {
  let d = '';
  for (let i = 0; i < n; i++) {
    const a1 = i * 2 * Math.PI / n, a2 = (i + 1) * 2 * Math.PI / n;
    const x1 = Math.sin(a1) * r, y1 = -Math.cos(a1) * r, x2 = Math.sin(a2) * r, y2 = -Math.cos(a2) * r;
    const ch = Math.hypot(x2 - x1, y2 - y1) / 2 * 1.05;
    d += `M${f(x1)} ${f(y1)}A${f(ch)} ${f(ch)} 0 0 1 ${f(x2)} ${f(y2)}`;
  }
  return `<path d="${d}"/>`;
}
const circ = r => `<circle r="${r}"/>`;
function mandalaSVG() {
  return `<svg viewBox="-102 -102 204 204" fill="none" stroke="currentColor" stroke-width=".38" aria-hidden="true">
  <g fill="currentColor" fill-opacity=".05">
    ${circ(4)}${ring(petalPath(4, 9, 3.6), 8)}
    ${circ(14)}${ring(petalPath(14, 12, 4.8), 12)}${ring(petalPath(15.5, 7, 2.4), 12)}
    ${circ(27)}${circ(28.4)}
    ${ring(petalPath(31, 17, 7), 16)}${ring(petalPath(33, 11, 3.8), 16)}${ring(petalPath(29.5, 9, 2.6), 16, 11.25)}
    ${circ(49.5)}${circ(51)}
  </g>
  <g>${scallops(51, 36)}</g>
  <g fill="currentColor" fill-opacity=".04">
    ${ring(petalPath(56, 21, 5.6), 24)}${ring(petalPath(58.5, 13, 2.8), 24)}
    ${ring(petalPath(78, 20, 12), 12, 15)}${ring(petalPath(80, 14, 7), 12, 15)}
  </g>
  ${circ(77.5)}${ring(petalPath(77.5, 6, 2.2), 48, 3.75)}
  ${circ(99)}${circ(100.5)}
  <g fill="currentColor" stroke="none">${dots(31, 32, .8)}${dots(44, 16, 1.1, 11.25)}${dots(87, 48, .75)}${dots(95, 24, 1.1, 7.5)}${dots(53.6, 36, .55, 5)}</g>
</svg>`;
}
const ORN = `<svg viewBox="0 0 180 22" fill="none" stroke="currentColor" stroke-width="1" aria-hidden="true">
  <path d="M0 13.5H66M114 13.5H180" stroke-width=".8"/>
  <path d="M70 13.5l3-3 3 3-3 3z M104 13.5l3-3 3 3-3 3z" fill="currentColor" stroke="none"/>
  <path d="M90 2c4.4 4.6 4.4 10 0 14-4.4-4-4.4-9.4 0-14Z" fill="currentColor" fill-opacity=".15"/>
  <path d="M90 16c-5-1.6-9.4-5-10.4-9.6 4.6.4 8.4 3.6 10.4 9.6ZM90 16c5-1.6 9.4-5 10.4-9.6-4.6.4-8.4 3.6-10.4 9.6Z"/>
  <path d="M90 16c-3.6.4-8 0-11.6-2.4M90 16c3.6.4 8 0 11.6-2.4M83 19h14" stroke-width=".8"/>
</svg>`;
const CORNER = `<svg viewBox="0 0 46 46" fill="none" stroke="currentColor" stroke-width="1"><path d="M2 44V12C2 6 6 2 12 2h32" /><path d="M8 44V16c0-4.5 3.5-8 8-8h28" stroke-width=".6" opacity=".7"/><circle cx="12" cy="12" r="3" fill="currentColor"/><path d="M20 12c4 0 6 2 6 6" stroke-width=".7"/></svg>`;

function sealSVG(a, b) {
  const N = 30, pts = [];
  for (let i = 0; i < N; i++) {
    const t = i / N * Math.PI * 2;
    const r = 55 + Math.sin(i * 2.7) * 2.3 + Math.sin(i * 5.3 + 1) * 1.6 + Math.cos(i * 1.3) * 1.2;
    pts.push([60 + Math.cos(t) * r, 60 + Math.sin(t) * r]);
  }
  let d = `M${f(pts[0][0])} ${f(pts[0][1])}`;
  for (let i = 0; i < N; i++) {
    const p0 = pts[(i - 1 + N) % N], p1 = pts[i], p2 = pts[(i + 1) % N], p3 = pts[(i + 2) % N];
    d += `C${f(p1[0] + (p2[0] - p0[0]) / 6)} ${f(p1[1] + (p2[1] - p0[1]) / 6)} ${f(p2[0] - (p3[0] - p1[0]) / 6)} ${f(p2[1] - (p3[1] - p1[1]) / 6)} ${f(p2[0])} ${f(p2[1])}`;
  }
  return `<svg viewBox="0 0 120 120" aria-hidden="true"><defs>
    <radialGradient id="wx" cx="36%" cy="30%" r="80%"><stop offset="0" stop-color="#DA4A5C"/><stop offset=".45" stop-color="#A51B32"/><stop offset="1" stop-color="#560817"/></radialGradient>
    <radialGradient id="wx2" cx="60%" cy="70%" r="70%"><stop offset="0" stop-color="#B42338"/><stop offset="1" stop-color="#7E1024"/></radialGradient>
    <linearGradient id="sg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFF0C2"/><stop offset=".45" stop-color="#E2BE70"/><stop offset="1" stop-color="#A47A30"/></linearGradient>
  </defs>
  <path d="${d}Z" fill="url(#wx)"/>
  <circle cx="60" cy="60" r="42.5" fill="none" stroke="#4A0613" stroke-width="3" opacity=".45"/>
  <circle cx="60" cy="60" r="41" fill="url(#wx2)"/>
  <circle cx="60" cy="60" r="41" fill="none" stroke="#F09AA5" stroke-width=".8" opacity=".35"/>
  <circle cx="60" cy="60" r="35" fill="none" stroke="url(#sg)" stroke-width=".9"/>
  <g fill="url(#sg)">${Array.from({ length: 24 }, (_, i) => { const t = i / 24 * Math.PI * 2; return `<circle cx="${f(60 + Math.cos(t) * 38)}" cy="${f(60 + Math.sin(t) * 38)}" r=".9"/>`; }).join('')}</g>
  <text x="60" y="71" text-anchor="middle" font-family="Cormorant Garamond, Garamond, Georgia, serif" font-style="italic" font-weight="600" font-size="32" fill="url(#sg)" style="paint-order:stroke" stroke="#4A0613" stroke-width=".6">${esc(a)}<tspan font-family="Great Vibes, cursive" font-style="normal" font-weight="400" font-size="22" dx="1" dy="-3">&amp;</tspan><tspan dx="1" dy="3">${esc(b)}</tspan></text>
  <ellipse cx="40" cy="30" rx="18" ry="7" fill="#fff" opacity=".16" transform="rotate(-32 40 30)"/>
</svg>`;
}

const ICONS = {
  haldi: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6">${Array.from({ length: 8 }, (_, i) => `<ellipse cx="24" cy="12.5" rx="4" ry="7.5" transform="rotate(${i * 45} 24 24)"/>`).join('')}<circle cx="24" cy="24" r="5" fill="currentColor" fill-opacity=".25"/></svg>`,
  sangeet: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6"><ellipse cx="9" cy="24" rx="3.2" ry="9.5"/><ellipse cx="39" cy="24" rx="3.2" ry="9.5"/><path d="M9 14.5C18 11 30 11 39 14.5M9 33.5C18 37 30 37 39 33.5"/><path d="M12 15.5 16 32.5 20 14 24 33.5 28 14 32 32.5 36 15.5" stroke-width="1.1"/></svg>`,
  agni: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M7 31h34M10 31l3.5 9h21l3.5-9"/><path d="M24 6c6.5 6.5 8 12.5 4.5 18 0-3-1.5-4.5-3-6 .2 3.4-1.6 5-3.6 6.6C20 21 19.5 18 21 15c-3.6 3-5 6.6-3 10.4-4-3.6-2.6-11.6 6-19.4Z" fill="currentColor" fill-opacity=".18"/><path d="M17 31c1.5-2.5 4-3.6 7-3.6s5.5 1.1 7 3.6"/></svg>`,
  route: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 38c-4-5-7-8-7-12a7 7 0 0 1 14 0c0 4-3 7-7 12Z" fill="currentColor" fill-opacity=".15"/><circle cx="12" cy="26" r="2.4"/><path d="M36 22c-3.4-4.2-6-6.8-6-10a6 6 0 0 1 12 0c0 3.2-2.6 5.8-6 10Z" fill="currentColor" fill-opacity=".15"/><circle cx="36" cy="12" r="2"/><path d="M14 40c8 2 16-2 18-10s2-6 4-8" stroke-dasharray="2.4 3" stroke-linecap="round"/></svg>`,
  mandva: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M8 18 24 7l16 11"/><path d="M6 18h36"/><path d="M11 18v22M37 18v22M8 40h32"/><path d="M19 40v-4c0-3 2-5 5-5s5 2 5 5v4" fill="currentColor" fill-opacity=".15"/><path d="M21 31c0-2 1.3-3 3-3s3 1 3 3"/><path d="M24 25v3M22 25h4"/><path d="M15 18c1 2.4 2.6 3.6 4.5 3.6M33 18c-1 2.4-2.6 3.6-4.5 3.6" stroke-width="1.1"/></svg>`,
  dandiya: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 40 34 9M36 40 14 9" stroke-width="2.2" stroke-linecap="round"/><path d="M15 36l3 2.2M33 36l-3 2.2M29 13l3 2.2M19 13l-3 2.2" stroke-width="1.1"/><circle cx="24" cy="24" r="3" fill="currentColor" fill-opacity=".25"/><path d="M8 8l1.2 2.6L12 12l-2.8 1.2L8 16l-1.2-2.8L4 12l2.8-1.4zM40 30l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" fill="currentColor" stroke="none"/></svg>`,
  mehendi: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M22 42C11 40 7 28 12 19 17 10 30 8 35 16c4 7 0 15-7 15-5 0-7-4-5-8 1.6-3 6-3 7 0" fill="currentColor" fill-opacity=".14"/><path d="M22 42c4-3 6-6 6-11" stroke-width="1.1"/><circle cx="38" cy="8" r="1.4" fill="currentColor" stroke="none"/><circle cx="41" cy="14" r="1.1" fill="currentColor" stroke="none"/><circle cx="9" cy="34" r="1.1" fill="currentColor" stroke="none"/><path d="M15 22c2 1 3 3 2.5 5M19 16c2.4.4 4 2 4.4 4" stroke-width="1"/></svg>`,
  rings: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="18.5" cy="29" r="10"/><circle cx="29.5" cy="29" r="10"/><path d="M18.5 19l-3.2-4 3.2-4.5 3.2 4.5z" fill="currentColor" fill-opacity=".25"/><path d="M33 9l1 2.6 2.6 1-2.6 1-1 2.6-1-2.6-2.6-1 2.6-1z" fill="currentColor" stroke="none"/></svg>`,
  plane: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M21 15.5 13.5 11V5a1.5 1.5 0 0 0-3 0v6L3 15.5V17l7.5-2.2V19L8.5 20.5V22l3.5-1 3.5 1v-1.5L13.5 19v-4.2L21 17Z"/></svg>`,
  bed: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M3 19V6M3 15h18v4M21 15v-3a3 3 0 0 0-3-3h-7v6"/><circle cx="7" cy="11.5" r="2"/></svg>`,
  pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3.5" y="3.5" width="17" height="17" rx="3"/><path d="M12 8v8M8 12h8"/></svg>`,
  sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="4"/><path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8"/></svg>`
};
const CAL_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/></svg>`;
const PIN_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/></svg>`;

function diyaSVG() {
  return `<svg class="diya" viewBox="0 0 80 70" aria-hidden="true"><defs>
    <radialGradient id="dg" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#FFD27A" stop-opacity=".75"/><stop offset="1" stop-color="#FFD27A" stop-opacity="0"/></radialGradient>
    <linearGradient id="df" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#E8641C"/><stop offset=".5" stop-color="#FFB338"/><stop offset="1" stop-color="#FFF1B8"/></linearGradient>
    <linearGradient id="dl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#D98A4E"/><stop offset="1" stop-color="#7A3216"/></linearGradient>
  </defs>
  <circle class="glow" cx="40" cy="26" r="26" fill="url(#dg)"/>
  <g class="flame"><path d="M40 6C47 17 48 27 40 35 32 27 33 17 40 6Z" fill="url(#df)"/><path d="M40 18c3 5 3 10 0 14-3-4-3-9 0-14Z" fill="#FFF8DC"/></g>
  <path d="M8 40C20 37 60 37 72 40 68 56 55 63 40 63S12 56 8 40Z" fill="url(#dl)"/>
  <ellipse cx="40" cy="40" rx="32" ry="4.5" fill="#E7A26A"/>
  <path d="M16 47c8 3 40 3 48 0" stroke="#F2D29A" stroke-width="1" fill="none" stroke-dasharray="1 3.2" stroke-linecap="round"/>
  <path d="M38 36h4v3h-4z" fill="#3B1C0C"/>
</svg>`;
}

function mapSVG() {
  const M = INVITE.map2, F = `font-family="${INVITE.ui.mapFont}" font-weight="600"`;
  let ties = ''; for (let x = 6; x < 400; x += 9) ties += `<path d="M${x} 58v16"/>`;
  return `<svg viewBox="0 0 400 300" role="img" aria-label="${esc(INVITE.venue.name)}, ${esc(INVITE.venue.address)}">
  <defs><pattern id="mp2" width="12" height="12" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".7" fill="#D9C2A8"/></pattern></defs>
  <rect width="400" height="300" fill="#F8EEE4"/><rect width="400" height="300" fill="url(#mp2)"/>
  <g fill="#EFE0CF"><rect x="26" y="96" width="70" height="40" rx="6"/><rect x="250" y="96" width="62" height="40" rx="6"/><rect x="322" y="96" width="52" height="40" rx="6"/><rect x="30" y="196" width="80" height="44" rx="6"/><rect x="30" y="250" width="60" height="30" rx="6"/></g>
  <g stroke="#B69A7B" stroke-width="1.1">${ties}</g>
  <path d="M0 61H400M0 71H400" stroke="#8A7362" stroke-width="1.6"/>
  <text x="380" y="52" text-anchor="end" ${F} font-size="8.5" letter-spacing="2" fill="#A0835F">${esc(M.rail)}</text>
  <g transform="translate(112 86)"><rect width="108" height="34" rx="3" fill="#E9D9C4" stroke="#8A672A" stroke-width=".8"/><path d="M-4 0h116l-10-10H6z" fill="#C9A55A"/><path d="M10 34V16h12v18M44 34V16h12v18M78 34V16h12v18" stroke="#8A672A" stroke-width=".7" fill="none"/></g>
  <text x="166" y="138" text-anchor="middle" ${F} font-size="10" letter-spacing="1" fill="#8A7362">${esc(M.station)}</text>
  <path d="M-10 166C120 158 260 160 410 168" stroke="#E2CCB2" stroke-width="18" fill="none"/>
  <path d="M-10 166C120 158 260 160 410 168" stroke="#fff" stroke-width="13" fill="none"/>
  <path d="M-10 166C120 158 260 160 410 168" stroke="#E7B65A" stroke-width="1.2" fill="none" stroke-dasharray="8 7"/>
  <text x="300" y="154" text-anchor="middle" ${F} font-size="8" letter-spacing="1.2" fill="#A0835F">${esc(M.road)}</text>
  <path d="M236 300C232 250 238 210 236 170M120 170C126 220 118 260 124 300" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round"/>
  <g fill="#E6D3BC" stroke="#B69A7B" stroke-width=".6"><rect x="252" y="190" width="30" height="20" rx="2"/><rect x="290" y="190" width="30" height="20" rx="2"/><rect x="328" y="190" width="30" height="20" rx="2"/><rect x="252" y="218" width="30" height="20" rx="2"/><rect x="290" y="218" width="30" height="20" rx="2"/></g>
  <text x="305" y="256" text-anchor="middle" ${F} font-size="9.5" letter-spacing=".8" fill="#8A7362">${esc(M.quarters)}</text>
  <text x="70" y="190" text-anchor="middle" ${F} font-size="9.5" letter-spacing=".8" fill="#8A7362">${esc(M.area)}</text>
  <text x="340" y="88" text-anchor="middle" ${F} font-size="9.5" letter-spacing=".8" fill="#8A7362">${esc(M.area2)}</text>
  <g transform="translate(170 216)">
    <circle class="pulse" r="12" fill="#B1272F" opacity=".35"/><circle class="pulse b" r="12" fill="#B1272F" opacity=".35"/>
    <g class="pin"><path d="M0 0C-3-8-12-13-12-23a12 12 0 0 1 24 0C12-13 3-8 0 0Z" fill="#B1272F"/><circle cy="-23" r="4.6" fill="#FBF6EF"/></g>
  </g>
  <g transform="translate(108 240)"><rect width="128" height="24" rx="12" fill="#0B2B22"/><text x="64" y="16" text-anchor="middle" ${F} font-size="9.5" letter-spacing="1" fill="#F2DFA7">${esc(M.pin)}</text></g>
  <g transform="translate(40 40)" stroke="#8A672A" fill="none"><circle r="14" stroke-width=".8" fill="#F8EEE4"/><path d="M0-11 4 0 0 11-4 0Z" fill="#C9A55A" stroke="none"/><path d="M0-11 4 0H-4Z" fill="#8A672A" stroke="none"/><text y="-18" text-anchor="middle" ${F} font-size="9" fill="#8A672A" stroke="none">${esc(M.north)}</text></g>
  <rect x="8" y="8" width="384" height="284" rx="16" fill="none" stroke="#C9A55A" stroke-width=".8" stroke-dasharray="3 4"/>
</svg>`;
}

/* ---------------- toran (marigold garland) ---------------- */
function buildToran() {
  const svg = $('#toran');
  const W = Math.max(320, Math.round(svg.getBoundingClientRect().width || innerWidth));
  const H = 170;
  svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
  svg.setAttribute('preserveAspectRatio', 'xMidYMin slice');
  const petals = (r, n, rr, fill, op) => Array.from({ length: n }, (_, i) => { const t = i / n * Math.PI * 2; return `<circle cx="${f(Math.cos(t) * r)}" cy="${f(Math.sin(t) * r)}" r="${rr}" fill="${fill}" opacity="${op}"/>`; }).join('');
  let s = `<defs>
    <radialGradient id="mo" cx="38%" cy="32%" r="70%"><stop offset="0" stop-color="#FFC55A"/><stop offset=".55" stop-color="#F2891C"/><stop offset="1" stop-color="#B9500C"/></radialGradient>
    <radialGradient id="my" cx="38%" cy="32%" r="70%"><stop offset="0" stop-color="#FFE98A"/><stop offset=".55" stop-color="#F6BE22"/><stop offset="1" stop-color="#C38A08"/></radialGradient>
    <radialGradient id="mr" cx="38%" cy="32%" r="70%"><stop offset="0" stop-color="#F06A7C"/><stop offset=".6" stop-color="#C21F3A"/><stop offset="1" stop-color="#7C0C22"/></radialGradient>
    <linearGradient id="bl" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#8A672A"/><stop offset=".5" stop-color="#F2DFA7"/><stop offset="1" stop-color="#8A672A"/></linearGradient>
    <g id="fo"><circle r="6.6" fill="url(#mo)"/>${petals(4.6, 9, 2.4, '#C9620E', .5)}${petals(2.4, 6, 1.6, '#FFD27A', .55)}</g>
    <g id="fy"><circle r="6.6" fill="url(#my)"/>${petals(4.6, 9, 2.4, '#C8900A', .5)}${petals(2.4, 6, 1.6, '#FFF3B0', .55)}</g>
    <g id="fr"><circle r="4.6" fill="url(#mr)"/>${petals(2.6, 6, 1.6, '#7C0C22', .45)}</g>
    <g id="lf"><path d="M0 0C5 6 5 15 0 24-5 15-5 6 0 0Z" fill="#2F7A3A"/><path d="M0 1V22" stroke="#9BCB7A" stroke-width=".6"/></g>
    <g id="bell"><path d="M-4.5 2C-4.5-3 4.5-3 4.5 2L6 7H-6Z" fill="url(#bl)"/><circle cy="8.6" r="1.6" fill="#8A672A"/><circle cy="-3.2" r="1.3" fill="none" stroke="#C9A55A" stroke-width=".8"/></g>
  </defs>`;
  // leaves (bandhanwar) along the top thread
  s += `<g>`;
  for (let x = 6, i = 0; x < W; x += 13, i++) s += `<use href="#lf" transform="translate(${x} 2) rotate(${i % 2 ? 14 : -14})"/>`;
  s += `</g><path d="M0 3H${W}" stroke="#C9A55A" stroke-width="1.4"/>`;
  const gap = W < 520 ? 48 : 62;
  const n = Math.max(4, Math.round(W / gap));
  const step = W / n;
  const xs = Array.from({ length: n + 1 }, (_, i) => i * step);
  // swags
  s += `<g>`;
  for (let i = 0; i < n; i++) {
    const x0 = xs[i], x1 = xs[i + 1], cx = (x0 + x1) / 2, dip = 26, y0 = 9;
    const count = Math.max(5, Math.round(step / 9));
    for (let k = 1; k < count; k++) {
      const t = k / count;
      const x = (1 - t) * (1 - t) * x0 + 2 * (1 - t) * t * cx + t * t * x1;
      const y = (1 - t) * (1 - t) * y0 + 2 * (1 - t) * t * (y0 + dip * 2) + t * t * y0;
      s += `<use href="#${k % 2 ? 'fo' : 'fy'}" transform="translate(${f(x)} ${f(y)}) scale(.82)"/>`;
    }
  }
  s += `</g>`;
  // hanging strands
  const lens = [8, 5, 7, 5];
  xs.forEach((x, i) => {
    const L = lens[i % lens.length] + (W < 520 ? -1 : 0);
    const d = (2.6 + ((i * 37) % 10) / 6).toFixed(2), dl = (-((i * 53) % 30) / 10).toFixed(2);
    let g = `<g class="strand" style="--d:${d}s;--dl:${dl}s"><path d="M${f(x)} 6V${12 + L * 12.5}" stroke="#C9A55A" stroke-width=".8"/>`;
    for (let k = 0; k < L; k++) g += `<use href="#${(k + i) % 3 === 0 ? 'fr' : (k % 2 ? 'fy' : 'fo')}" transform="translate(${f(x)} ${16 + k * 12.5})"/>`;
    g += `<use href="#bell" transform="translate(${f(x)} ${20 + L * 12.5})"/></g>`;
    s += g;
  });
  svg.innerHTML = s;
}

/* ---------------- petals engine ---------------- */
const Petals = (() => {
  const cv = $('#petals'), cx = cv.getContext('2d');
  let W = 0, H = 0, items = [], running = false, last = 0, target = 0;
  const COLS = [['#F39A1E', '#C2600C'], ['#F7C531', '#C8920C'], ['#D9324B', '#8E1830'], ['#EF86A4', '#C24F78'], ['#FBEFE2', '#D9C6B0']];
  const WEIGHTS = [.3, .22, .22, .16, .1];
  const pick = () => { let r = Math.random(), i = 0; while (r > WEIGHTS[i] && i < WEIGHTS.length - 1) { r -= WEIGHTS[i]; i++; } return COLS[i]; };
  function resize() {
    const dpr = Math.min(2, devicePixelRatio || 1);
    W = innerWidth; H = innerHeight; cv.width = W * dpr; cv.height = H * dpr; cx.setTransform(dpr, 0, 0, dpr, 0, 0);
    target = reduce ? 0 : Math.round(Math.min(26, Math.max(10, W / 45)));
  }
  function make(x, y, burst) {
    const a = Math.random() * Math.PI * 2, sp = burst ? 3 + Math.random() * 10 : 0;
    const spark = burst && Math.random() < .22;
    return { x, y, vx: burst ? Math.cos(a) * sp : (Math.random() - .5) * .3, vy: burst ? Math.sin(a) * sp - 4 : .55 + Math.random() * .8,
      r: Math.random() * 6.28, vr: (Math.random() - .5) * .07, fl: Math.random() * 6.28, vf: .03 + Math.random() * .05,
      s: spark ? 2 + Math.random() * 3 : 4.5 + Math.random() * 6, c: pick(), sw: Math.random() * 6.28, burst, spark, life: 1 };
  }
  function draw(p) {
    cx.save(); cx.translate(p.x, p.y); cx.rotate(p.r);
    if (p.spark) {
      cx.globalAlpha = Math.max(0, p.life); cx.fillStyle = '#F7E2A4'; const s = p.s;
      cx.beginPath(); cx.moveTo(0, -s * 2); cx.quadraticCurveTo(0, 0, s * 2, 0); cx.quadraticCurveTo(0, 0, 0, s * 2); cx.quadraticCurveTo(0, 0, -s * 2, 0); cx.quadraticCurveTo(0, 0, 0, -s * 2); cx.fill();
    } else {
      cx.scale(Math.cos(p.fl) * .85 + .15 * Math.sign(Math.cos(p.fl) || 1), 1);
      const s = p.s; cx.fillStyle = p.c[0]; cx.strokeStyle = p.c[1]; cx.lineWidth = .8;
      cx.beginPath(); cx.moveTo(0, -s); cx.bezierCurveTo(s * .95, -s * .55, s * .7, s * .75, 0, s); cx.bezierCurveTo(-s * .7, s * .75, -s * .95, -s * .55, 0, -s); cx.fill();
      cx.globalAlpha = .55; cx.beginPath(); cx.moveTo(0, -s * .7); cx.lineTo(0, s * .8); cx.stroke();
    }
    cx.restore();
  }
  function frame(t) {
    if (!running) return;
    const dt = Math.min(3, (t - last) / 16.67 || 1); last = t;
    cx.clearRect(0, 0, W, H);
    let ambient = 0;
    for (let i = items.length - 1; i >= 0; i--) {
      const p = items[i];
      if (p.burst) {
        const k = Math.pow(.965, dt); p.vx *= k; p.vy = p.vy * k + .13 * dt;
        if (p.spark) p.life -= .012 * dt;
        if (!p.spark && Math.abs(p.vx) < .6 && p.vy > 0) { p.vy = Math.min(p.vy, 1.4); p.burst = false; }
      } else { p.sw += .022 * dt; ambient++; }
      p.x += (p.vx + (p.burst ? 0 : Math.sin(p.sw) * .7)) * dt; p.y += p.vy * dt; p.r += p.vr * dt; p.fl += p.vf * dt;
      if (p.y > H + 30 || p.x < -40 || p.x > W + 40 || p.life <= 0) { items.splice(i, 1); continue; }
      draw(p);
    }
    if (ambient < target && Math.random() < .05 * dt) items.push(make(Math.random() * W, -20, false));
    requestAnimationFrame(frame);
  }
  function start() { if (running) return; running = true; last = performance.now(); requestAnimationFrame(frame); }
  function stop() { running = false; }
  function burst(x, y, n = 140) { if (reduce) return; for (let i = 0; i < n; i++) items.push(make(x + (Math.random() - .5) * 30, y + (Math.random() - .5) * 30, true)); start(); }
  addEventListener('resize', resize); resize();
  document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());
  return { start, burst };
})();

/* ---------------- music (your song, starts when the seal is tapped) ---------------- */
const Music = (() => {
  let el = null, on = false, fadeT = null;
  if (INVITE.music) { el = new Audio(); el.src = INVITE.music; el.loop = true; el.preload = 'auto'; }
  function ui() { const b = $('#music'); if (!b) return; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); b.setAttribute('aria-label', on ? INVITE.ui.pauseMusic : INVITE.ui.playMusic); }
  function fadeIn() { clearInterval(fadeT); let v = 0; try { el.volume = 0; } catch (e) {} fadeT = setInterval(() => { v = Math.min(.85, v + .05); try { el.volume = v; } catch (e) {} if (v >= .85) clearInterval(fadeT); }, 120); }
  function play() { if (!el) return; const p = el.play(); fadeIn(); on = true; ui(); if (p && p.catch) p.catch(() => { on = false; ui(); }); }
  function pause() { if (!el) return; el.pause(); on = false; ui(); }
  function start() { play(); }
  function toggle() { on ? pause() : play(); }
  document.addEventListener('visibilitychange', () => { if (!el || !on) return; if (document.hidden) el.pause(); else el.play().catch(() => {}); });
  return { start, toggle, has: () => !!el };
})();

/* ---------------- fill content ---------------- */
const derived = Object.assign({}, INVITE);
function bindAll(scope = document) {
  $$('[data-bind]', scope).forEach(el => { const v = get(derived, el.dataset.bind); if (v === '') el.hidden = true; else if (v != null) el.textContent = v; });
  $$('[data-bind-wrap]', scope).forEach(el => { if (!get(derived, el.dataset.bindWrap)) el.hidden = true; });
}
function guestName() {
  let n = '';
  try { n = new URLSearchParams(location.search).get('to') || ''; } catch (e) {}
  if (!n && location.hash.length > 1) {
    let h = location.hash.slice(1); try { h = decodeURIComponent(h); } catch (e) {}
    if (!document.getElementById(h)) n = h.replace(/~/g, ' & ').replace(/[-_+]+/g, ' ');
  }
  return n.replace(/\s+/g, ' ').trim().slice(0, 60);
}

// gate
const tpl = $('#coverTpl');
$$('.door-face').forEach(face => face.appendChild(tpl.content.cloneNode(true)));
$$('[data-mandala]').forEach(el => el.innerHTML = mandalaSVG());
$$('.corner').forEach(el => el.innerHTML = CORNER);
$$('[data-orn]').forEach(el => el.innerHTML = ORN);
$$('.seal-half').forEach(el => el.innerHTML = sealSVG(INVITE.groom.initial, INVITE.bride.initial));
bindAll();
const guest = guestName();
$$('[data-guest-cover]').forEach(el => el.textContent = guest ? 'Dear ' + guest + ', you are invited' : 'You are cordially invited');
if (guest) $('#guestName').textContent = guest;

// photos
['groom', 'bride'].forEach(k => {
  const url = INVITE[k].photo; const el = $(`[data-photo="${k}"]`);
  if (url && el) { el.style.backgroundImage = `url("${url.replace(/"/g, '%22')}")`; el.classList.add('has-photo'); el.setAttribute('role', 'img'); el.setAttribute('aria-label', INVITE[k].full); }
});

// hero photo
if (INVITE.heroPhoto) $('#heroPhoto').src = INVITE.heroPhoto; else $('.arch-photo').hidden = true;

// album
const ZOOM_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>';
const track = $('#albumTrack');
track.innerHTML = INVITE.album.map((p, i) => `<figure class="shot ${esc(p.cls || '')}" style="--d:${(i * .18).toFixed(2)}s;--ar:${p.ar || '3/4'}" data-i="${i}">
  <button class="shot-frame" type="button" aria-label="Open photo: ${esc(p.caption)}"><span class="shot-img"><img src="${p.src}" alt="${esc(p.alt || p.caption)}" loading="eager" decoding="async"></span><span class="zoom" aria-hidden="true">${ZOOM_ICON}</span></button>
  <figcaption><span class="cap-script">${esc(p.caption)}</span><span class="cap-label">${esc(p.sub || '')}</span></figcaption>
</figure>`).join('');
const shots = $$('.shot', track);
$('#albumDots').innerHTML = INVITE.album.map((p, i) => `<button type="button" aria-label="Photo ${i + 1}"${i === 0 ? ' aria-current="true"' : ''}></button>`).join('');
const dotBtns = $$('#albumDots button');
const isCarousel = () => track.scrollWidth > track.clientWidth + 4;
let userTouched = false;
function coverflow() {
  if (!isCarousel()) { shots.forEach(s => { s.style.transform = ''; s.style.opacity = ''; }); return; }
  const mid = track.getBoundingClientRect().left + track.clientWidth / 2;
  let best = 0, bestD = 1e9;
  shots.forEach((s, i) => {
    const r = s.getBoundingClientRect(); const d = (r.left + r.width / 2 - mid) / r.width;
    const ad = Math.min(1, Math.abs(d));
    if (Math.abs(d) < bestD) { bestD = Math.abs(d); best = i; }
    if (!reduce) s.style.transform = `rotateY(${(-d * 14).toFixed(2)}deg) scale(${(1 - ad * .12).toFixed(3)})`;
    s.style.opacity = (1 - ad * .4).toFixed(2);
  });
  dotBtns.forEach((b, i) => b.setAttribute('aria-current', i === best ? 'true' : 'false'));
  return best;
}
const goTo = i => { const s = shots[i]; track.scrollTo({ left: s.offsetLeft - (track.clientWidth - s.offsetWidth) / 2, behavior: reduce ? 'auto' : 'smooth' }); };
let cfT = false;
track.addEventListener('scroll', () => { if (!cfT) { cfT = true; requestAnimationFrame(() => { cfT = false; coverflow(); }); } }, { passive: true });
['pointerdown', 'touchstart', 'wheel'].forEach(ev => track.addEventListener(ev, () => { userTouched = true; }, { passive: true }));
dotBtns.forEach((b, i) => b.addEventListener('click', () => { userTouched = true; goTo(i); }));
addEventListener('resize', coverflow);
requestAnimationFrame(coverflow);
// gentle auto-advance on phones until the guest swipes
if (!reduce) setInterval(() => {
  if (userTouched || !isCarousel() || document.hidden || !$('#lb').hidden) return;
  const r = track.getBoundingClientRect(); if (r.bottom < 0 || r.top > innerHeight) return;
  const cur = coverflow() || 0; goTo((cur + 1) % shots.length);
}, 4200);

// lightbox
const lb = $('#lb'), lbImg = $('#lbImg');
let lbI = 0, lastFocus = null;
function lbShow(i, swap) {
  lbI = (i + INVITE.album.length) % INVITE.album.length; const p = INVITE.album[lbI];
  const apply = () => { lbImg.src = p.src; lbImg.alt = p.alt || p.caption; $('#lbCap').textContent = p.caption; $('#lbSub').textContent = p.sub || ''; $('#lbCount').textContent = `${lbI + 1} / ${INVITE.album.length}`; lbImg.classList.remove('swap'); };
  if (swap && !reduce) { lbImg.classList.add('swap'); setTimeout(apply, 260); } else apply();
}
function lbOpen(i) {
  lastFocus = document.activeElement; userTouched = true;
  lbShow(i); lb.hidden = false; document.body.classList.add('locked');
  requestAnimationFrame(() => requestAnimationFrame(() => lb.classList.add('show')));
  $('#lbClose').focus({ preventScroll: true });
}
function lbClose() {
  lb.classList.remove('show'); document.body.classList.remove('locked');
  setTimeout(() => { lb.hidden = true; }, reduce ? 0 : 420);
  if (lastFocus) lastFocus.focus({ preventScroll: true });
}
shots.forEach((s, i) => $('.shot-frame', s).addEventListener('click', () => lbOpen(i)));
$('#lbClose').addEventListener('click', lbClose);
$('#lbPrev').addEventListener('click', () => lbShow(lbI - 1, true));
$('#lbNext').addEventListener('click', () => lbShow(lbI + 1, true));
lb.addEventListener('click', e => { if (e.target === lb) lbClose(); });
document.addEventListener('keydown', e => {
  if (lb.hidden) return;
  if (e.key === 'Escape') lbClose(); else if (e.key === 'ArrowRight') lbShow(lbI + 1, true); else if (e.key === 'ArrowLeft') lbShow(lbI - 1, true);
});
let sx = null;
lb.addEventListener('pointerdown', e => { sx = e.clientX; });
lb.addEventListener('pointerup', e => { if (sx == null) return; const dx = e.clientX - sx; sx = null; if (Math.abs(dx) > 50) lbShow(lbI + (dx < 0 ? 1 : -1), true); });

// countdown labels & save the date
$('#cdDate').textContent = INVITE.countdownLabel;
const mainEv = INVITE.events.find(e => e.main) || INVITE.events[0];
const details = `${INVITE.groom.first} & ${INVITE.bride.first}'s wedding celebrations`;
$('#saveDate').href = gcal(`${INVITE.groom.first} & ${INVITE.bride.first} · ${mainEv.name}`, mainEv.start, mainEv.end, details, INVITE.venue.mapsQuery);

// events
let lastDay = null, dayN = 0;
$('#timeline').insertAdjacentHTML('beforeend', INVITE.events.map((e, i) => {
  let mark = '';
  const V = INVITE.venue;
  const key = e.dayKey || e.allDay;
  if (key && key !== lastDay) { lastDay = key; dayN++; mark = `<div class="day-mark rv"><span class="dm-k">Day ${dayN}</span><span class="dm-d">${esc(e.dayLabel || e.day)}</span></div>`; }
  return mark + `<article class="ev rv${e.main ? ' main' : ''}" style="--c:${e.color};--d:.05s">
    <div class="ev-medal">${ICONS[e.icon] || ''}</div>
    <div class="ev-card" data-tilt>
      <p class="ev-day">${esc(e.day)}</p>
      <h3 class="ev-title">${esc(e.name)}</h3>
      ${e.muhurat ? `<p class="muhurat"><i></i>${esc(e.muhurat)}</p>` : ''}
      <p class="ev-blurb">${esc(e.blurb)}</p>
      <dl class="ev-meta">
        ${e.when ? `<div><dt>When</dt><dd>${esc(e.when)}</dd></div>` : ''}
        ${e.time ? `<div><dt>Time</dt><dd>${esc(e.time)}</dd></div>` : ''}
        ${e.where ? `<div><dt>Where</dt><dd>${esc(e.where)}</dd></div>` : ''}
        ${e.dress ? `<div><dt>Dress code</dt><dd>${esc(e.dress)}</dd></div>` : ''}
      </dl>
      <div class="ev-actions">
        <a class="btn ${e.main ? 'btn-dark' : 'btn-dark'}" href="${gcal(`${INVITE.groom.first} & ${INVITE.bride.first} · ${e.name}`, e.start, e.end, details, V.mapsQuery, e.allDay)}" target="_blank" rel="noopener">${CAL_ICON}Add to calendar</a>
        <a class="btn btn-line" href="${mapsUrl(V.mapsQuery)}" target="_blank" rel="noopener">${PIN_ICON}Directions</a>
      </div>
    </div>
  </article>`;
}).join(''));
if (INVITE.events.length === 1) $('#timeline').classList.add('single');

// venue
$('#map').innerHTML = mapSVG() + '<span class="map-note">Illustrative map</span>';
$('#dirBtn').href = mapsUrl(INVITE.venue.mapsQuery);
$('#tips').innerHTML = INVITE.tips.map(t => `<li>${ICONS[t.icon] || ''}<div><b>${esc(t.title)}</b><p>${esc(t.text)}</p>${t.copy ? `<button class="btn btn-line tip-copy" type="button" data-copy="${esc(t.copy)}">${esc(INVITE.ui.copyAddress)}</button>` : ''}</div></li>`).join('');
$$('[data-copy]').forEach(b => b.addEventListener('click', () => copy(b.dataset.copy, b.previousElementSibling)));

// footer diyas
$('#diyas').innerHTML = diyaSVG() + diyaSVG();

// toran
buildToran();
let lastW = innerWidth, rT;
addEventListener('resize', () => { clearTimeout(rT); rT = setTimeout(() => { if (Math.abs(innerWidth - lastW) > 40) { lastW = innerWidth; buildToran(); } }, 200); });

/* ---------------- gate opening ---------------- */
let opened = false;
const gate = $('#gate');
function openInvite() {
  if (opened) return; opened = true;
  Music.start();
  const sr = $('#seal').getBoundingClientRect();
  const finish = () => {
    gate.remove(); document.body.classList.remove('locked'); document.body.classList.add('opened');
    if (Music.has()) $('#music').hidden = false;
    if (location.hash && document.getElementById(location.hash.slice(1))) document.getElementById(location.hash.slice(1)).scrollIntoView();
  };
  if (reduce) { gate.classList.add('fade'); document.body.classList.add('opened'); setTimeout(finish, 700); return; }
  gate.classList.add('cracking');
  setTimeout(() => {
    gate.classList.add('open');
    Petals.burst(sr.left + sr.width / 2, sr.top + sr.height / 2, innerWidth < 600 ? 120 : 170);
  }, 380);
  setTimeout(() => document.body.classList.add('opened'), 620);
  setTimeout(finish, 2700);
}
gate.addEventListener('click', openInvite);
gate.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openInvite(); } });
$('#music').addEventListener('click', Music.toggle);
Petals.start();

/* ---------------- reveal on scroll ---------------- */
if (!reduce && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .14, rootMargin: '0px 0px -6% 0px' });
  $$('.rv, .shot').forEach(el => io.observe(el));
} else $$('.rv, .shot').forEach(el => el.classList.add('in'));

/* ---------------- scroll-linked ---------------- */
const tl = $('#timeline');
let ticking = false;
const toTop = $('#toTop'), toTopRing = $('#toTopRing');
toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }));
function onScroll() {
  ticking = false;
  const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
  toTop.classList.toggle('show', scrollY > innerHeight * .9);
  toTopRing.setAttribute('stroke-dashoffset', (100 - Math.min(1, scrollY / max) * 100).toFixed(1));
  const r = tl.getBoundingClientRect();
  const p = Math.min(1, Math.max(0, (innerHeight * .62 - r.top) / r.height));
  tl.style.setProperty('--p', p.toFixed(3));
  if (!reduce) shots.forEach(s => {
    const b = s.getBoundingClientRect(); if (b.bottom < 0 || b.top > innerHeight) return;
    const k = (b.top + b.height / 2 - innerHeight / 2) / innerHeight;
    const img = s.querySelector('img'); img.style.setProperty('--py', (k * -3).toFixed(2) + '%');
  });
}
addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
onScroll();

/* ---------------- tilt ---------------- */
if (!reduce && matchMedia('(hover:hover) and (pointer:fine)').matches) {
  $$('[data-tilt]').forEach(el => {
    el.addEventListener('pointermove', e => {
      const r = el.getBoundingClientRect(); const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      el.style.transform = `perspective(900px) rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg) translateY(-4px)`;
    });
    el.addEventListener('pointerleave', () => { el.style.transform = ''; });
  });
}

/* ---------------- countdown ---------------- */
const target = new Date(INVITE.countdownTo).getTime();
const cells = {}; $$('.cd-num').forEach(el => cells[el.dataset.u] = el);
function setCell(u, str) {
  const el = cells[u]; if (el.dataset.v === str) return;
  const first = el.dataset.v == null; el.dataset.v = str;
  const n = document.createElement('span'); n.textContent = str;
  const old = el.querySelector('span:not(.out)');
  if (old && !first && !reduce) { old.classList.add('out'); n.classList.add('in'); el.appendChild(n); setTimeout(() => old.remove(), 600); }
  else { el.textContent = ''; el.appendChild(n); }
}
function tick() {
  const diff = Math.max(0, target - Date.now());
  setCell('d', String(Math.floor(diff / 864e5)));
  setCell('h', String(Math.floor(diff / 36e5) % 24).padStart(2, '0'));
  setCell('m', String(Math.floor(diff / 6e4) % 60).padStart(2, '0'));
  setCell('s', String(Math.floor(diff / 1e3) % 60).padStart(2, '0'));
  if (diff === 0) { $('#countdown .h2').innerHTML = 'Happily <em>married</em>'; clearInterval(cdT); }
}
const cdT = setInterval(tick, 1000); tick();

$('#tagBtn').addEventListener('click', () => copy(INVITE.hashtag, $('#tagBtn span')));
})();
