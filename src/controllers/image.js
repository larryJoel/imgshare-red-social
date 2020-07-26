const path = require('path');
const { randomNumber } = require('../helpers/libs')
const fs = require('fs-extra');
const ctrl = {};

ctrl.index = (req, res) =>{

};

ctrl.create = async(req, res)=>{
const imgUrl = randomNumber();
// console.log(imgUrl);
const imageTempPath = req.file.path;
const ext = path.extname(req.file.originalname).toLocaleLowerCase();
const targetpath = path.resolve(`src/public/uplad/${imgUrl}${ext}`)

if(ext ==='.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif'){
    await fs.rename(imageTempPath,targetpath);
};

res.send('recibido');
};

ctrl.like= (req, res) =>{

};

ctrl.comment = (req, res) =>{

};

ctrl.remove = (req, res) =>{

};

module.exports = ctrl;