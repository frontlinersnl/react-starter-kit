# react-starter-kit

Web project starter kit including modern tools and workflows based on
[create-react-app](https://create-react-app.dev/) and best practices from the community.
Provides a scalable base template and a good learning base. Suitable for enterprise usage

Includes:

- Redux-toolkit
- Vscode setup (debugging + snippets)
- Jest, @testing-library and Cypress
- Immer

## Table of contents

<!-- toc -->

- [Getting started](#getting-started)
- [Project structure](#project-structure)
- [Configuration](#configuration)
  - [Using the `config.ts` file](#using-the-configts-file)
  - [adding values](#adding-values)

<!-- tocstop -->

## Getting started

1. `npm install`
2. `npm start` ([localhost:3000](http://localhost:3000))
3. `npm test` (run jest + coverage on [localhost:8080](http://localhost:8080))

## Project structure

Only the important files are shown

```bash
.
├── .vscode # vscode setup (debug, snippets, etc)
├── config # tool configuration
├── cypress # e2e tests
├── dist # production version
├── public
├── public # directory with public files (config, icons, etc), will be copied to dist
│   ├── i18n # directory to house i18n language files
│   ├── config.js # default runtime application config
│   └── configOverride.js # default config overrides.
├── scripts # Modified default create-react-app scripts
├── src # application source
│   ├── app # redux-toolkit hooks + store
│   └── infrastructure # infrastructure code (wrappers, navigation, config file class)
├── CHANGELOG.md # update this whenever you update the application
├── Dockerfile # Dockerfile to build nginx container
├── jest.config.js # configuration for jest
├── package.json
├── README.md # keep this up to date
└── tsconfig.json
```

## Configuration

This starter kit comes with runtime configuration out-of-the-box.
It achieves this with 2 config files in the public directory: `config.js` and `configOverrides.js`.
`config.js` is meant to be filled with a default for all of your application's runtime configurations.
`configOverrides.js` is meant to be replaced during deployment with environment specific runtime overrides.

### Using the `config.ts` file

To use the config you import `Config` from `config.ts` and use the typed object:

```tsx
import { Config } from "../config";

import { FunctionComponent } from "react";

export const Navbar: FunctionComponent<{}> = () => {
  return <h1>{JSON.stringify(Config)}</h1>;
};
```

### adding values

To add a value to the runtime config you have to take 2 steps:

1. Add a type to the `RuntimeConfig` type in [src/infrastructure/config/RunTimeConfig.ts](./src/infrastructure/config/RunTimeConfig.ts)

   ```tsx
   type RunTimeConfig = {
     version: number;
     name: string;
     myNewKey: string;
   };
   ```

2. Add a key (if required) to [public/config.js](./public/config.js)
