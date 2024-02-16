import express from "express";
import {
    deleteActrizprotagonico,
    getActrizprotagonico,
    postActrizprotagonico,
    putActrizprotagonico
} from "../controllers/actrizprotagonicoController.js";
const Actrizprotagonico = express();


Actrizprotagonico.get('', getActrizprotagonico );

Actrizprotagonico.post('', postActrizprotagonico)

Actrizprotagonico.put( '/:id', putActrizprotagonico )

Actrizprotagonico.delete('/:id', deleteActrizprotagonico)

export { Actrizprotagonico };

