// let products = ["shirt", "jeans", "jacket"]



// function addToCart(products) { //api

// }

// function totalPrice(){

// }

// function proceedToPayment (){ 

// }

// function trackOrder(){

// }



// addToCart(function totalPrice( function proceedToPayment(){

// }){
    
// })


// addToCart(products)
// .then(totalPrice)
// .then(proceedToPayment)
// .then(trackOrder)
// .catch(console.log(error));



// api.addToCart( 
//     api.totalPrice(
//         api.proceedToPayment(
//             api.trackOrder (){}){
//                 //pyramid of doom
//                 //callback hell
//         }){
//     }){
// }

// let data = new Promise(resolve, reject) =>{
//     function addToCart(){

//     }
//     resolve()

//     reject()
// }

// console.log("start")
// // producing code -> that takee some time
// fetch(console.log("mid"))

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(()=> console.log(data))

// console.log("end")

// // consuming code-> that must wait for the result
// .then(()=>console.log("data fetched successfully"))
// .then(()=>console.log("i will be executed next"))
// .then(()=> console.log("executing...."))

// .catch(error => console.log(error,"we are not able to fetch the data"))


// let orderPizza = new Promise((resolve, reject) => {

//     let isShopOpen = false;

//     if(isShopOpen){
//         resolve(console.log("You can place the order"))
//     }

//     else{
//         reject(console.log("We are close"))
//     }
// })

// .then(()=> console.log("What you want to order"))
// .catch(()=> console.log(" you cannot order"))

// async/await 
// console.log("1")

// async function getUserData(){

// console.log("start")

// let data = await fetch("https://jsonplaceholder.typicode.com/users")

// console.log("mid")

// console.log(data.json())

// console.log("end")

// }

// console.log("2")

// getUserData()

// console.log("3")


async function getData(){
    try {
        console.log("start")
        let res = await fetch("https://jsonplacehoode.com/users")
            console.log(res.json())
            console.log("mid")
    }
    catch{
        console.log("1")
        let res1 = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        console.log(res1.json())
        console.log("end")
        console.log(error);
    }
}

getData();



Scope 

