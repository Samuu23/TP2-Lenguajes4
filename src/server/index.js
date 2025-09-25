import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const transporte = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.CORREO_USUARIO,
    pass: process.env.CORREO_CONTRASENA,
  },
});

app.post("/api/contacto", async (req, res) => {
  const { nombre, correo, mensaje } = req.body;
  if (!nombre || !correo || !mensaje) {
    return res.status(400).json({ error: "Faltan campos requeridos" });
  }

  try {
    await transporte.sendMail({
      from: `"Formulario Web" <${process.env.CORREO_USUARIO}>`,
      to: "destino@tucorreo.com",
      replyTo: correo,
      subject: `Nuevo mensaje de ${nombre}`,
      text: `Nombre: ${nombre}\nCorreo: ${correo}\n\n${mensaje}`,
    });
    res.json({ ok: true });
  } catch (error) {
    res.status(500).json({ error: "Error al enviar el mensaje" });
  }
});

app.listen(3001, () =>
  console.log("Server Corriendo")
);