const findTheOldest = function(array) {
    const currentYear = (new Date()).getFullYear();

    const oldest = array.reduce((acc, curr) => {
        const age = Object.hasOwn(curr, 'yearOfDeath')
            ? curr.yearOfDeath - curr.yearOfBirth
            : currentYear - curr.yearOfBirth;

        if (age > acc.age) {
            return { name: curr.name, age };
        }
        return acc;
    }, { name: null, age: 0 });

    return oldest;
};


// Do not edit below this line
module.exports = findTheOldest;
