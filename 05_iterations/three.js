//############# {Bit of Array specific loops} ##################
// ["", "", ""]
// [{}, {}, {}]

//================= {for of loop} =====================
//____________{loop on arry}________________
// const family = ['nil', 'ninaad', 'sharwari', 'kanak', 'raghav', 'kasturi'];
// for (const member of family) {
//     console.log(`${member} is a member of the Roy family`);
// }

// const family = [
//     {name: 'Nil', age: 21},
//     {name: 'Ninaad', age: 27},
//     {name: 'Raghav', age: 18},
// ]
// for (const member of family){
//     console.log(member);
// }

//____________{loop on string}________________
// const name = "Ninaad";
// for (const letter of name) {
//     console.log(letter);
// }


//================== { Maps } ===================
//~~~~~~~ map only accepts unique values
//----------- example ---------------
// const myMap = new Map()
// myMap.set('IN', 'India')
// myMap.set('USA', 'United States Of America')
// myMap.set('FR', 'France')

// console.log(myMap);

//----------- for of loop on map ---------------
// const myMap = new Map()
// myMap.set('IN', 'India')
// myMap.set('USA', 'United States Of America')
// myMap.set('FR', 'France')

// for(const [ key, value] of myMap){
//     console.log(key, ':', value);
// }