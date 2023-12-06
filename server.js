
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const connection = require("./configBD");

const app = express();
const path = require("path");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/public", express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("pages/form", {
    rutaActual: "/form-estudiante",
  });
});

app.get("/", (req, res) => {
  res.render("bien", {
    rutaActual: "/bien",
  });
});

app.post("/procesar-formulario", async (req, res) => {
  console.log(req.body);
  // Verificar campos vacíos
  for (const campo in req.body) {
    if (!req.body[campo]) {
      res.send(`Error: El campo ${campo} está vacío.`);
      return;
    }
  }

  const { carrera_alumno, nombre_alumno, apellido_alumno, dni_alumno, fecha_alumno, email_alumno, contraseña_alumno } = req.body;
  try {
    
    const query =
      "INSERT INTO estudiantes (carrera_alumno, nombre_alumno, apellido_alumno, dni_alumno, fecha_alumno, email_alumno, contraseña_alumno) VALUES (?, ?, ?, ?, ?, ?, ?)";
    await connection.execute(query, [
      carrera_alumno,
      nombre_alumno,
      apellido_alumno,
      dni_alumno,
      fecha_alumno,
      email_alumno,
      contraseña_alumno,
      new Date(),
    ]);

    res.render("bien", {
      rutaActual: "/bien",
    });
    
  } catch (error) {
    console.error("Error al insertar en la base de datos: ", error);
    console.log(error);
    res.send("Error al procesar el formulario");
  }
});

app.post("/procesar-formulario2", async (req, res) => {
  console.log(req.body);
  const { carrera_alumno, nombre_alumno, apellido_alumno, dni_alumno, fecha_alumno, email_alumno, contraseña_alumno } = req.body;
  try {
    const query =
      "INSERT INTO estudiantes (carrera_alumno, nombre_alumno, apellido_alumno, dni_alumno, fecha_alumno, email_alumno, contraseña_alumno) VALUES (?, ?, ?, ?, ?, ?, ?)";

    const [result] = await connection.execute(query, [
      carrera_alumno,
      nombre_alumno,
      apellido_alumno,
      dni_alumno,
      fecha_alumno,
      email_alumno,
      contraseña_alumno,
      new Date(),
    ]);

    if (result && result.affectedRows > 0) {
      res.send("¡Formulario procesado correctamente!");
    } else {
      res.send("Error al procesar el formulario");
    }
  } catch (error) {
    console.error("Error al insertar en la base de datos: ", error);
    res.send("Error al procesar el formulario");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://54.156.200.20:${PORT}`);
});
