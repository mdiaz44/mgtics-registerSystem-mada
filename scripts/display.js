function displayCards(student){
    let card="";
    //for(let i=0;i<students.length;i++){
    //let student=students[i];
        card+=`
        <div id="${student.id}" class='student'>
        <h4>Nombre: ${student.name}</h4>
        <p>Edad: ${student.age}</p>
        <p>Genero: ${student.gender}</p>
        <p>Email: ${student.mail}</p>
        <p>Facultad: ${student.faculty}</p>
        <p>Contraseña: ${student.pass}</p>
        <p>Materia: ${student.classes}</p>
        <button>Eliminar</button>
        </div>
        `;
    document.getElementById("studentList").innerHTML+=card;
}

function searchToDataBase(){
    $.ajax({
        url:"./app/get_students.php",
        type:"GET",
        dataType:"json",
        success:function(response){
            console.log(response);
            if(response.success){
                console.log(response.data);
                response.data.forEach(displayCards)
            }else{
                console.log("Error en la respuesta del servidor")
            }
        },
        error:function(xhr, status, error){
            console.log(error);
        }
    })
}

function init(){
    searchToDataBase();
}

window.onload=init;
