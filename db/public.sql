
CREATE TABLE tbl_pelicula(  
    id  SERIAL NOT NULL PRIMARY KEY,
    pelicula_nombre VARCHAR(255),
    tipo_pelicula VARCHAR(100) CHECK (tipo_pelicula IN ('Pelicula Principales', 'Pelicula Internacional', 'Pelicula Animacion', 'Pelicula Documental', 'Drama', 'Biografia')),
    creacion TIMESTAMP DEFAULT current_timestamp
);
/* 2024-02-16 09:53:28 [107 ms] */ 
CREATE TABLE Directores (
    id SERIAL  PRIMARY KEY,
    nombre_director VARCHAR(255) NOT NULL,
    creacion TIMESTAMP DEFAULT current_timestamp
);
/* 2024-02-16 09:53:37 [130 ms] */ 
CREATE TABLE ActricesProtagonistas (
    id SERIAL PRIMARY KEY,
    nombre_actrizprotagonista VARCHAR(255) NOT NULL,
    creacion TIMESTAMP DEFAULT current_timestamp
);
/* 2024-02-16 09:53:43 [83 ms] */ 
CREATE TABLE ActoresProtagonistas (
    id SERIAL PRIMARY KEY,
    nombre_actorprotagonista VARCHAR(255) NOT NULL,
    creacion TIMESTAMP DEFAULT current_timestamp
);
/* 2024-02-16 09:53:49 [75 ms] */ 
CREATE TABLE ActricesReparto (
    id SERIAL  PRIMARY KEY,
    nombre_actrizreparto VARCHAR(255) NOT NULL,
    creacion TIMESTAMP DEFAULT current_timestamp
);
/* 2024-02-16 09:53:54 [33 ms] */ 
CREATE TABLE ActoresReparto (
    id SERIAL  PRIMARY KEY,
    nombre_actorreparto VARCHAR(255) NOT NULL,
    creacion TIMESTAMP DEFAULT current_timestamp
);
/* 2024-02-16 09:54:02 [49 ms] */ 
CREATE TABLE PeliculasInternacionales (
    id SERIAL PRIMARY KEY,
    nombre_pinternacional VARCHAR(255) NOT NULL,
    creacion TIMESTAMP DEFAULT current_timestamp
);
/* 2024-02-16 09:54:06 [85 ms] */ 
CREATE TABLE PeliculasAnimacion (
    id SERIAL PRIMARY KEY,
    nombre_panimacion VARCHAR(255) NOT NULL,
    creacion TIMESTAMP DEFAULT current_timestamp
);
/* 2024-02-16 09:54:11 [48 ms] */ 
CREATE TABLE PeliculasDocumental (
    id SERIAL PRIMARY KEY,
    nombre_pdocumental VARCHAR(255) NOT NULL,
    creacion TIMESTAMP DEFAULT current_timestamp
);
/* 2024-02-16 09:58:01 [179 ms] */ 
INSERT INTO tbl_pelicula (pelicula_nombre, tipo_pelicula)
VALUES
    ('American Fiction', 'Pelicula Principales'),
    ('Anatomía de una caída', 'Pelicula Principales'),
    ('Barbie', 'Pelicula Principales'),
    ('Los que se quedan', 'Pelicula Principales'),
    ('Los asesinos de la luna', 'Pelicula Principales'),
    ('Maestro', 'Pelicula Principales'),
    ('Oppenheimer', 'Pelicula Principales'),
    ('Vidas pasadas', 'Pelicula Principales'),
    ('Pobres criaturas', 'Pelicula Principales'),
    ('La zona de interés', 'Pelicula Principales'),
    ('La zona de interes','Pelicula Internacional'),
    ('Perfect Days', 'Pelicula Internacional'),
    ('La sociedad de la nieve', 'Pelicula Internacional'),
    ('Yo Capitan','Pelicula Internacional'),
    ('Sala de profesores', 'Pelicula Internacional'),
    ('El chico y la garza', 'Pelicula Animacion'),
    ('Elemental', 'Pelicula Animacion'),
    ('Nimona', 'Pelicula Animacion'),
    ('Robot Dreams', 'Pelicula Animacion'),
    ('Spider-Man: Cruzando el Multiverso', 'Pelicula Animacion'),
    ('The People’s President', 'Pelicula Documental'),
    ('La memoria infinita', 'Pelicula Documental'),
    ('Four Daughters ', 'Pelicula Documental'),
    ('To Kill a Tiger', 'Pelicula Documental'),
    ('20 días en Mariúpol', 'Pelicula Documental'),
    ('Nyad', 'Biografia'),
    ('Rustin', 'Drama'),
    ('El color purpura', 'Drama');
