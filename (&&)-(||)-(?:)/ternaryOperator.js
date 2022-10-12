/*
    (? :) Ternary Operator   
    When we use (? :) as a logical operator, Javascript is checking to see that the condition before the ? is TRUE, before deciding which side of : to take. It follows If/Else logic.
*/

const example = () => {
    const day = 'Monday'

    // | step 1        | step 2                                | step 3                         |   
    day === 'Saturday' ? console.log('Let\'s go to the club!') : console.log('Go to bed early...')
    // | this is false | JS skips this                         | JS runs this instead           |   

    // 1) Javascript will first evaluate (day === 'Saturday') 
    // 2) If TRUE, step 2
    // 3) If FALSE, step 3
}

// ==================================================================
    // A different way of writing ternary operators
// ==================================================================

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

personB.age > 16
    ? console.log(`${personB.name.first} is old enough to start driving`)
    : console.log(`${personB} can't drive...`)

// We don't have any semi-colons here. So JS will clear the white space, and treat it as though it were one line.
// We get a clean:

// (Condition)
// (?) -> do this
// (:) -> or do this

// ==================================================================
    // Chaining ternary operators
// ==================================================================

// We can have the outcome of a ternary be another ternary.

personB.name.last !== undefined                                 // step 1
    ? console.log(`Good morning mr.${personB.name.last}`)       // step 2
    : personB.name.first !== undefined                          // step 3
        ? console.log(`Good morning ${personB.name.first}`)     // step 4
        : console.log('Good morning Friend!')                   // step 5

        // expected output: "Good morning Jon"

// 1) check if personB has a last name
// 2) if personB has a last name console.log "Good morning mr.(last name)"
// 3) else, check if personB has a first name
// 4) if personB has a first name console.log "Good morning (first name"
// 5) else, console.log "Good morning Friend!"

// This is a bit tricky to work with, and semi-colons can easily break it if you have the habit of writing ;'s at the end of each line, it is however a React-friendly way of chaining conditional statements together.
