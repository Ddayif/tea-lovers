function validar() {

	var nombre = document.getElementById("name").value;
	var correo = document.getElementById("input-email").value;
	var direccion = document.getElementById("direction").value;
	var seleccion = document.getElementsByTagName("select");

	function validarNombre(){
		
   if(nombre == "" || nombre.length == 0){ // valida que el campo nombre no este vacio			
   	alert("Debes ingresar tu nombre");
   }	
}
validarNombre();

function email(){
	if(correo == "" || correo.length == 0 || /\S+@\S+\.\S+/.test(correo) == false){
		alert("Debes ingresar tu correo");
	}
}
email();

function dir(){
	if(direccion == "" || direccion.length == 0){
		alert("Debes ingresar tu dirección");
	}
}
dir();

function opciones(){
	for(var i = 0; i < seleccion.length; i++){
		// valida que el usuario elija una opcion 
		if(seleccion[i].value == "0"){
			alert("Debes elegir un Té");
		}
	}
}
opciones();

function todosLosCampos(){
	if(nombre != "" || nombre != nombre.length && correo != "" || correo.length != 0 || /\S+@\S+\.\S+/.test(correo) != false && 
		direccion != "" || direccion.length != 0){
		alert("Muchas gracias por suscribirte");
  	}
}
todosLosCampos();
}