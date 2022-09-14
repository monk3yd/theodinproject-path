const findTheOldest = function(people) {
    const oldest = people.sort((a, b) => {
        const currentYear = (new Date()).getFullYear();

        if (!a.yearOfDeath) {
            lastGuy = currentYear - a.yearOfBirth; 
            nextGuy = b.yearOfDeath - b.yearOfBirth;
        } else if (!b.yearOfDeath) {
            lastGuy = a.yearOfDeath - a.yearOfBirth; 
            nextGuy = currentYear - b.yearOfBirth;
        } else {
            lastGuy = a.yearOfDeath - a.yearOfBirth; 
            nextGuy = b.yearOfDeath - b.yearOfBirth;
        }
        return lastGuy > nextGuy ? -1 : 1;
    });
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
