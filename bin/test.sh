#!/bin/bash

# JSHint all js-files
# Run unit tests

MOCHA_PATH="./node_modules/mocha/bin/"


ls *.js | xargs jshint && 
find ./app_modules/ -name '*.js' | xargs jshint && 
${MOCHA_PATH}mocha ./app_modules/cache/tests/
