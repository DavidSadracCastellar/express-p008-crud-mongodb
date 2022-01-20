const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
var Camisetas = mongoose.model('camisetas');

module.exports = (app) => {
    app.use('/', router);
};

router.get('/agregar', function(req, res){
    res.render('agregar');
});

router.post('/agregar', function(req, res){
    var newCamiseta = new Camisetas({
        name: req.body.name,
        color: req.body.color,
        precio: req.body.precio,
        descripcion: req.body.descripcion
    });

    newCamiseta.save();

    res.redirect('/tienda');

});