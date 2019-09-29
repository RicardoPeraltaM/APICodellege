const express = require('express');
const bodyParser = require('body-parser');

const App = express();

const Patient = require ('./routes/patient');

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extends: false}));

App.use('/patient', Patient)

module.exports = App;