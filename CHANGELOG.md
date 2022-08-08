# Changelog

All notable changes to this project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.6.1] - 2022-08-08

- eslint now receives the glob itself

## [0.6.0] - 2022-08-08

- Added styled components
  - also removed existing css
  - left the capabilities included

## [0.5.0] - 2022-06-26

- Added react-oidc (use demo/demo)
- Added an example of an authentication protected page (tenders)
- Added an example with the built in proxy (to combat CORS) (tendersguru)

## [0.4.1] - 2022-06-26

- Moved examples into example directory
- Moved routes to separate file
- Used route constants

## [0.4.0] - 2022-07-25

- Added the possibility to override partial configs during deployments
- Added default output to jest (for terminal output...)
- Upgraded npm packages. Left jest on 27 because of breaking changes in 28

## [0.3.2] - 2022-07-19

- e2e step now starts a server before running tests

## [0.3.1] - 2022-07-19

- Added npm run commands to support inforitnl/front-end-build
- Fixed e2e test which targeted the wrong word.
- Updated minor/patch versions of npm packages
- Added junit output for test runners

## [0.3.0] - 2022-07-07

- Added translations
  - Added pluralization example
  - Added formatter example (with Luxon)
  - Used HTTP loader
- Added a suspense fallback page for app loading
- Added cypress eslint rules

## [0.2.0] - 2022-06-27

- Added [cypress.io](https://www.cypress.io/)

## [0.1.0] - 2022-06-27

- Updated to React 18
- Updated for public release
  - Git was reset for privacy reasons
