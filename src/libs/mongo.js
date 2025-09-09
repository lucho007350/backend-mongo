const mongoose = require("mongoose");

let connection;

const getMongoConnection = async () => {
  if (!connection) {
    try {
      const uri =
        "mongodb+srv://luisfelipegrisalesramirez_db_user:ECf8bU7EMsyDxHO0@test-luisfelipe.h63myin.mongodb.net/?retryWrites=true&w=majority&appName=test-luisfelipe";

      connection = await mongoose.connect(uri);

      console.log("✅ Conectado exitosamente a MongoDB Atlas");
    } catch (err) {
      console.error("❌ Error al conectar a MongoDB Atlas:", err.message);
      throw err;
    }
  }
  return connection;
};

module.exports = getMongoConnection;

