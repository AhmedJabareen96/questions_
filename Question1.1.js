// Reverse a string in place
var reverseString = function (my_str) {
    if (my_str === null || my_str === undefined)
        return;
    var temp = "";
    var my_str_char = my_str.split("");
    for (var i = 0; i < my_str.length / 2; i++) {
        temp = my_str_char[i];
        my_str_char[i] = my_str[my_str.length - i - 1];
        my_str_char[my_str.length - i - 1] = temp;
    }
    console.log(my_str_char.join(""));
};
var io = prompt("Enter a string");
reverseString(io);
