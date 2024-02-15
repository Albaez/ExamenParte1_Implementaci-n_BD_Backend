import express from 'express';
import { oscars } from './routes/oscars.js';
const app = express();



app.use(express.json());

const port = 5000;

app.use('/api/oscars', oscars);
app.use('/api/categorias', categorias);

app.listen(port, ()=>{

    console.log(`Escuchando en el puerto ${port} `);
});