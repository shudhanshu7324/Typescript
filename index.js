// const a:number = 1;
// const b:number = 2;
var bankAccount = {
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
};
var book1 = {
    name: "Ncert",
    price: 1099,
};
var ebook1 = {
    name: "Maths",
    price: 459,
    size: 453,
    type: "PDF"
};
var audioBook1 = {
    name: "Science",
    price: 999,
    duration: 120
};
console.log(audioBook1.name);
console.log(audioBook1.price);
console.log(audioBook1.duration);
var user = {
    name: "John",
    age: 25,
    address: "New York"
};
console.log(user.name);
console.log(user.age);
console.log(user.address);
function printId(id) {
    console.log(id);
    console.log(typeof id);
}
printId("10");
