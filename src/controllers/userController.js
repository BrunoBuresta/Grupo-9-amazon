const fs = require('fs');
const path = require('path');

const userController= {
    login: (req,res)=>{
        return res.render('login')
    },
    register: (req,res)=>{
        return res.render('register')
    },
    processRegister:(req,res)=>{

    },
    forgot: (req,res)=>{
        return res.render('forgot')
    },
}
module.exports = userController;