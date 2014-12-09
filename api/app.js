var express     = require('express');
var expressJwt  = require('express-jwt');
var connect     = require('connect');
var mongoose    = require('mongoose');
var app         = express();
var port        = process.env.PORT || 8080;

var SECRET = 'shhhhhhared-secret'
// Configuration
app.use(express.static(__dirname + '/public'));

//app.use('/', expressJwt({
//			secret : SECRET}).unless({path: ['/login','/register']}));
			
//app.use(function (err, req, res, next) {
//  if (err.name === 'UnauthorizedError') {
//    res.header('Access-Control-Allow-Origin', req.headers.origin);
//    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
//    res.header('Access-Control-Allow-Credentials', false);
//    res.header('Access-Control-Max-Age', '86400');
//    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override,  Content-Type, Accept, Authorization');
//    res.status(401).send(401)
//    console.log("401 error")
//  }
//});

app.use(connect.logger('dev'));
app.use(connect.json());  
app.use(connect.urlencoded());

app.all('/*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Credentials', false);
    res.header('Access-Control-Max-Age', '86400');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override,  Content-Type, Accept, Authorization');
    next();
});

app.options('*', function(req, res) {
    res.send(200);
});

// Connect to our database
//mongoose.connect('mongodb://127.0.0.1/js_racers');

// Routes

app.listen(port);

console.log('The App runs on port ' + port);