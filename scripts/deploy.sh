#!/usr/bin/env bash

# Exit immediately if there is an error
set -e

# Print shell input lines as they are read.
# We do not use `set -x` as this will cause secrets to
# leak into build logs.
set -v

: "${CF_API_STAGING?Need to set CF_API_STAGING}"
: "${CF_APP?Need to set CF_APP}"
: "${CF_ORG?Need to set CF_ORG}"
: "${CF_PASSWORD?Need to set CF_PASSWORD}"
: "${CF_SPACE?Need to set CF_SPACE}"
: "${CF_USER?Need to set CF_USER}"

# TODO - add deploying to production

# login to cloud foundry
cf api "${CF_API_STAGING}"
cf auth "$CF_USER" "$CF_PASSWORD"
cf target -o "$CF_ORG"
cf target -s "$CF_SPACE"

# push our code to cloud foundry

# with downtime
# cf push

# using zero-downtime-push https://github.com/contraband/autopilot
cf zero-downtime-push $CF_APP -f manifest.yml
