#! /usr/bin/env node
import inquirer from "inquirer";
// Word Counter
const sentence = await inquirer.prompt([
    {
        type: "input",
        name: "sentence",
        message: "Enter a sentence",
    },
]);
const words = sentence.sentence.split(" ");
let count = 0;
for (let i = 0; i < words.length; i++) {
    count += words[i].length;
}
console.log("Your Word Count is:", count);
