exports.setup = function(app){
	app.get('/test', function(req, res){
		res.send({message: "It works. Gj!"})
	})
}