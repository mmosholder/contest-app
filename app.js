var express = require('express');
var bodyParser = require('body-parser');

// Require controllers
var indexController = require('./controllers/index.js');
var apiController = require('./controllers/api.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));


// view-specific handlers from indexController
app.get('/', indexController.index);
app.get('/submitvideo', indexController.submitPage);
app.get('/submissions', indexController.submissionsPage);

// management controller from the apiController
app.post('/submitVideo', apiController.addSubmission);

var server = app.listen(8464, function() {
	console.log('Express server listening on port ' + server.address().port);
});
