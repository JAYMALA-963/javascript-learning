//========== {promises} ==============
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ {.then() || .catch()} ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~` {promise: resolve} `~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//---------- {Method 1} ------------------
// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve();
//     }, 1000)
// })

// //Note: resolve is related to .then()
// promiseOne.then(function(){
//     console.log('promise is consumed');
// })

//---------- {Method 2} ------------------
// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('This is an async task...');
//         resolve();
//     },1000)
// }).then(function(){
//     console.log('promise consumed');
// })

//_____________________ {how to pass data in resolve} ____________________
// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout( function(){
//         resolve({Name: 'Nil', age: 21});
//     }, 1000)
// })
// promiseThree.then(function(person){
//     console.log(person);
// })

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~` {promise: reject} `~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = true;
//         if (!error) {
//             resolve({ name: 'Nil', age: 21 });
//         } else {
//             reject('Error: something went wrong...');
//         }
//     }, 1000)
// })
// //Note: .catch() is related to reject
// promiseFour.then(function (user) {
//     console.log(user);
// }).catch(function (error) {
//     console.log(error);
// })

//___________________ {how to chain .then() and .catch()} _________________-
//Note: in this example we have chain two .then() to get only name property instead of whole object.
// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = false;
//         if (!error) {
//             resolve({ name: 'Nil', age: 21 });
//         } else {
//             reject('Error: something went wrong...');
//         }
//     }, 1000)
// })

// promiseFour
//     .then((person) => {
//         return person.name
//     })
//     .then((name) => {
//         console.log(name);
//     })
//     .catch((error) => {
//         console.log(error);
//     })

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~` {promise: .finally()} `~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Note: .finally() method is similar to defulat keyword in js. It is executed whether promise is resolved or rejectd
// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let record = true;
//         if (record) {
//             resolve({ family: 'Roy', members: 4 });
//         } else {
//             reject('error: record not found');
//         }
//     }, 1000)

// })
//     .then((family) => {
//         console.log(family);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log(`async task is completed...`)
//     })

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ { try{} || catch{} } ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//---------- async/await -----------
// const promiseFive = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let pass = true;
//         if (pass) {
//             resolve({ subject: 'maths', grade: 'pass' });
//         } else {
//             reject('You are fail');
//         }
//     }, 1000)
// })

// async function consumedPromisFive() {
//     try {
//         const response = await promiseFive;
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumedPromisFive();



//================== {fetch data from url and write async function} =====================
// async function getAllUsers() {
//     try {
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers()

//================== {fetch data from url and use .then() and .catch()} =====================
// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((response) =>{
//     return response.json();
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.log(error);
// })


