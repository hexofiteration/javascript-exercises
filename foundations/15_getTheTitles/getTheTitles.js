const getTheTitles = function(array) {
    let titles = [];
    for (const key of array) {
        titles.push(key.title);
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
