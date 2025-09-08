const { Router } = require('express');
const PostService = require('../services/posts.service');

const router = Router();
const postsService = new PostService();

router.get("/", async (req,res)=>{
  const posts = await postsService.get();

  return res.status(200).json(posts);
})

router.post("/", async (req,res)=>{
    const {title, content}= req.body;
    const post = await postsService.create(title, content);

    res.status(201).json(post);
})

router.put("/:id", async(req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const post = await postsService.update(id, title, content);

    if (post === -1) {
        res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(post);
});


router.delete("/:id", async(req, res) => {
    const { id } = req.params;
    const post = await postsService.delete(id);

    if (post === null) {
        res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json(post);
})

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const post = await postsService.getById(id);

    if (post === null) {
        res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json(post);
})

module.exports = router;