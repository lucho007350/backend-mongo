const {Router } = require('express');
const postsRouter = require('./posts.router.js'); // importa el router de posts
const router = Router();

function setupRoutes(app){
app.use('/api', router) 
router.use('/posts', postsRouter) 
}

module.exports = setupRoutes;