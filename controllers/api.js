// need access to model
var submission = require('../models/submission.js');
var utilities = require('../models/utilities.js');

// route handler for adding new video via client-side form submit
var apiController = {
    addSubmission: function (req, res){
        submission.addSubmission(req.body.name, req.body.url, req.body.title, req.body.description);
        res.redirect('/submissions');
    },
    addVote: function (req, res) {
        utilities.votes(req.params.name, submission.submissions);
        res.redirect('/submissions');
    }   
};

//make methods available elsewhere
module.exports = apiController;