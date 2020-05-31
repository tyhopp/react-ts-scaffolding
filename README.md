# React + TypeScript Scaffolding
A set of components arranged in a typical page layout.

[![Netlify Status](https://api.netlify.com/api/v1/badges/768e284c-ed94-4c2d-97b8-4f58784b42db/deploy-status)](https://app.netlify.com/sites/react-ts-scaffolding/deploys)

This project is deployed at [react-ts-scaffolding.netlify.app](https://react-ts-scaffolding.netlify.app).

## Usage
1. `yarn install`
2. `yarn start` to run the project locally
3. `yarn test` to run unit tests

## Project
Set up with the [create-react-app](https://create-react-app.dev) TypeScript template.

This project is a Single Page Application in the literal sense. If multiple pages were required, I'd add a router in `app.tsx` and move all pages to a `pages` or `templates` directory.

Components follow this structure:
```
react-ts-scaffolding/
└─ src/
   └─ components/
      └─ aside/
        ├─ aside.css
        ├─ aside.test.tsx
        └─ aside.tsx
```

Unit tests are colocated with component source code to keep them managable if this project were to scale.

## Layout
- Note - A, B, and C are `aside`s.

Mobile/tablet viewport size (<= 1200px):

```
+---------------------+
|        header       |
+---------------------+
+---------------------+
|                     |
|                     |
|       counter       |
|                     |
|                     |
+---------------------+
+---------------------+
|          ||         |
|    A     ||    B    |
|          ||         |
+---------------------+
+---------------------+
|                     |
|           C         |
|                     |
+---------------------+
+---------------------+
|                     |
|        footer       |
|                     |
+---------------------+
```

Desktop viewport size (>= 1200px):

```
+---------------------+
|        header       |
+---------------------+
+---+ +---------+ +---+
| A | |         | |   |
|   | |         | |   |
+---+ | counter | | C |
+---+ |         | |   |
| B | |         | |   |
|   | |         | |   |
+---+ +---------+ +---+
+---------------------+
|                     |
|        footer       |
|                     |
+---------------------+
```

## Styles
This project uses:
- [custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) for reusable variables
- [prefers-color-scheme media feature](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) to detect OS-level theme preference (either dark or light)