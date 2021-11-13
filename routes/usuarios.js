const { Router } = require('express');
const { usuariosGet, 
        usuariosPost, 
        usuariosPut, 
        usuariosPatch, 
        usuariosDelete 
} = require('../controllers/usuarios');

const router = Router();


router.get('/', usuariosGet );
router.post('/', usuariosPost );
router.put('/:id', usuariosPut );
router.delete('/', usuariosPatch );
router.patch('/', usuariosDelete );

module.exports = router;