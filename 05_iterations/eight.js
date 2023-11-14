//================= { reducer() function } ===============
// const myNums = [1, 2, 3, 4];
// const result = myNums.reduce(function (acc, currval) {
//     console.log(`acc value is ${acc} and currval is ${currval}`)
//     return acc + currval;
// }, 2)

// console.log(result);

// const result = myNums.reduce((acc, currval) => {
//     console.log(`acc value is ${acc} and currval is ${currval}`)
//     return acc + currval;
// }, 2)

// console.log(result);

const shoppingCart = [
    { courseName: 'javascript', price: 1999 },
    { courseName: 'HTML & CSS', price: 999 },
    { courseName: 'python', price: 3999 },
    { courseName: 'java', price: 2999 },
    { courseName: 'c++', price: 999 },
];

const totalPriceToPay = shoppingCart.reduce((acc, item) => { return acc + item.price }, 0);
console.log(totalPriceToPay);