const a:number = 1;
const b:number = 2;

function calculateSum(a:number, b:number):number {
    return a + b;
}

const ans:number = calculateSum(a, b);
console.log(ans);

function  getTotal(numbers:number[]):number {
    return numbers.reduce((acc, num) => acc + num, 0);
}

const numbers:number[] = [1, 2, 3, 4, 5];

const total:number = getTotal(numbers);
console.log(total);