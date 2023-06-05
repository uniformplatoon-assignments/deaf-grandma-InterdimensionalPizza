import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

// A readline interface which will prompt for command-line input and return said input.
// Don't worry about how this works right now. Focus on using it to solve the problem.
const rl = readline.createInterface({ input, output });

/**
 * Here is an example of how to get user input from the command line
 * and then do something with it.
 * 
 * We will learn more about `await` (and promises in JS) later. For now, use this guide code
 * to solve the problem.
 * 
 * Guide code borrowed from: https://nodejs.org/api/readline.html#readline
 */
// TODO: Once your program is working, comment this "guide code" out or delete it.
//let userInput = await rl.question('What do you think of Node.js? ');
//console.log(`Thank you for your valuable feedback: ${userInput}`);
//userInput = await rl.question(`Why do you think Node.js ${userInput}?`)


// TODO: Using the above code as a reference and a guide, implement the deaf grandma problem!


let lowerCase = 'abcdefghijklmnopqrstuvwxyz'

let input1 = await rl.question('HEY, KID! ');
if (input1 == '') {
    input1 = await rl.question('WHAT?! ')
} if (lowerCase.includes(input1)) {
    input1 = await rl.question('SPEAK UP, KID! ')
} if (input1 != '' && !lowerCase.includes(input1)) {
    input1 = await rl.question('NO, NOT SINCE 1946! ')
} if (input1 == 'GOODBYE!') {
    input1 = await rl.question('LEAVING SO SOON? ')
} if (input1 == 'GOODBYE!') {
    input1 = await rl.question('LATER, SKATER! ')
} rl.close()