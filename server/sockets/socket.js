const { io } = require('../server')

io.on('connection', client => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Binvenido a esta aplicacion'
    })



    //Escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data)

        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'Todo salio bien'
        //     });

        // } else {
        //     callback({
        //         resp: 'Todo salio mal'
        //     });
        // }









    });



    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    })
});