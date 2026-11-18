(function () {
  const S = window.SITE;
  const COLORS = { blue: "#2B4EFF", coral: "#FF5A3C", sun: "#FFC83D", mint: "#2FBF8F", lilac: "#B79CFF" };
  const col = c => COLORS[c] || c || COLORS.sun;

  function h(tag, attrs, ...kids) {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v == null || v === false) continue;
      if (k === "text") e.textContent = v; else e.setAttribute(k, v);
    }
    kids.flat().forEach(c => c != null && e.append(c));
    return e;
  }
  const ext = u => u.startsWith("http") ? { target: "_blank", rel: "noopener" } : {};
  const link = (text, url) => h("a", { href: url, text, ...ext(url) });

  /* ---------- tab content renderers: add a new `type` here ---------- */
  const renderers = {
    text: s => {
      const d = h("div", {}, h("div", { class: "prose" }, s.paragraphs.map(p => h("p", { text: p }))));
      if (s.chips) d.append(h("div", { class: "chips" },
        s.chips.map((c, i) => h("span", { text: c, style: "--c:" + col(["sun", "mint", "lilac", "coral", "blue"][i % 5]) }))));
      return d;
    },

    list: s => h("dl", { class: "defs" }, s.items.map((i, n) =>
      h("div", { style: "--c:" + col(["blue", "coral", "sun", "mint", "lilac"][n % 5]) },
        h("dt", { text: i.title }), h("dd", { text: i.text })))),

    groups: s => h("div", { class: "groups" }, s.groups.map((g, n) =>
      h("section", { class: "group", style: "--c:" + col(["blue", "coral", "sun", "mint", "lilac"][n % 5]) },
        h("h3", { text: g.heading }),
        g.entries.map(e => h("div", { class: "entry" },
          h("div", { class: "when", text: e.period || "" }),
          h("div", {},
            h("h4", {}, e.url ? link(e.title, e.url) : e.title),
            e.org ? h("p", { class: "org", text: e.org }) : null,
            e.text ? h("p", { text: e.text }) : null))))))
    ,

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
        const t = h("a", { class: "tile", href: p.url, "data-cat": catsOf(p).join("|"), style: "--c:" + col(p.color), ...ext(p.url) },
          art, h("h3", { text: p.title }), h("p", { text: p.text }),
          h("p", { class: "meta", text: [catsOf(p).join(", "), p.tech].filter(Boolean).join(" · ") }));
        if (p.with) t.append(h("p", { class: "with", text: "With " + [].concat(p.with).join(", ") }));
        if (p.badge) t.append(h("img", { src: p.badge.src, alt: p.badge.alt, loading: "lazy" }));
        return t;
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

  /* ---------- page ---------- */
  const fullName = S.name.join(" ");
  document.getElementById("brand").textContent = fullName;
  const mail = document.getElementById("mail");
  mail.textContent = S.email; mail.href = "mailto:" + S.email;
  document.getElementById("name").append(S.name[0], h("br"), S.name[1]);
  const photo = document.getElementById("photo");
  if (S.photo) {
    photo.alt = S.photoAlt || "Portrait of " + fullName;
    photo.addEventListener("load", () => photo.hidden = false);
    photo.addEventListener("error", () => photo.hidden = true);
    photo.src = S.photo;
  }
  document.getElementById("lead").textContent = S.lead;
  document.getElementById("now").append(S.now.text + " ", link(S.now.label, S.now.url));
  document.getElementById("foot").textContent = "© " + new Date().getFullYear() + " " + fullName;

  const tabs = document.getElementById("tabs"), panels = document.getElementById("panels");
  const buttons = [], bodies = [];
  S.sections.forEach(s => {
    const b = h("button", { type: "button", role: "tab", id: "tab-" + s.id, "aria-controls": s.id, text: s.title });
    const p = h("section", { class: "panel", id: s.id, role: "tabpanel", "aria-labelledby": "tab-" + s.id }, renderers[s.type](s));
    b.addEventListener("click", () => show(s.id, true));
    tabs.append(b); panels.append(p); buttons.push(b); bodies.push(p);
  });

  function show(id, push) {
    if (!S.sections.some(s => s.id === id)) id = S.sections[0].id;
    S.sections.forEach((s, i) => {
      buttons[i].setAttribute("aria-selected", s.id === id);
      bodies[i].hidden = s.id !== id;
    });
    if (push) history.replaceState(null, "", "#" + id);
  }
  addEventListener("hashchange", () => show(location.hash.slice(1)));
  show(location.hash.slice(1));
})();