import { db } from "../db/conn.js";

const putPublicacion = async (req, res)=>{

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

const postPublicacion = async (req, res) => {

    try {

        const {
            caption,
            nombre_usuario
        } = req.body;

        const {
            buffer,
            mimetype,
            originalname
        } = req.file;

        const params = [buffer, mimetype, originalname, caption, nombre_usuario];

        const sql = ` insert into tbl_publicacion 
                        (imagen, mime_type, nombre_archivo, caption, nombre_usuario  )
                        values 
                        ($1, $2, $3, $4, $5)
                      returning  id, nombre_usuario, 'Insercion Exitosa' mensaje `;

        const result = await (db.query(sql, params));


        res.json(result)

    } catch (err) {
        res.status(500).json({ mensaje: err.message });
    }



}

const deletePublicacion = async (req, res) => {
    try {
      const params = [req.params.id];
  
      const sql = `DELETE FROM tbl_publicacion 
                   WHERE id = $1 
                   RETURNING id, 'Publicación Borrada' mensaje`;
  
      const result = await db.query(sql, params);
  
      res.json(result);
    } catch (err) {
      res.status(500).json({ mensaje: err.message });
    }
  }

const getPublicaciones = async (req, res) => {

    try {

        const sql = `select id, 
                            caption, 
                            nombre_usuario,
                            mime_type, 
                            encode(imagen, 'base64') imagen  
                    from tbl_publicacion 
                    order by fecha_post desc`

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


export {
    deletePublicacion, getPublicaciones, postPublicacion, putPublicacion
};
