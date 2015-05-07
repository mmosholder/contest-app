// helper for splitting pairs of videos into new array
var utilities = {
    pairs: function (arr, num) {
        var results = [];
            for (var i = 0; i < arr.length; i+=num) {
                var tempArr = arr.slice(i, i+num);
                results.push(tempArr);
             }
        return results;
    }
};

module.exports = utilities;