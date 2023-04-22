// Reverse a string in place
const reverseString =  (my_str) => {
    if (my_str === null || my_str === undefined)
        return;
    let temp = "";
    const my_str_char = my_str.split("");
    for (var i = 0; i < my_str.length / 2; i++) {
        temp = my_str_char[i];
        my_str_char[i] = my_str[my_str.length - i - 1];
        my_str_char[my_str.length - i - 1] = temp;
    }
    console.log(my_str_char.join(""));
};

// to get input in Node,js environment
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter a string ', (io) => {
    reverseString(io);
    readline.close();
});

