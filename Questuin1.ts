// Reverse a string in place
const reverseString = (my_str:string|undefined|null) : void => {
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

const getMax = (myArr:number[]) : number => {
    let max:number = myArr[0];
    for(let i = 1; i< myArr.length; i++)
        if(myArr[i] >= max)
            max = myArr[i];
    return max
};

// let io = prompt("Enter a string");
// reverseString(io);

let max = 1000;
let min = -1000;

const myArr = [];
for (let i = 0; i < max; i++) {
  const randomNumber = Math.random() * (max - min) + min;
  myArr.push(randomNumber);
}
console.log(getMax(myArr) === Math.max(...myArr))
