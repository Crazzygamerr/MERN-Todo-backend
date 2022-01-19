# MERN Todo
A note API made with Node.js and Express

### Requirements:
[Node.js](https://nodejs.org/en/), [Express](http://expressjs.com/), [MongoDB](https://cloud.mongodb.com/)

### Getting started
- Git clone https://github.com/Crazzygamerr/MERN-Todo-backend.git
- Install dependecies using `npm install package.json`
- Rename .env-sample to .env. And add your MongoDB collection link. Ex: 
  `MONGO_DB_URI=mongodb+srv://<yourUsername>:<yourPassword>@<yourCluster>/<collectionName>`
- `npm run start` - Starts the application and runs on port 3000
- `npm run dev` - Starts and runs the application with [Nodemon](https://www.npmjs.com/package/nodemon) on port 3000

### Features:
- CRUD operations for notes
- Planned:
  - Mongoose model for notes
  - React frontend

### REST Endpoints:
`HTTP` `GET` localhost:3000/<br>
`HTTP` `POST` localhost:3000/<br>
`HTTP` `GET` localhost:3000/:id<br>
`HTTP` `DELETE` localhost:3000/:id<br>
`HTTP` `PATCH` localhost:3000/:id<br>
