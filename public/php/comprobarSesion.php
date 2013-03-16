<?PHP
session_start();
//var_dump($_SESSION);

if( $_SESSION['logueado']!= true ){
	header("Location: index.php?avisar=Debes ingresar sesion");
}

?>