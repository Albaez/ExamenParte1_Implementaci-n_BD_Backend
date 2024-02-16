import express from 'express';
import { pelicula } from './routes/apiPelicula.js';
const app = express();


app.use(express.json());

const port = 5000;

app.use('/api/pelicula', pelicula);

app.listen(port, ()=>{

    console.log(`Escuchando en el puerto ${port} `);
});