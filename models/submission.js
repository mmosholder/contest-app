// empty submission array
var submissions = [];

var convertUrl = function(videoUrl) {
    var newURL = (videoUrl).split('v=');
    return ('https://www.youtube.com/embed/' + newURL[1]);
};


// base class for all submissions
var VideoSubmission = function (name, videoUrl, title, description) {
    this.name = name; 
    this.videoUrl = convertUrl(videoUrl);
    this.title = title;
    this.description = description;
};

// Helper for adding new submission to submission list
var addSubmission = function (name, videoUrl, title, description) {
    var newSubmission = new VideoSubmission (name, videoUrl, title, description);
    
    if (submissions.length <= 7) {
        submissions.push(newSubmission);
    }
};

module.exports = {
    VideoSubmission: VideoSubmission,
    submissions: submissions,
    addSubmission: addSubmission,
};    