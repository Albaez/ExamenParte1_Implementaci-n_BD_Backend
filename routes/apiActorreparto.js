import express from "express";
import {
    deleteActorreparto,
    getActorreparto,
    postActorreparto,
    putActorreparto
} from "../controllers/actorrepartoController.js";
const Actorreparto = express();


Actorreparto.get('', getActorreparto );

Actorreparto.post('', postActorreparto)

Actorreparto.put( '/:id', putActorreparto )

Actorreparto.delete('/:id', deleteActorreparto)

export { Actorreparto };
