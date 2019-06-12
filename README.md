# Cloud Assessment Tool

[![CircleCI](https://circleci.com/gh/govau/cloud-assessment.svg?style=svg)](https://circleci.com/gh/govau/cloud-assessment)

## Outline

The [Cloud Assessment Tool (CAT)](https://assess.cloud.gov.au) is designed to help Australian Government agencies discover and understand their compliance obligations when moving to cloud. It is part of the [Digital Transformation Agency's](https://www.dta.gov.au) [Secure Cloud Strategy](https://www.dta.gov.au/our-projects/secure-cloud-strategy).

## Production deployment

The CAT is designed to be hosted on cloud.gov.au using CircleCI for deployments. The Cloud Foundry manifest is available at `src/manifest.yml`. The CircleCI config is available at `.circleci/config.yml`.

## Server-side application

There is a related server-side app called [cloud-assessment-server](https://github.com/govau/cloud-assessment-server) which is used for uploading and storing completed reports.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## More information

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.8.
