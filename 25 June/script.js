const Math = require("./one")

// console.log(Math)
// console.log(Math.sum(2,2))

// console.log(Math.sub(5,3))


// getData

// const os = require("os")

// console.log(os.cpus())
// console.log(os.freemem())
// console.log(os.hostname())


// const fs = require("fs")

// console.log(fs.writeFileSync("index.txt","Hello, Good "))
// fs.writeFileSync("one.html","<h1>HTML FILE</h1>")
// fs.appendFileSync("index.txt", "26 June")


// const path = require("path")

// console.log(path.basename("/Users/luvhirani/Desktop/MERN-113/25 June"))
// console.log(path.dirname("/Users/luvhirani/Desktop/MERN-113/25 June"))
// console.log(path)


// const EventEmitter = require('events');

// const myEmitter = new EventEmitter();

// function off(){
//     console.log("stop exe..")
// }
// myEmitter.on('greet', () => {
//     console.log('Hello there!');
//   });
  

// myEmitter.emit('greet');
// myEmitter.emit('greet');

// myEmitter.off('greet', ()=>{
//         console.log("stop exe..")
// })

// myEmitter.emit('greet');
// myEmitter.emit('greet');


const http = require("http");

const app = http.createServer((req,res)=>{
  if(req.url==='/home' && req.method==='GET'){
    res.end("This is home page.")
  }
  else if(req.url==='/profile' && req.method==='GET'){
    res.end("This is profile page.")
  }
  else{
    res.end("Hello, this is response from server")
  }
})

app.listen(3003, "localhost",()=>{
  console.log("Server is Running on port 3003")
})