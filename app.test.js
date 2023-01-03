//Sync Code
// console.log("First");
// console.log("First");
// console.log("First");



//Async setTimeout Code
// console.log("First");
// setTimeout(() => {
//     console.log("Second");
// },0)
// console.log("Third");

//Async Promise Code

// console.log("first");
// const promise = fetch('https://fakestoreapi.com/products')
// promise.then((value) => console.log("Promise value is " , value));
// console.log("third");

//Promises 
// function add1000(){
//     let result = 0;
//     for (let i = 1; i < 1000000000; i++){
//         result += i;
//     }
//     return result;
// };

// function add1000Later(){
//     return new Promise((resolve,reject) => {
//         let result = add1000();
//         if(result){
//             resolve(result);
//         }else{
//             reject();
//         }
//     })
// }



// console.log("some process");
// add1000Later().then((result) => console.log(result)).catch(() => console.log("Error"));
// console.log("more process");



// fetch('https://fakestoreapi.com/products')
// .then((res) => res.json())
// .then((data) => {
//     let ID = data[0].id;
//     console.log(ID);
    
// });

async function store(){
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    const ID = data[0].id;
    console.log(ID);
}

store();

console.log("first");
console.log("first");
console.log("first");
console.log("first");
console.log("first");