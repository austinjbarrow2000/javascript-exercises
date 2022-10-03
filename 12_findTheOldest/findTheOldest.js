const findTheOldest = function(people) {
    const ordered = people.sort((person1, person2) => {
        person1Age = "yearOfDeath" in person1 ? 
            person1.yearOfDeath - person1.yearOfBirth : (new Date()).getFullYear() - person1.yearOfBirth;
        person2Age = "yearOfDeath" in person2 ? 
            person2.yearOfDeath - person2.yearOfBirth : (new Date()).getFullYear() - person2.yearOfBirth;

        return person1Age > person2Age ?  -1 : 1;
    })

    return ordered[0];
};

// Do not edit below this line
module.exports = findTheOldest;
