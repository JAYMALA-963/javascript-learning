//################# {loops for objects} ###################

//======================== { for in loop } =======================
//-------------- example -----------------
// const myObj = {
//     js: 'javascript',
//     cpp: 'C++',
//     c: 'C',
//     java: 'java',
//     py: 'python',
//     rb: 'ruby'
// }

// for(const key in myObj){
//     console.log(key);
// } // only prints the keys

// for(const key in myObj){
//     console.log(`${key} : Shortcut for ${myObj[key]}`);
// } // prints the whole object...


//============== {for in loop on array} =================
// const myArray = ['n', 'i', 'a', 'a', 'd'];
// for (key in myArray){
//     console.log(key);
// }  // this prints the key of array. But array has by defualt keys starting from 0.

// for (key in myArray){
//     console.log(myArray[key]);
// } // for printing the array


//=================== {for in loop on map} ==================
//Note: Map are not iterable with for of and for in loops. that's why below code is not going to work

// const myMap = new Map()
// myMap.set('IN', 'India')
// myMap.set('USA', 'United States Of America')
// myMap.set('FR', 'France')

// for (const key in myMap){
//     console.log(key);
// }
