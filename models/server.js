
const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middlewares. Son funciones que añaden otra funcionalidad al webServer
        this.middlewares();

        //Rutas de aplicacion
        this.routes();
    }

    middlewares(){

        this.app.use( cors());

        //Lectura y parseo del body
        this.app.use(express.json());

        //Es la palabra clave para decir que es un muddlewares
        //Directorio publico
        this.app.use(express.static('public'))
    }

    routes() {

       this.app.use(this.usuariosPath, require("../routes/usuarios"));

    }

    listen(){

        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

}


module.exports = Server;