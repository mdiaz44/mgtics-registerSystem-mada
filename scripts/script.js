console.log("Hola");

//variables

var studentName="Sam";
let age=99;
const isStudent=false;

studentName="Roberto";

age=98;


console.log(studentName);
console.log(age);
console.log(isStudent);

//arreglos

let students = ["Samantha", "Roberto", "Fabiola", "Sergio", "Rafael"];

console.log(students);

students.push("Fernanda", "Adrian"); // agrega item al arreglo
console.log(students[5]);

students[2]="Fabi";
console.log(students);

students.pop(); // Quita items del arreglo
students.splice(1,1); // Quita item especifico
console.log(students);

//Object Literal

let  student1 = {
    name: "Samantha",
    age:99,
    isStudent:false
}

let  student2 = {
    name: "Robert",
    age:98,
    isStudent:false
}

console.log(student1, student2);

//Object constructor

function Student(name,age,isStudent){
    this.name=name;
    this.age=age;
    this.isStudent=isStudent;
}

let student3=new Student("Fabiola",97,false);
let student4=new Student("Sergio",96,true);
let student5=new Student("Fernanda",97,true);

console.log(student3, student4, student5);

//function

function saludar(nombre){
    console.log("Hola " + nombre);

    return "Hello";
}

// esto me sirve pero no quiero que aparezca --> saludar("Miguel");

// esto no quiero que aparezca tampoco --> console.log(saludar("Roberto"));

function saludar(nombre){
    alert("Welcome " + nombre);
}

function sumar(a,b) {
    let total= a+b;
    console.log(total);
}

sumar(5,4);


// esto tampoco quiero que aparezca -->  function calcularTaxes(ingresos, egresos){
    //let subtotal = ingresos-egresos;
    //let total = subtotal*0.02;
    //document.write(`
    //<p class="container">Tus taxes son: $${total} <p>
    //`);
    //console.log(total);
// }

calcularTaxes(sumar(100,200),sumar(10,8));
calcularTaxes(sumar(200,300),sumar(50,30));


