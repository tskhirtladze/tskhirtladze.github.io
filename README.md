# Personal site

Plain HTML, CSS and JavaScript. No build step, no dependencies.

## Deploy to GitHub Pages
1. Put these files in the root of a repo (for example `tskhirtladze.github.io`).
2. Settings → Pages → Deploy from a branch → `main` / `/ (root)`.

## Everything you edit is in `js/content.js`

**Add a project** – copy one block inside the Work section's `projects: [...]`:
```js
{ title: "My Tool", url: "https://...", category: "Web app", color: "coral", art: "web", text: "One or two sentences." }
```
**Add a category** – use a new `category` text on a project; its filter button appears by itself.

**Add a tab** – add an object to `sections`:
```js
{ id: "talks", title: "Talks", type: "list", items: [{ title: "Title", text: "Details" }] }
```
Types: `text`, `list`, `projects`, `groups` (headed groups of dated entries, used by Academic), `contact`. Each tab is linkable, e.g. `/#about`.

**New tile illustration** – add a function to `js/art.js` (400 x 300 canvas) and use its name in `art:`.
**Colours** – variables at the top of `css/style.css`. **Fonts** – the `--font` variable (system fonts, nothing to load).

**Add an academic entry** – in the Academic tab, add `{ period, title, org, text, url }` to a group's `entries`, or add a whole new group (e.g. "Talks", "Reviewing").