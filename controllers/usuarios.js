const { Response, response } = require('express');

const usuariosGet = (req, res = response) => {

    const {q,nombre = 'no name',appikey} = req.query;
    
    console.log("Heyy");
    res.json({
        "msg": "get API - controlador",
        q,
        nombre,
        appikey
    });
}

const usuariosPut = (req, res) => {

    const id = req.params.id;

    res.json({
        
        "msg": "put API - controlador",
        id,
    });
}

const usuariosPost = (req, res) => {

    const body = req.body;

    res.status(201).json({
        
        "msg": "post API - controlador",
        body
    });
}

const usuariosPatch = (req, res) => {
    res.json({
        
        "msg": "patch API - controlador"
    });
}

const usuariosDelete = (req, res) => {
    res.json({
        
        "msg": "delete API - controlador"
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosPatch,
    usuariosDelete
}