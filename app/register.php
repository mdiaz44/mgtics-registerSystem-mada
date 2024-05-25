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

    if(isset($_POST["name"],$_POST["age"],$_POST["gender"],$_POST["mail"],$_POST["faculty"],$_POST["pass"],$_POST["classes"])){
        $nombre = $_POST["name"];
        $edad = $_POST["age"];
        $genero = $_POST["gender"];
        $correo = $_POST["mail"];
        $facultad = $_POST["faculty"];
        $contra = $_POST["pass"];
        $materia = $_POST["classes"];


        $stmt_insert_usuarios =$conn->prepare("INSERT INTO estudiantes (name,age,gender,mail,faculty,pass,classes) VALUES (?,?,?,?,?,?,?)");
        $stmt_insert_usuarios->bind_param("sisssss",$nombre,$edad,$genero,$correo,$facultad,$contra,$materia);
        $stmt_insert_usuarios->execute();

        echo json_encode(array("success" =>true));
        $stmt_insert_usuarios->close();
    }

    $conn->close();
    exit();

}

?>