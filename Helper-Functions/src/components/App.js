// ==================================================================
//* Helper/utility functions: 
// yarn install + yarn start to see the result //*(not necessary)

// When we are writing code, we want to keep things DRY ("Don't Repeat Yourself").

// If we find that we are writing the same code over and over again, it might be a good idea to create a function in a seperate files named 'utilities.js', 'utils.js' or 'helpers.js' and import them where we need them.

// Below we have a simple App component that takes data in the form of nested objects, deep clones it, turns it into an array, take a random item out of the array and creates a card for it with a dynamic ID.

// While we can write all of these functions above the return() statement of the App component, it could easily become cluttered, and we could repeatively write out the same functions in other components or tediously pass them as props. 

// Instead, we can just import one (or many) helper function(s) with named imports and use it where we need to - VScode will auto-complete the import for us when we start typing the name of the function, a nice bonus. 

// ==================================================================

// ================================================================== 
import { arrify, randNum, clone, slugify } from "../utilities"; // Helpful functions that live in another file
// ==================================================================

import styled from 'styled-components';
import data from "../data";

const App = () =>  {
    // We import/call our utility functions instead of rewriting the logic in our components
    // This keeps our components visually light and DRY
    const newData = clone(data)
    const newDataArr = arrify(newData, {values:true, log:true})
    const item = newDataArr[randNum(newDataArr.length)]
    

    return (
        <StyledDiv id={slugify((item.name + ' ' + item.latinName))}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
        </StyledDiv>
    );
}

const StyledDiv = styled.div`
    padding: 20px;
    border: 1px solid black;
    border-radius: 5px;
    width: 200px;
    margin: 200px auto;
    text-align: center;
`

export default App;