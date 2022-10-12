/*
    || (OR)  
    When we use || as a logical operator, Javascript is checking to see that ATLEAST ONE side of || evaluates to true:
*/

const example = () => {
    const day = 'Saturday'

    // | step 1            | step 2               |
    if ((day === 'Friday') || (day === 'Saturday')) {
    // | step 3                                      |
        console.log('Let\'s go to the club!')
    }
    // 1) Javascript will first evaluate (day === 'Friday') - FALSE

    // Oops, we're looking for TRUE; but this isn't a && where the logic gives up if we don't have TRUE/TRUE, we'll still look at the other side of || to check for TRUE, if we haven't gotten TRUE yet. 
    // || is looking for, at minimum, (TRUE || FALSE) or (FALSE || TRUE).

    // 2) Javascript will check the other side of || for TRUE
    // 3) If atleast one condition is TRUE - in this example (day === 'Saturday') - Step 3 is performed.
}

// ==================================================================
    // Short circuiting with &&
// ==================================================================

// We can trick JS into performing a piece of code if the first condition of || is false or falsey:

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

//                        | undefined, falsey  || expected output: "Good morning Smith"
console.log(`Good morning ${ personA.name.last || 'Friend!' }`)
//                        | 'Jon', truthy      || expected output: "Good morning Friend!"
console.log(`Good morning ${ personB.name.last || 'Friend!' }`)

// 1) Javascript will check the conditions on either side of the ||
// 2) If the first condition is true - Javascript gives up, atleast one side is TRUE, good enough for JS
// 3) If the first conidtion is false - Javascript goes to work on the other side of ||
// 4) If the other side of || is just a chunk of code - Javascript does it anyways waiting looking for true/false
// 5) We don't offer a 3rd step so the || stalls out once JS finishes the step 2, right-side of ||

// This is a || short circuit! A somewhat fancy way of writing an If statement if one condition is false.
// This is particularly handy if we don't know if something exists and want a fallback/default, as in the above example where our person object could have a name, or not. We definitely don't want to accidentally greet:
// "Good morning undefined" 😅