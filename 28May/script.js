let num = [1,2,3,4,5]

//map filter and reduce 

let result = num.map(square)

// let result = num.map((number) => {return number * number})

console.log(result)

function square(number){
    // console.log(num * num);
    return(number * number)
}

//sum-> Higher order function
//fun2-> callback function
// function sum (fun2){

// }

// function fun2 (){

// }

//filter
// let result = num.filter(isEven)

// function isEven(number){
//     return number%2 == 0;
// }

// console.log(result)

//reduce -> acc = 0, curr
// let result = num.reduce(sum)
let result = num.reduce((acc,curr)=>{return acc  + curr;})

// function sum( acc, curr){

//     return acc  + curr;

// }

console.log(result)