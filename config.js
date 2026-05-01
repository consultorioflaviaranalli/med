// ============================================
// CONFIGURACIÓN DEL PROFESIONAL
// Editá solo este archivo para personalizar
// la app para cada profesional.
// ============================================

const CONFIG = {

  // --- DATOS DEL PROFESIONAL ---
  nombre: "Guerra Verónica",
  nombreCorto: "Dra. Guerra",
  titulo: "Dra.",
  especialidad: "Pediatría",
  matricula: "MP 00000",
  iniciales: "VG",

  // --- CONTACTO ---
  telefono: "1100000000",       // Sin espacios ni guiones, con código de área
  whatsapp: "5491100000000",    // Con código de país (549 = Argentina)
  email: "dra.guerra@pedimed.com",

  // --- CONSULTORIO ---
  direccion: "Av. Ejemplo 1234, CABA",
  nombreApp: "PediMed",
  logoIcono: "P",               // Letra que aparece en el círculo del logo

  // --- COBRO ---
  cbu: "0000000000000000000000",
  alias: "ALIAS.COBRO",
  qr: "",                       // Nombre del archivo QR (ej: "qr-guerra.png")

  // --- COLORES ---
  colorPrimario: "#667eea",
  colorSecundario: "#764ba2",

  // --- PACIENTES ---
  tipoPaciente: "pediátrico",   // "pediátrico" o "adulto"
  mostrarTutor: true,           // true para pediatría, false para adultos

  // --- TELECONSULTA ---
  mensajeTeleconsulta: "Hola! Le escribo de parte de la " + "Dra. Guerra Verónica" + ". En unos minutos iniciamos la teleconsulta por videollamada de WhatsApp.",

  // --- CHAT SEGUIMIENTO ---
  diasChat: 10,                 // Días que el chat está habilitado después de la consulta

  // --- FIREBASE ---
  firebase: {
    apiKey: "AIzaSyAxr6HVePo0BeLyV7-QuH668OpZqVOrm2s",
    authDomain: "consultorio-pediatrico-30cc2.firebaseapp.com",
    projectId: "consultorio-pediatrico-30cc2",
    storageBucket: "consultorio-pediatrico-30cc2.firebasestorage.app",
    messagingSenderId: "806158143244",
    appId: "1:806158143244:web:315f13af8d5dc41c0cc329"
  }

};
