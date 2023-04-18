var formName = document.getElementById("formName");
var formEmail = document.getElementById("formEmail");
var formMensaje = document.getElementById("formMensaje");
var mensajeAlUsuario = "";

// Recoger los datos ingresados
function validar(){
    var nombre = formName.value;
    var correo = formEmail.value;
    var mensaje = formMensaje.value;

    // ¿Hay alguna casilla vacia?
    if((nombre=="") || (correo=="") || (mensaje=="")){
        mensajeAlUsuario = "Debe completar:";
        if (nombre==""){
            mensajeAlUsuario += "\n -Nombre";
        }
        if (correo==""){
            mensajeAlUsuario += "\n -Correo";
        }
        if (mensaje==""){
            mensajeAlUsuario += "\n -Mensaje";
        }
    }else{
        mensajeAlUsuario = "Gracias por contactarnos!!!";
    }
    return mensajeAlUsuario;
}

function enviar(){
    alert(validar());
}