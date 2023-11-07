//It can also be Used to Remove Specific Indexes
let numbers = [1, 2, 3, 4, 5];

numbers.splice(2, 10);
console.log(numbers);

//You can also use splicing to remove elements from the end of an array.
const numbers = [1, 2, 3, 4, 5];

numbers.splice(numbers.length - 3);
console.log(numbers);
