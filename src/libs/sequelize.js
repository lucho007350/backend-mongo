const {Sequelize} = require("sequelize");
const setUpModels = require("../database/models/index.js");

const User = encodeURIComponent("root");
const Pass = encodeURIComponent("");
const Dialect = 'mysql';


const Uri = `${Dialect}://${User}:${Pass}@localhost:3306/backblog`;

const sequelize = new Sequelize(Uri,{
    dialect: Dialect,
    logging: false
});

setUpModels(sequelize);

module.exports = sequelize;