//Types of objects : singltone | Object literals

//singleton 
//Object.create

//object literals
// -----------------------object literals-----------------------------
// const sym = Symbol("key1");
// const person = {
//     name: 'nil',
//     age: 20,
//     favSongs: [
//         'kirari', 'shinunoga-e-wa', 'ae zindagi'
//     ],
//     'fav place': 'void',
//     [sym]: "mykey1"
// }

// console.log(person.age);
// console.log(person.favSongs);
// console.log(person["fav place"]);
// console.log(person[sym]);

// person.favSongs.push('villain');
// console.log(person);

// Object.freeze(person);
// person.age = 22;
// person.name = 'nilesh'
// console.log(person);

// person.greeting = function() {
//     console.log("hey!");
// }

// person.greeting2 = function() {
//     console.log(`hey ${this.name}`);
// }

// console.log(person.greeting());
// console.log(person.greeting2());

//-----------------------singleton object--------------------------

// const person = new Object();
// console.log(person);

// person.id = 459;
// person.name = 'nil';
// person.isLoggedIn = true;

// console.log(person);

// const family = {
//     name: 'raghav',
//     members: {
//         nil: {
//             members: 'raghu'
//         },
//         ninaad: {
//             members: 'ritesh'
//         }
//     }
// }

// console.log(family);
// console.log(family.members.nil.members);


// combining two or more objects

// const obj1 = {1:'a', 2:'s', 3:'d'};
// const obj2 = { 4:'f', 5:'g'};

//method 1
// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

//method 2
// const obj3 = {...obj1, ...obj2};
// console.log(obj3);

// Use this method when u have array of objects
// const data = [
//     {id: 1, name: 'nil'},
//     {id: 2, name: 'ninaad'},
//     {id: 3, name: 'raghav'}
// ];
// console.log(data[0].name);


// get key and values of objet.
// const person = {
//     name: 'nil',
//     age: 20,
//     favSongs: [
//         'kirari', 'shinunoga-e-wa', 'ae zindagi'
//     ],
//     'fav place': 'void'
// }
// console.log(Object.keys(person)); //get keys
// console.log(Object.values(person)); //get values


// check whether the property exist in object or not
// const arr = {id: 1, name: 'nil'};
// console.log(arr.hasOwnProperty('id'));

//========================De sturcturing the object aka acessing the values of object dirctly===================

const family = {
    Name: 'roy',
    head: 'ninaad',
    members: 4
};
const {Name} = family //desturctured the object and used the property directly
console.log(Name);
const {head: Head} = family //another method to do it
console.log(Head);