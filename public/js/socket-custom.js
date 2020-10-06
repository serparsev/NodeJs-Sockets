var socket = io();

socket.on('connect', function() {

    console.log('Conectado al servidor');

});

//Escuchar informacion
socket.on('disconnect', function() {

    console.log('Perdimos la conexion con el servidor');

});

//Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Sergio',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Se disparo el callback: ', resp);

});


//Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
})