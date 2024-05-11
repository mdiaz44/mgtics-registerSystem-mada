// Aqui empieza la tabla

function displayStudentsAsTable() {
    let table = `
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Edad</th>
                    <th>Género</th>
                    <th>Email</th>
                    <th>Facultad</th>
                    <th>Contraseña</th>
                    <th>Materia</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    for (let i = 0; i < students.length; i++) {
        let student = students[i];
        table += `
            <tr>
                <td>${student.name}</td>
                <td>${student.age}</td>
                <td>${student.gender}</td>
                <td>${student.mail}</td>
                <td>${student.faculty}</td>
                <td>${student.pass}</td>
                <td>${student.classes}</td>
                <td><button onclick="deleteStudent(${i})">Eliminar</button></td>
            </tr>
        `;
    }
    
    table += `
            </tbody>
        </table>
    `;
    
    document.getElementById("studentTable").innerHTML = table;
}