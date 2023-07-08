//Printing it to console
console.log("Muthu")
//Query Selecting using DOM
let heading = document.querySelector('h1')
//Changing innertext of Selected HTML tag
heading.innerText='Hii everyone'
//Provide the URL of current page
console.log(document.URL)
//Pop up appears
window.alert('Hey guys am learning mern stack')
//Local Storage (Key,Value) for Client side
window.localStorage.setItem('Mern','Full Stack Developement')
//Remove Local Storage by using Key value
// window.localStorage.removeItem('Mern')

/* var - is used to declare global variable
let - is used to declare local variable
const - is used to declare constant*/

// let obj=new Object()
const obj={
    name:"Keerthana"
}
console.log(obj.name)

// //Template Strings while printing and functions with usage of default argument
// let fullname=prompt('What is your name?')
// let age=prompt('What is your age?')
// let university=prompt("Which University?")

// function information(fullname="No_name",age=50,university="Any"){
//     alert(`${fullname} is ${age} years old and studying in ${university} university`)
// }

// information(fullname)

//Arrow functions
let greeting = (greet,mname) => {
    if(!greet){
        throw new Error('Greet needed')
    }
    if(!mname){
        throw new Error('Name needed')
    }
    return `${greet} ${mname}`
}
console.log(greeting('Good morning','Keerthana'))

// this keyword
let thiskey={
    names:["Muthu","Keerthana"],
    college:['srm','rec'], 
    printname(){
        console.log(`${this.names[0]} is a best friend of ${this.names[1]}` )
    }
}
thiskey.printname()  

//object destructuring
let {names,college}=thiskey
console.log(`${names[0]} is studying in ${college[0]}`)

//Array destructuring
const arr=['muthu','keerthi','yuvan']
const [item]=arr
const[,item2]=arr
const[,,item3]=arr
console.log(arr)
console.log(item)
console.log(item2)
console.log(item3)

//Spread operator
const India=['Tamilnadu','Kerala','Andhra']
const Japan=['Tokyo','Kasukabay','Hiddenleaf','Wano']
const allstates=[...India,...Japan]
console.log(India)
console.log(Japan)
console.log(allstates)

//Rest operator:with array
const[first,...rest]=allstates
console.log(first)
console.log(rest)

//Rest operator:with object
const obj1={
    firstname:"Muthu",
    email:"muthuganesanng@gmail.com",
    password:"Gear5"
}
const{password,...rest2}=obj1
console.log(rest2)

//protoypes
function  student(firstname,lastname,email,gender){
    this.firstname=firstname
    this.lastname=lastname
    this.email=email
    this.gender=gender
}

student.prototype.showinfo=function(){
    student.prototype.fullname=this.firstname+" "+this.lastname
    console.log(`Firstname:${this.firstname}\nLastname:${this.lastname}\nname:${this.fullname}\nemail:${this.email}\nGender:${this.gender}`)
}
const student1=new student('Muthu','ganesan','muthu@gmail.com','Male')
student1.showinfo()