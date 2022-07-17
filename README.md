# FoodCoupMania React App for Food offers and Discounts like Swiggy offers & discounts.

## Responsive React Application with GraphQL Integrated at PostgreSQL server running, with GraphQl in Hasura which is deployed in Heroku.

## Problem Statement :

### - Swiggy Offers & Discounts
		- Offers for a restaurant
		- Offers personalized for customers by Swiggy
		- Free delivery for certain restaurants / above a certain price bar"

## Solution :
### - This React Application can give you offers & discounts across all existing cuisines, also able to filter offers & discounts on the basis of cuisines.You can also sign in and select your favourtie cuisine to only view offers and discounts for your favourite cuisine. It also provides the Restaurant Details for distinct offers & discounts. 

---

## Resources

https://reactjs.org/docs/getting-started.html

https://docs.npmjs.com/

https://hasura.io/docs/latest/graphql/core/deployment/deployment-guides/heroku/

https://docs.sentry.io/platforms/javascript/

https://www.postgresql.org/docs/

https://hasura.io/docs/latest/graphql/core/index/

https://www.apollographql.com/docs/react/

https://mui.com/material-ui/getting-started/overview/

## TASK Details :

- 1 : Creation of React App and Installing Various Pacakages.

- 2 : Creating Source Folder for Components and Queries.

- 3 : Creating Postgres Server in Hasura & Deploying it to Heroku.

- 4 : Connect Postgres Server with GraphQL with React App.

- 5 : Creating Relational Database/Adding Tables in Hasura Postgres DB.

- 6 : Adding all the Required features & algorithms to react app.

- 7 : Connecting React App with Sentry.

- 8 : Deploying React App to Heroku.

---

## 1. Getting Started

npx create-react-app --food_coup_mania

---

## 2. Source Folder contains Components Folder & Api Folder

      Create Component Folder as Components and add your components for the react app inside it.
      - Filters
      - Login
      - Offers
      - Navbar
      - YourCuisine

      Create Queries Folder which holds the queries created in Hasura Playground for extracting data from the postgres DB all methods used in the react app.
      - ALL_OFFERS
      - ALL_RESTROS
      - ALL_AMERICAN
      - ALL_INDIAN
      - ALL_ITALIAN
      - ALL_FREE_DELIVERY
      - ALL_PAID_DELIVERY

---

## 3. Postgres Hasura Server & Deploying it to Heroku

      To enable our Backend Services we need a server frome where we can fetch/post/delete data.

      Through Hasura it makes our life simple by creating a server and giving us the endpoint to which we will be fetching.

      Relational Database are on demand and what else otherthan Postgres would make our lives easy.

      We need to deploy the backend server to get a endpoint.

      Heroku here comes into play and makes the deployment easier and smooth.

      And Boooooom Your so called very tough PostgreSQL server running, with GraphQl.

---
### Here we go! Backend Sorted & Frontend created. Let's Connect them.

## 4. Connect Postgres Server with GraphQL with React App

    As our both Backend & Frontend are active, It's now time to welcome Apollo Clientn to the picture.

    Apollo CLient works as a channel/gateway for React App to connect to the backend server.

    Apollo also gives us various hooks.

          Some of them are:

                -useQuery
                -useLazyQuery
                -useMutation

    Our index.js file wraps the whole app, so lets create a client as the endpoint of postgress server & then wrap the App with client through Apollo.             
---

### Great! Connection Established.

## 5. Creating Relational Database/Adding Tables in Hasura Postgres DB
    
    Create your own relational database in Hasura.

---
## 6. Adding all the Required features & algorithms to react app
    
    Code React App and its required features.
---

## 7 : Connecting React App with Sentry.
    
    Hey, what about errors ? Let's handle it by connecting our app to Sentry.

    Sentry is free tool to handle error and monitor our app.

    We need to connect Sentry over our index.js file.

    We need export our app component as a Sentry Component in App.js file. 
---

## 8 : Deploying React App to Heroku.
    
    Now, Let's Deploy the React app.
---
## Commands required

### For Running The App at Devlopment Enviornment  : npm run start

## Topics :

HTML, CSS, JavaScript, JSON, Npm, Sql, GraphQL, Error Handling, Deployments

---

## Tools used

- Visual Studio Code
- React framework
- HTML, CSS and Javascript
- Hasura
- Postgres
- GraphQL
- Apollo/CLient
- Npm
- Sentry
- Material UI
- Heroku

---

### Author :

        Sai Sarthak Mohapatra
