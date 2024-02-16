import { db } from "../db/conn.js";

const getActorreparto = async (req, res) => {
  const sql = `select * from actoresreparto order by id`;
  const result = await db.query(sql);
  res.json(result);
};

const postActorreparto = async (req, res) => {
  const { nombre_actorreparto } = req.body;

  const params = [nombre_actorreparto];

  const sql = `insert into actoresreparto
                (nombre_actorreparto)
                values 
                ($1) returning * `;

  const result = await db.query(sql, params);

  res.json(result);
};

const putActorreparto = async (req, res) => {
  const { nombre_actorreparto } = req.body;
  const { id } = req.params;

  const params = [nombre_actorreparto, id];

  const sql = `update actoresreparto
                    set
                    nombre_actorreparto = $1, 
                where id = $2 returning *`;

  const result = await db.query(sql, params);

  res.json(result);
};

const deleteActorreparto = async (req, res) => {
  const params = [req.params.id];

  const sql = `delete from actoresreparto where id = $1 returning *`;

  const result = await db.query(sql, params);

  res.json(result);
};

export {
    deleteActorreparto,
    getActorreparto,
    postActorreparto,
    putActorreparto
};

