# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.


# Using this repo

This repo is a starter kit and it is meant to be used for a new project. In case you want to integrate [Garchi CMS](https://garchi.co.uk) in your existing project, you can always use this repo as a reference to do so.

To begin with provide your API key inside nuxt.config.ts -> runtimeConfig.

Checkout server/utils/garchi.ts for helper functions.

An example page component could be found at pages/garchidemo.vue
