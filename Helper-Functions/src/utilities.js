export const slugify = (str) => {
    return str.toLowerCase().replace(/\s/g, '-');
} // slugify() takes a string and returns a slug ex. "The Great Gatsby" => "the-great-gatsby"

export const clone = (data) => {
    return JSON.parse(JSON.stringify(data));
} // clone() returns a deep, recursive clone of the array or object passed into it

export const randNum = (ceiling) => {
    return Math.floor(Math.random() * ceiling);
} // randNum() returns a number between 0 and the number (ceiling) passed into it

export const arrify = (obj, options = {keys: true}) => {
    let arr;
    if (typeof obj !== 'object') return;
    options.log && console.log(obj,'BEFORE');
    options.keys && (arr = Object.keys(obj));
    options.values && (arr = Object.values(obj));
    options.entries && (arr = Object.keys(obj));
    options.log && console.log(arr, 'AFTER');
    return arr;
}  // arrify() turns objects into arrays and takes an options obj as a 2nd argument
// ex. arrify(data, {keys:true, log:true}) will console.log a before/after and return an arr of keys