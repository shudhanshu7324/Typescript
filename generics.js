// Generics in typescript
// Generics are used to create reusable components
// log string
function logString(arg) {
    console.log(arg);
    return arg;
}
// logString("Hello World");
// log number
function logNumber(arg) {
    console.log(arg);
    return arg;
}
// logNumber(123);
// log array
function logArray(arg) {
    console.log(arg);
    return arg;
}
// logArray([1, 2, 3]);
// in the above example, we have three functions that are doing the same thing but with different types. We can use generics to create a reusable function that can work with any type.
function logAnything(arg) {
    console.log(arg);
    return arg;
}
function getOldest(peoples) {
    var oldest = 0;
    for (var i = 0; i < peoples.length; i++) {
        if (peoples[i].age > oldest) {
            oldest = peoples[i].age;
        }
    }
    return oldest;
}
console.log(getOldest([{ age: 25 }, { age: 36 }, { age: 35 }])); // 35
