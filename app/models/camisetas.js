const mongoose = require('mongoose');
Schema = mongoose.Schema;

var Camisetas = new Schema({
    color: String,
    name: String,
    descripcion: String,
    precio: String
},{collection: 'camisetas'});

mongoose.model('camisetas', Camisetas);