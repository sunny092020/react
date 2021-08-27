# Start client
$ cd university_list/client
$ yarn start
# Start api
$ cd university_list/api
$ node index.js
# Run e2e test
$ cd university_list/client
$ yarn test:e2e
# Lint check
$ cd university_list
$ ./script/lint.sh
# Prettify
$ cd university_list
$ yarn prettier --write .