if you want to create a config file for DBs other than sqlite3 copy and paste the json below into the config.json file

``` json
{
  "development": {
    "username": "username",
    "password": "password",
    "database": "dbName",
    "host": "dev-host",
    "dialect": "dbType",
    "port": 0,
    "ssl": true,
    "dialectOptions": {
      "ssl": {
        "require": true
      }
    }
  },
  "test": {
    "username": "username",
    "password": "password",
    "database": "dbName",
    "host": "test-host",
    "dialect": "dbType",
    "port": 0,
    "ssl": true,
    "dialectOptions": {
      "ssl": {
        "require": true
      }
    }
  },
  "production": {
    "username": "username",
    "password": "password",
    "database": "dbName",
    "host": "prod-host",
    "dialect": "dbType",
    "port": 0,
    "ssl": true,
    "dialectOptions": {
      "ssl": {
        "require": true
      }
    }
  }
}

```