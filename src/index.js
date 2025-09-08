const express = require("express");
const SetupRoutes = require("./router");

const app = express();
const PORT = 3000;

app.use(express.json());

SetupRoutes(app);

app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});

