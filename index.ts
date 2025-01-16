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

// type Person = {
//     name: string;
//     age: number;
//     address?: string;
// }

// const p1:Person = {
//     name: 'John',
//     age: 25
// }

// const p2:Person = {
//     name: 'Jane',
//     age: 22,
//     address: 'New York'
// }

// console.log(p1.name)
// console.log(p1.address)


// Interface -> Interface is a way to define a type in TypeScript or a contract that a class should follow. it is a shape of an object.


// Transaction Interface
interface Transaction {
    PayerAccount: number;
    PayeeAccount: number;
}

interface BankAccount{
    accountNumber:number;
    accountHolderName:string;
    balance:number;
    isActive:boolean;
    transactions:Transaction[];
}

const bankAccount:BankAccount = {
    accountNumber: 123456,
    accountHolderName: 'John Doe',
    balance: 1000,
    isActive: true,
    transactions: [
        {
            PayerAccount: 123456,
            PayeeAccount: 654321
        },
        {
            PayerAccount: 123456,
            PayeeAccount: 43223
        }
    ]
}


// Extend Interface
interface Book{
    name:string;
    price:number;
}

const book1 : Book = {
    name:"Ncert",
    price: 1099,
}


interface Ebook{
    name:string;
    price:number;
    size:number;
    type:string;
}

const ebook1:Ebook = {
    name:"Maths",
    price: 459,
    size: 453,
    type: "PDF"
}

// Do not repeat the same code again and again so used extends keyword works like inheritance
interface AudioBook extends Book{
    duration:number;
}

const audioBook1:AudioBook = {
    name: "Science",
    price: 999,
    duration: 120
}

console.log(audioBook1.name)
console.log(audioBook1.price)
console.log(audioBook1.duration)


// If there is two interface with same name then it will merge the properties of both interface

interface User{
    name:string;
    age:number;
}

interface User{
    address:string;
}

const user:User = {
    name: "John",
    age: 25,
    address: "New York"
}

console.log(user.name)
console.log(user.age)
console.log(user.address)


// Some important points about Interface and Type Alias
// merging of interface is possible but merging of type alias is not possible

// type User = {
//     name:string;
//     age:number;
// }

// type User = {
//     address:string;
// } 
// this will give error

// Limitation of Interface
// type sanitizedString = string;
// type EvenNumber = number;

// it cannot be done 
// interface sanitizedString extends string{

// }



// Union Type
// type ID = string | number;
// function printId(id:ID){
//     console.log(id)
//     console.log(typeof id)
// }

// printId("10")


// Narrowing
// narrowing is a process of reducing the range of possible values of a variable. It is done by checking the type of the variable and then performing the operation based on the type of the variable.