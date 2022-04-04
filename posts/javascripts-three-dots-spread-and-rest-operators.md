---
title: "JavaScript's three dots (...). Spread and Rest Operators."
date: "2021-04-19"
description: 'In this short article I will explain what Spread and Rest operators are, and how they can be used in JavaScript.'
---

In this short article I will explain what Spread and Rest operators are, and how they can be used in JavaScript.

Spread and Rest operators are written with three dots `...` So actually we have the same syntax, for both. It only depends on how we use it.

**Spread operator** is used to expand array elements or object properties.

**Rest parameter** is used to collect function arguments into array.

### Spread operator.

 **Copy items from one array to another:** 
```
const fruits = ['apple', 'banana', 'kiwi'];
const moreFruits = [...fruits, 'strawberry', 'lemon'];

console.log(fruits);
console.log(moreFruits);
``` 
When you run the code you will get this output:
```
[ 'apple', 'banana', 'kiwi' ]
[ 'apple', 'banana', 'kiwi', 'strawberry', 'lemon' ]
```

**You can use to clone array: **

In JavaScript the objects are assigned by reference and not by values.

```
const fruits = ['banana', 'kiwi'];
const newFruits = fruits;

fruits.push('nectarine');

console.log(fruits);
// Output: [ 'banana', 'kiwi', 'nectarine' ]

console.log(newFruits);
// Output: [ 'banana', 'kiwi', 'nectarine' ]
``` 
As you can see you add nectarine to `fruits`, but you also have it in `newFruits`.

If you want to copy arrays so that they do not refer to same array, you can use the spread operator.

```
const fruits = ['banana', 'kiwi'];
const newFruits = [...fruits];

console.log(fruits);
// Output: [ 'banana', 'kiwi' ]
console.log(newFruits);
// Output: [ 'banana', 'kiwi' ]

fruits.push('nectarine');

console.log(fruits);
// Output: [ 'banana', 'kiwi', 'nectarine' ]
console.log(newFruits);
// Output: [ 'banana', 'kiwi' ]
``` 
Now you make a copy of `fruits` that is called `newFruits`. When you add nectarine to `fruits`, `newFruits` stays unchanged.

**Use it with objects:**

```
const person = { name: 'Gjoko', lastname: 'Bozhinov' };
const address = { country: 'Slovenia', city: 'Ljubljana'}

const personDetails = {...person, ...address};

console.log(personDetails); 
// You will get this output:
//{
//  name: 'Gjoko',
//  lastname: 'Bozhinov',
//  country: 'Slovenia',
//  city: 'Ljubljana'
//}
``` 
### Rest parameter

Rest parameters allows you to represent an indefinite number of arguments as an array. You define rest parameter by creating function parameter with `...` prefix.

```
function sum(...numbers) {
    let result = 0;
    for (const number of numbers) {
        result += number;
    }
    console.log('Sum: ' + result);
}

sum(1, 2, 3);
// Output: Sum: 6
``` 

```
function printArguments(a, b, ...c) {
    console.log('a', a);
    console.log('b', b);
    console.log('c', c);
}

printArguments(1, 2, 3, 4, 5, 6, 7);
``` 
You will get this output:
```
a: 1
b: 2
c: [ 3, 4, 5, 6, 7 ]
```

Thanks!