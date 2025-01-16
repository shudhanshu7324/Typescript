// Generics in typescript
// Generics are used to create reusable components

// log string
function logString(arg: string): string {
    console.log(arg);
    return arg;
}
// logString("Hello World");

// log number
function logNumber(arg: number): number {
    console.log(arg);
    return arg;
}
// logNumber(123);

// log array
function logArray(arg: any[]): any[] {
    console.log(arg);
    return arg;
}
// logArray([1, 2, 3]);


// in the above example, we have three functions that are doing the same thing but with different types. We can use generics to create a reusable function that can work with any type.

function logAnything<T>(arg: T): T {
    console.log(arg);
    return arg;
}

// logAnything("hello from generic function")
// logAnything([34, 45, 56])
// logAnything(123)
// logAnything(true)
// const obj = logAnything({ name: 'John', age: 25 })
// console.log(obj.name)


// Example 2
// interface HasAge{
//     age:number;
// }

// function getOldest(peoples:HasAge[]):HasAge {
//     peoples.sort((a, b) => b.age - a.age);
//     return peoples[0];
// }

// const people:HasAge[] = [
//     {age: 25},
//     {age: 30},
//     {age: 22}
// ]

// const oldestPerson = getOldest(people);

// console.log(oldestPerson.age);


// interface Player{
//     name:string;
//     age:number;
// }

// const players:Player[] = [
//     {name: 'John', age: 25},
//     {name: 'Jane', age: 30},
//     {name: 'Doe', age: 22}
// ]

// Asserion
// Type assertion is a way to tell the compiler "trust me, I know what I'm doing." It's like type casting in other languages.
// const oldestPlayer = getOldest(players) as Player;

// Above example can be written using generics
interface HasAge{
    age:number;
}

function getOldest<T extends HasAge>(peoples:T[]):T{
    peoples.sort((a,b) => b.age-a.age);
    return peoples[0];
}

const people:HasAge[] = [
    {age: 25},
    {age: 30},
    {age: 22}
]

const oldestPerson = getOldest(people);

interface Player{
    name:string;
    age:number;
}

const players:Player[] = [
    {name: 'John', age: 25},
    {name: 'Jane', age: 30},
    {name: 'Doe', age: 22}
]

const oldestPlayer = getOldest(players);
