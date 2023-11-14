//=============== {for each loop} ===============
//---------------- example -----------------
// const family = ['nil', 'ninaad', 'raghav', 'ishaan', 'anant'];

// family.forEach(function (member) {
//     console.log(member);
// }) // for each loop using normal functon

// family.forEach( (member) => {
//     console.log(member);
// }) // for each loop using arrow function

// function printMe(item){
//     console.log(item);
// }
// family.forEach(printMe); // another method to print the array with foreach loop


//================{another interesting things about for each} ================
// const family = ['nil', 'ninaad', 'raghav', 'ishaan', 'anant'];
// family.forEach((member, index, family) => {
//     console.log(member, index, family);
// }) // foreach can take value, index, and whole array as arguments respectively.


//=============== {for each loop on array of objects} ==================

// const family = [
//     {name: 'nil', age: 21},
//     {name: 'ninaad', age: 27},
//     {name: 'raghav', age: 18}
// ]

// family.forEach( (member) => {
//     console.log(member);
// }) // prints the whole array of objects

// family.forEach( (member) => {
//     console.log(member.name);
// }) // prints the property of objects in array