import inquirer from 'inquirer';
async function calculate() {
    const questions = [
        {
            type: 'input',
            name: 'num1',
            message: 'Enter the first number:',
        },
        {
            type: 'list',
            name: 'operation',
            message: 'Select an operation:',
            choices: ['Add', 'Subtract', 'Multiply', 'Divide', 'Modulus', 'Exponent'],
        },
        {
            type: 'input',
            name: 'num2',
            message: 'Enter the second number:',
        },
    ];
    const answers = await inquirer.prompt(questions);
    const num1 = parseFloat(answers.num1);
    const num2 = parseFloat(answers.num2);
    let result;
    switch (answers.operation) {
        case 'Add':
            result = num1 + num2;
            break;
        case 'Subtract':
            result = num1 - num2;
            break;
        case 'Multiply':
            result = num1 * num2;
            break;
        case 'Modulus':
            result = num1 % num2;
            break;
        case 'Exponent':
            result = num1 ** num2;
            break;
        case 'Divide':
            if (num2 === 0) {
                result = 'Cannot divide by zero';
            }
            else {
                result = num1 / num2;
            }
            break;
        default:
            result = 'Invalid operation';
    }
    console.log(`Result: ${result}`);
}
calculate();
