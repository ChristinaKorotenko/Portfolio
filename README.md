# Portfolio

React (Vite) одностраничное портфолио Product & Project Manager.

### Запуск локально

```bash
yarn
yarn start
```

Откройте `http://localhost:5173`.

### GitHub Pages

Сборка складывается в `docs/` (`yarn build`). В репозитории: **Settings → Pages → Build and deployment → Branch `main`, Folder `/docs`**.

### Что внутри

- `src/sections/*`: секции страницы (Hero, How I work, Projects, Testimonials, Footer)
- `src/components/*`: общие компоненты (шапка/навигация)
- `src/content/siteContent.js`: тексты/контент
- `src/styles/global.css`: стили + адаптив
