import express from "express";
import multer from "multer";
import {
    deletepelicula,
    getpelicula,
    postpelicula,
    putpelicula
} from "../controllers/peliculaController.js";
const pelicula = express();
const storage = multer.memoryStorage();
const upload = multer({storage : storage});

pelicula.post ('', upload.single('imagen'), postpelicula )

pelicula.get ('' , getpelicula);

pelicula.delete ('/:id' , deletepelicula);

pelicula.put ('/:id' , putpelicula);

export { pelicula };

