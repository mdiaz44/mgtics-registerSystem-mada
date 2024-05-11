// En el archivo register.js

let students=[];

//constructor
function Student(name, age, gender, mail, faculty, pass, classes){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.mail = mail;
    this.faculty = faculty;
    this.pass = pass;
    this.classes = classes;
}

//validación
function isValid(unAlumno){
    let validacion = true;

    if(unAlumno.name==""){
        validacion = false;
    }
    if(unAlumno.age==""){
        validacion = false;
    }
    if(unAlumno.gender==""){
        validacion = false;
    }
    if(unAlumno.mail==""){
        validacion = false;
    }
    if(unAlumno.faculty==""){
        validacion = false;
    }
    if(unAlumno.pass==""){
        validacion = false;
    }
    if(unAlumno.classes==""){
        validacion = false;
    }

    return validacion;
}

//registrar
function registrar(){
    let inputNombre = document.getElementById("txtNombre").value;
    let inputEdad = document.getElementById("txtEdad").value;
    let inputGenders = document.getElementById("txtGender").value;
    let inputMail = document.getElementById("txtMail").value;
    let inputFaculty = document.getElementById("txtFaculty").value;
    let inputPass = document.getElementById("txtPass").value;
    let inputClasses = document.getElementById("txtClasses").value;

    let nuevoAlumno = new Student(inputNombre, inputEdad, inputGenders, inputMail, inputFaculty, inputPass, inputClasses);
    if(isValid(nuevoAlumno)){
        students.push(nuevoAlumno);
        // Llama a la función para mostrar estudiantes como tabla
        displayStudentsAsTable();
        console.log(students);
    } else {
        alert("Por favor completa los campos");
    }
}

function init(){
    let student1 = new Student("Samuel", 99, "Hombre", "samuel@gmail.com", "Facultad de Ciencias Administrativas", "pepe12", "Big Data");
    students.push(student1);
}

window.onload = init; // Espera a renderizar el HTML
