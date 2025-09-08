const connection = require("../libs/mysql");
const Post = require("../models/posts");
const { models } = require("./../libs/sequelize.js");

class PostRepository {
    
    #posts = [];
    #connection = null;

    constructor() {
        this.#posts = [];
        this.getConnection();
    }

    async getConnection() {
        this.#connection = await connection();
    }

    async get() {
        const posts = await models.Post.findAll();
        return posts.map((post) => new Post(post.id, post.title, post.content));
    }
    
    async create(post){

        const newPost = await models.Post.create({
            title: post.getTitle(),
            content: post.getContent()
        });
        
        post.setID(newPost.id);
        return post;
        
    }

    async update(post) {

        await models.Post.update({
            title: post.getTitle(),
            content: post.getContent()
        }, {
            where: {
                id: post.getID(),
            }
        });

        return post;
    
   
}


async delete(id) {
    const deletedCount = await models.Post.destroy({
        where: { id }
    });

    return deletedCount;
}


    async getById(id) {

        const post = await models.Post.findByPk(id);

        return new Post(post.id, post.title, post.content);
        
        
    }



    
}

module.exports = PostRepository;