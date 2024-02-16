import { db } from '../db/conn.js';

const getActorprotagonico = async (req,res)=>{

    const sql = `select * from actoresprotagonistas order by id`;
    const result = await db.query(sql);
    res.json(result)

}

const postActorprotagonico = async (req, res)=>{


    const {nombre_actorprotagonista} = req.body;

    const params =  [nombre_actorprotagonista];

    const sql = `insert into actoresprotagonistas
                (nombre_actorprotagonista)
                values 
                ($1, $2) returning * `

    const result = await db.query(sql , params);

    res.json(result);
    
}

const putActorprotagonico = async (req, res)=>{

    const {nombre_actorprotagonista } = req.body
    const {id} =req.params

    const params = [
        nombre_actorprotagonista, 
        id
    ]

    const sql = `update actoresprotagonistas
                  set
                    nombre_actorprotagonista = $1, 
                where id = $2 returning *`

    const result = await db.query(sql, params)

    res.json(result);

}

const deleteActorprotagonico = async (req, res)=>{

    const params = [req.params.id];

    const sql = `delete from actoresprotagonistas where id = $1 returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}

export { deleteActorprotagonico, getActorprotagonico, postActorprotagonico, putActorprotagonico };
