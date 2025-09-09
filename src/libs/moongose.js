const mongoose = require("mongoose");

// Parámetros de conexión
const User = encodeURIComponent("root");
const Pass = encodeURIComponent(""); // contraseña si tienes
const Dialect = "mongodb";

// URI de conexión (puerto por defecto de MongoDB es 27017)
const Uri = "mongodb://localhost:27017/backblog";

// Conectar con MongoDB
mongoose.connect(Uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ Conectado a MongoDB: backblog");
})
.catch((err) => {
  console.error("❌ Error al conectar a MongoDB:", err);
});

// Exportar la conexión
module.exports = mongoose;

//axios administra las peticiones http
//npm install mongoose
//sequelize es un ORM (mapa de objetos relacionales) que permite interactuar con bases de datos SQL utilizando objetos de JavaScript en lugar de escribir consultas SQL directamente.