//=========={if statement}========

// if(true){
//     console.log('executed...');
// } //this code will be executed

// if(false){
//     console.log('executed...');
// } //this code will not be executed

//--------examples----------
// const score = 198;
// if(score > 199){
//     const power = 'fly';
//     console.log(`User Power: ${power}`);
// }

// const isUserLoggedIn = true;
// if(isUserLoggedIn){
//     console.log("user is Logged In...");
// }

// if(9!=9){
//     console.log('Number 9...');
// }

// if(2==='2'){
//     console.log('true');
// }

// if(2=='2'){
//     console.log('true');
// }

//~~~~~ { <, >, >=, <=, ==, !=, ===, !==} ~~~~~~
// Note: ===, !== is used for strict type checking

//============ {if else statement} ============

// if(true){
//     console.log('99');
// } else {
//     console.log('9');
// }

//------------- example -------------
// const temperature = 39;
// if(temperature <= 29){
//     console.log('Its cold outside...');
// } else {
//     console.log('Its hot outside....');
// }

//=============== {shrothand if} ============

// const balance = 99;
// if(balance >= 99) console.log('You are rich...'); // This if has implicit scope
// if(balance >= 99) console.log('You are rich...'), console.log('You are lucky'); //we can write multiple statements after if statements using comma. but it is considerd a bad practice.

//=================== {if else ladder} =================
//----------- example ------------
// const balance = 299;
// if (balance < 300) {
//     console.log(`You have less than 300`);
// } else if (balance < 600) {
//     console.log(`You have less than 600`);
// } else if (balance < 900) {
//     console.log(`You have less than 900`);
// } else {
//     console.log(`You have less than 1200`);
// }


//============ {use of logical operators} ===================
//_____________ {use of && operator} ____________
//all conditions must be true to execute the code
// const userLoggedIn = true;
// const debitCard = true;
// if(userLoggedIn && debitCard) {
//     console.log('Allowed to buy course');
// }

//_____________ {use of || operator} ____________
//only one conditon being true can lead to execution of code
// const loginFromEmail = true;
// const loginFromGoogle = false;
// if(loginFromEmail || loginFromGoogle) {
//     console.log('User logged in.....');
// }