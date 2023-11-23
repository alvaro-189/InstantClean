const mysql = require("mysql2/promise");
const bcrypt = require("bcrypt");
const pool = require("../utils/database");

const createUser = async(req,res)=>{
    try {
        const {nombreCompleto,email,password}=req.body;
        console.log("nombre completo:",nombreCompleto,"email:",email,"password:",password )
        const existingUser = await pool.query(`SELECT * FROM users WHERE Email='${email}'`)
        if(existingUser[0].length>0){
            return res.status(400).json({error: "El usuario ya existe"})
        }
        await pool.query(`INSERT INTO users(NombreCompleto,Email,Password) VALUES ('${nombreCompleto}','${email}','${password}')`)
        console.log("Se creó con exito")
    res.status(200).json({message:"Usuario creado con éxito"});
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Error en el servidor"})
    }
}

const getUsers = async(req,res)=>{
    try {
        console.log("Está llegando la petición")
        const user = await pool.query(
            `SELECT * FROM users`
        );
        console.log(user[0])
        res.status(200).json(user[0]);
    } catch (error) {
        console.log(error)
    }
}
const getUserById = async(req,res)=>{
    try {
        console.log("Está llegando la petición")
        const user = await pool.query(
            `SELECT * FROM users WHERE id = ${req.params.id}`
        );
        console.log(user[0])
        res.status(200).json(user[0]);
    } catch (error) {
        console.log(error)
    }
}

const loginUser=async(req,res)=>{
    try {
        console.log("Método Post",req.body.email, req.body.password)
        const user = await pool.query(
            `SELECT * FROM users WHERE Email = '${req.body.email}' AND Password = '${req.body.password}'`
            )
            //console.log(user[0])
        if(user[0].length===0){
            console.log("Error 503")
            return res.status(503).json({error:'Contraseña incorrecta'})
        }
            res.status(200).json(user[0][0]);
            console.log(user[0][0])
    } catch (error) {
        console.log(error)
    }
}

module.exports={createUser,getUsers,getUserById,loginUser}