<?php
session_start();
session_destroy();
header("Location: opciones.php?avisar=Ha cerrado sesion correctamente");
?>