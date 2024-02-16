import express from "express";
import {
    deletedirector,
    getdirector,
    postdirector,
    putdirector
} from "../controllers/directorController.js";
const director = express();


director.get('', getdirector );

director.post('', postdirector)

director.put( '/:id', putdirector )

director.delete('/:id', deletedirector)

export { director };
