import cors from 'cors';
import Express from 'express';
import { Actorprotagonico } from './routes/apiActorprotagonico.js';
import { Actorreparto } from './routes/apiActorreparto.js';
import { Actrizprotagonico } from './routes/apiActrizprotagonico.js';
import { director } from './routes/apiDirector.js';
import { pelicula } from './routes/apiPelicula.js';
import { publicacion } from './routes/routePublicacion.js';
import { usuario } from './routes/routeUser.js';
const app = Express();



app.use(Express.json());
const corsOptions = {
    origin : 'http://localhost:5173', 
    credentials : true,
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}
app.use(cors(corsOptions));
// Rutas
app.use('/api/usuario', usuario);
app.use('/api/publicacion', publicacion);
app.use('/api/pelicula', pelicula);
app.use('/api/director', director);
app.use('/api/Actrizprotagonico', Actrizprotagonico);
app.use('/api/Actorprotagonico', Actorprotagonico);
app.use('/api/Actorreparto', Actorreparto);


//Puerto
app.listen(4000, ()=>{

    console.log("Escuchando en el puerto 4000");

});