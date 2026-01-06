## Portfolio (Vite + React) — GitHub Pages

To repo hostuje portfolio jako stronę konta GitHub (user site):

- Adres: https://mgorcz2.github.io/
- Kod źródłowy: branch `main`
- Wersja publikowana (statyczny build): branch `gh-pages`
---

## Wymagania

- Node.js + npm
- Git

---

## Uruchomienie lokalnie

```bash
npm install
npm run dev
```
---

## Build (lokalnie)

```bash
npm run build
npm run preview
```

Build trafia do katalogu `dist/`.

---

## Deploy na GitHub Pages

W tym repo deploy jest robiony przez paczkę `gh-pages` i skrypt:

```bash
npm run deploy
```
## Jak aktualizować stronę po zmianach
```bash
npm run deploy
```

