// const a:number = 1;
// const b:number = 2;

// function calculateSum(a:number, b:number):number {
//     return a + b;
// }

// const ans:number = calculateSum(a, b);
// console.log(ans);

// function  getTotal(numbers:number[]):number {
//     return numbers.reduce((acc, num) => acc + num, 0);
// }

// const numbers:number[] = [1, 2, 3, 4, 5];

// const total:number = getTotal(numbers);
// console.log(total);


// Types Alias

type Person = {
    name: string;
    age: number;
    address?: string;
}

const p1:Person = {
    name: 'John',
    age: 25
}

const p2:Person = {
    name: 'Jane',
    age: 22,
    address: 'New York'
}

console.log(p1.name)
console.log(p1.address)