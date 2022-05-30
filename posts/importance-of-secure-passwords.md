---
title: 'Importance of long, strong and secure passwords.'
date: '2021-04-20'
description: 'In this article I will explain you why long, strong and secure passwords are very important.' 
tags: 'SoftwareDevelopment, Node.js'
---

In this article I will explain you why **long, strong and secure passwords are very important**. I will show you basic example in Node.js, how zip file, with very weak password can be unlocked, using brute force. 

You will learn how you can generate all possible string combinations using **recursion** and how you can use **async/await**.

I use recursive function to generate all possible combinations, for predefined possible password length and predefined possible characters. 

Also I'm using this [unzipper](https://www.npmjs.com/package/unzipper) module, that can unzip the zip file. *I guess you already have worked with Node.js, so you know that you need to install the unzipper first. You can see how you can do that on the link provided.*

I try to unpack the zip file with every possible combination, until I find the first valid password. After that in output I print the first valid password. 

You can see how it looks:

```
const unzipper = require('unzipper');

// Define possilbe chars, if you need upper case letters or special chars add them
const possibleChars = [];
const numbers = Array.from(Array(10).keys()).map(String);
const lowerCaseLetters = [...'abcdefghijklmnopqrstuvwxyz'];
possibleChars.push(...numbers, ...lowerCaseLetters);

// Location of the zip file
const ZIP_LOCATION = './test.zip';
const combinations = [];
// Define how long you think the password is
const passwordMaxLength = 3;

const generateAllCombinations = (append, maxLength) => {
	for (const char of possibleChars) {
		const newPass = append + char;
		if (newPass.length > maxLength) {
			return;
		}
		generateAllCombinations(newPass, maxLength);
		combinations.push(newPass);
	}
};

const unpackZip = async (password) => {
	try {
		const directory = await unzipper.Open.file(ZIP_LOCATION);
		let fileIndex = directory.files.length - 1;
		const extracted = await directory.files[fileIndex].buffer(password);
		return true;
	} catch (e) {
		return false;
	}
};

const crackPassword = async () => {
	generateAllCombinations('', passwordMaxLength);

	let validPassword;
	for (const combination of combinations) {
		const passValid = await unpackZip(combination);
		if (passValid) {
			validPassword = combination;
			break;
		}
	}
	console.log('Valid password is: ' + validPassword);
};

crackPassword();
``` 

You can try to unzip your zip file with the password that you got in the output.
 
Just to mention, for 4 characters password I needed to wait around 5 min, if your zip file have 8 characters long password you will probably need 300 years to wait until the algorithm finish 😁. 

So it's always good to use long passwords. With characters, numbers and special characters, because chances for someone to hack you, using brute force are very small.

Thanks!