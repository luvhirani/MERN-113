// document.getElementById("btn").addEventListener("")

document.getElementById("input").addEventListener("mouseover",function (e){
    console.log("mouse over event occured")
    // console.log(e.target.value)
})
document.getElementById("btn").addEventListener("mouseover", eventFn)

function eventFn (){
    console.log("button clicked")
}