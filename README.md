# cloud-assessment

[![CircleCI](https://circleci.com/gh/govau/cloud-assessment.svg?style=svg)](https://circleci.com/gh/govau/cloud-assessment)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5 to assist with setting up CI.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Docker

There is a Dockerfile here to assist with local development if desired.

Some helpful commands:

```bash
# build the image locally
docker build . --tag cloud-assessment

# Create a new container
docker run -it --rm \
  -p 4200:4200 \
  -v $PWD:/app \
  -w /app \
  cloud-assessment
```

## CircleCI

[CircleCI](https://circleci.com/gh/govau/cloud-assessment) is building this project. You can login to circle with github.

Every branch is tested. The master branch is deployed to the [cloud.gov.au staging environment](https://console.system.y.cld.gov.au/) using a CI user.

The staging site URL is https://cloud-assessment.apps.y.cld.gov.au/.

TODO - add deploying to production
