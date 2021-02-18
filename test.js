
const print10 = () => {
for (let i=0; i <=10; i++)
    console.log(i);
}

const printRev = (n) => {
    for (let i=n; i >=0 ; i--)
        console.log(i);
}

const printArr = (arr) => {
    for (let i = arr[-1];  i >=0; i--)
        console.log(arr[i]);
}

const arrSum = (arr) => {
    return arr.reduce((a,b) => a+b);
}

const arrSort = (arr) => {
    return arr.sort((a,b) => a- b);
}

const arrSortRev = (arr) => {
    return arr.sort((a,b) => b-a);
}

const printWithMap = (arr) => {
    return arr.map(a => console.log(a));
}

const multiTenToAll = (arr) => {
    return arr.map(a => console.log(a*10));
}

const removeNegative = (arr) => {
    return arr.filter( a => a > 0);
}

const removePositive = (arr) => {
    return arr.filter( a => a < 0);
}


printRev(10);
printArr([1,2,3,4,5]);
console.log('sum:', arrSum([1,2,3,4,5]))
console.log('sort:', arrSort([2,3,1,4,5]));
console.log('sort:', arrSortRev([2,3,1,4,5]));
printWithMap([10,20,30,40]);
multiTenToAll([10,20,30,40]);
console.log(removeNegative([-1,-2,1,2,3]));
console.log(removePositive([-1,-2,1,2,3]));


const removePositiveAndHalf = (arr) => {
    return arr.filter( a => a < 0).map(a => a/2);
}

console.log(removePositiveAndHalf([-1,-2,1,2,3]));

const sortOnlyPositives = (arr) => {
    return removeNegative(arr).sort((a,b) => a < b );
    // return removeNegative(arr).arrSort(arr);
}

console.log(sortOnlyPositives([-1,-4,10,5,6]));

const getMax = (arr) => {
    let max = 0;
    arr.forEach(i => {if (i > max) max = i});
    console.log(max);
};
const getMax1 = (arr) => (arr.reduce((a,b) => a>b?a:b));

getMax([1,2,3,4,5,22]);
console.log(getMax1([1,2,3,4,5,22]));