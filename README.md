# Lugx Gaming

A small game-shop website built with **React**, **Vite**, **React Router** and **Tailwind CSS**.

## Run it

```bash
npm install     # only the first time
npm run dev     # then open the address it prints (usually http://localhost:5173)
```

Other commands: `npm run build` (make the final site) and `npm run lint` (check the code for mistakes).

## Folder guide

```
src/
  main.jsx            starts the app
  App.jsx             the router: which address shows which page
  index.css           Tailwind, our colors, and the .btn-coral class
  data/games.js       ALL the games and categories (edit this to change the content)
  pages/              one file per page: Home, Shop, ProductDetails, Contact
  components/
    GameCard.jsx      the game card used on several pages
    Icons.jsx         small SVG icons
    Layout/           Header, Footer, PageBanner (the parts shared by every page)
    home/             the sections of the home page
public/images/        pictures (use them as "/images/name.jpg")
```

## Design only (no interaction yet)

- The search box on the home page, the newsletter box, and the contact form.
- The pagination buttons on the Shop page.
- Sign in, Add to cart and the quantity box.

The category filter buttons on the Shop page do work.
