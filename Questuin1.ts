// Reverse a string in place
let reverseString = (my_str:string|undefined|null) : void => {
    if(my_str === null || my_str === undefined)
        return;
    let temp:string = "";
    let my_str_char = my_str.split("");
    for(let i:number = 0; i< my_str.length/2 ; i++){
        temp = my_str_char[i];
        my_str_char[i] = my_str[my_str.length-i-1];
        my_str_char[my_str.length-i-1] = temp;
    }
    console.log(my_str_char.join(""));
};

let io = prompt("Enter a string");
reverseString(io);
