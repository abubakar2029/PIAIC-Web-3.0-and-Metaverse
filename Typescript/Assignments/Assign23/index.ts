// import inquirer from 'inquirer';

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
