const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

// readline.question(`What's your name?`, number => {
//     console.log(`Hi ${number}!`);
//     convert_number = number.toString();
//     readline.close();
// });

let number = 12345678901;
console.log('This is a number', number);
let convert_number = number.toString();
console.log('this is typeof convert_number', typeof convert_number);
console.log('this is typeof convert_number.length', typeof convert_number.length);
if (convert_number.length < 13 || convert_number.length > 16) {
    console.log('this is convert number line 17', convert_number);
    console.log('Number should be between 13 and 16 digits.');
    console.log('You gave ', convert_number.length, 'digits number');
    console.log(`You gave ${convert_number.length} digits number`);
}
else {
    console.log(convert_number);
    console.log(typeof convert_number);
    console.log(convert_number.length);
    console.log('Number is хорошо')
}

return;


