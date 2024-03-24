import Express from "express";
import multer from "multer";
import {
    getAuth,
    getUsuario,
    postUsuario
} from "../controllers/controllerUser.js";

const usuario = Express();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


usuario.post('', upload.single('foto_perfil'), postUsuario);

usuario.get('/:nombre_usuario', getUsuario);

usuario.get('/auth/:nombre_usuario/:pass', getAuth);

export {
    usuario
};











