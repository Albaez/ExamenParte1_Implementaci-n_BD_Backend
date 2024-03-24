import { db } from "../db/conn.js";

const getAuth = async (req, res)=>{

  const {nombre_usuario , pass} = req.params;

  const sql = ` select nombre_usuario from tbl_usuarios 
                  where nombre_usuario = $1 
                  and contrasena = $2  `;

  const result = await db.query(sql, [nombre_usuario, pass]);

  if (result.length === 0 ){
      res.status(404).json({mensaje: "Usuario y Contraseña no coinciden"})
  }else {
      res.json(result);
  }
}



const postUsuario = async (req, res) => {
  try {
    const { nombre_usuario, correo_electronico, contrasena } = req.body;

    const { buffer, mime_type, originalname } = req.file;

    const params = [buffer, mime_type, originalname, nombre_usuario, correo_electronico, contrasena];

    const sql = `insert into tbl_usuarios
                  (foto_perfil, mime_type, nombre_archivo, nombre_usuario, correo_electronico,contrasena)
                  values
                  ($1,$2,$3,$4,$5,$6) returning * , 'Insercion Exitosa' mensaje `;

    const result = await db.query(sql, params);
    res.json(result);
  } catch (err) {
    res.status(500).json({ mensaje: err.message });
  }
};




const getUsuario = async (req, res) => {
  try {
    const nombre_usuario = req.params.nombre_usuario;

    const sql = `select nombre_usuario,
                  mime_type,
                  encode(foto_perfil, 'base64') foto_perfil,
                   correo_electronico, 
                   nombre, 
                   apellido
                 FROM tbl_usuarios 
                 WHERE nombre_usuario = $1`;

    const result = await db.query(sql, [nombre_usuario]);

    if (result.length === 0) {
      res.status(404).json({ mensaje: "No hay registros" });
    } else {
      res.status(200).json(result);
    }
  } catch (err) {
    res.status(500).json({ mensaje: err.message });
  }
};

export { getAuth, getUsuario, postUsuario };

