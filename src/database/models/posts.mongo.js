// src/models/post.model.js
const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    collection: "posts",
    timestamps: false,
  }
);

const Post = mongoose.model("Post", PostSchema);

// Exporta como objeto para que funcione con { Post }
module.exports = { Post };
