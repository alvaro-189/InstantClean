const mysql = require("mysql2/promise");
const pool = require("../utils/database");
const nodemailer =require("nodemailer");

const sendEmail = async(req,res)=>{
const {to,subject,text}= req.body;
const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'alvaro.herreraits@gmail.com',
        pass:'argu efva wstj kmsk'
    }
})
const mailOptions={
    from:'alvaro.herreraits@gmail.com',
    to,
    subject,
    text
}
try {
    const info = await transporter.sendMail(mailOptions);
    console.log('correo Enviado',info);
    res.json({success:true,message:'Correo enviado con éxito'})
} catch (error) {
    console.error('Error al enviar el correo: ',error);
    res.status(500).json({success:false,error:'error al enviar el correo electrónico'})
}
}

module.exports={sendEmail}