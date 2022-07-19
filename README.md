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
- ["Forking" outside of Github](#forking-outside-of-github)

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
├── public # directory with public files (config, icons, etc)
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

## "Forking" outside of Github

To use this base in other git software (not Github) you will have to manually manage the upstream.
Go into your existing repo and execute the following commands:

1. `git remote add upstream <clone-url>`
2. `git pull upstream master` # or other branchname
3. `git push`

Then, when you need to sync again you can repeat step 2 and 3
