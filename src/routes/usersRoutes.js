const express = require('express');
const {createUser,getUsers,getUserById, loginUser}= require('../controllers/usersController');

const router = express.Router();

router.get('/getUsers',getUsers);

router.get('/getUserById/:id',getUserById)

router.post('/loginUser',loginUser)

router.post('/createUser',createUser)
module.exports=router;