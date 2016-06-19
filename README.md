# React Admin Boilerplate

A simple admin boilerplate can be reused in new applications.

# Getting Started
```sh
$ npm install
```

# Local Installation


## Configuring json-server

Add db.json

```sh
$ mkdir json-server
$ touch json-server/db.json
```

Add a route to db.json

```sh 
# db.json
{
  "sample_list": [
    {
      "id": "1",
      "name": "item1",
      "price": 3.99
    },
  ]
}

```


(Optional) configure customize port to json-server

```sh
$ touch json-server/config.json

# config.json
{
	"port": 5858
}
```


More about [json-server](https://github.com/typicode/json-server)

## Configuring dev env



```sh
# default config/env.config.js 
const env = {
  development: {
    mountPath: 'http://localhost:5656/',
    apiEndpoint: 'http://localhost:5858/'
  },
  stage: {
    mountPath: 'http://stage.com/',
    apiEndpoint: 'http://api.stage.com/'
  },
  production: {
    mountPath: 'http://production.com/',
    apiEndpoint: 'http://api.production.com/'
  }
}[process.env.NODE_ENV || 'production'];

module.exports = env;
```

## Start the dev server


```sh
$ npm run dev

# Open localhost:5656
```

Try to send a GET request to check api route work

```sh
$ curl http://localhost:5858/sample_list/1
{
	"id": "1",
	"name": "item1",
	"price": 3.99
}
```


# Dependencies
* React
* Redux
* babel-loader
* Immutable.js
* Webpack

# TODO
* production build config
* deployment configuration
* eslint
* test
