//========= Immediately Invoked Function Expressions IIFE ============

// (function(){
//     console.log("Database Connected....")
// })(); //normal function

// (() => {
//     console.log("Database Connected Through arrow function..");
// })(); //arrow function

//note: always use semicolon to terminate iife or else further code wil not run


//----how to declare parameters and pass arguments in iife---

// ((name /*parameters*/) => {
//     console.log(`Wlcome to the IIFE ${name}`);
// })("Nil" /*arguments*/);


//----what is named iife ----------
// (function namedIife(){
//     console.log("This is a named iife...");
// })();