# REST API

This small app is an experiment that attempts to abstract/generalize the controller code. I am doing this by taking an object composition approach to modulize the process. This will allow the developer to choose the object "modules" they want to add to their controllers. This is a good way to get rid of the "gorilla holding the banana" problem that comes with classical inheiritance. This method allows devs to easily customize endpoints by adding their own factory functiosn that return objects to the controllers.

## Build Setup

``` bash
# install dependencies
$ npm install

# install seqalize-cli globally in order to migrate
$ npm install -g sequelize-cli

# I have sqlite3 in the package.json file already but
# if you removed it from the package.json file you will need to install it manually
$ npm install sqlite3

# when you are ready to migrate
$ sequelize db:migrate

# run local dev environment
$ npm start

```