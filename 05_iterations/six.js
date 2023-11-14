//================= {.filter() function on array} ====================

// const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const number = myNum.filter((num) => {
//     return num <= 9
// })

// console.log(number);

//-------------------- EXAMPLE ---------------------
const arrayOfPeople = [
    { name: 'John', age: 25, profession: 'Engineer', location: 'New York' },
    { name: 'Alice', age: 30, profession: 'Teacher', location: 'San Francisco' },
    { name: 'Bob', age: 22, profession: 'Designer', location: 'Los Angeles' },
    { name: 'Sarah', age: 28, profession: 'Doctor', location: 'Chicago' },
    { name: 'David', age: 35, profession: 'Developer', location: 'Austin' },
    { name: 'Emily', age: 27, profession: 'Marketing Specialist', location: 'Denver' },
    { name: 'Michael', age: 32, profession: 'Manager', location: 'Seattle' },
    { name: 'Emma', age: 26, profession: 'Writer', location: 'Boston' },
    { name: 'Ryan', age: 31, profession: 'Architect', location: 'Portland' },
    { name: 'Olivia', age: 29, profession: 'Accountant', location: 'Miami' },
];

let Employees = arrayOfPeople.filter((people) => people.age >= 30);
Employees = arrayOfPeople.filter((people) => people.name === 'Olivia');


console.log(Employees);