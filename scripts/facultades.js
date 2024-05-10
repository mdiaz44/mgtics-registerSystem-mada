//Constructor
function Facultades(name,campus){
    this.name=name;
    this.campus=campus;
}

//validacion



//register
function register(){
    let inputName = document.getElementById("txtFaculty").value;
    let inputCampus = document.getElementById("txtCampus").value;

    let nuevaFaculty = new Facultades(inputName,inputCampus);
    console.log(nuevaFaculty);
}