var express = require('express');
var routes = require('./routes');
var configuration = require('./configuration');

var app = express();
var port = process.env.PORT || 8080;

var Config = configuration(app);

app.configure(Config.basicConfiguration);
app.configure('development', Config.development);

Config.configureMongoose();

routes.setup(app, null);

app.listen(port);

console.log('The App runs on port ' + port);