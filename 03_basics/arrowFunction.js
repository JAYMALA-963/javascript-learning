
// this keyword is used to refer the current context in scope
//in node the global current context is {} aka empty object
//in browser the global current context is Window{} aka window object

// const obj = {
//     name: 'nil',
//     age: 21,
//     email: 'nil@nic.net',
//     myFunc: function () {
//         console.log(`Welcome ${this.name}`)
//     }
// }

// obj.myFunc();
// obj.name = 'ninaad';
// obj.myFunc();


// function thisTester(){
//     console.log(this);
// }

// thisTester();

//---------------------------

// function thisTester1(){
//     let name = 'nil'
//     console.log(this.name);
// }

// thisTester1();
//if we use this inside in a fnction we get the value undefined but if we use this inside in a object we get the current context

//----------how to declare arrow function

// const myInfo = function() {
//     let name = 'nil'
//     let age = 21
// } //another way to declare functon

// const myInfo = () => {
//     let name = 'nil'
//     let age = 27
// } //this is how we declare arrow function


//---------------emplicit and explicit return ---------------

// //--explicit function: when we use return keyword. when we use curly braces we have to use return keyword.
// const add2 = (num1, num2) => {
//     return num1 + num2
// }

// console.log(add2(3, 6));

//--implicit function: when we dont use return keyword. we use parantheses no need to use return keyword
const add2 = (num1, num2) => (num1 + num2)

console.log(add2(4, 5));


