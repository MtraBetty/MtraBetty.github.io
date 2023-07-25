function saludar(){
    alert("¡Hola! Que gusto verte")
}

function saludo_personalizado(){
    var nombre;
    nombre=prompt("¿Cuál es tu nombre?")
    alert("¡Hola! "+nombre+" ¡Que gusto verte!")

}

function adivinanza1(){
    var respuesta;
    respuesta=prompt("Oro no es plata no es, ¿qué es?")

    /*Si el usuario contestó corectamente */    
    if(respuesta=="platano"){
        alert("¡Felicidades! La respuesta es correcta")
    }
    /*si no es correcto */
    else{
        alert("¡¡¡Error!!!")
    }
}