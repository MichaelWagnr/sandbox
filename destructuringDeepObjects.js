// Destructuring is of massive benefit when handling complex data. 

// When receiving data from another database, webpage or API with Javascript, that data can be very complicated.

// Below we have access to a hypothetical national database of schools: const data.

// This could be many layers deep, an object that contains many cities, each city pointing to an object that contain many schools, which points to an object of many students etc.

const data = {
    'montreal': {
        'concordia': {
            'students': {
                'jon': {
                    'grades': {
                        'week1': {
                            'day1': 75,
                            'day2': 100,
                            'day3': 75,
                            'day4': 75,
                            'day5': 100,
                        } //... more weeks?
                    } //... more data?
                } //... more names?
            } //... instructors?
        } //... more schools?
    } //... more cities?
}

// GOAL** We want write a function that returns the average score for Jon.

// Example 1 - using dot-notation all the way down:
const example1 = (data) => {
    //This works but it's hard to follow.
    const sum = data.montreal.concordia.students.jon.grades.week1.day1 + data.montreal.concordia.students.jon.grades.week1.day2 + data.montreal.concordia.students.jon.grades.week1.day3 + data.montreal.concordia.students.jon.grades.week1.day4 + data.montreal.concordia.students.jon.grades.week1.day5;

    const average = sum / 5;

    return average;
}

// Example 2 - declaring our own variables:
const example2 = (data) => {
    //This works and is more clear than example 1, but we need to go down to the same depth when declaring each variable, and that could get a bit messy if we have a typo along the way or need to add additional days.
    const day1 = data.montreal.concordia.students.jon.grades.week1.day1
    const day2 = data.montreal.concordia.students.jon.grades.week1.day2
    const day3 = data.montreal.concordia.students.jon.grades.week1.day3
    const day4 = data.montreal.concordia.students.jon.grades.week1.day4
    const day5 = data.montreal.concordia.students.jon.grades.week1.day5

    const sum = day1 + day2 + day3 + day4 + day5;

    const average = sum / 5;

    return average;
}

// Example 3 - destructuring the data object:
const example3 = (data) => {
    // We rip the values of the keywords to the left of the '='
    // from the object to the right of the '='
    // and put the values into a const variable named after the keyword
    const {day1, day2, day3, day4, day5} = data.montreal.concordia.students.jon.grades.week1;
    const sum = day1 + day2 + day3 + day4 + day5;
    const average = sum / 5;
    return average;
}

console.log(example1(data)); // expected output 85
console.log(example2(data)); // expected output 85
console.log(example3(data)); // expected output 85