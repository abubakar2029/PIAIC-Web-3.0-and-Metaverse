"use strict";
// import inquirer from 'inquirer';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// async function calculator() {
//   const operationChoice = await inquirer.prompt([
//     {
//       type: 'list',
//       name: 'operation',
//       message: 'Choose an operation:',
//       choices: ['Addition', 'Subtraction', 'Multiplication', 'Division'],
//     },
//   ]);
//   const { operation } = operationChoice;
//   const numbers = await inquirer.prompt([
//     {
//       type: 'input',
//       name: 'num1',
//       message: 'Enter the first number:',
//       validate: (input) => !isNaN(input) || 'Please enter a valid number',
//     },
//     {
//       type: 'input',
//       name: 'num2',
//       message: 'Enter the second number:',
//       validate: (input) => !isNaN(input) || 'Please enter a valid number',
//     },
//   ]);
//   const { num1, num2 } = numbers;
//   const result = performOperation(operation, parseFloat(num1), parseFloat(num2));
//   console.log(`Result: ${result}`);
// }
// function performOperation(operation: string, num1: number, num2: number): number {
//   switch (operation) {
//     case 'Addition':
//       return num1 + num2;
//     case 'Subtraction':
//       return num1 - num2;
//     case 'Multiplication':
//       return num1 * num2;
//     case 'Division':
//       if (num2 === 0) {
//         console.log('Error: Division by zero');
//         process.exit(1);
//       }
//       return num1 / num2;
//     default:
//       console.log('Invalid operation');
//       process.exit(1);
//   }
// }
// calculator();
const inquirer_1 = __importDefault(require("inquirer"));
async function getCalculatorInput() {
    const input = await inquirer_1.default.prompt([
        {
            type: 'number',
            name: 'number1',
            message: 'Enter the first number:',
        },
        {
            type: 'number',
            name: 'number2',
            message: 'Enter the second number:',
        },
        {
            type: 'list',
            name: 'operator',
            message: 'Select an operator:',
            choices: ['+', '-', '*', '/', '%', '^'],
        },
    ]);
    return input;
}
function calculate(input) {
    switch (input.operator) {
        case '+':
            return input.number1 + input.number2;
        case '-':
            return input.number1 - input.number2;
        case '*':
            return input.number1 * input.number2;
        case '/':
            return input.number1 / input.number2;
        case '%':
            return input.number1 % input.number2;
        case '^':
            return input.number1 ** input.number2;
        default:
            throw new Error('Invalid operator');
    }
}
async function startCalculator() {
    const input = await getCalculatorInput();
    const result = calculate(input);
    console.log(`The result is ${result}`);
}
startCalculator();
