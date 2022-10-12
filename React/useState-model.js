// This is a simplified model as to what the useState hook might look like behind the scenes and how it could be compared with more vanilla JavaScript.

// Here is a function that returns an array where array[0] is a value, array[1] is a function.

const useState = (initialValue) => {
    // value will just be the initialValue we passed into this function:
    let value = initialValue;

    // updateValue is a function that can change value to something new:
    const updateValue = (newValue) => {
        value = newValue;
        // our function will also do some helpful tasks when we call it:
        reRenderComponent();
    }

    // We store our value and function in a 2 item array:
    const array = [value, updateValue];

    // And we return our array:
    return array;
}

// Calling our function:
useState('hi') // Returns [value, updateValue()]

const greetingA = useState('hi')[0]    
// greeting equals the first part of the array returned from useState: 
// The string 'hi' we passed into useState() on line 24.

const setGreetingA = useState('hi')[1] 
// setGreeting equals the second part of the array returned from useState:
// A function that can update value and set off a reRender.

// ==================================================================
// We can do this all in one line with Destructuring:
// ==================================================================

const [greetingB, setGreetingB] = useState('hi');

// This is how the useState hook typically looks in React applications.



