// access to the data structure in the model
var submission = require('../models/submission.js');
var utilities = require('../models/utilities.js');

var indexController = {
    index: function (req, res) {
        res.render('index');
    },

    submitPage: function (req, res) {
        res.render('submitvideo');
    },

    submissionsPage: function (req, res) {
        res.render('submissions', {
            pairs: utilities.pairs(submission.submissions, 2)
        });
    }
};

module.exports = indexController;