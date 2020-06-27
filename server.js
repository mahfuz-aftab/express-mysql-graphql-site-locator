const express = require ("express");
const bodyParser = require ("body-parser");
const cors = require ("cors");
//const sequelize = require("sequelize");
const { ApolloServer } = require('apollo-server-express');
const { schema } = require('./app/graphql');
const app = express();

var corsOptions = {
	origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// const db = require("./config/db");
// db.sequelize.sync();

// db.sequelize.sync({force: true}).then(() =>{
// 	console.log("Drop & Resync DB");
// });

const sites = require("./app/controllers/site.controller.js");


app.get("/", (req, res) => {
	res.json({message: "Welcome to Basic CRUD API using Node-Express-MySQL-Graphql"});
});

app.post("/create", sites.create);

app.post('/graphql', (req, res, next) => auth(req, res, next));

const graphQLServer = new ApolloServer({
  schema,
});

graphQLServer.applyMiddleware({
  app: app,
  cors: {
    origin: false,
    credentials: false,
    methods: ['POST'],
    allowedHeaders: [
      'X-Requested-With',
      'X-HTTP-Method-Override',
      'Content-Type',
      'Accept',
      'Authorization',
      'Access-Control-Allow-Origin',
    ],
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});