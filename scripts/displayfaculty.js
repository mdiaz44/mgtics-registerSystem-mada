function displayCards(universidad){
    let card="";
    //for(let i=0;i<students.length;i++){
    //let student=students[i];
        card+=`
        <div id="${universidad.id}" class='universidad'>
        <h4>Facultad: ${universidad.faculty}</h4>
        <p>Campus: ${universidad.campus}</p>
        <button>Eliminar</button>
        </div>
        `;
    document.getElementById("universityList").innerHTML+=card;
}

function searchToDataBase(){
    $.ajax({
        url:"./app/get_faculty.php",
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