function guess(number) {
    original_number = 1234;
    original_digits = original_number.toString().split('');
    guessed_digits = number.toString().split('');
    return_value = '';
 


    for (let index = 0; index < guessed_digits.length; index++) {
        if (guessed_digits[index] === original_digits[index]) {
            return_value += 'X';
        } else if (original_digits.includes(guessed_digits[index])){
            return_value+='-';
        }
    }

    // if (original_number == number) {
    //     return_value = 'XXXX';
    // } else if (return_value.length !== 0) {

    // } else {
    //     guessed_digits.forEach(digit => {
    //         original_digits.includes(digit) ? return_value+='-' : '';
    //     });
    // }

    return return_value;
}
module.exports.guess = guess;