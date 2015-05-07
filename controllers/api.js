// need access to model
var submission = require('../models/submission.js');

// route handler for adding new video via client-side form submit
var apiController = {
    addSubmission: function (req, res){
        submission.addSubmission(req.body.name, req.body.url, req.body.title, req.body.description);
        res.redirect('/submissions');
    }    
};

//make methods available elsewhere
module.exports = apiController;