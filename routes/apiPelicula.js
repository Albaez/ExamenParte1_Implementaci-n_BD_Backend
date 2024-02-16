import express from "express";
import {
    deletepelicula,
    getpelicula,
    postpelicula,
    putpelicula
} from "../controllers/peliculaController.js";
const pelicula = express();


pelicula.get('', getpelicula );

pelicula.post('', postpelicula)

pelicula.put( '/:id', putpelicula )

pelicula.delete('/:id', deletepelicula)

export { pelicula };

