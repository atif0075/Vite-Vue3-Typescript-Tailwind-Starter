# Vue 3 + Typescript + Vite + Tailwind + AnimXYZ

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

## Features

- ⚡️ [Vue 3](https://github.com/vuejs/vue-next), [Vite 2](https://github.com/vitejs/vite), - Lightning Fast HMR

- 🗂 [File based routing](./src/views)

- 📦 [Components auto importing](./src/components)

- 🎨 [Tailwindcss](https://tailwindcss.com) - A utility-first CSS framework
- 🎨 [AnimeXYZ](https://animxyz.com/) - The first composable
  CSS animation toolkit

- 🔥 Use the new `<script setup>` style

- 🦾 TypeScript, of course

## Try it now!

### GitHub Template

[Create a repo from this template on GitHub](https://xyz/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit antfu/vitesse-lite my-vitesse-app
cd my-vitesse-app
yarn
```
