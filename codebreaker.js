function guess(number) {
    original_number = 1234;
    original_digits = original_number.toString().split('');
    guessed_digits = number.toString().split('');
    return_value_x = '';
    return_value_hypen = '';

    for (let index = 0; index < guessed_digits.length; index++) {
        if (guessed_digits[index] === original_digits[index]) {
            return_value_x += 'X';
        } else if (original_digits.includes(guessed_digits[index])){
            return_value_hypen+='-';
        }
    }
    return return_value_x + return_value_hypen;
}
module.exports.guess = guess;