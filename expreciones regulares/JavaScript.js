function Validar(){

    var ExpreRegular = document.getElementById("expresionRegular").value;
    var Palabra = document.getElementById("Palabra").value;
    var message;

    if(!Palabra.search(ExpreRegular)){
        message = document.getElementById('message');
        message.innerHTML = 'palabra valida';
    }
    else{
        message = document.getElementById('message');
        message.innerHTML = 'palabra invalida';
    }
}
