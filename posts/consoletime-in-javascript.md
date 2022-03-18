---
title: 'console.time() in JavaScript'
date: '2021-04-08'
---

If you want to measure execution time of pieces of your code, one of the ways to do it, is using `console.time()`. 

- First you are calling `console.time()` providing a string argument. For example `console.time('myTest1')`.
- After that you write the code that you want to test.
- At the end you are calling `console.timeEnd()` providing the same string `console.timeEnd('myTest1')`.


```
// myArray that will have numbers from 0 to 1000000
const myArray = Array.from({ length: 1000000 }, (v, k) => k + 1);

console.time('Measuring for');
for (let i = 0; i < myArray.length; i++) {
    //doSomething();
}
console.timeEnd('Measuring for');

console.time('Measuring forOf');
for (const item of myArray) {
    //doSomething();
}
console.timeEnd('Measuring forOf');

console.time('Measuring forEach');
myArray.forEach((item) => {
    //doSomething();
});
console.timeEnd('Measuring forEach');
``` 

After we run this code we will see this output:

> Measuring for: 3.511ms <br>
> Measuring forOf: 23.368ms <br>
> Measuring forEach: 15.921ms 

**Classic way where you define start and end time**

Of course you can do this on the classic way, where you define start and end time. And after that you calculate the difference. But with using console.time() the code is more clean and short.

```
const start = new Date().getTime();
myArray.forEach((item) => {
	//doSomething();
});
const end = new Date().getTime();
const diff = end - start;
console.log("Measuring forEach on classic way: " + diff);
``` 

Thanks.