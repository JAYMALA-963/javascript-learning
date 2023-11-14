//================ { for loop } ==============
//------------- example -----------
// for(let i = 0; i <= 10; i++) {
//     let element = i
//     console.log(element);
// }

// for(let i = 0; i <= 10; i++){
//     let element = i;
//     if(element === 9){
//         console.log('9 is the magical number')
//     }
//     console.log(element);
// }


//============== { nested for loop } ===============
//--------------- example -------------
// for (let i = 0; i <= 10; i++){
//     console.log(`Outer loop value is ${i}`)
//     for (let j = 0; j <= 10; j++){
//         console.log(`Inner loop j value is ${j} and i value is ${i}`)
//     }
// }

//lets print tables upto 10
// for (let i = 1; i <= 10; i++) {
//     console.log(`Table of ${i}`);
//     for (let j = 1; j <= 10; j++){
//         let x = 
//         console.log(`${i} * ${j} = ${i*j}`)
//     }
//     console.log(`~~~~~~~~~~~~~~~`)
// }


//======================= {using for loop on array} =================
//--------------- example -----------
// const family = ['nil', 'ninaad', 'raghav', 'ishaan', 'sharwari', 'kanak'];
// for(let i = 0; i < family.length; i++) {
//     let element = family[i];
//     console.log(element);
// }


//============={ using (break) keyword} =================]
//----------example---------------\
// for (let i = 1; i <= 15; i++) {
//     if (i === 9) {
//         console.log(`Detected 9`);
//         break;
//     }
//     console.log(`the value is: ${i}`);
// }


//============={ using (continue) keyword} =================]
//----------example---------------\
// for (let i = 1; i <= 15; i++) {
//     if (i === 9) {
//         console.log(`Detected 9`);
//         continue;
//     }
//     console.log(`the value is: ${i}`);
// }
