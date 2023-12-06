CREATE DATABASE Formulario;

USE Formulario;

CREATE TABLE estudiantes (
  id_estudiante int(11) NOT NULL,
  carrera_alumno varchar(100) DEFAULT NULL,
  nombre_alumno varchar(100) DEFAULT NULL,
  apellido_alumno varchar(100) DEFAULT NULL,
  dni_alumno char(8) DEFAULT NULL,
  fecha_alumno date DEFAULT NULL,
  email_alumno varchar(100) DEFAULT NULL,
  contraseña_alumno varchar(100) DEFAULT NULL
);

INSERT INTO estudiantes (carrera_alumno, nombre_alumno, apellido_alumno, dni_alumno, fecha_alumno, email_alumno, contraseña_alumno) VALUES
('Análisis de Sistemas', 'JOHAN TOMAS', 'MALASQUEZ VALERIO', '75366255', '2005/05/02', 'johan.malasquez@vallegrande.edu.pe', '75366255');

SELECT * FROM estudiantes;

ALTER TABLE estudiantes
  ADD PRIMARY KEY (id_estudiante);
  
ALTER TABLE estudiantes
  MODIFY id_estudiante int(11) NOT NULL AUTO_INCREMENT;
COMMIT;