//! targil 1
//  let a=1,b;
//        b=a;
//        a++;
//        console.log(a,b);       //  output = 2 ,1

//        // --- refrence type
//        let objA = {description : 'salary 1' , amount : 7000}, objB;
//        objB = objA;
//        objA.amount++;
//        console.log(objA);      // output = {description : 'salary 1' , amount : 7001}
//      console.log(objB);        // output = {description : 'salary 1' , amount : 7001}
//        objB.description = 'salary 2';    // output = {description : 'salary 2' , amount : 7001}
//        console.log(objA);      // output = {description : 'salary 2' , amount : 7001}
//     console.log(objB);         // output = {description : 'salary 2' , amount : 7001}

//! targil 2

// let a = 1,
//   b;
// b = a;
// a += 2;
// console.log(a, b);   //  output = 3 ,1

// // --- refrence type
// let objA = { description: "salary 3", amount: 7000 },
//   objB;
// objB = objA;
// objA.amount++;
// console.log(objA);   //  output = {description : 'salary 3' , amount : 7001}
// console.log(objB);   //  output = {description : 'salary 3' , amount : 7001}
// objB.description = "salary 2";
// console.log(objA);   //  output = {description : 'salary 2' , amount : 7001}
// console.log(objB);   //  output = {description : 'salary 2' , amount : 7001}

//! targil 3
// let a=1, b, obj1 = {name : 'Avi'}, obj2;
// b=a;
// a=2;
// console.log(b,b==a);   //output = 1  false
// obj2=obj1;
// obj1.name='Yossi';
// console.log(obj2,obj1 == obj2);   //output =  {name : 'Yossi'}  true

//! targil 4
// let array1,array2 = [1,2,3,6];
// array1 = array2;
// array1[0]=8;
// array2[1]=18;
// console.log(array1 == array2);   // output= true
// console.log(array1,array2);   // output =   [8,18,3,6] [8,18,3,6]

//! targil 5
// let array1 = [{ name: "Jim", age: 33 }, { name: "John", age: 22 }],
//  array2 = [1, 2, 3, 6],
//  a,
//  obj1;

// a = array2[2];
// a = 44;
// console.log(array2);    // output= [1,2,3,6]

// obj1 = array1[1];
// obj1.age = 55;
// console.log(array1);    // output =  [{ name: "Jim", age: 35 }, { name: "John", age: 55 }]

//!  module_1

/*
 we can have a very clean and nice looking code and seperat our code very good.
 Also we can Re-Use code and then we wont reapt uor self.   
*/