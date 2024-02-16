import { db } from '../db/conn.js';

const getdirector = async (req,res)=>{

    const sql = `select * from directores order by id`;
    const result = await db.query(sql);
    res.json(result)

}

const postdirector = async (req, res)=>{


    const {nombre_director} = req.body;

    const params =  [nombre_director];

    const sql = `insert into directores
                (nombre_director)
                values 
                ($1) returning * `

    const result = await db.query(sql , params);

    res.json(result);
    
}

const putdirector = async (req, res)=>{

    const {nombre_director } = req.body
    const {id} =req.params

    const params = [
        nombre_director, 
        id
    ]

    const sql = `update directores
                set
                nombre_director = $1, 
                where id = $2 returning *`

    const result = await db.query(sql, params)

    res.json(result);

}

const deletedirector = async (req, res)=>{

    const params = [req.params.id];

    const sql = `delete from directores where id = $1 returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}

export { deletedirector, getdirector, postdirector, putdirector };
