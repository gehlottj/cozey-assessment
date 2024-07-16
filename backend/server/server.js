'use strict';
var serverHelper = require('./utility/server-helper.js');
var express = serverHelper.express;
var config = serverHelper.config;
var cors = serverHelper.cors;
var bodyParser = serverHelper.bodyParser;
var port = process.env.PORT || config.port;
const orderRoutes = require('./../routes/order-remote');

global.app = express();
app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.use(config.restApiRoot+'orders', orderRoutes);

app.start = function() {
	console.log("herer")
	// start the web server
	var server = app.listen(port, function() {
		var port = server.address().port;
		console.log("MiniNode listening at port ", port);
		return server;
	});
};

app.start()

module.exports = app;