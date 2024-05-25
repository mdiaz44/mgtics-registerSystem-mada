<?php
//CORS
// Permitir solicitudes desde cualquier origen
header("Access-Control-Allow-Origin: *");
// Permitir métodos HTTP GET, POST, y OPTIONS
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
// Permitir los encabezados Content-Type y Authorization en las solicitudes CORS
header('Content-Type: application/json');
header("Access-Control-Allow-Headers: Content-Type, Authorization");

include("connection.php");

if($_SERVER["REQUEST_METHOD"] == "GET"){
    //verificar la conexion de la base de datos
    if($conn->connect_error){
        die("Error de conexion de la base de datos" . $conn->connect_error);
    }

    $query = "SELECT id,name,age,gender,mail,faculty,pass,classes FROM estudiantes";

    $stmt=$conn->prepare($query);
    $stmt->execute();
    $result=$stmt->get_result();

    if($result->num_rows >0){
        $data = array();
        while($row = $result->fetch_assoc()){
            $data[] = array(
                "id"=>$row["id"],
                "name"=>$row["name"],
                "age"=>$row["age"],
                "gender"=>$row["gender"],
                "mail"=>$row["mail"],
                "faculty"=>$row["faculty"],
                "pass"=>$row["pass"],
                "classes"=>$row["classes"]
            );
        }
        echo json_encode(array("success"=>true,"data"=>$data));
    }else{
        echo json_encode(array("success"=>false,"error"=>"No se encontraron los datos"));
    }

    $stmt->close();
}else{
    echo json_encode(array("success" => false,"error" => "Solicitud no valida"));
}

$conn->close();
?>
