const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Camisetas = mongoose.model('camisetas');

module.exports = (app) => {
    app.use('/', router);
};

router.get('/tienda', function(req, res, next){

    Camisetas.find(function(err, camisetas){
        if (err) return next(err);

        res.render('tienda', {
            titulo: 'Tienda de camisetas',
            camisetasList: camisetas
        });
    });
});
