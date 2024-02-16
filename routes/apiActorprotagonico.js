import express from "express";
import {
    deleteActorprotagonico,
    getActorprotagonico,
    postActorprotagonico,
    putActorprotagonico
} from "../controllers/actorprotagonicoController.js";
const Actorprotagonico = express();


Actorprotagonico.get('', getActorprotagonico );

Actorprotagonico.post('', postActorprotagonico)

Actorprotagonico.put( '/:id', putActorprotagonico )

Actorprotagonico.delete('/:id', deleteActorprotagonico)

export { Actorprotagonico };
