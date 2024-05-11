function displayCards(){
    let card="";
    for(let i=0;i<students.length;i++){
    let student=students[i];
        card+=`
        <div class='student'>
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
    }
    document.getElementById("studentList").innerHTML=card;
}

