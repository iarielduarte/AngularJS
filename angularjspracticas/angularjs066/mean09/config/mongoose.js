// Invocar el modo 'strict' de JavaScript
'use strict';

// Carga las dependencias del módulo
var	config = require('./config'),
	mongoose = require('mongoose');

// Definir el método de configuración de Mongoose
module.exports = function() {
	// Usar Mongoose para conectar a MongoDB
	var db = mongoose.connect(config.db);

	// Cargar el modelo 'User' 
	require('../app/models/user.server.model');

	// Devolver la instancia de conexión a Mongoose
	return db;
};