#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.green("WELCOME TO WORD COUNTER"))
const counter: {
    sentence: string 
 } = await inquirer.prompt([
    {
        name:"sentence",
        type:"input",
        message:"Enter your sentence to count "
    }
 ]
 )
const words = counter.sentence.trim().split(" ")
console.log(words);
console.log(chalk.blueBright(`your sentence word count is ${words.length}`))