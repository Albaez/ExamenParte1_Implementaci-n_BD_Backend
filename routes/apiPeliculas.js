import express from "express";
import {
    deleteOscars,
    getOscars,
    postOscars,
    putOscars
} from "../controllers/oscarsController.js";
const oscars = express();

oscars.get('', getOscars );

oscars.post('', postOscars)

oscars.put( '/:id', putOscars )

oscars.delete('/:id', deleteOscars)

export { oscars };
