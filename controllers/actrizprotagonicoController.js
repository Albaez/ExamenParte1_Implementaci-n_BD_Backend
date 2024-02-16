import { db } from '../db/conn.js';

const getActrizprotagonico = async (req,res)=>{

    const sql = `select * from actricesprotagonistas order by id`;
    const result = await db.query(sql);
    res.json(result)

}

const postActrizprotagonico = async (req, res)=>{


    const {nombre_actrizprotagonista} = req.body;

    const params =  [nombre_actrizprotagonista];

    const sql = `insert into actricesprotagonistas
                (nombre_actrizprotagonista)
                values 
                ($1, $2) returning * `

    const result = await db.query(sql , params);

    res.json(result);
    
}

const putActrizprotagonico = async (req, res)=>{

    const {nombre_actrizprotagonista } = req.body
    const {id} =req.params

    const params = [
        nombre_actrizprotagonista, 
        id
    ]

    const sql = `update actricesprotagonistas
                  set
                    nombre_actrizprotagonista = $1, 
                where id = $2 returning *`

    const result = await db.query(sql, params)

    res.json(result);

}

const deleteActrizprotagonico = async (req, res)=>{

    const params = [req.params.id];

    const sql = `delete from actricesprotagonistas where id = $1 returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}

export { deleteActrizprotagonico, getActrizprotagonico, postActrizprotagonico, putActrizprotagonico };
