// Below we have a function addHi that takes an array of names and returns a new array with 'hi ' + name
// We're calling the function on line 37 and passing the argument ['Jane', 'John', 'Tony', 'Sarah']
// Expected Output: ['hi Jane', 'hi John', 'hi Tony', 'hi Sarah']

const addHi = (arr) => {
    // We have a console.log that will run when we enter the function for the first time and display the argument that was passed into the function.
    console.log(`
        👋 Hello from inside the addHi function, our parameter (arr) is the array: ${arr}`);

    // OPTIONAL, the anonymous arrow function CAN take a second argument, the index of the array item.
    const newArray = arr.map((name, index) => {
        // With backticks we can put values into our strings with ${ }
        // This can help us write meaningful console.logs and see what our code is doing.
        // Arrays are zero-based so the first loop is loop 0, we can make this easier to understand by logging index + 1
        console.log(`
        =====================================================
        Loop #: ${index + 1} 
        Name = ${name},

        💻 run: 
        name = 'hi ' + name; 
        and return it into newArray`);
        // The above console.log tells us a lot about what is happening when map starts a new turn on the array we passed into it. Each loop map has access to the next item in the array it's attached to.
        // Now we'll add "hi" with the code below.
        return name = 'hi ' + name;
    });
 
    console.log(`    
        -----------------------------------------------------
        💻 Finished mapping over the array, returning the newArray:
        `);

    return newArray;
}

// On the line below we're calling our function with an array of names as the argument
console.log(addHi(['Jane', 'John', 'Tony', 'Sarah']));