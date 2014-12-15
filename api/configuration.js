var User = require('./model/user')
var mongoose = require('mongoose');
var connect = require('connect');
var passport = require('passport');

module.exports = function(app){
	var basicConfiguration = function(){
	    app.use(connect.logger('dev'));
	    app.use(connect.json());
	    app.use(connect.urlencoded());
	    app.use(connect.methodOverride());
	    app.use(connect.cookieParser());
	    app.use(passport.initialize());
	    app.use(app.router);
	    app.use(connect.static(__dirname + '/public'));
	}
	var allowCorsDomainConfiguration = function(req, res, next) {
	    res.header('Access-Control-Allow-Origin', req.headers.origin);
	    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
	    res.header('Access-Control-Allow-Credentials', false);
	    res.header('Access-Control-Max-Age', '86400');
	    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override,  Content-Type, Accept, Authorization');

	    if ('OPTIONS' == req.method) {
	        res.send(200);
	    }
	    else {
	        next();
	    }
	}
	var development = function() {
	    app.use(connect.errorHandler({dumpExceptions: true, showStack: true}));
	    app.use(allowCorsDomainConfiguration);
	    console.log("Starting in development mode");
	}
	var configureMongoose = function(){
		mongoose.connect('mongodb://admin:admin@ds063630.mongolab.com:63630/js_racers');

		var db = mongoose.connection;

		db.on('error',console.error.bind(console, 'connection error:'));
		db.once('open', function callback() {
		    console.log("Connected to db");
		});
	}
	var makeAdmin = function(){
		User.findOne({email: "admin@admin.com"}, function(err, user){
			if(user==null){
				var admin = new User({
					    email: "admin@admin.com",
					    firstName: "admin",
					    lastName: "admin",
					    password: "admin",
					    salt: "admin",
					    inactive: false
				});
				admin.save(function(err){

				})
			}
		})
	}
	return {
		basicConfiguration: basicConfiguration,
		allowCorsDomainConfiguration: allowCorsDomainConfiguration,
		development: development,
		configureMongoose: configureMongoose,
		makeAdmin: makeAdmin
	};
}