const express = require("express");
var cors = require('cors')
const bodyParser = require('body-parser');
const api = require("./codebreaker");

const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(cors());

number_to_guess = 1234;

app.get('/try/p', function (req, res) {
    result = {
        string: api.guess(req.query.input, number_to_guess)
    }

    res.send(result);
});

app.get('/new-number/p', function (req, res) {
    digits = req.query.digits;
    number = '';
    for (let index = 0; index < digits; index++) {
        min = Math.ceil(0);
        max = Math.floor(9);
        number += Math.floor(Math.random() * (max - min + 1)) + min;
    }
    old_number = number_to_guess;
    number_to_guess = number;

    res.send(old_number + ' changed to ' + number_to_guess);

});

module.exports = app;