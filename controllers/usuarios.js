const { response, request } = require('express');

const usuariosGet = ( req = request, res = response ) => {

  const { q, nombre = 'No name', apiKey, page, limit } = req.query;

  res.json({
    msg: 'get API - Controller',
    q,
    nombre,
    apiKey,
    page,
    limit
  });

};

const usuariosPost = ( req = request, res = response ) => {

  const { nombre, edad } = req.body;
  
  res.json({
    msg: 'Post API - Controller',
    nombre,
    edad,
  });

};

const usuariosPut = ( req = request, res = response ) => {

  const { id } = req.params;
  res.json({
    msg: 'Put API - Controller',
    id
  });

};

const usuariosPatch = ( req = request, res = response ) => {

  res.json({
    msg: 'Patch API - Controller'
  });

};

const usuariosDelete = ( req = request, res = response ) => {

  res.json({
    msg: 'Delete API - Controller'
  });

};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete
}