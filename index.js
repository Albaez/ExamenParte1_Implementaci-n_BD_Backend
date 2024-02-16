import express from 'express';


import { Actorprotagonico } from './routes/apiActorprotagonico.js';
import { Actrizprotagonico } from './routes/apiActrizprotagonico.js';
import { director } from './routes/apiDirector.js';
import { pelicula } from './routes/apiPelicula.js';


const app = express();


app.use(express.json());


const port = 5000;

app.use('/api/pelicula', pelicula);
app.use('/api/director', director);
app.use('/api/Actrizprotagonico', Actrizprotagonico);
app.use('/api/Actorprotagonico', Actorprotagonico);

app.listen(port, ()=>{

    console.log(`Escuchando en el puerto ${port} `);
});