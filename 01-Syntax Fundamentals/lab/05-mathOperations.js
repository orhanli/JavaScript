// 5 math operations
function math(num1, num2, operator) {
    let result;
    switch (operator) {
        case '+': 
            result = num1 + num2; 
            break;
        case '-': 
            result = num1 - num2; 
            break;
        case '/': 
            result = num1 / num2; 
            break;
        case '*': 
            result = num1 * num2; 
            break;
        case '%': 
            result = num1 % num2; 
            break;
        case '**': 
            result = num1 ** num2; 
            break;
        default:
            result = 'Invalid operator';
    }
    console.log(result);
    return result;
}

math(5, 6, '+');