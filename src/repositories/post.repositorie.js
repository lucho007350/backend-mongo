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
        // const query = "INSERT INTO posts (title, content) VALUES (?, ?)";
        // const values = [post.getTitle(), post.getContent()];

        // const [result] = await this.#connection.execute(query, values);

        // post.setID(result.insertId);

        // return post;
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
    
    // const query = "UPDATE posts SET title = ?, content = ? WHERE id = ?";
    // const values = [post.getTitle(), post.getContent(), post.getID()];

    // const [result] = await this.#connection.execute(query, values);

    // if (result.affectedRows > 0) {
    //     return post;
    // }

    // return null;
}

    async delete(id) {
        await models.Post.destroy({
            where: {
                id: id,
            }
        })
    

        


    // const query = "DELETE FROM posts WHERE id = ?";
    // const values = [post.getID()];

    // const [result] = await this.#connection.execute(query, values);

    // if (result.affectedRows > 0) {
    //     return post;
    // }

    // return null;
}


    async getById(id) {

        const post = await models.Post.findByPk(id);

        return new Post(post.id, post.title, post.content);
        
        
    }

// const query = "SELECT * FROM posts WHERE id = ?";
        // const [rows] = await this.#connection.execute(query, [id]);

        // if (rows.length === 0) {
        //     return null;
        // }

        // const row = rows[0];
        // return new Post (row.id, row.title, row.content);

    
}

module.exports = PostRepository;