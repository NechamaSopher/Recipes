require('../config/.env');

//Setup DB
const knexConfig = require('../config/knexfile');
const knex = require('knex')(knexConfig);
const { Model } = require('objection');
Model.knex(knex);

//Setup server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const eventsRoutes = require('./routes/event');

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(cors());
app.use(eventsRoutes);

//Start server
app.listen(process.env.PORT || 8080, () => {
  console.log(`Started on port ${process.env.PORT || 8080}`);
});