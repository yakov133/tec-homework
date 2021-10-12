//targil 1

// let numArr = [1, 2, 3, 4, 5];
// let search = parseInt(process.argv[2]);
// let fuond = false
//  numArr.find((elm, index) => {
//   if (search == elm) {
//     console.log(`the number:${search}, is in index:${index}`);
//     fuond=true;
//   }
// });

// if (!fuond) {
//   console.log(`value not fuond`);
// }

//targil 2
// let numArr = [1, 2, 3, 4, 5];
// let operation = process.argv[2];

// if(operation == "sum"){
//   let sum = 0;
//   numArr.filter((value) => {
//     sum += value;
//   });
//   console.log(`the sum is = ${sum}`);
// }
// else if(operation == "avg"){
//   let sum = 0;
//   numArr.filter((value) => {
//     sum += value;
//   });
//   console.log(`the average is = ${sum/numArr.length}`);
// }
//  else if (operation == "max"){
//     let max = numArr[0];
//     numArr.filter((value)=>{
//         if(value > max){
//             max = value;
//         }
//     })
//     console.log(`the max number is = ${max}`);
// }
//  else if (operation == "min"){
//     let min = numArr[0];
//     numArr.filter((value)=>{
//         if(value < min){
//             min = value;
//         }
//     })
//     console.log(`the min number is = ${min}`);
// }

//tagril 3
// let numArr = [1, 2, 3, 4, 5];
// let operation = process.argv[2];

// switch (operation) {
//   case "sum":
//     let sum = 0;
//     numArr.filter((value) => {
//       sum += value;
//     });
//     console.log(`the sum is = ${sum}`);
//     break;
//   case "avg":
//     let sum2 = 0;
//     numArr.filter((value) => {
//       sum2 += value;
//     });
//     console.log(`the average is = ${sum2 / numArr.length}`);
//     break;
//   case "max":
//     let max = numArr[0];
//     numArr.filter((value) => {
//       if (value > max) {
//         max = value;
//       }
//     });
//     console.log(`the max number is = ${max}`);
//     break;
//   case "min":
//     let min = numArr[0];
//     numArr.filter((value) => {
//       if (value < min) {
//         min = value;
//       }
//     });
//     console.log(`the min number is = ${min}`);
//     break;

//   default:
//     console.error(`error check you input again`);
//     break;
// }

//targil 4
// const fs = require("fs");

// let file = process.argv[2];
// let text = process.argv[3];
// fs.writeFileSync(file,text,{flag:"w"});

//targil 5
// try {
//     let data = fs.readFileSync(process.argv[2],"utf8");
//     console.log(data);
// } catch (error) {
//     console.log(`the file not exixts`);
// }

//targil 6
// let file = process.argv[2];
// let text = process.argv[3];
// fs.writeFileSync(file,text,{flag:"a"});

//targil 7
// const book = {name:"book1",pages:123};
// let file = process.argv[2];
// fs.writeFileSync(file,JSON.stringify(book),{falg:"w"});

//tagril 8
// try {
//   let data = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));
//   console.log(data.name,data.pages);
// } catch (error) {
//   console.log(`the file not exixts`);
// }

//targil 9
// let books = [];
// for (let i=0;i<3;i++) {
//     books.push({name:`booki${i}`,pages:i+1})
// }
// console.log(books);

//targil 10
// let search = process.argv[2];
// let fuond =true;
// for (const iterator of books) {
//     if(iterator.name == search){
//         console.log("number of pages", iterator.pages);
//         fuond = false;
//         break;
//     }
// }
// if(fuond){
//     console.log("book was not found");
// }

//targil 11
// let search = process.argv[2];
// let fuond =true;
// for (const iterator of books) {
//     if(iterator.name == search){
//         iterator.pages += 100;
//         fuond = false;
//         console.log(books);
//         break;
//     }
// }
// if(fuond){
//     console.log("book was not found");
// }

//targil 12
// let search = process.argv[2];
// let fuond =true;
// for (let i=0; i<books.length; i++) {
//     if(books[i].name == search){
//         books.splice(i,1);
//         fuond = false;
//         console.log(books);
//         break;
//     }
// }
// if(fuond){
//     console.log("book was not found");
// }

//targil 13
// let arr =[9,1,4,8];
// let search = parseInt(process.argv[2]);
// let fuond =true;
// for (let i=0; i < arr.length; i++) {
//     if(arr[i] == search){
//         arr[i] += 1;
//         fuond = false;
//         console.log(arr);
//         break;
//     }
// }
// if(fuond){
//     console.log("number was not found");
// }
