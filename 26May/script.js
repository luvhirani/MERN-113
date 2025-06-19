

// Arrow Function

// const arrow = () =>  console.log("Arrow Function")
// const arrow = () =>  {
//     console.log("Arrow Function")
// }
// arrow();

// let add = (a,b) => a+b;
// let div = (a,b) => {
//     console.log(a/b)
//     return a/b;
// }

// console.log(add(2,3))
// div(2,4)


// let bool = (a) => {
//     if(a % 2 === 0){
//         return "even";
//     }
//     else{
//         return "odd";
//     }
// }

// console.log(bool(25));


// Array In Javascript

let stu1Name = "Ashish"
let stu1Age = 23;
let stu1Email = "ashish@gmail.com"

let stu1 = ["Ashish",23,"ashish@gmail.com","Jaipur","MCA"]
            //   0     ,1 ,     2                ,   3,   4

// console.log(stu1[3])

//Array Constructor
let arr = new Array("Tarun", 22,"jaipur" )

// Array Methods
// 1. push -> insert to the end of an array
// 2. pop -> removes element from the end of an array
// 3. shift -> removes element from start of an array
// 4. unshift -> insert element to the start of an array
// arr.push("tarun@gmail.com")
// arr.pop()
// arr.shift()
// arr.unshift(11)
// console.log(arr)

console.log(arr.indexOf(22))
// console.log(arr.indexOf("jaipur"))

let num = [23, 10, 45, 1, 17, 11, 21]

// console.log(num.sort())
// console.log(num.reverse())
// console.log(num.includes(19))
// console.log(arr.length)

//slice method
// console.log(num.slice(2,4))
// console.log(num)
// splice method
console.log(num.splice(4,2,'a','b'))
console.log(num)

