//=============== {Truthy / Falsy values...} ============

//----------------- example -------------
// const balance = 900;
// if(balance) {
//     console.log('You still have some money...');
// } else {
//     console.log('You have zero balance...');
// } // if statement will be executed here.

// const balance = 0;
// if (balance) {
//     console.log('You still have some money...');
// } else {
//     console.log('You have zero balance...');
// } // else statement will be executed here.

//~~~~~~~~~~~ {Falsy values} ~~~~~~~~~~`=
// false, 0, -0, BigInt 0n, "", '', null, undefined, NaN

//~~~~~~~~~ {Truthy values} ~~~~~~~~~~~~
// "false", "0", " ", ' ', [], {}, function(){}


//================ {Check whether the array is empty or not} ===============

// const myArray = [];
// if(myArray.length === 0) {
//     console.log('Array is empty');
// }


//================ {Check whether the object is empty or not} ===============

// const myObj = {};
// if(Object.keys(myObj).length === 0) {
//     console.log('Object is empty');
// }

//============= {some special cases} ==============
// false == 0 : true
// false == '' : true
// 0 == '' : true

//============= { nullish coalescing operator (??) } ============
// designed for null and undefined values
// ??

//------------ example ------------
// let val;
// val = 3 ?? 9; // in this case first value will be printed
// val = null ?? 99; // in this case second value will be printed
// val = undefined ?? 36 ; // in this case second value will be printed
// val = undefined ?? null; // in this case second value will be printed
// val = null ?? undefined; // in this case second value will be printed
// val = null ?? undefined ?? 18; // in this case the first value after null and/or undefined will be printed
// val = undefined ?? 18; // in this case the first value after undefined will be printed
// val = null ?? 90 ?? 18; // in this case the first value after null will be printed

// console.log(val);

//=============== { ternary operator } ================
// condition ? true : false

//--------------- example --------------
// const Marks = 36;
// Marks < 36 ? console.log('You are fail') : console.log('You are pass')