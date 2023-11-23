const express =require('express');
const {getPosts} = require('../controllers/postsController');

const router = express.Router();

router.get('/getPosts',getPosts);

module.exports=router;