/* 2024-02-16 09:58:18 [5 ms] */ 
SELECT * FROM tbl_pelicula LIMIT 100;
/* 2024-02-16 10:01:04 [5 ms] */ 
INSERT INTO ActricesProtagonistas (nombre_actrizprotagonista )
VALUES
('Lily Gladstone, por Los asesinos de la luna'),
('Carey Mulligan, por Maestro'),
('Sandra Hüller, por Anatomía de una caída'),
('Annette Bening, por Nyad'),
('Emma Stone, por Pobres criaturas');
/* 2024-02-16 10:01:07 [12 ms] */ 
SELECT * from actricesprotagonistas LIMIT 100;
/* 2024-02-16 10:01:50 [11 ms] */ 
INSERT INTO actoresprotagonistas (nombre_actorprotagonista)
VALUES
('Bradley Cooper, por Maestro'),
('Colman Domingo, por Rustin'),
('Paul Giamatti, por Los que se quedan'),
('Cillian Murphy, por Oppenheimer'),
('Jeffrey Wright, por American Fiction');
/* 2024-02-16 10:01:52 [8 ms] */ 
SELECT * FROM actoresprotagonistas LIMIT 100;
/* 2024-02-16 10:02:17 [10 ms] */ 
INSERT INTO actricesreparto (nombre_actrizreparto)
VALUES
('Emily Blunt, por Oppenheimer'),
('Da’Vine Joy Randolph, por Los que se quedan'),
('Danielle Brooks, por El color púrpura'),
('Jodie Foster, por Nyad'),
('America Ferrera, por Barbie');
/* 2024-02-16 10:02:22 [6 ms] */ 
SELECT* FROM actricesreparto;
/* 2024-02-16 10:02:43 [10 ms] */ 
INSERT INTO actoresreparto (nombre_actorreparto)
VALUES
('Sterling K. Brown, por American Fiction'),
('Robert De Niro, por Los asesinos de la luna'),
('Robert Downey Jr., por Oppenheimer'),
('Ryan Gosling, por Barbie'),
('Mark Ruffalo, por Pobres criaturas');
/* 2024-02-16 10:02:46 [7 ms] */ 
SELECT* FROM actoresreparto;
/* 2024-02-16 10:03:52 [15 ms] */ 
INSERT INTO peliculasdocumental (nombre_pdocumental)
VALUES
('The People’s President por Moses Bwayo, Christopher Sharp'),
('La memoria infinita'),
('Four Daughters por Kaouther Ben Hania'),
('To Kill a Tiger por Nisha Pahuja)'),
('20 días en Mariúpol por Mstyslav Chernov');
/* 2024-02-16 10:03:55 [6 ms] */ 
SELECT* FROM peliculasdocumental;
/* 2024-02-16 10:04:07 [15 ms] */ 
INSERT INTO peliculasanimacion (nombre_panimacion)
VALUES
('El chico y la garza'),
('Elemental'),
('Nimona'),
('Robot Dreams'),
('Spider-Man: Cruzando el Multiverso');
/* 2024-02-16 10:04:10 [7 ms] */ 
SELECT* FROM peliculasanimacion;
/* 2024-02-16 10:04:24 [4 ms] */ 
INSERT INTO peliculasinternacionales (nombre_pinternacional)
VALUES
('Reino Unido, La zona de interés'),
('Japón, Perfect Days'),
('España, La sociedad de la nieve'),
('Italia, Yo capitán'),
('Alemania, Sala de profesores');
/* 2024-02-16 10:04:26 [10 ms] */ 
SELECT* FROM peliculasinternacionales;
/* 2024-02-16 10:22:48 [4 ms] */ 
INSERT INTO Directores (nombre_director)
VALUES
('Justine Triet, por Anatomía de una caída'),
('Martin Scorsese, por Los asesinos de la luna'),
('Yorgos Lanthimos, por Pobres criaturas'),
('Christopher Nolan, por Oppenheimer'),
('Jonathan Glazer, por La zona de interés');
/* 2024-02-16 10:22:50 [1 ms] */ 
SELECT * FROM directores LIMIT 100;
/* 2024-02-16 10:41:58 [26 ms] */ 
SELECT
    p.id AS pelicula_id,
    p.pelicula_nombre,
    d.nombre_director
FROM
    tbl_pelicula p
INNER JOIN
    Directores d ON p.id = d.id LIMIT 100;

SELECT p.id, p.pelicula_nombre, p.tipo_pelicula, p.creacion, d.nombre_director, d.creacion
FROM tbl_pelicula p
INNER JOIN Directores d ON p.id = d.id;

SELECT p.pelicula_nombre, ap.nombre_actrizprotagonista, a.nombre_actorprotagonista
FROM tbl_pelicula p
LEFT JOIN ActricesProtagonistas ap ON p.id = ap.id
LEFT JOIN ActoresProtagonistas a ON p.id = a.id
WHERE p.tipo_pelicula = 'Pelicula Principales' AND ap.id IS NOT NULL AND a.id IS NOT NULL;

SELECT p.pelicula_nombre, a.nombre_actorprotagonista
FROM tbl_pelicula p
JOIN ActoresProtagonistas a ON p.id = a.id
WHERE p.tipo_pelicula = 'Pelicula Principales' AND a.id IS NOT NULL;