var getMax = function (myArr) {
    var max = myArr[0];
    for (var i = 1; i < myArr.length; i++)
        if (myArr[i] >= max)
            max = myArr[i];
    return max;
};
var max = 1000;
var min = -1000;
var myArr = [];
for (var i = 0; i < max; i++) {
    var randomNumber = Math.random() * (max - min) + min;
    myArr.push(randomNumber);
}
console.log(getMax(myArr) === Math.max.apply(Math, myArr));
