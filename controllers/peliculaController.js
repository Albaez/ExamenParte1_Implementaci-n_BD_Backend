import { db } from '../db/conn.js';

const putpelicula = async (req, res)=>{

    try{

        const {id} = req.params;
        const {caption} = req.body;
        const params =[caption, id];

        const sql = ` update tbl_publicacion 
                    set caption = $1
                    where id = $2 returning id, 'Actualizacion Exitosa' mensaje `;
    
        const result = await db.query(sql , params);
        
        res.json(result);

    }catch(err){
        res.status(500).json({mensaje: err.message})
    }

}

const postpelicula = async (req, res) => {
    try {
        const {
            caption,
            nombre_usuario,
            pelicula_nombre,
            tipo_pelicula
        } = req.body;

        const {
            buffer,
            mimetype,
            originalname
        } = req.file;

        const params = [buffer, mimetype, originalname, caption, nombre_usuario, pelicula_nombre, tipo_pelicula];

        const sql = `INSERT INTO tbl_pelicula 
                        (imagen, mime_type, nombre_archivo, caption, nombre_usuario, pelicula_nombre, tipo_pelicula)
                        VALUES 
                        ($1, $2, $3, $4, $5, $6, $7)
                      RETURNING id, nombre_usuario, 'Insercion Exitosa' mensaje`;

        const result = await db.query(sql, params);

        res.json(result);
    } catch (err) {
        res.status(500).json({ mensaje: err.message });
    }
}



const deletepelicula = async (req, res) => {
    try {
      const params = [req.params.id];
  
      const sql = `DELETE FROM tbl_pelicula 
                   WHERE id = $1 
                   RETURNING id, 'Pelicula Eliminada' mensaje`;
  
      const result = await db.query(sql, params);
  
      res.json(result);
    } catch (err) {
      res.status(500).json({ mensaje: err.message });
    }
  }


  const getpelicula = async (req, res) => {
    try {
        const sql = `SELECT id, caption, pelicula_nombre, tipo_pelicula, nombre_usuario, mime_type, encode(imagen, 'base64') imagen  
                    FROM tbl_pelicula 
                    ORDER BY fecha_post DESC`;

        const result = await db.query(sql);

        if (result.length > 0) {
            res.json(result);
        } else {
            res.status(404).json({ mensaje: "Sin datos que mostrar" });
        }
    } catch (err) {
        res.status(500).json({ mensaje: "Error en busqueda de post" });
    }
}
 

export { deletepelicula, getpelicula, postpelicula, putpelicula };
