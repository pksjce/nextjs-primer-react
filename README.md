Reproduces a bug where we see a warning like

```
Warning: useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.
    at AnchoredOverlay (/Users/pk/Github/nextjs-primer-react/node_modules/@primer/components/lib/AnchoredOverlay/AnchoredOverlay.js:33:3)
    at DropdownMenu (/Users/pk/Github/nextjs-primer-react/node_modules/@primer/components/lib/DropdownMenu/DropdownMenu.js:32:3)
    at FavoriteColorStory (webpack-internal:///./components/favorite-color.js:29:62)
    at div
    at I (/Users/pk/Github/nextjs-primer-react/node_modules/styled-components/dist/styled-components.cjs.js:1:19218)
    at exports.ThemeProvider (/Users/pk/Github/nextjs-primer-react/node_modules/styled-components/dist/styled-components.cjs.js:1:24915)
    at ThemeProvider (/Users/pk/Github/nextjs-primer-react/node_modules/@primer/components/lib/ThemeProvider.js:31:3)
    at main
    at div
    at Home (webpack-internal:///./pages/index.js:28:3)
    at App (webpack-internal:///./node_modules/next/dist/pages/_app.js:88:1)
    at AppContainer (/Users/pk/Github/nextjs-primer-react/node_modules/next/dist/server/render.js:293:29)
```

This is because of the `useLayoutEffect` in the `Overlay` component inside the `AnchoredOverlay` component inside the `DropdownMenu` component.

To run this

```
npm i
npm run dev
```
