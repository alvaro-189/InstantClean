const mysql = require("mysql2/promise")
const bcrypt = require("bcrypt")
const pool = require("../utils/database")

const getPosts = async (req,res)=>{
    try {
        console.log("Petición de get posts")
        const posts = await pool.query("SELECT * FROM posts")
        res.status(200).json(posts[0])
    } catch (error) {
        console.log(error)
    }
}

module.exports={getPosts}