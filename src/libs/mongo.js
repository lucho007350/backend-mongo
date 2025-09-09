const mongoose = require("mongoose");

let connection;

const getMongoConnection = async () => {
  if (!connection) {
    try {
      const uri =
        "mongodb+srv://andres2006:doritos062006@proyecto-condominios.wrkby1u.mongodb.net/proyectocondominios?retryWrites=true&w=majority&appName=Proyecto-Condominios";

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

