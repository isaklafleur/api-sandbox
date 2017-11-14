# Explaining how to use [Axios library](https://github.com/axios/axios)
Using the JSON data from  [JSONPlaceholder](https://jsonplaceholder.typicode.com)

# Explaining how to setup a own API server in Express

## Setup
1. start mongo server
2. Import the whole country list by running: `node ./bin/seed.js` in terminal.


## ROUTES

// makes api GET calls to a remote server with help of Axios:
[http://localhost:3000/posts/](http://localhost:3000/posts/) // list all posts from the source (jsonplaceholder.typicode.com/posts)
[http://localhost:3000/posts/1](http://localhost:3000/posts/1) // list one unique post by id from the source (jsonplaceholder.typicode.com/posts/1)

// Serve json data with help of express local
[http://localhost:3000/api/countries](http://localhost:3000/api/countries) // list all countries in the database you have on your machine.
[http://localhost:3000/api/countries/SE](http://localhost:3000/api/countries/SE) // show one unique country by country code.