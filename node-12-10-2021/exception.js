//targil exception_1

// console.log(1);
// try {
//     console.log(2);
//     if(e)
//     {
//         throw "some error";
//     }
//     console.log(3);
// }
//  catch (error) {
//     console.log(4);
// }
// console.log(5);

/*
e = True output: 1
                 2
                 4
                 5

e = False output: 1
                 2
                 3
                 5
*/


//targil exception_2

// let e = true;
// console.log(1);
// try {
//     console.log(2);
//     if(e){
//         throw "some error";
//     }
//     console.log(3);
// } catch (error) {
//     console.log(4);
// }
// finally{
//     console.log("clean up")
// }
// console.log(5);

/*
e = True output: 1
                 2
                 4
                 clean up
                 5

e = False output: 1
                  2
                  3
                  clean up
                  5
*/


//targil exception_3
// function safeDiv(num1,num2){
//     try{
//         if(num2 == +0|| num2 == -0 || num2 == 0){
//             throw `Can't divide by zero!`;
//         }
//         let resualt = num1/num2;
//         console.log(`${num1} : ${num2} = ${resualt}`);
//     }catch(error){
//         console.log(error);
//     }
// }
// safeDiv(2,0);


