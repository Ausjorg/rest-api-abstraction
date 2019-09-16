# REST API Abstraction

This small app is an experiment that attempts to abstract/generalize the controller code. I am doing this by taking an object composition approach to modulize the process. This will allow the developer to choose the object "modules" they want to add to their controllers rather than write controllers from scratch every time. You can find the factory functions in the /server/mixins/crud.js file.

The object composition approach is a good way to get rid of the "gorilla holding the banana" problem that comes with classical inheiritance. This method allows devs to easily customize endpoints by adding their own factory functions that return objects to the controllers.

I have already created a couple of models to test this. If you feel like running this on your local environment all you have to do is migrate and start testing the endpoints with Postman or some other method. The endpoints can be found in /server/routes/index.js.

WARNING: This is not a complete app. There is no authentication or password encryption enabled. Proper data checks have not been put in place either. This project is experimental. I will be activley updating this repo which mean you will more than likely see weird naming conventions at times for testing purposes.

## Initialize

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
