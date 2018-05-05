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

### Connecting to the database ###

Create a new file called `.env` in the `/server` folder (that's the full filename, starts with a dot and no extension) paste the following template in that file:

```
DB_NAME=[name of your database]
DB_USER=[name of your database user]
DB_PASSWORD=[password for database user]
```

Now replace the text in brackets `[]` with the data you used to create
a database in MySQL above.

The `.env` file is ignored by git and must be recreated on any computer running the project. This is on purpose to make sure passwords don't end up on github.

### Updating the database using knex  #

- `knex migrate:latest`
- `knex seed:run`



### Starting the server ###
- `npm start` starts the server.

Now the server should run on http://localhost:3001

HINT: take a look at http://localhost:3001/categories and ./routes/categories.js

### Running on a custom port

By default the server runs on port `:3001`. If you have other things running on
the port and need to change this (for example to `:4001`) you can add the
following line to your `.env` file:

```
PORT=4001
```
