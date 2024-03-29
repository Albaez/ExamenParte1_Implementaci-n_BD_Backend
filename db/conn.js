import dotenv from 'dotenv';
import pg from 'pg-promise';
const pgp = pg();
dotenv.config();


const user = process.env._user;
const pass = process.env._pass;
const host = process.env._host;
const database = process.env._db;

const conectionString = `postgresql://${user}:${pass}@${host}:5432/${database}`;
const db = pgp(conectionString);

db.connect()
    .then( ()=>{
        console.log("Conexion Exitosa");
    })
    .catch( (err)=>{
        console.log(`Error de Conexión ${err}`);
    })

export { db };
