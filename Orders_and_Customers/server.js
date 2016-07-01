var express = require('express');
var path = require('path');
var app  = express();
var bodyParser = require('body-parser');
mongoose = require('mongoose');

app.use(express.static(path.join(__dirname, './client/static')));
app.use(bodyParser.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000,function(){
	console.log("listening on port 8000");
});