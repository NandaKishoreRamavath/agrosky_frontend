# Copilot Instructions for agrosky_drones

## Project Overview
- This is a React single-page application (SPA) bootstrapped with Create React App.
- Main entry: `src/App.js` sets up routing using `react-router-dom` and loads the main `Home` component.
- Major UI sections are organized under `src/components/`, with further subfolders for logical grouping (e.g., `Home`, `Navbar`, `Footer`).
- Static assets (images, icons) are in `src/Assets/`.
- Global and component-level styles are in `src/App.css`, `src/Variables.css`, and per-component CSS files.

## Routing
- Uses `<BrowserRouter>` and `<Routes>` from `react-router-dom` in `App.js`.
- All routes/components must be children of a `<Router>` (see `App.js` for correct pattern).
- Example: 
  ```jsx
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  </BrowserRouter>
  ```

## Developer Workflows
- Start dev server: `npm start` (runs on http://localhost:3000)
- Run tests: `npm test` (Jest, interactive watch mode)
- Build for production: `npm run build`
- Audit/fix dependencies: `npm audit fix` (use `--force` for breaking changes)

## Conventions & Patterns
- Use functional React components and hooks (no class components observed).
- CSS Modules are not used; styles are global or per-component via plain CSS files.
- Import images/assets using relative paths from `src/Assets/`.
- Keep all navigation links and buttons styled via `Navbar.css` and related files.
- Do not use `useRoutes` or `<Routes>` outside a `<Router>` context.

## Integration & External Dependencies
- Relies on `react-router-dom` for routing.
- No backend/API integration is present in the codebase (static SPA).
- All dependencies are managed via npm; see `package.json` for details.

## Key Files & Directories
- `src/App.js`: App entry, routing setup
- `src/components/`: All main UI components
- `src/Assets/`: Images and static assets
- `public/`: Static files (HTML, manifest, robots.txt)

## Example Patterns
- To add a new page, create a component in `src/components/`, then add a `<Route>` in `App.js`.
- To style a component, create or update its CSS file in the same folder.

---

If you add new conventions or workflows, update this file to help future AI agents and developers.
