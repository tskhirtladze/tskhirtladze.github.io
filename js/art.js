/* Small generated illustrations for project tiles. Pick one with `art:` in content.js.
   Add a new one by adding a function that returns SVG shapes (canvas is 400 x 300). */
(function () {
  const K = "#1A1A1A", W = "#fff", sw = 'stroke="#1A1A1A" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
  function rng(seed) { return () => (seed = (seed * 16807) % 2147483647) / 2147483647; }

  window.ART = {
    web: () => `
      <rect x="55" y="45" width="290" height="210" rx="10" fill="${W}" ${sw}/>
      <path d="M55 82H345" ${sw} fill="none"/>
      <circle cx="75" cy="64" r="5" fill="${K}"/><circle cx="93" cy="64" r="5" fill="${K}"/><circle cx="111" cy="64" r="5" fill="${K}"/>
      <rect x="80" y="105" width="110" height="14" fill="${K}"/>
      <rect x="80" y="132" width="200" height="8" fill="${K}" opacity=".35"/>
      <rect x="80" y="150" width="170" height="8" fill="${K}" opacity=".35"/>
      <rect x="80" y="190" width="80" height="34" rx="6" fill="${K}"/>
      <rect x="255" y="190" width="65" height="34" rx="6" fill="none" ${sw}/>`,

    dashboard: () => {
      const hs = [60, 95, 75, 125, 105, 150, 135];
      return `<rect x="45" y="40" width="310" height="220" rx="10" fill="${W}" ${sw}/>` +
        hs.map((h, i) => `<rect x="${70 + i * 38}" y="${230 - h}" width="24" height="${h}" fill="${K}"/>`).join("") +
        `<polyline points="82,170 120,145 158,158 196,110 234,125 272,80 310,92" fill="none" ${sw}/>` +
        [[82,170],[120,145],[158,158],[196,110],[234,125],[272,80],[310,92]].map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="6" fill="${W}" ${sw}/>`).join("");
    },

    package: () => `
      <rect x="40" y="95" width="130" height="110" rx="10" fill="${W}" ${sw}/>
      <text x="105" y="165" font-size="48" font-weight="800" text-anchor="middle" fill="${K}" font-family="Arial,sans-serif">123</text>
      <path d="M182 150H222M210 136L224 150L210 164" fill="none" ${sw}/>
      <rect x="236" y="95" width="130" height="110" rx="10" fill="${K}"/>
      <text x="301" y="143" font-size="26" font-weight="700" text-anchor="middle" fill="${W}" font-family="Arial,sans-serif">ას ოცდა-</text>
      <text x="301" y="169" font-size="26" font-weight="700" text-anchor="middle" fill="${W}" font-family="Arial,sans-serif">სამი</text>`,

    pipeline: () => {
      const nodes = [[318, 92], [366, 128], [330, 176], [372, 214], [306, 232]];
      const edges = [[0, 1], [0, 2], [1, 2], [2, 3], [2, 4]];
      return [70, 130, 190].map(y => `
        <rect x="24" y="${y}" width="72" height="44" rx="6" fill="${W}" ${sw}/>
        <path d="M38 ${y + 15}H82M38 ${y + 29}H64" fill="none" ${sw}/>`).join("") +
        [92, 152, 212].map(y => `<path d="M100 ${y}C130 ${y} 128 150 156 150" fill="none" ${sw}/>`).join("") +
        `<rect x="156" y="102" width="88" height="96" rx="8" fill="${K}"/>
         <path d="M174 128H226M174 150H210M174 172H192" stroke="${W}" stroke-width="5" stroke-linecap="round"/>
         <path d="M250 150H280M268 138L281 150L268 162" fill="none" ${sw}/>` +
        edges.map(([a, b]) => `<line x1="${nodes[a][0]}" y1="${nodes[a][1]}" x2="${nodes[b][0]}" y2="${nodes[b][1]}" ${sw}/>`).join("") +
        nodes.map((n, i) => `<circle cx="${n[0]}" cy="${n[1]}" r="${i === 2 ? 14 : 9}" fill="${i === 2 ? K : W}" ${sw}/>`).join("");
    },

    network: () => {
      const r = rng(7), pts = Array.from({ length: 15 }, () => [40 + r() * 320, 35 + r() * 230]);
      let e = "";
      pts.forEach((a, i) => pts.forEach((b, j) => {
        if (j > i && Math.hypot(a[0] - b[0], a[1] - b[1]) < 105) e += `<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" ${sw}/>`;
      }));
      return e + pts.map((p, i) => `<circle cx="${p[0]}" cy="${p[1]}" r="${i % 4 ? 9 : 15}" fill="${i % 3 ? W : K}" ${sw}/>`).join("");
    },

    sim: () => {
      const r = rng(11);
      let s = "";
      for (let y = 0; y < 13; y++) for (let x = 0; x < 18; x++) {
        const v = Math.sin(x * .55) + Math.cos(y * .6) + (r() - .5) * .9 > 0;
        s += `<circle cx="${40 + x * 20}" cy="${36 + y * 19}" r="7" fill="${v ? K : W}" ${sw}/>`;
      }
      return s;
    },

    research: () => `
      <rect x="80" y="40" width="170" height="215" rx="8" fill="${W}" ${sw}/>
      <rect x="105" y="68" width="100" height="14" fill="${K}"/>
      <path d="M105 105H225M105 125H225M105 145H190" fill="none" ${sw}/>
      <path d="M286 220L332 266" stroke="${K}" stroke-width="12" stroke-linecap="round"/>
      <circle cx="250" cy="185" r="48" fill="${W}" ${sw}/>
      <rect x="230" y="185" width="12" height="22" fill="${K}"/>
      <rect x="247" y="168" width="12" height="39" fill="${K}"/>
      <rect x="264" y="192" width="12" height="15" fill="${K}"/>`,

    agent: () => {
      const person = (x, y, k, fill) => `
        <circle cx="${x}" cy="${y}" r="${14 * k}" fill="${fill}" ${sw}/>
        <path d="M${x - 24 * k} ${y + 60 * k}V${y + 38 * k}Q${x - 24 * k} ${y + 24 * k} ${x} ${y + 24 * k}Q${x + 24 * k} ${y + 24 * k} ${x + 24 * k} ${y + 38 * k}V${y + 60 * k}Z" fill="${fill}" ${sw}/>`;
      const arrow = (x1, x2, y) => `<path d="M${x1} ${y}H${x2}M${x2 - 10} ${y - 9}L${x2} ${y}L${x2 - 10} ${y + 9}" fill="none" ${sw}/>`;
      const dots = [1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1].map((v, i) =>
        `<circle cx="${55 + i * 27.3}" cy="252" r="7" fill="${v ? K : W}" ${sw}/>`).join("");
      return person(70, 128, 1.2, K) + person(200, 140, 1, W) + person(330, 140, 1, W) +
        arrow(110, 166, 168) + arrow(236, 294, 168) +
        `<path d="M165 95A35 35 0 0 1 235 95" fill="none" ${sw}/>
         <path d="M200 95L222 66" fill="none" ${sw}/><circle cx="200" cy="95" r="5" fill="${K}"/>` + dots;
    },

    chat: () => `
      <rect x="40" y="45" width="215" height="70" rx="14" fill="${W}" ${sw}/>
      <rect x="62" y="68" width="150" height="9" fill="${K}" opacity=".4"/><rect x="62" y="88" width="105" height="9" fill="${K}" opacity=".4"/>
      <rect x="145" y="135" width="215" height="70" rx="14" fill="${K}"/>
      <rect x="167" y="158" width="150" height="9" fill="${W}"/><rect x="167" y="178" width="120" height="9" fill="${W}"/>
      <line x1="90" y1="248" x2="165" y2="228" ${sw}/><line x1="165" y1="228" x2="240" y2="252" ${sw}/><line x1="240" y1="252" x2="310" y2="226" ${sw}/>
      <circle cx="90" cy="248" r="9" fill="${W}" ${sw}/><circle cx="165" cy="228" r="9" fill="${K}"/><circle cx="240" cy="252" r="9" fill="${W}" ${sw}/><circle cx="310" cy="226" r="9" fill="${W}" ${sw}/>`
  };
})();

