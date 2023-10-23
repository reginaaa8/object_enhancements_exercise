// Same keys and values

const createInstructor = (firstName, lastName) => {
    return {
        firstName,
        lastName
    }
}

// Computed Property Names

let favoriteNumber = 42;
const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
}

// Object methods
const instructor = {
    firstName: "Colt",
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return this.firstName + "says bye!";
    }
}

// createAnimal

function createAnimal(species, verb, noise) {
    return {
        species,
        [verb]() {
            return noise;
        }
    }
}
