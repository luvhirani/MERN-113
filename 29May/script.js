// Objects in JS

// let students = ["naveen", "aditya","swati"]

// let stu1 = students[0]
// console.log(stu1)

// let student1 = {
//     name: "Hammad",
//     age: 20,
//     enrolled: true,
// }

// console.log(student1.name)
// console.log(student1.age)

// let student2 = {}

// student2.name = "Tarun";
// student2.age = 21;

// console.log(typeof(student2))
// delete student2.age
// student2.age = 20;
// console.log(student2)

let student3 = new Object()

let students = {
    title:"List of students",
    student1 : {
        name: "Hammad",
        age: 20,
        enrolled: true,
    },
    student2:{
        name:"Tarun",
        age:21,
        enrolled:true
    },
    student3:{
        name:"Swati",
        age:20,
        enrolled:true
    }
}

// console.log(students.student2["age"]) 


let Student = {
    fName: "Umang",
    lName: "Jha",
    fullName: function (){
        // console.log("Hello, Good Morning", Student.fName + " " + Student.lName)
        // console.log(console.log(this))
    },
    studentOne:{
        fName : "Tarun",
        lName: "",
        age: 20
    }
}

// Student.fullName()


//pre-defined methods
//Key, values, entries

// console.log(Object.keys(Student))
// console.log(Object.values(Student))
// console.log(Object.entries(Student))    


// Object Cloning

let student1 = {
    name: "Hammad",
    age: 20,
    enrolled: true,
}

// let student2 = student1;   

//Shallow Copy
// student1.name = "Arti"

// console.log(student1)
// console.log(student2)

// let student2 = Object.assign(student1)
// student2.name = "Arti"
// console.log(student1)
// console.log(student2)

// Deep Copy

// let student2 = {...student1}
// student2.name = "Arti"
// console.log(student1)
// console.log(student2)

//JSON.parse and JSON.stringyfy
let student2 = JSON.parse(JSON.stringify(student1))
student2.name = "Arti"
console.log(student1)
console.log(student2);