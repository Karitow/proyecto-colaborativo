function validarUsuario({ nombre, edad, correo }) {
  if (!nombre || nombre.trim() === "") {
    return { valido: false, mensaje: "El nombre no puede estar vacío" };
  }

  if (typeof edad !== "number" || edad < 18) {
    return { valido: false, mensaje: "La edad debe ser mayor o igual a 18" };
  }

  if (!correo.includes("@")) {
    return { valido: false, mensaje: "El correo debe contener @" };
  }

  return { valido: true, mensaje: "Usuario válido" };
}

// Script de prueba
const usuarios = [
  { nombre: "Karol", edad: 30, correo: "karol@example.com" },
  { nombre: "", edad: 25, correo: "test@example.com" },
  { nombre: "Inés", edad: 17, correo: "ines@example.com" },
  { nombre: "Pedro", edad: 20, correo: "pedroexample.com" }
];

usuarios.forEach(u => console.log(validarUsuario(u)));
