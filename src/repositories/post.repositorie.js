// src/repositories/post.repository.js
const connectMongo = require("../libs/mongo");
const { Post: PostModel } = require("../database/models/posts.mongo"); 
const PostClass = require("../models/posts");

class PostRepository {
  #connection = null;

  constructor() {
    this.getConnection();
  }

  async getConnection() {
    if (!this.#connection) {
      this.#connection = await connectMongo();
    }
    return this.#connection;
  }

  async get() {
    const posts = await PostModel.find();
    return posts.map(
      (pst) => new PostClass(pst._id.toString(), pst.title, pst.content)
    );
  }

  async create(post) {
    const newPost = await PostModel.create({
      title: post.getTitle(),
      content: post.getContent(),
    });
    post.setId(newPost._id.toString());
    return post;
  }

  async getById(id) {
    const pst = await PostModel.findById(id);
    if (!pst) return null;
    return new PostClass(pst._id.toString(), pst.title, pst.content);
  }

  async update(post) {
    const updated = await PostModel.findByIdAndUpdate(
      post.getId(),
      { title: post.getTitle(), content: post.getContent() },
      { new: true }
    );
    if (!updated) return null;
    return new PostClass(updated._id.toString(), updated.title, updated.content);
  }

  async delete(post) {
    await PostModel.findByIdAndDelete(post.getId());
    return true;
  }
}

module.exports = PostRepository;
