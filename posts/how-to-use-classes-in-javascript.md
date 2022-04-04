---
title: 'How To Use Classes in JavaScript'
date: '2021-03-30'
description: 'This is an easy guide that will help you understand JavaScript classes. Probably by now you already have heard about them. Classes are blueprints for objects.'
---

This is an easy guide that will help you understand JavaScript classes.

Probably by now you already have heard about them. Classes are blueprints for objects. 

JavaScript Classes are introduced in ECMAScript 2015(known as ES6). 
**Class is created with 'class' keyword.**

```
class User {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }
  printName() {
    console.log('User name is: ' + this.name);
  }
  printLastname() {
    console.log('User lastname is: ' + this.lastname);
  }
};

const newUser = new User('Gjoko', 'Bozhinov');
newUser.printName();
newUser.printLastname();
```
- constructor() is default function that can be added in any class, and it is executed when the class is instantiated. Constructor can also have parameters.
- This class has 2 properties, name and lastname.
- printName() and printLastname() are called methods.

With calling `new User('Gjoko', 'Bozhinov')` we create new instance of User with name 'Gjoko' and lastname 'Bozhinov', and we store it in constant. 

When we run this code you should see this lines:
```
 User name is: Gjoko
 User lastname is: Bozhinov
```

**The classes in JavaScript support inheritance.**

```
class Human {
  constructor(age) {
    this.age = age;
  }
  printAge() {
    console.log('This human being is ' + this.age + ' years old');
  }
}
``` 
We defined another `class Human`, that has property age and method `printAge()`. The method `printAge()` should print a message how old the human being is.

Next, User will inherit this new class Human.

```
class User extends Human {
  constructor(name, lastname, age) {
    super(age);
    this.name = name;
    this.lastname = lastname;
  }
  printName() {
    console.log('User name is: ' + this.name);
  }
  printLastname() {
    console.log('User lastname is: ' + this.lastname);
  }
};
``` 

- `extends` is default keyword
- `super()` is default keyword that executes the parent constructor. In this case it will execute the Human constructor. 
- `class User` now inherit the properties and methods from `class Human`. This means that property `age` and method `printAge()` can be used on user as well.
- In User constructor now we pass the user age, that is passed to the Human constructor next.

After making those changes we can write this code next. 
```
const newUser = new User('Gjoko', 'Bozhinov', 30);
newUser.printName();
newUser.printLastname();
newUser.printAge();
``` 
We see that user now have age, and can use `printAge()` method, to print the age.

After we run this code we will see this output:
```
 User name is: Gjoko
 User lastname is: Bozhinov
 This human being is 30 years old
```

Thanks!