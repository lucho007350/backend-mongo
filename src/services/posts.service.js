const crypto = require('crypto')
const PostsRepository = require('../repositories/post.repositorie');
const Post = require('../models/posts');

class PostsService {

    posts = [];
    #repository;

    constructor() {
        this.#repository = new PostsRepository();
    }
    async get() {
        const posts = await this.#repository.get();
        return posts.map(post => post.getValues());
    }

    async create(title, content) {
        const id = crypto.randomUUID();
        const post = new Post(id, title, content);

        const createPost = await this.#repository.create(post);


        return createPost.getValues();
        
    }

    async update(id, title, content) {
    const post = new Post(id, title, content);

    const updatedPost = await this.#repository.update(post);

    if (updatedPost) {
        return updatedPost.getValues();
    }

    return null;
}

    async delete(id) {
    const existingPost = await this.#repository.getById(id);

    if (!existingPost) {
        return null; 
    }

    const deletedPost = await this.#repository.delete(existingPost);

    if (deletedPost) {
        return existingPost.getValues();
    }

    return null;
}

     async getById(id) {
        const post = await this.#repository.getById(id);

        if (!post) {
            return null;
        }

        return post.getValues();
    }
}

module.exports = PostsService;