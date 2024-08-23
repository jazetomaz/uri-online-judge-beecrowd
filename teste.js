const obj = { name: 'Alice' };
obj.name = 'Bob'; // Isso é permitido
obj.age = 30; // Isso também é permitido

// Mas isso vai causar um erro
obj = { name: 'Charlie' }; // TypeError: Assignment to constant variable.

const arr = [1, 2, 3];
arr.push(4); // Isso é permitido
arr[0] = 10; // Isso também é permitido

// Mas isso vai causar um erro
arr = [5, 6, 7]; // TypeError: Assignment to constant variable.
