
// function myFuncion() {
//     console.log('Welcome to the functions class');
// }

// myFuncion();


// function add2Numbers(num1, num2) {
//     return num1 + num2;
// }

// console.log(add2Numbers(3, 6));

// function userLoginMessage(username) {
//     return `${username} just logged in!`; 
// }

// console.log(userLoginMessage("nil"));

//-----------when we dont know how much parameters are need to pass we use rest operator in function

// function calculateCart(...prices) {
//     return prices;
// }

// console.log(calculateCart(3, 6, 9, 45, 63));

// //in below case the first value is taken by id parameter and rest goes to the prices parameter
// function calculateCartWithId(id, ...prices) {
//     return prices;
// }

// console.log(calculateCartWithId(36, 38449, 3239, 32498));

//========== pass object in function

// const user = {
//     name: 'nil',
//     age: 21
// }

// function handleObject(getUser){
//     console.log(`Your user name is: ${getUser.name} and your age is: ${getUser.age}`);
// }

// handleObject(user);

// //another way to pass values in function
// function handleObject2(getUser){
//     console.log(`Your user name is: ${getUser.name} and your age is: ${getUser.age}`);
// }

// handleObject2({
//     name: 'ninaad',
//     age: 27
// })

//============ pass array into funciton

// const myarr = [3, 6, 9, 4, 5, 2, 7, 1, 8, 0]

// function getSpecifiedValueOfArry(getArray) {
//     return getArry[3]
// }

// console.log(getSpecifiedValueOfArry(myarr));

// // another method to pass array in function

// function getSpecifiedValueOfArry2(getArray) {
//     return getArray[2]
// }

// console.log(getSpecifiedValueOfArry2([3, 6, 9, 4, 5]))

