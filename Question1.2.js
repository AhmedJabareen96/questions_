const getMax =  (myArr) => {
    let max = myArr[0];
    for (var i = 1; i < myArr.length; i++)
        if (myArr[i] >= max)
            max = myArr[i];
    return max;
};
const max = 1000;
const min = -1000;
const myArr = [];
for (let i = 0; i < max; i++) {
    const randomNumber = Math.random() * (max - min) + min;
    myArr.push(randomNumber);
}
console.log(getMax(myArr) === Math.max.apply(Math, myArr));
