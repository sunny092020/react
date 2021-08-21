#!/bin/bash

./node_modules/.bin/eslint api/*.js
./node_modules/.bin/eslint api/routes/*.js

cp .eslintrc.js client
cd client
./node_modules/.bin/eslint --ext .jsx --ext .js src/**/*.jsx
./node_modules/.bin/eslint --ext .jsx --ext .js src/**/**/*.jsx
./node_modules/.bin/eslint --ext .jsx --ext .js src/**/**/**/*.jsx
