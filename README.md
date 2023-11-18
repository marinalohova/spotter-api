# spotter-api

This is a GraphQL project that uses Apollo Server.

### Getting Started

Create .env in the root of the project with the following values:
> POSTGRES_USER= \
POSTGRES_HOST=\
POSTGRES_PASSWORD=\
POSTGRES_DATABASE=

Make sure your Node version is 18.x
> node -v 
 
Install dependencies
> npm i

Run migrations
> sequelize db:migrate

Seed the test data
> sequelize db:seed:all

Run the development server:
> npm start

Open http://localhost:3000/graphql to launch Apollo Studio and inspect schema.

### Deploy on Vercel

When you are done editing push your changes to Git and import the project into your Vercel account, and you are good to go!
