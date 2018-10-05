#!/bin/bash

# Retrieve the environment variables from the User-Provided Service
# Load them as environment variables into the current environment

eval $(./scripts/ups_as_envs.py)
node server.js
