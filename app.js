const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');
const app = express();

const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(routes);

mongoose.connect('mongodb://localhost:27017/myapp', {useUnifiedTopology: true, useNewUrlParser: true}, (err) => {
    if (err) {
        consolse.log(err)
    }

    app.listen(PORT, (err) => {
        err ? console.log(err) : console.log(`Server running on ${PORT} port`);
    });
});
