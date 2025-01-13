var a = 1;
var b = 2;
function calculateSum(a, b) {
    return a + b;
}
var ans = calculateSum(a, b);
console.log(ans);
function getTotal(numbers) {
    return numbers.reduce(function (acc, num) { return acc + num; }, 0);
}
var numbers = [1, 2, 3, 4, 5];
var total = getTotal(numbers);
console.log(total);