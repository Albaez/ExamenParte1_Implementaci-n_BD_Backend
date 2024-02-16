-- Active: 1707881043212@@localhost@5432@api_oscars@public
CREATE TABLE tbl_pelicula(  
    pelicula_id  SERIAL NOT NULL PRIMARY KEY,
    pelicula_nombre VARCHAR(255),
    tipo_pelicula VARCHAR(100) CHECK (tipo_pelicula IN ('Pelicula Principales', 'Pelicula Internacional', 'Pelicula Animacion', 'Pelicula Documental')),
    creacion TIMESTAMP DEFAULT current_timestamp
);


select * from tbl_pelicula

CREATE TABLE Directores (
    id_director SERIAL NOT NULL PRIMARY KEY,
    nombre_director VARCHAR(255) NOT NULL,
    creacion TIMESTAMP DEFAULT current_timestamp
);




CREATE TABLE ActricesProtagonistas (
    id_actriz_protagonista SERIAL NOT NULL PRIMARY KEY,
    nombre_actrizprotagonista VARCHAR(255) NOT NULL,
    creacion TIMESTAMP DEFAULT current_timestamp
);


CREATE TABLE ActoresProtagonistas (
    id_actor_protagonista SERIAL NOT NULL PRIMARY KEY,
    nombre_actorprotagonista VARCHAR(255) NOT NULL,
    creacion TIMESTAMP DEFAULT current_timestamp
);

CREATE TABLE ActricesReparto (
    id_actriz_reparto SERIAL NOT NULL PRIMARY KEY,
    nombre_actrizreparto VARCHAR(255) NOT NULL,
    creacion TIMESTAMP DEFAULT current_timestamp
);


CREATE TABLE ActoresReparto (
    id_actor_reparto SERIAL NOT NULL PRIMARY KEY,
    nombre_actorreparto VARCHAR(255) NOT NULL,
    creacion TIMESTAMP DEFAULT current_timestamp
);


CREATE TABLE PeliculasInternacionales (
    id_pelicula_internacional SERIAL NOT NULL PRIMARY KEY,
    nombre_pinternacional VARCHAR(255) NOT NULL,
    creacion TIMESTAMP DEFAULT current_timestamp
);


CREATE TABLE PeliculasAnimacion (
    id_pelicula_animacion SERIAL NOT NULL PRIMARY KEY,
    nombre_panimacion VARCHAR(255) NOT NULL,
    creacion TIMESTAMP DEFAULT current_timestamp
);


CREATE TABLE PeliculasDocumental (
    id_pelicula_documental SERIAL NOT NULL PRIMARY KEY,
    nombre_pdocumental VARCHAR(255) NOT NULL,
    creacion TIMESTAMP DEFAULT current_timestamp
);

