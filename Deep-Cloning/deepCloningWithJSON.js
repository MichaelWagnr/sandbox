// CLONING ==============================================================

/*
A spread operator [...] or {...} will create a shallow clone of an Object or Array.

Meaning we can copy the contents into a unique variable, however any nested data structures will not be unique and retain it's original reference. This leads to some funky behaviour when mutating copies of Arrays and Objects.

However, the JSON object has the capacity to take a data structure of any depth and turn it into a string representation of itself and parse it back to itself. We can then make a new unique variable the JSON parsing of a stringified version of another complex data structure. This allows us to operate on a copy or deep clone of an Object or Array without impacting the original.

Basically, we can deep clone in one line of code, by calling two JSON methods:
*/

// OBJECTS ==============================================================

const a = {
    first: 'string',
    second: {
        third: 'string2'
    }
}

// const b = {...a}                         // ex1. creates a shallow clone
const b = JSON.parse(JSON.stringify(a));    // ex2. creates a deep clone

b.second.third = 'new string'               // in ex.1 this line impacts both 'a' AND 'b'
console.log(a)                              // in ex.1 same output; in ex.2 different outputs
console.log(b)                              // in ex.1 same output; in ex.2 different outputs

// ARRAYS ===============================================================

const c = [1, 2, [3, 4]];

// const d = [...c];                        // ex3. creates a shallow clone
const d = JSON.parse(JSON.stringify(c));    // ex4. creates a deep clone

d[2].push(5);                               // in ex.3 this line impacts both 'c' AND 'd'
console.log(c);                             // in ex.3 same output; in ex.4 different outputs
console.log(d);                             // in ex.3 same output; in ex.4 different outputs

// OTHER CONSIDERATIONS =================================================

/*
These constant variables that point to Objects and Arrays respectively, are in fact constant.
If we attempt to reassign the variable as such:
```
a = "string"
b = 32
```
The script will error out. It doesn't allow us to change a const variable referencing an Object or an Array to another type.

We can however mutate the Array or Object contents; this is not constant.

An idea: 

I'm not sure why this peculiarity exists but it might have something to do with how it references memory. A primitive type's value (String, Boolean, Number) is one piece of data, and is presumably referenced in one memory slot. Complex data types, such as Arrays can contain multiple values housed in multiple spots in the memory of a computer. It behaves as though when creating an Array we get something like:
```
const array = [let[0] = 'string', let[1] = true, ...]

//VS 

const string = const 'string'
```
*/