//------------- { objects literals in js } ------------
// const person = {
//     name: 'nil',
//     age: 21,
//     faily: 'roy',
//     country: 'india'
// }

// console.log(person);

//------------- { constructor function } -------------
//Note: 'new' keyword is also called constructor function
function createPerson(name, age, family, country) {
    this.name = name;
    this.age = age;
    this.family = family;
    this.country = country;
    return this;
}

const person1 = new createPerson('nil', 21, 'roy', 'india');
console.log(person1);
const person2 = new createPerson('ninaad', 27, 'roy', 'india');
console.log(person2);
const person3 = new createPerson('kanak', 18, 'roy', 'india');
console.log(person3);