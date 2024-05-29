let universidades=[];

//constructor
function Universidad(faculty,campus){
    this.faculty=faculty;
    this.campus=campus;
}

//validación
function isValid(unaUniversidad){
    let validacion = true;

    if(unaUniversidad.faculty==""){
        validacion = false;
    }
    if(unaUniversidad.campus==""){
        validacion = false;
    }

    return validacion;
}

//registrar
function register(){
    let inputfaculty = document.getElementById("txtFaculty").value;
    let inputcampus = document.getElementById("txtCampus").value;


    let nuevaUniversidad = new Universidad(inputfaculty,inputcampus);
    console.log(new Universidad);
    
    if(isValid(nuevaUniversidad)){
        //students.push(nuevoAlumno);
        insertToDataBase(nuevaUniversidad);
        //displayCards();
        //console.log(students);
    }else{
        alert("Por favor completa los campos");
    }
}

function insertToDataBase(newUniversity){
    $.ajax({
        url:"./app/registerfaculty.php",
        method:"POST",
        data:{
            faculty:newUniversity.faculty,
            campus:newUniversity.campus
        },
        dataType:"json",
        success:function(response){
            if(response.success){
                console.log(response);
                setTimeout(function(){
                    location.reload();
                },1000);
            }else{
                console.log("Error, por favor intente de nuevo");
            }
        },
        error:function(xhr,status,error){
            console.log("Error de conexion");
            console.error(error);
        }
    });
}