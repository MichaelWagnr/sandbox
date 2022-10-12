/* 
    && (AND) 
    When we use && as a logical operator, Javascript is checking to see that BOTH sides of && evaluates to true:
*/

const example = () => {
    const age = 32;
    const guestList = [];
    const maxCapacity = 100;

    // | step 1    | step 2                          |
    if ((age > 19) && (guestList.length < maxCapacity)) {
    // | step 3                                      |
        console.log('Welcome to the club!')
    }
    // 1) Javascript will first evaluate (age > 19) - TRUE
    // 2) Javascript will then use the array method .length on guestList and compare it to maxCapacity - TRUE
    // 3) If the first condition is true, JS checks the second condition and runs the code block if true.

    // * What is interesting about this is JS is doing some work to check if something is true.
    // * What if we had JS check the length of guestList and compare it to maxCapacity, but didn't offer a 3rd step?
}

// ==================================================================
    // Short circuiting with &&
// ==================================================================

// We can trick JS into performing a piece of code if the first condition of && is true or truthy:

const personA = {
    name: {
        first: 'Sarah',
        last: 'Smith'
    },
    age: 24,
    canDrive: true
}

const personB = {
    name: {
        first: 'Jon',
        last: undefined
    },
    age: 17,
    canDrive: false
}

// True          || expected output: "Sarah can drive"
personA.canDrive && console.log(`${personA.name.first} can drive`);
// False         || expected output: null, it will not run
personB.canDrive && console.log(`${personB.name.first} can drive`);

// 1) Javascript will check the conditions on either side of the &&
// 2) If the first condition is false - Javascript gives up, there's no chance both sides of && are true
// 3) If the first condition is true - Javascript goes to work on the other side of &&
// 4) If the other side of && is just a chunk of code - Javascript does it anyways looking for true/false
// 5) We don't offer a 3rd step so the && stalls out once JS finishes the step 2 (right-side of &&)

// This is a && short circuit! A somewhat fancy way of writing an If statement with one "is this true?" condition