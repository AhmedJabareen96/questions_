const getMax = (myArr:number[]) : number => {
    let max:number = myArr[0];
    for(let i = 1; i< myArr.length; i++)
        if(myArr[i] >= max)
            max = myArr[i];
    return max
};

let max = 1000;
let min = -1000;

const myArr = [];
for (let i = 0; i < max; i++) {
  const randomNumber = Math.random() * (max - min) + min;
  myArr.push(randomNumber);
}
console.log(getMax(myArr) === Math.max(...myArr))