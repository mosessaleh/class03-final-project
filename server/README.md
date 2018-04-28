# Server 
*Assignment* In this folder your task is to set up a basic API-server in Express that will talk to a MySQL database.

If you are looking for the React client you need to look in [this folder](../client)

You must set everything up so the setup instructions below are valid. When the commands below are working you can remove this assignment text.

## Setup instructions

install the dependencies on your machine:

npm install

### Creating the database ###

Here's how to create a database in mysql:

From MySQL workbench (or your favourite mysql admin tool):

  create database hyf_dev;
  create user 'test'@'localhost' identified by 'test';
  grant all on hyf_dev.* to 'test'@'localhost';

### connecting to the database ###

Edit the connection info in knexfile.js to the user you just created.


### updating the database using knex  #

-  knex migrate:latest
- knex seed:run



### starting the server ###
- `npm start` starts the server.

Now the server should run on http://localhost:3001

HINT: take a look at http://localhost:3001/categories and ./routes/categories.js

