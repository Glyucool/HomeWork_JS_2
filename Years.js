
let age = prompt('Скільки вам років?');
if (!isNaN(age) && age >= 0) {
    let word;
    if (age % 10 === 1 && age % 100 !== 11) {
        word = 'рік';
    } else if ((age % 10 >= 2 && age % 10 <= 4) && (age % 100 < 10 || age % 100 >= 20)) {
        word = 'роки';
    } else {
        word = 'років';
    }
    console.log(`${age} ${word}`);
} else {
    console.log('Будь ласка, введіть коректне, не від\'ємне число.');
}