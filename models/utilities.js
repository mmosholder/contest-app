// helper for splitting pairs of videos into new array
var utilities = {
    pairs: function (arr, num) {
        var results = [];
            for (var i = 0; i < arr.length; i+=num) {
                var tempArr = arr.slice(i, i+num);
                results.push(tempArr);
             }
        return results;
    },
    // determining vote # by clicks of vote button
    votes: function (name, arr) {
        for(var i=0; i < arr.length; i++) {
            if(arr[i].name === name) {
                arr[i].votes++;
            }
        }
    }
};


module.exports = utilities;