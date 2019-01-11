const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect('mongodb://test:test123@ds153824.mlab.com:53824/heroku_41nm74vl', { useNewUrlParser: true });
//mongodb://<dbuser>:<dbpassword>@ds153824.mlab.com:53824/heroku_41nm74vl
//mongodb://localhost:27017/NewYearsGoals
require('./routes/api-routes')(app);
require('./routes/html-routes')(app);

app.listen(PORT, function(){
    console.log(`App running on port ${PORT}`)
})