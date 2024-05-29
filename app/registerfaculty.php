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

if($_SERVER["REQUEST_METHOD"] == "POST"){

    if(isset($_POST["faculty"],$_POST["campus"])){
        $facultad = $_POST["faculty"];
        $campus = $_POST["campus"];


        $stmt_insert_usuarios =$conn->prepare("INSERT INTO facultades (faculty,campus) VALUES (?,?)");
        $stmt_insert_usuarios->bind_param("ss",$facultad,$campus);
        $stmt_insert_usuarios->execute();

        echo json_encode(array("success" =>true));
        $stmt_insert_usuarios->close();
    }

    $conn->close();
    exit();

}

?>