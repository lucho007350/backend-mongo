const {Post, PostSchema} = require("./post");

function setUpModels(sequelize) {
    // inicializar
    Post.init(PostSchema, Post.config(sequelize));
    
    //relacion
    Post.associate(sequelize.models);
}

module.exports = setUpModels;