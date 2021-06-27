# Vite Tailwind Setup

## Installation

## Technologies

* [Tailwind](https://tailwindcss.com/)
* [Vue 3](https://v3.vuejs.org/)
* [Vite](https://github.com/vitejs/vite)
* [Vue Router](https://next.router.vuejs.org/)
* [Typescript](https://www.typescriptlang.org/)
* [Yarn](https://yarnpkg.com/)
* [Testing Library](https://testing-library.com/docs/vue-testing-library/intro)

## Quality Controls

* [Prettier](https://prettier.io/)
* [Commitlint](http://commitlint.js.org/)
* [Husky](https://typicode.github.io/husky) & [Lintstaged](https://github.com/okonet/lint-staged) (to help keep the quality workflow seamless)

## Scripts

* `test`: runs tests defined in *__tests__* folder in the project.
* `test:coverage`: runs tests with coverage report.

## Folder Structure

### src/components

Reusable components used throughout the application should be situated here.

### src/hooks

You should place application hooks in this folder with the advent of [Composition API](https://v3.vuejs.org/api/composition-api.html#composition-api) in Vue 3.

### src/pages

This folder contains application pages.

### src/router

This folder contains application route definitions.

### src/style

Applications stylesheets should be placed here.

| :information_source: **Information** |
|:-------------------------------------|
| You should read up on [Vite](https://github.com/vitejs/vite) to give you an overview of how these folders (**/public/,/src/assets**) are used. |

## Recommended VSCode Extensions

* [Conventional Commits](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits)
* [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)
* [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
* [PostCSS Language Support](https://marketplace.visualstudio.com/items?itemName=cpylua.language-postcss)
* [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
* [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
* [Vue Peek](https://marketplace.visualstudio.com/items?itemName=dariofuzinato.vue-peek)
