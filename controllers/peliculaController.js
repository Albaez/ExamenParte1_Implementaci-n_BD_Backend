import { db } from '../db/conn.js';

const getpelicula = async (req,res)=>{

    const sql = `select * from tbl_pelicula order by id`;
    const result = await db.query(sql);
    res.json(result)

}

const postpelicula = async (req, res)=>{


    const { pelicula_nombre , tipo_pelicula} = req.body;

    const params =  [pelicula_nombre , tipo_pelicula];

    const sql = `insert into tbl_pelicula 
                (pelicula_nombre , tipo_pelicula )
                values 
                ($1, $2) returning * `

    const result = await db.query(sql , params);

    res.json(result);
    
}

const putpelicula = async (req, res)=>{

    const { pelicula_nombre , tipo_pelicula } = req.body
    const {id} =req.params

    const params = [
        pelicula_nombre, 
        tipo_pelicula, 
        id
    ]

    const sql = `update tbl_pelicula 
                  set
                   pelicula_nombre = $1, 
                   tipo_pelicula = $2
                where id = $3 returning *`

    const result = await db.query(sql, params)

    res.json(result);

}

const deletepelicula = async (req, res)=>{

    const params = [req.params.id];

    const sql = `delete from tbl_pelicula where id = $1 returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}

export { deletepelicula, getpelicula, postpelicula, putpelicula };
