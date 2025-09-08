const { Router } = require('express');
const postsRouter = require('./posts.router');
const router = Router();

function SetupRoutes(app) {
    app.use('/api', router , (req , res) => {
        return res.status(404).json({ message: 'Route Not Found' });
    })
    router.use('/posts', postsRouter);
}

module.exports = SetupRoutes;