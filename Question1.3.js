const removeDuplicates =  (myArr) => {
    let index = 0;
    while (index < myArr.length) {
        if (myArr[index] === myArr[index + 1])
            myArr.splice(index + 1, 1);
        else
            index++;
    }
    console.log(myArr);
};
removeDuplicates([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5]);
