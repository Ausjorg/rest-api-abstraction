# globalv

> Rest API

## Build Setup

``` bash
# install dependencies
$ npm install

# install seqalize-cli globally in order to migrate
$ npm install -g sequelize-cli

# if you are goign to use sqlite3 for dev purposes you
# will need to install sqlite3 manually
# I have it in package.json already
$ npm install sqlite3

# when you are ready to migrate
$ sequelize db:migrate

# run local dev environment
$ npm start

```