"use strict";
// const sayHello=()=>{
//     console.log('hello');
//     return 'hello good morning'
// }
// let t =sayHello()
// console.log(t)

// const add=(x,y)=> x+y
// let sum=add(5,10)
// console.log(sum)

// const add=(y,...x)=> y+x-x
// let sum=add(5,10,32)
// console.log(sum)

// const sum = (b, ...a) => {
//   let total = 0;
//   for (let i of a) {
//     total += a[i];
//   }
//   return total;
// };
// console.log(sum(10, 20, 20, 23));


// const scores =[10,20,30,40]
// const copyScore1 = scores.slice(0,3)
// console.log(copyScore1)

// const copyScore2= Array.from(scores)
// console.log(copyScore2)

// const copyScore3 = [...scores]
// console.log(copyScore3)

const product={
    id:1,
    name:"coca",
    price:3.3
}
// const {id, name , price} = product
// // console.log(product)
// console.log(name)

// const printReceipt =({id,name, price})=>{
//     console.log(`Product Id : ${id}`);
//     console.log(`Name : ${name}`);
//     console.log(`Price : ${price}`);
    
// }
// printReceipt(product)

// const productList=[1,2,3,4,5]
// const [p1, ...p] = productList
// const [,,p3,p4,p5] = productList
// console.log(p3,p4)
// console.log(productList.at(3))