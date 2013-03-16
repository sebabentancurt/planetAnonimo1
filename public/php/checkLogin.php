<?PHP

include('/phpFunciones/conexionMysql.php');

$usuario = $_REQUEST['usuario'];
$pass = $_REQUEST['password'];
//Comprobar existencia
$sql="select * from usuario where activo=1 and usuario='$usuario' and password='$pass'";
$d =mysql_query($sql);


if(mysql_num_rows($d)>0 ){

$fila = mysql_fetch_array($d);
session_start();
$_SESSION['login'] = $usuario;
$_SESSION['password'] = $pass;
$_SESSION['nombre'] = $fila['nombre'];
$_SESSION['idU'] = $fila['idUsuario'];
$_SESSION['logueado']= true;
header("Location: opcionesLogeado.php ");

}else{
header("Location: opciones.php?avisar=Su contraseña y/o usuario no son correctas");
}
?>