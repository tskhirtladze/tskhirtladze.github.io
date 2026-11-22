(function () {
  const S = window.SITE, P = S.profile;

  function h(tag, attrs, ...kids) {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v == null || v === false) continue;
      if (k === "text") e.textContent = v; else if (k === "html") e.innerHTML = v; else e.setAttribute(k, v);
    }
    kids.flat().forEach(c => c != null && e.append(c));
    return e;
  }
  const ext = u => /^https?:/.test(u) ? { target: "_blank", rel: "noopener" } : {};
  const link = (text, url) => h("a", { href: url, text, ...ext(url) });
  const fullName = P.name.join(" ");

  const ICONS = {
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
    github: '<svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><text x="12" y="17" font-size="12" font-weight="700" text-anchor="middle" fill="currentColor" font-family="Arial,sans-serif">in</text></svg>',
    link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg>',
    orcid: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="currentColor"/><g fill="#fff"><circle cx="8.2" cy="7.6" r="1.1"/><rect x="7.3" y="9.8" width="1.8" height="7.6"/></g><path d="M11.8 9.8h2.7a3.8 3.8 0 0 1 0 7.6h-2.7z" fill="none" stroke="#fff" stroke-width="1.7" stroke-linejoin="round"/></svg>',
  };

  /* ---------- section renderers: add a new `type` here ---------- */
  const renderers = {
    text: s => h("div", { class: "prose" }, s.paragraphs.map(p => h("p", { text: p }))),

    list: s => h("dl", { class: "defs" }, s.items.map(i =>
      h("div", {}, h("dt", { text: i.title }), h("dd", { text: i.text })))),

    groups: s => h("div", { class: "groups" }, s.groups.map(g =>
      h("section", { class: "group" },
        h("h3", { text: g.heading }),
        g.entries.map(e => h("div", { class: "entry" },
          h("div", { class: "when", text: e.period || "" }),
          h("div", {},
            e.type ? h("span", { class: "type", text: e.type }) : null,
            h("h4", {}, e.url ? link(e.title, e.url) : e.title),
            e.org ? h("p", { class: "org", text: e.org }) : null,
            e.text ? h("p", { text: e.text }) : null)))))),

    contact: s => h("ul", { class: "contact" }, s.links.map(l =>
      h("li", {}, h("span", { text: l.label }), l.url ? link(l.text, l.url) : l.text))),

    projects: s => {
      const catsOf = p => [].concat(p.category);
      const cats = [...new Set(s.projects.flatMap(catsOf))];
      const bar = h("div", { class: "filters", role: "group", "aria-label": "Filter projects" });
      const grid = h("div", { class: "grid" });
      const tiles = s.projects.map(p => {
        const art = h("div", { class: "art" });
        art.innerHTML = '<svg viewBox="0 0 400 300" aria-hidden="true">' + (window.ART[p.art] ? window.ART[p.art]() : "") + "</svg>";
        const body = h("div", { class: "tile-body" }, h("h3", { text: p.title }), h("p", { text: p.text }),
          h("p", { class: "meta", text: [catsOf(p).join(", "), p.tech].filter(Boolean).join(" · ") }));
        if (p.with) body.append(h("p", { class: "with", text: "With " + [].concat(p.with).join(", ") }));
        if (p.badge) body.append(h("img", { src: p.badge.src, alt: p.badge.alt, loading: "lazy" }));
        return h("a", { class: "tile", href: p.url, "data-cat": catsOf(p).join("|"), style: "--c:" + (p.color || "#DCEAF5"), ...ext(p.url) }, art, body);
      });
      function pick(c) {
        tiles.forEach(t => t.hidden = c !== "All" && !t.dataset.cat.split("|").includes(c));
        [...bar.children].forEach(b => b.setAttribute("aria-pressed", b.dataset.cat === c));
      }
      ["All", ...cats].forEach(c => {
        const b = h("button", { type: "button", "data-cat": c, text: c });
        b.addEventListener("click", () => pick(c));
        bar.append(b);
      });
      grid.append(...tiles);
      pick("All");
      return h("div", {}, bar, grid);
    }
  };

  /* ---------- home / about ---------- */
  document.getElementById("brand").textContent = fullName;

  const avatar = h("div", { class: "avatar", "aria-hidden": P.photo ? null : "true" }, P.name.map(n => n[0]).join(""));
  if (P.photo) {
    const img = h("img", { alt: P.photoAlt || "Portrait of " + fullName });
    img.addEventListener("load", () => avatar.append(img));
    img.src = P.photo;
  }

  const side = h("div", { class: "side" }, avatar, h("h1", { text: fullName }), h("p", { class: "role", text: P.role }));
  if (P.affiliations && P.affiliations.length)
    side.append(h("ul", { class: "affil" }, P.affiliations.map(a => h("li", {}, a.url ? link(a.text, a.url) : a.text))));
  if (P.location) side.append(h("p", { class: "place", text: P.location }));
  side.append(h("ul", { class: "social" }, P.social.map(l =>
    h("li", {}, h("a", { href: l.url, title: l.label, "aria-label": l.label, html: ICONS[l.icon] || ICONS.link, ...ext(l.url) })))));

  const bio = h("div", { class: "bio" }, h("h2", { text: "About me" }), P.bio.map(t => h("p", { text: t })));
  if (P.now) bio.append(h("p", { class: "now" }, P.now.text + " ", link(P.now.label, P.now.url)));
  const cols = h("div", { class: "cols" });
  if (P.interests) cols.append(h("div", {}, h("h3", { text: "Interests" }), h("ul", {}, P.interests.map(i => h("li", { text: i })))));
  if (P.education) cols.append(h("div", {}, h("h3", { text: "Education" }),
    h("ul", { class: "plain" }, P.education.map(e => h("li", {}, e.title, e.org ? h("span", { text: e.org }) : null)))));
  bio.append(cols);
  document.getElementById("about").append(h("div", { class: "about-grid" }, side, bio));

  /* ---------- sections + navigation ---------- */
  const links = document.getElementById("links"), main = document.getElementById("sections");
  links.append(h("a", { href: "#home", text: "Home" }));
  S.sections.forEach((s, i) => {
    links.append(h("a", { href: "#" + s.id, text: s.title }));
    const head = h("div", { class: "sec-head" }, h("h2", { text: s.title }), s.subtitle ? h("p", { text: s.subtitle }) : null);
    main.append(h("section", { class: "sec" + (i % 2 === 0 ? " alt" : ""), id: s.id },
      h("div", { class: "wrap" }, head, renderers[s.type](s))));
  });
  document.getElementById("foot").textContent = "© " + new Date().getFullYear() + " " + fullName;

  /* light / dark theme: light by default, choice is remembered */
  const root = document.documentElement, themeBtn = document.getElementById("theme");
  function setTheme(t, save) {
    root.dataset.theme = t;
    themeBtn.setAttribute("aria-pressed", t === "dark");
    themeBtn.setAttribute("aria-label", t === "dark" ? "Switch to light theme" : "Switch to dark theme");
    if (save) { try { localStorage.setItem("theme", t); } catch (e) {} }
  }
  setTheme(root.dataset.theme === "dark" ? "dark" : "light");
  themeBtn.addEventListener("click", () => setTheme(root.dataset.theme === "dark" ? "light" : "dark", true));

  /* highlight current section in the navbar */
  const navLinks = [...links.children];
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) navLinks.forEach(a => a.classList.toggle("on", a.hash === "#" + e.target.id));
  }), { rootMargin: "-40% 0px -55% 0px" });
  document.querySelectorAll("#home, .sec").forEach(s => io.observe(s));
})();